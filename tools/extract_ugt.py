"""
Extract UGT answer PDF to JSON format matching Kaixo structure.
Usage: python3 tools/extract_ugt.py <pdf_path> <output_json>
"""
import json, re, subprocess, sys


def extract_ugt_pdf(pdf_path):
    text = subprocess.run(['pdftotext', '-layout', pdf_path, '-'],
                          capture_output=True, text=True).stdout

    # Remove repeated header/footer blocks
    text = re.sub(r'PREGUNTAS BATERIA COMÚN.*?OPE 23\+24\+25', '', text)
    text = re.sub(r'En cumplimiento del Reglamento General.*?\n', '', text)
    text = re.sub(r'Teléfono:.*?Página \d+', '', text, flags=re.S)
    text = re.sub(r'osakidetza@ugt-speuskadi\.org', '', text)
    text = re.sub(r'Solución:\s*IMPUGNABLE', '', text, flags=re.I)

    lines = text.split('\n')
    questions = []

    i = 0
    while i < len(lines):
        line = lines[i].strip()
        qm = re.match(r'^(\d{1,3})\.\s*(.*)', line)
        if not qm:
            i += 1
            continue

        num = int(qm.group(1))

        # Verify this is a real question block (must contain options)
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

        # Build question text
        qtext = qm.group(2)
        current_options = {}
        opt_texts = {}  # letter -> accumulated text lines
        current_letter = None
        option_labels = {}  # letter -> True/False/None

        i += 1
        # Collect question text lines until first option
        while i < len(lines):
            stripped = lines[i].strip()
            if re.match(r'^\s*\([abcd]\)', stripped):
                break
            if re.match(r'^\d{1,3}\.\s', stripped):
                break
            if stripped:
                qtext += ' ' + stripped
            i += 1

        qtext = re.sub(r'\s+', ' ', qtext).strip()

        # Parse options
        while i < len(lines):
            line = lines[i]
            stripped = line.strip()

            # Next question
            if re.match(r'^\d{1,3}\.\s', stripped):
                break

            # Option start
            om = re.match(r'^\s*\(([abcd])\)\s*(.*)', stripped)
            if om:
                current_letter = om.group(1)
                opt_text = om.group(2)
                opt_texts[current_letter] = opt_text

                # Check for label on same line
                if '(Correcta)' in opt_text:
                    option_labels[current_letter] = True
                elif '(Incorrecta)' in opt_text:
                    option_labels[current_letter] = False
                elif '(Cor-' in opt_text:
                    option_labels[current_letter] = True
                elif '(Incor-' in opt_text:
                    option_labels[current_letter] = False
                else:
                    option_labels[current_letter] = None
                i += 1
                continue

            # Standalone label lines
            if stripped == '(Correcta)':
                if current_letter and option_labels.get(current_letter) is None:
                    option_labels[current_letter] = True
                i += 1
                continue
            if stripped == '(Incorrecta)':
                if current_letter and option_labels.get(current_letter) is None:
                    option_labels[current_letter] = False
                i += 1
                continue
            if stripped == '(Cor-':
                if i + 1 < len(lines) and lines[i + 1].strip() == 'recta)':
                    if current_letter and option_labels.get(current_letter) is None:
                        option_labels[current_letter] = True
                    i += 2
                    continue
            if '(Cor-' in stripped:
                if current_letter and option_labels.get(current_letter) is None:
                    option_labels[current_letter] = True
                i += 1
                continue
            if stripped == 'recta)':
                i += 1
                continue
            if '(Incor-' in stripped:
                if current_letter and option_labels.get(current_letter) is None:
                    option_labels[current_letter] = False
                i += 1
                continue

            # Check for label in continuation line
            if current_letter and option_labels.get(current_letter) is None:
                if '(Correcta)' in stripped:
                    option_labels[current_letter] = True
                elif '(Incorrecta)' in stripped:
                    option_labels[current_letter] = False

            # Accumulate option text
            if current_letter and stripped and not re.match(r'^\s*\([abcd]\)', stripped):
                opt_texts[current_letter] = opt_texts.get(current_letter, '') + ' ' + stripped

            i += 1

        # Determine correct answer
        correct = None
        for letter in ['a', 'b', 'c', 'd']:
            if option_labels.get(letter) is True:
                correct = letter.upper()
                break

        # Manual fixes for known problematic questions
        if num == 126 and correct is None:
            correct = 'B'
        if num == 139 and correct is None:
            correct = 'A'

        # Build options dict (clean labels and garbage from text)
        opciones = {}
        for letter in ['a', 'b', 'c', 'd']:
            if letter in opt_texts:
                txt = opt_texts[letter]
                # Remove labels
                txt = re.sub(r'\s*\((Correcta|Incorrecta|Cor-|Incor-|NULA|INULA)\)', '', txt)
                # Remove common column garbage fragments at end of lines
                txt = re.sub(r'\s+(rg|\.o|di|ak|os|sp|t-|za|@|ug|eu|s|PO|O|A|R|E|SF|N|IO|C|ES|G|U|T|i|k|a|de|ka|i|n|)\s*$', '', txt)
                txt = re.sub(r'\s+', ' ', txt).strip()
                opciones[letter.upper()] = txt

        # Handle NULA
        metodo = 'ugt_pdf'
        if all(option_labels.get(l) is False for l in ['a', 'b', 'c', 'd']):
            # All incorrect - could be NULA or just weird formatting
            if any('NULA' in opt_texts.get(l, '') or 'INULA' in opt_texts.get(l, '') for l in ['a', 'b', 'c', 'd']):
                metodo = 'ugt_nula'
                correct = None

        if opciones:
            questions.append({
                'num': num,
                'idpregunta': num,
                'pregunta': qtext,
                'opciones': opciones,
                'correcta': correct,
                'metodo': metodo,
            })

    return questions


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python3 tools/extract_ugt.py <pdf_path> <output_json>")
        sys.exit(1)

    pdf_path = sys.argv[1]
    out_path = sys.argv[2]

    questions = extract_ugt_pdf(pdf_path)
    json.dump(questions, open(out_path, 'w'), indent=2, ensure_ascii=False)
    print(f"Extracted {len(questions)} questions to {out_path}")
