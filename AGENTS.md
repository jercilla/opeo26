# AGENTS.md

## Que es este repo
Herramientas para preparar la OPE Osakidetza 2026:
- **Scraper** (`actualizar.py`) extrae respuestas correctas de `ope.kaixo.com`.
- **Quiz** (`quiz/`) app vanilla JS responsive para estudiar offline.

## Scraping
- `actualizar.py` -- script principal. Usa Playwright.
  - **Nunca ejecutar sin `-n`** a menos que quieras realmente scrapear las 200 preguntas.
  - `python3 actualizar.py -n 5` para prueba rapida.
  - `python3 actualizar.py --self-test` para validar logica de diff sin navegador.
  - Requiere `playwright` instalado y `playwright install chromium`.
- `scrape.py` -- script anterior hardcodeado, mantenido por si acaso.
- `probe_*.py`, `look_blue.py`, `dump_wrong.py` -- scripts de exploracion. Ignorar salvo que cambie la estructura HTML del sitio.
- Los JSON rotan: `.last.json` -> `.prev.json`. Diff en `diffs/`.

## Quiz (`quiz/`)
- **Abrir directamente**: `file:///home/jercilla/OPs/2026/osakidetza/quiz/index.html`
  - O servir con: `python3 -m http.server 8080` dentro de `quiz/`
- **No hay build ni dependencias**. Todo es vanilla HTML/CSS/JS.
- `js/data.js` contiene las preguntas embebidas como `const QUESTIONS`. Se genera copiando el JSON.
- **Perfiles locales**: sin auth. Guarda stats en `localStorage` con namespace por usuario.
- El perfil por defecto es **"Joseba"**. Se puede cambiar desde el menu.
- Modos de juego: **Secuencial** y **Aleatorio**. Arquitectura preparada para un tercer modo (las que mas fallas) via `Stats.getRankingFallos()`.
- Para volver al menu desde el quiz hay una flecha arriba a la izquierda.

## Convenciones
- Variables con nombres en espanol/euskera (`aukera`, `eranmota`, `pregunta`, `correcta`).
- No hay test runner. `--self-test` es la unica verificacion automatizada.
- No hay `requirements.txt`, `pyproject.toml` ni lockfiles. Instalar `playwright` manualmente.
