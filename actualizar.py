#!/usr/bin/env python3
"""
Actualiza los JSON de respuestas de los tests OPE Osakidetza 2026 (kaixo.com).

Soporta varios tests (ver dict TESTS). Por cada test mantiene dos versiones y un diff:
  - <slug>.last.json   -> ultima captura
  - <slug>.prev.json   -> captura anterior (la anterior 'last')
  - <slug>.seed.json   -> captura inicial (opcional, semilla para el primer diff)
  - diffs/<slug>_diff_YYYYMMDD_HHMMSS.txt -> informe de cambios de cada ejecucion

Como detecta la respuesta correcta:
  Por cada pregunta envia la opcion A.
   - Si la web avanza y sube el contador "Correctas" -> A era la correcta.
   - Si falla, la web revela la correcta en azul (<span style="color:blue">x.- ...>) -> se lee la letra.

Uso:
  python3 actualizar.py                       # test por defecto (general_A_B_C1), 200 preguntas
  python3 actualizar.py --test general_A_B_C1 # elegir test explicitamente
  python3 actualizar.py -n 10                 # limitar nº de preguntas (pruebas)
  python3 actualizar.py --list               # listar tests configurados
  python3 actualizar.py --self-test          # validar la logica de diff sin tocar la web

Anadir un test nuevo: crear una entrada en TESTS con su 'aukera' y nº de preguntas.
"""
import re, html as ihtml, sys, json, os, shutil, argparse
from datetime import datetime

BASE = 'https://ope.kaixo.com/opeosaki/index.php'
DIR  = os.path.dirname(os.path.abspath(__file__))
DIFFDIR = os.path.join(DIR, 'diffs')

# ---- Registro de tests: slug -> parametros del test en la web ---------------
TESTS = {
    'general_A_B_C1': {
        'aukera': 'ope26osakicomun200',
        'num':    200,
        'label':  'Temario comun. Categorias A, B y C1. 200 preguntas',
    },
    # Ejemplo para el siguiente (rellenar 'aukera' y 'num' cuando lo tengas):
    # 'especifico_X': {'aukera': 'ope26osaki....', 'num': 100, 'label': '...'},
}

def paths(slug):
    return (os.path.join(DIR, f'{slug}.last.json'),
            os.path.join(DIR, f'{slug}.prev.json'),
            os.path.join(DIR, f'{slug}.seed.json'))

# ---------------------------------------------------------------- parsing web
def clean(s):
    s = re.sub(r'<[^>]+>', '', s)
    return ihtml.unescape(re.sub(r'\s+', ' ', s)).strip()

def counters(h):
    c = re.search(r'Correctas:<font color="blue">\s*(\d*)\s*</font>', h)
    i = re.search(r'Incorrectas:\s*<font color="red">\s*(\d*)\s*</font>', h)
    cv = int(c.group(1)) if (c and c.group(1).strip()) else 0
    iv = int(i.group(1)) if (i and i.group(1).strip()) else 0
    return cv, iv

def parse_question(h):
    idp = re.search(r'name="idpregunta" value="(\d+)"', h)
    idp = int(idp.group(1)) if idp else None
    qm = re.search(r'<b>(\d+\.-\s*.*?)</b>', h, re.S)
    qtext = clean(qm.group(1)) if qm else ''
    opts = {}
    parts = re.split(r'<input type="radio" name="opcion" value="([A-D])">', h)
    for k in range(1, len(parts), 2):
        txt = re.split(r'<input |<br>\s*<input', parts[k + 1])[0]
        opts[parts[k]] = clean(txt)
    return idp, qtext, opts

def parse_blue_reveal(h):
    m = re.search(r'<span style="color:blue">\s*([a-dA-D])\.-', h)
    return m.group(1).upper() if m else None

# ---------------------------------------------------------------- scrape
def scrape(aukera, n):
    from playwright.sync_api import sync_playwright
    results = []
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page()
        pg.goto(f'{BASE}?aukera=reset&hizk=1', wait_until='domcontentloaded')
        prev_c = 0
        for num in range(1, n + 1):
            pg.goto(f'{BASE}?aukera={aukera}&hizk=1&num={num}', wait_until='domcontentloaded')
            idp, qtext, opts = parse_question(pg.content())
            pg.goto(f'{BASE}?idpregunta={idp}&aukera={aukera}&hizk=1&num={num+1}&tema=&opcion=A&eranmota=',
                    wait_until='domcontentloaded')
            rh = pg.content(); c, _ = counters(rh)
            if c > prev_c:
                correcta, metodo = 'A', 'acierto'
            else:
                correcta, metodo = parse_blue_reveal(rh), 'fallo->azul'
            prev_c = c
            results.append({'num': num, 'idpregunta': idp, 'pregunta': qtext,
                            'opciones': opts, 'correcta': correcta, 'metodo': metodo})
            if num % 25 == 0 or num == n:
                print(f'  ... {num}/{n}')
        pg.goto(f'{BASE}?aukera=reset&hizk=1', wait_until='domcontentloaded')
        b.close()
    return results

# ---------------------------------------------------------------- diff
def diff_versions(prev, last):
    pmap = {q['num']: q for q in prev}
    lmap = {q['num']: q for q in last}
    changed, added, removed, sin_detectar = [], [], [], []
    for num in sorted(set(pmap) | set(lmap)):
        p, l = pmap.get(num), lmap.get(num)
        if p and not l:
            removed.append(num); continue
        if l and not p:
            added.append(num)
        if l and not l.get('correcta'):
            sin_detectar.append(num)
        if p and l:
            cambios = []
            if p.get('correcta') != l.get('correcta'):
                cambios.append(('correcta', p.get('correcta'), l.get('correcta')))
            if p.get('pregunta') != l.get('pregunta'):
                cambios.append(('pregunta', p.get('pregunta'), l.get('pregunta')))
            if p.get('opciones') != l.get('opciones'):
                cambios.append(('opciones', p.get('opciones'), l.get('opciones')))
            if cambios:
                changed.append({'num': num, 'cambios': cambios, 'q': l})
    return {'changed': changed, 'added': added, 'removed': removed, 'sin_detectar': sin_detectar}

def render_diff(d, prev_meta, last_meta):
    out = ['=' * 70, 'DIFF respuestas OPE Osakidetza',
           f'  prev: {prev_meta}', f'  last: {last_meta}', '=' * 70]
    ch = d['changed']
    resp_ch = [c for c in ch if any(t == 'correcta' for t, _, _ in c['cambios'])]
    out.append(f"Cambios de respuesta correcta: {len(resp_ch)}")
    out.append(f"Otros cambios (texto/opciones):  {len([c for c in ch if c not in resp_ch])}")
    out.append(f"Preguntas nuevas: {d['added']}")
    out.append(f"Preguntas eliminadas: {d['removed']}")
    out.append(f"Sin respuesta detectada: {d['sin_detectar']}")
    out.append('')
    if not ch:
        out.append('(sin cambios)')
    for c in ch:
        out.append('-' * 70)
        out.append(f"Pregunta {c['num']}: {c['q']['pregunta'][:90]}")
        for tipo, antes, ahora in c['cambios']:
            if tipo == 'correcta':
                ta = c['q']['opciones'].get(antes, '') if antes else ''
                tn = c['q']['opciones'].get(ahora, '') if ahora else ''
                out.append(f"  >> RESPUESTA: {antes} -> {ahora}")
                out.append(f"       antes [{antes}]: {ta[:80]}")
                out.append(f"       ahora [{ahora}]: {tn[:80]}")
            elif tipo == 'pregunta':
                out.append("  >> ENUNCIADO reescrito")
                out.append(f"       antes: {(antes or '')[:90]}")
                out.append(f"       ahora: {(ahora or '')[:90]}")
            elif tipo == 'opciones':
                for k in sorted(set(antes) | set(ahora)):
                    if antes.get(k) != ahora.get(k):
                        out.append(f"  >> OPCION {k} cambiada")
                        out.append(f"       antes: {(antes.get(k) or '')[:80]}")
                        out.append(f"       ahora: {(ahora.get(k) or '')[:80]}")
    return '\n'.join(out)

# ---------------------------------------------------------------- io helpers
def load(path):
    if os.path.exists(path):
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    return None

def save(path, data):
    tmp = path + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    os.replace(tmp, path)

# ---------------------------------------------------------------- self test
def self_test():
    prev = [
        {'num': 1, 'pregunta': 'P1', 'opciones': {'A': 'a', 'B': 'b'}, 'correcta': 'A'},
        {'num': 2, 'pregunta': 'P2', 'opciones': {'A': 'x', 'B': 'y', 'C': 'z'}, 'correcta': 'B'},
        {'num': 3, 'pregunta': 'P3', 'opciones': {'A': 'm', 'B': 'n'}, 'correcta': 'A'},
    ]
    last = [
        {'num': 1, 'pregunta': 'P1', 'opciones': {'A': 'a', 'B': 'b'}, 'correcta': 'A'},
        {'num': 2, 'pregunta': 'P2', 'opciones': {'A': 'x', 'B': 'y', 'C': 'z'}, 'correcta': 'C'},
        {'num': 3, 'pregunta': 'P3 reescrita', 'opciones': {'A': 'm', 'B': 'N!'}, 'correcta': 'A'},
        {'num': 4, 'pregunta': 'P4 nueva', 'opciones': {'A': 'z'}, 'correcta': None},
    ]
    d = diff_versions(prev, last)
    print(render_diff(d, 'synthetic-prev', 'synthetic-last'))
    assert any(c['num'] == 2 for c in d['changed'])
    assert 4 in d['added'] and 4 in d['sin_detectar'] and d['removed'] == []
    print('\nSELF-TEST OK')

# ---------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--test', default='general_A_B_C1', help='slug del test (ver --list)')
    ap.add_argument('-n', '--num', type=int, default=None, help='limitar nº de preguntas')
    ap.add_argument('--list', action='store_true', help='listar tests configurados')
    ap.add_argument('--self-test', action='store_true', help='validar la logica de diff sin tocar la web')
    args = ap.parse_args()

    if args.self_test:
        self_test(); return
    if args.list:
        for slug, t in TESTS.items():
            print(f"  {slug:20s} aukera={t['aukera']:24s} num={t['num']:4d}  {t['label']}")
        return
    if args.test not in TESTS:
        sys.exit(f"Test desconocido: {args.test}. Disponibles: {', '.join(TESTS)}")

    t = TESTS[args.test]
    n = args.num or t['num']
    LAST, PREV, SEED = paths(args.test)
    stamp = datetime.now().strftime('%Y%m%d_%H%M%S')

    # 1) rotar: la 'last' actual pasa a 'prev'. Si no hay last pero hay semilla, usarla.
    if os.path.exists(LAST):
        shutil.copy2(LAST, PREV)
    elif os.path.exists(SEED) and not os.path.exists(PREV):
        shutil.copy2(SEED, PREV)

    # 2) scrape fresco
    print(f"[{args.test}] {t['label']}")
    print(f'Recorriendo {n} preguntas...')
    data = scrape(t['aukera'], n)
    miss = [q['num'] for q in data if not q['correcta']]
    save(LAST, data)
    print(f'Guardado {os.path.basename(LAST)} ({len(data)} preguntas). Sin detectar: {miss}')

    # 3) diff
    prev = load(PREV)
    os.makedirs(DIFFDIR, exist_ok=True)
    if prev is None:
        report = '(primera ejecucion: no hay version previa con la que comparar)'
    else:
        d = diff_versions(prev, data)
        report = render_diff(d, os.path.basename(PREV), os.path.basename(LAST) + f' @ {stamp}')
    difffile = os.path.join(DIFFDIR, f'{args.test}_diff_{stamp}.txt')
    with open(difffile, 'w', encoding='utf-8') as f:
        f.write(report + '\n')
    print('\n' + report)
    print(f'\nInforme guardado en {difffile}')

if __name__ == '__main__':
    main()
