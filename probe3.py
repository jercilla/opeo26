from playwright.sync_api import sync_playwright
url = 'https://ope.kaixo.com/opeosaki/index.php?aukera=ope26osakicomun200&hizk=1&num=1'
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto(url, wait_until='networkidle')
    pg.check('input[name="opcion"][value="A"]')
    pg.click('input[type="submit"].botgor')
    pg.wait_for_load_state('networkidle')
    print("=== URL after submit ===")
    print(pg.url)
    print("=== BODY TEXT ===")
    print(pg.evaluate('document.body.innerText')[:2500])
    # capture HTML around any color/feedback indicators
    html = pg.content()
    import re
    # look for question 1 mention and color highlighting
    for kw in ['correc','Correc','color="green"','class="ok"','class="bien"','verde','acert']:
        i = html.lower().find(kw.lower())
        if i>0:
            print(f"--- found '{kw}' at {i}: ...{html[i-120:i+200]}...")
            break
    b.close()
