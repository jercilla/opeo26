"""
Compare two quiz JSON files and report discordances.
Usage: python3 tools/compare_jsons.py <json_a> <json_b> [--labels UGT Kaixo]
"""
import json, sys


def load_json(path):
    return json.load(open(path))


def compare(questions_a, questions_b, label_a='A', label_b='B'):
    by_num_a = {q['num']: q for q in questions_a}
    by_num_b = {q['num']: q for q in questions_b}

    all_nums = sorted(set(by_num_a.keys()) | set(by_num_b.keys()))

    mismatches = []
    only_a = []
    only_b = []
    matched = 0

    for num in all_nums:
        qa = by_num_a.get(num)
        qb = by_num_b.get(num)

        if qa is None:
            only_b.append(num)
            continue
        if qb is None:
            only_a.append(num)
            continue

        matched += 1
        if qa['correcta'] != qb['correcta']:
            mismatches.append({
                'num': num,
                'pregunta': qa['pregunta'][:100] + '...' if len(qa['pregunta']) > 100 else qa['pregunta'],
                label_a: qa['correcta'],
                label_b: qb['correcta'],
            })

    return matched, mismatches, only_a, only_b


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python3 tools/compare_jsons.py <json_a> <json_b> [--labels LabelA LabelB]")
        sys.exit(1)

    path_a = sys.argv[1]
    path_b = sys.argv[2]

    label_a = sys.argv[sys.argv.index('--labels') + 1] if '--labels' in sys.argv else 'A'
    label_b = sys.argv[sys.argv.index('--labels') + 2] if '--labels' in sys.argv else 'B'

    questions_a = load_json(path_a)
    questions_b = load_json(path_b)

    matched, mismatches, only_a, only_b = compare(questions_a, questions_b, label_a, label_b)

    print(f"Preguntas en {label_a}: {len(questions_a)}")
    print(f"Preguntas en {label_b}: {len(questions_b)}")
    print(f"Emparejadas: {matched}")
    if only_a:
        print(f"Solo en {label_a}: {only_a}")
    if only_b:
        print(f"Solo en {label_b}: {only_b}")
    print(f"Discordancias: {len(mismatches)}")

    if mismatches:
        print(f"\n| # | Pregunta | {label_a} | {label_b} |")
        print(f"|---|----------|{'-'*(len(label_a)+2)}|{'-'*(len(label_b)+2)}|")
        for m in mismatches:
            q = m['pregunta'].replace('|', '\\|')
            print(f"| {m['num']} | {q} | **{m[label_a]}** | {m[label_b]} |")
    else:
        print("\nNo se encontraron discordancias.")
