#!/usr/bin/env python3
"""
Parsea el markdown de TEC ESP INFORMATICA y genera un JSON compatible.
Las respuestas correctas se dejan como null hasta que esten disponibles en kaixo.com.
"""
import json, re, os

def parse_markdown(path):
    with open(path, encoding='utf-8') as f:
        text = f.read()

    # Eliminar el header
    text = re.sub(r'^#.*?# PREGUNTAS\s*', '', text, flags=re.S)

    questions = []
    # Buscar bloques de pregunta: numero + texto + bloque de opciones
    pattern = r'(\d+)\.\s*(.*?)\n```\n(.*?)\n```'
    matches = re.findall(pattern, text, re.S)

    for num_str, qtext, opts_block in matches:
        num = int(num_str)
        # Limpiar texto de la pregunta
        qtext = ' '.join(qtext.split())

        # Parsear opciones
        opciones = {}
        opt_lines = opts_block.strip().split('\n')
        current_letter = None
        current_text = []

        for line in opt_lines:
            line = line.strip()
            if not line:
                continue
            m = re.match(r'^([a-d])\)\s*(.*)', line, re.I)
            if m:
                if current_letter:
                    opciones[current_letter.upper()] = ' '.join(current_text)
                current_letter = m.group(1).upper()
                current_text = [m.group(2)]
            else:
                if current_letter:
                    current_text.append(line)

        if current_letter:
            opciones[current_letter] = ' '.join(current_text)

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
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src = os.path.join(root, 'docs', 'TEC ESP INFORMATICA_cas.md')
    dst = os.path.join(root, 'tecnico_informatica.json')

    questions = parse_markdown(src)

    with open(dst, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    print(f'Generado {dst} con {len(questions)} preguntas (sin respuestas).')

if __name__ == '__main__':
    main()
