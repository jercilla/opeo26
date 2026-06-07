#!/usr/bin/env python3
"""Parsea el texto extraido del PDF de TEC SUPERIOR INFORMATICA."""
import json, re, os

def parse_pdf_text(path):
    with open(path, encoding='utf-8') as f:
        lines = [l.strip() for l in f.readlines()]

    questions = []
    i = 0
    while i < len(lines):
        # Buscar inicio de pregunta: numero + -
        m = re.match(r'^(\d+)\.\-$', lines[i])
        if not m:
            i += 1
            continue

        num = int(m.group(1))
        i += 1
        # Saltar lineas vacias
        while i < len(lines) and not lines[i]:
            i += 1

        # Acumular texto de la pregunta hasta encontrar a)
        qtext_parts = []
        while i < len(lines) and not re.match(r'^[a-d]\)$', lines[i]):
            if lines[i]:
                qtext_parts.append(lines[i])
            i += 1
        qtext = ' '.join(qtext_parts)

        # Parsear opciones a), b), c), d)
        opciones = {}
        for letter in ['A','B','C','D']:
            if i >= len(lines) or not re.match(rf'^{letter.lower()}\)$', lines[i]):
                break
            i += 1
            # Saltar lineas vacias
            while i < len(lines) and not lines[i]:
                i += 1
            opt_parts = []
            while i < len(lines) and not (re.match(r'^[a-d]\)$', lines[i]) or re.match(r'^\d+\.\-$', lines[i])):
                if lines[i]:
                    opt_parts.append(lines[i])
                i += 1
            opciones[letter] = ' '.join(opt_parts)

        questions.append({
            'num': num,
            'idpregunta': num,
            'pregunta': f'{num}.- {qtext}',
            'opciones': opciones,
            'correcta': None,
            'metodo': 'pendiente',
        })

    return questions

def main():
    src = '/tmp/tec_superior.txt'
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    dst = os.path.join(root, 'tecnico_superior_informatica.json')

    questions = parse_pdf_text(src)

    with open(dst, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    print(f'Generado {dst} con {len(questions)} preguntas.')
    # Verificar primeras 3
    for q in questions[:3]:
        keys = list(q['opciones'].keys())
        print(f'  Q{q["num"]}: {q["pregunta"][:60]}... opts={keys}')

if __name__ == '__main__':
    main()
