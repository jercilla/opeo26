from playwright.sync_api import sync_playwright
url = 'https://ope.kaixo.com/opeosaki/index.php?aukera=ope26osakicomun200&hizk=1&num=1'
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto(url, wait_until='networkidle')
    print('=== TITLE ==='); print(pg.title())
    print('=== BODY TEXT ==='); print(pg.evaluate('document.body.innerText')[:3000])
    print('=== FORMS/INPUTS ===')
    print(pg.evaluate('''() => {
       const inputs = [...document.querySelectorAll('input,button,a,select,textarea')].slice(0,60)
         .map(e=>({tag:e.tagName,type:e.type,name:e.name,value:(e.value||'').slice(0,40),text:(e.innerText||'').slice(0,40),href:e.href||''}));
       return JSON.stringify(inputs,null,1);
    }''')[:4000])
    b.close()
