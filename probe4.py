from playwright.sync_api import sync_playwright
url = 'https://ope.kaixo.com/opeosaki/index.php?aukera=ope26osakicomun200&hizk=1&num=1'
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto(url, wait_until='networkidle')
    # accept cookies
    try:
        pg.click('#cookie1 button, .cookies button', timeout=3000)
    except Exception as e:
        print("cookie:", e)
    pg.check('input[name="opcion"][value="A"]')
    pg.click('form[name="formul"] input[type="submit"][value="Enviar"]')
    pg.wait_for_load_state('networkidle')
    print("=== URL after submit ===", pg.url)
    print("=== BODY TEXT ===")
    print(pg.evaluate('document.body.innerText')[:2200])
    print("=== HTML of form area ===")
    html = pg.content()
    i = html.find('formul')
    print(html[i-200:i+2600])
    b.close()
