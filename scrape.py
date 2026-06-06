from playwright.sync_api import sync_playwright
import re, html as ihtml, sys, json

BASE='https://ope.kaixo.com/opeosaki/index.php'; AUK='ope26osakicomun200'
N = int(sys.argv[1]) if len(sys.argv)>1 else 3
OUT = 'preview.json' if N < 200 else 'osakidetza_respuestas.json'

def clean(s):
    s = re.sub(r'<[^>]+>','',s)
    return ihtml.unescape(re.sub(r'\s+',' ',s)).strip()

def counters(h):
    c=re.search(r'Correctas:<font color="blue">\s*(\d*)\s*</font>',h)
    i=re.search(r'Incorrectas:\s*<font color="red">\s*(\d*)\s*</font>',h)
    cv=int(c.group(1)) if (c and c.group(1).strip()) else 0
    iv=int(i.group(1)) if (i and i.group(1).strip()) else 0
    return cv,iv

def parse_question(h):
    idp=re.search(r'name="idpregunta" value="(\d+)"',h)
    idp=int(idp.group(1)) if idp else None
    qm=re.search(r'<b>(\d+\.-\s*.*?)</b>',h,re.S)
    qtext=clean(qm.group(1)) if qm else ''
    opts={}
    # split form body by the radio inputs; each option text runs until next radio or the eranmota hidden input
    parts=re.split(r'<input type="radio" name="opcion" value="([A-D])">', h)
    for k in range(1,len(parts),2):
        letter=parts[k]
        txt=parts[k+1]
        txt=re.split(r'<input |<br>\s*<input', txt)[0]
        opts[letter]=clean(txt)
    return idp, qtext, opts

def parse_blue_reveal(h):
    # wrong-answer page reveals correct option: <span style="color:blue">b.- TEXT</span>
    m=re.search(r'<span style="color:blue">\s*([a-dA-D])\.-', h)
    return m.group(1).upper() if m else None

with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page()
    pg.goto(f'{BASE}?aukera=reset&hizk=1', wait_until='domcontentloaded')
    results=[]; prev_c=0
    for num in range(1, N+1):
        pg.goto(f'{BASE}?aukera={AUK}&hizk=1&num={num}', wait_until='domcontentloaded')
        idp,qtext,opts=parse_question(pg.content())
        # answer with option A; one submit reveals correctness
        pg.goto(f'{BASE}?idpregunta={idp}&aukera={AUK}&hizk=1&num={num+1}&tema=&opcion=A&eranmota=', wait_until='domcontentloaded')
        rh=pg.content(); c,i=counters(rh)
        if c>prev_c:
            correct='A'; how='acierto'
        else:
            correct=parse_blue_reveal(rh); how='fallo->azul'
        prev_c=c
        results.append({'num':num,'idpregunta':idp,'pregunta':qtext,
                        'opciones':opts,'correcta':correct,'metodo':how})
        flag='' if correct else '  <-- NO DETECTADA'
        print(f'Q{num} idp={idp} correcta={correct} ({how}) contador {c}/{i}{flag}')
    pg.goto(f'{BASE}?aukera=reset&hizk=1', wait_until='domcontentloaded')
    json.dump(results, open(OUT,'w'), ensure_ascii=False, indent=2)
    miss=[r['num'] for r in results if not r['correcta']]
    print(f'\nGuardado {OUT} ({len(results)} preguntas). Sin detectar: {miss}')
    b.close()
