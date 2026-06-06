from playwright.sync_api import sync_playwright
url = 'https://ope.kaixo.com/opeosaki/index.php?aukera=ope26osakicomun200&hizk=1&num=1'
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto(url, wait_until='networkidle')
    # find the question area - search for element containing "1.-"
    html = pg.content()
    # Print the chunk around the question text
    import re
    idx = html.find('1.-')
    print("=== HTML around question (idx %d) ===" % idx)
    print(html[idx-300: idx+3500])
    b.close()
