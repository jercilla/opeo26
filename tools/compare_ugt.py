import json, re, sys, os, subprocess, difflib

def parse_ugt_pdf(pdf_path):
    text = subprocess.run(['pdftotext', pdf_path, '-'], capture_output=True, text=True).stdout
    lines = text.split('\n')

    # Clean lines
    cleaned = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if line.startswith('Teléfono:') or line.startswith('osakidetza@') or line.startswith('En cumplimiento'):
            continue
        if line.startswith('Página') or line.startswith('PREGUNTAS BATERIA'):
            continue
        if re.match(r'^[a-z]{2,}\s*$', line):
            continue
        if 'UGT declina responsabilidad' in line or 'canal de atención' in line.lower():
            continue
        cleaned.append(line)

    answers = {}
    current_num = None
    qtext_lines = []
    current_options = {}
    last_option_letter = None
    in_question = False

    def flush_question():
        nonlocal current_num, current_options
        if current_num is None:
            return
        correct = None
        for letter in ['a', 'b', 'c', 'd']:
            opt = current_options.get(letter)
            if opt and opt['label'] == 'Correcta':
                correct = letter.upper()
                break
        if correct:
            qtext = ' '.join(qtext_lines).strip()
            qtext = re.sub(r'\s+', ' ', qtext)
            answers[current_num] = {'pregunta': qtext, 'correcta': correct}
        current_num = None
        current_options = {}

    i = 0
    while i < len(cleaned):
        line = cleaned[i]

        # Question start
        qm = re.match(r'^(\d+)\.\s*(.*)', line)
        if qm:
            flush_question()
            current_num = int(qm.group(1))
            qtext_lines = [qm.group(2)]
            current_options = {}
            last_option_letter = None
            in_question = True
            i += 1
            continue

        # Option start
        om = re.match(r'^\(([abcd])\)\s*(.*)', line)
        if om:
            in_question = False
            letter = om.group(1)
            text = om.group(2)
            label = None
            # Check if label is at end of same line
            m = re.search(r'\((Correcta|Incorrecta)\)\s*$', text)
            if m:
                label = m.group(1)
                text = re.sub(r'\s*\((Correcta|Incorrecta)\)\s*$', '', text)
            current_options[letter] = {'text_lines': [text], 'label': label}
            last_option_letter = letter
            i += 1
            continue

        # Label on its own line
        lm = re.match(r'^\((Correcta|Incorrecta)\)\s*$', line)
        if lm:
            if last_option_letter and last_option_letter in current_options:
                current_options[last_option_letter]['label'] = lm.group(1)
            i += 1
            continue

        # Impugnable
        if 'IMPUGNABLE' in line:
            current_options = {}
            last_option_letter = None
            i += 1
            continue

        # Continuation
        if in_question:
            qtext_lines.append(line)
        elif last_option_letter and last_option_letter in current_options:
            current_options[last_option_letter]['text_lines'].append(line)

        i += 1

    flush_question()
    return answers


def normalize_q(text):
    t = text.lower()
    t = re.sub(r'^\d+\.\-\s*', '', t)
    t = re.sub(r'[^a-záéíóúüñ0-9\s]', '', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t


def best_match(qtext, candidates):
    norm = normalize_q(qtext)
    best = None
    best_score = 0
    for c in candidates:
        score = difflib.SequenceMatcher(None, norm, normalize_q(c)).ratio()
        if score > best_score:
            best_score = score
            best = c
    return best, best_score


def compare(quiz_slug, pdf_path, json_path, output_path, min_score=0.85):
    ugt = parse_ugt_pdf(pdf_path)
    ours = json.load(open(json_path))

    ours_by_norm = {normalize_q(q['pregunta']): q for q in ours}

    matched = 0
    mismatches = []
    weak_matches = []

    for num, u in ugt.items():
        best_key, score = best_match(u['pregunta'], list(ours_by_norm.keys()))
        if score < min_score:
            weak_matches.append({'ugt_num': num, 'ugt_text': u['pregunta'][:100], 'score': round(score, 2)})
            continue
        o = ours_by_norm[best_key]
        matched += 1
        if u['correcta'] != o['correcta']:
            mismatches.append({
                'num': o['num'],
                'pregunta': o['pregunta'][:140] + '...' if len(o['pregunta']) > 140 else o['pregunta'],
                'ugt': u['correcta'],
                'kaixo': o['correcta'],
                'score': round(score, 3),
            })

    report = {
        'quiz': quiz_slug,
        'matched': matched,
        'mismatches': mismatches,
        'weak_matches': weak_matches,
    }

    with open(output_path, 'w') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    print(f"\n=== {quiz_slug} ===")
    print(f"Preguntas UGT parseadas: {len(ugt)}")
    print(f"Preguntas Kaixo: {len(ours)}")
    print(f"Emparejadas (score>={min_score}): {matched}")
    print(f"Discordancias: {len(mismatches)}")
    if mismatches:
        for m in mismatches[:15]:
            print(f"  Q{m['num']}: UGT={m['ugt']}  Kaixo={m['kaixo']}  | {m['pregunta']}")
        if len(mismatches) > 15:
            print(f"  ... y {len(mismatches)-15} más")
    if weak_matches:
        print(f"Sin emparejar fuerte: {len(weak_matches)}")
    return report


if __name__ == '__main__':
    ROOT = '/home/jercilla/OPs/2026/osakidetza'
    PDF_DIR = '/tmp/ugt_pdfs'
    OUT_DIR = '/tmp/ugt_compare'
    os.makedirs(OUT_DIR, exist_ok=True)

    reports = []
    for slug, pdf in [
        ('general_A_B_C1', 'común_ABC1.pdf'),
        ('general_C2_C3_D_E', 'común_C2C3DE.pdf'),
        ('operario', 'operario.pdf'),
        ('celador', 'celador.pdf'),
        ('auxiliar_administrativo', 'aux_adm.pdf'),
    ]:
        reports.append(compare(
            slug,
            os.path.join(PDF_DIR, pdf),
            os.path.join(ROOT, f'{slug}.last.json'),
            os.path.join(OUT_DIR, f'{slug}_diff.json'),
        ))

    total_mismatches = sum(len(r['mismatches']) for r in reports)
    total_matched = sum(r['matched'] for r in reports)
    print(f"\n{'='*60}")
    print(f"TOTAL: {total_matched} preguntas emparejadas")
    print(f"TOTAL DISCORDANCIAS: {total_mismatches}")
    print(f"Reportes en: {OUT_DIR}")
