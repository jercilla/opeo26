from playwright.sync_api import sync_playwright
BASE='https://ope.kaixo.com/opeosaki/index.php'; AUK='ope26osakicomun200'
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page()
    pg.goto(f'{BASE}?aukera=reset&hizk=1', wait_until='domcontentloaded')
    # read q2 first to know its options, then answer q2 wrong with A
    pg.goto(f'{BASE}?aukera={AUK}&hizk=1&num=2', wait_until='domcontentloaded')
    pg.goto(f'{BASE}?idpregunta=2&aukera={AUK}&hizk=1&num=3&tema=&opcion=A&eranmota=', wait_until='domcontentloaded')
    open('wrong.html','w').write(pg.content())
    pg.goto(f'{BASE}?aukera=reset&hizk=1', wait_until='domcontentloaded')
    b.close()
print("saved wrong.html")
