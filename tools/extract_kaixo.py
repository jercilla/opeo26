#!/usr/bin/env python3
"""
Extrae un test de kaixo.com a JSON sin modificar archivos existentes.
Reutiliza la logica de actualizar.py (scrapeo con Playwright).

Uso:
  python3 tools/extract_kaixo.py --test general_A_B_C1 --output /tmp/kaixo_general.json
  python3 tools/extract_kaixo.py --test general_A_B_C1 -n 5 --output /tmp/kaixo_5q.json
  python3 tools/extract_kaixo.py --list
"""
import sys, os, json, argparse

# Importar funciones de actualizar.py (en el directorio padre)
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import actualizar


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--test', default='general_A_B_C1', help='slug del test')
    ap.add_argument('-n', '--num', type=int, default=None, help='limitar nº de preguntas')
    ap.add_argument('-o', '--output', help='ruta del JSON de salida')
    ap.add_argument('--list', action='store_true', help='listar tests configurados')
    args = ap.parse_args()

    if not args.list and not args.output:
        ap.error('the following arguments are required: -o/--output (unless using --list)')

    if args.list:
        for slug, t in actualizar.TESTS.items():
            print(f"  {slug:20s} aukera={t['aukera']:24s} num={t['num']:4d}  {t['label']}")
        return

    if args.test not in actualizar.TESTS:
        sys.exit(f"Test desconocido: {args.test}. Disponibles: {', '.join(actualizar.TESTS)}")

    t = actualizar.TESTS[args.test]
    n = args.num or t['num']

    print(f"[{args.test}] {t['label']}")
    print(f'Extrayendo {n} preguntas de kaixo.com...')
    data = actualizar.scrape(t['aukera'], n)

    # Eliminar campos internos que no son parte del JSON publico
    for q in data:
        q.pop('metodo', None)

    with open(args.output, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    miss = [q['num'] for q in data if not q.get('correcta')]
    print(f'Guardado {args.output} ({len(data)} preguntas). Sin detectar: {miss}')


if __name__ == '__main__':
    main()
