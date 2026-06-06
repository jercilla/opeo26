from playwright.sync_api import sync_playwright
BASE='https://ope.kaixo.com/opeosaki/index.php'; AUK='ope26osakicomun200'
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page()
    # answer question 1 with A but keep num=1 to see the answered state
    pg.goto(f'{BASE}?idpregunta=1&aukera={AUK}&hizk=1&num=1&tema=&opcion=A&eranmota=', wait_until='domcontentloaded')
    html=pg.content()
    i=html.find('formul')
    print("======= num=1 variant =======")
    print(html[i-100:i+2200])
    b.close()
