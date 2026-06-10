import json, re, sys, os, subprocess


def parse_ugt_pdf_layout(pdf_path):
    """Parse UGT answer PDF using pdftotext -layout."""
    text = subprocess.run(['pdftotext', '-layout', pdf_path, '-'],
                          capture_output=True, text=True).stdout

    # Remove repeated header/footer blocks
    text = re.sub(r'PREGUNTAS BATERIA COMÚN.*?OPE 23\+24\+25', '', text)
    text = re.sub(r'En cumplimiento del Reglamento General.*?\n', '', text)
    text = re.sub(r'Teléfono:.*?Página \d+', '', text, flags=re.S)
    text = re.sub(r'osakidetza@ugt-speuskadi\.org', '', text)
    text = re.sub(r'Solución:\s*IMPUGNABLE', '', text, flags=re.I)

    lines = text.split('\n')
    answers = {}

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Detect question start
        qm = re.match(r'^(\d{1,3})\.\s*(.*)', line)
        if not qm:
            i += 1
            continue

        num = int(qm.group(1))

        # Peek ahead to verify this is a real question block (must contain options)
        has_options = False
        peek = i + 1
        while peek < len(lines):
            if re.match(r'^\d{1,3}\.\s', lines[peek].strip()):
                break
            if re.match(r'^\s*\([abcd]\)', lines[peek]):
                has_options = True
                break
            peek += 1

        if not has_options:
            i += 1
            continue

        current_options = {}  # letter -> True/False/None
        current_letter = None

        i += 1
        while i < len(lines):
            line = lines[i]
            stripped = line.strip()

            # Next question or end of file (only match 1-3 digit question numbers)
            if re.match(r'^\d{1,3}\.\s', stripped):
                break

            # Detect option start
            om = re.match(r'^\s*\(([abcd])\)\s*(.*)', stripped)
            if om:
                current_letter = om.group(1)
                opt_text = om.group(2)
                # Check for Correcta/Incorrecta on same line
                if '(Correcta)' in opt_text:
                    current_options[current_letter] = True
                elif '(Incorrecta)' in opt_text:
                    current_options[current_letter] = False
                elif '(Cor-' in opt_text:
                    # Broken Correcta: (Cor- at end of option line, recta) on next line
                    current_options[current_letter] = True
                elif '(Incor-' in opt_text:
                    # Broken Incorrecta
                    current_options[current_letter] = False
                else:
                    current_options[current_letter] = None  # pending
                i += 1
                continue

            # Detect standalone label lines
            if stripped == '(Correcta)':
                if current_letter and current_options.get(current_letter) is None:
                    current_options[current_letter] = True
                i += 1
                continue

            if stripped == '(Incorrecta)':
                if current_letter and current_options.get(current_letter) is None:
                    current_options[current_letter] = False
                i += 1
                continue

            # Detect broken Correcta: (Cor- followed by recta)
            if stripped == '(Cor-':
                # Look ahead for recta)
                if i + 1 < len(lines) and lines[i + 1].strip() == 'recta)':
                    if current_letter and current_options.get(current_letter) is None:
                        current_options[current_letter] = True
                    i += 2
                    continue

            # Detect broken Correcta within the same line: "(Cor-" or "recta)"
            if '(Cor-' in stripped:
                if current_letter and current_options.get(current_letter) is None:
                    current_options[current_letter] = True
                i += 1
                continue
            if stripped == 'recta)':
                i += 1
                continue

            # Detect broken Incorrecta: (Incor- recta)
            if '(Incor-' in stripped:
                if current_letter and current_options.get(current_letter) is None:
                    current_options[current_letter] = False
                i += 1
                continue
            if stripped == 'recta)' and current_letter:
                # This could be part of broken Correcta or Incorrecta
                # We need context; but usually we already set it above
                pass

            # Check if label is at end of a continuation line
            if current_letter and current_options.get(current_letter) is None:
                if '(Correcta)' in stripped:
                    current_options[current_letter] = True
                elif '(Incorrecta)' in stripped:
                    current_options[current_letter] = False

            i += 1

        # Determine correct answer for this question
        correct = None
        for letter in ['a', 'b', 'c', 'd']:
            if current_options.get(letter) is True:
                correct = letter.upper()
                break

        if correct:
            answers[num] = correct
        elif num in [126, 139]:
            # Manual fixes for known problematic questions in celador PDF
            # Q126: labels appear detached after option (b), (a)=Incorrecta, (b)=Correcta
            if num == 126:
                answers[126] = 'B'
            # Q139: label appears in continuation line before option (a) prefix
            if num == 139:
                answers[139] = 'A'
        else:
            # Q181 celador: all options marked (NULA) - UGT considers it annulled
            # We add it with a sentinel to count it as parsed
            if num == 181:
                answers[num] = 'NULA'

    return answers


def compare_with_kaixo(ugt_answers, kaixo_json_path):
    ours = json.load(open(kaixo_json_path))
    ours_by_num = {q['num']: q['correcta'] for q in ours}

    mismatches = []
    matched = 0
    missing = []

    nulas = []
    for num, ugt_correct in sorted(ugt_answers.items()):
        if ugt_correct == 'NULA':
            nulas.append(num)
            continue
        kaixo_correct = ours_by_num.get(num)
        if kaixo_correct is None:
            missing.append(num)
            continue
        matched += 1
        if ugt_correct != kaixo_correct:
            mismatches.append({
                'num': num,
                'ugt': ugt_correct,
                'kaixo': kaixo_correct,
            })

    return matched, mismatches, missing, nulas


if __name__ == '__main__':
    PDF_PATH = sys.argv[1] if len(sys.argv) > 1 else '/tmp/ugt_pdfs/común_ABC1.pdf'
    JSON_PATH = sys.argv[2] if len(sys.argv) > 2 else '/home/jercilla/OPs/2026/osakidetza/general_A_B_C1.last.json'

    print(f"Parsing {PDF_PATH}...")
    ugt = parse_ugt_pdf_layout(PDF_PATH)
    print(f"Parsed {len(ugt)} questions from UGT PDF")

    matched, mismatches, missing, nulas = compare_with_kaixo(ugt, JSON_PATH)

    print(f"\nTotal parseadas: {len(ugt)}")
    print(f"Con respuesta UGT: {matched}")
    if nulas:
        print(f"Anuladas por UGT: {nulas}")
    print(f"Missing in Kaixo: {missing}")
    print(f"Discordancias: {len(mismatches)}")

    if mismatches:
        print("\nDiscordancias encontradas:")
        for m in mismatches:
            print(f"  Q{m['num']:3d}: UGT={m['ugt']}  Kaixo={m['kaixo']}")
    else:
        print("\nNo se encontraron discordancias.")
