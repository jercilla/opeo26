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
- `js/data.js` contiene `const QUIZZES` con cada test como objeto `{ label, meta, questions }`. Se regenera con `python3 tools/build_data.py`.
- **Perfiles locales**: sin auth. Guarda stats en `localStorage` con namespace por usuario.
- El perfil por defecto es **"User 1"**. Se puede cambiar desde el menu.
- **Flujo**: Menu -> pulsar quiz -> pantalla de sesion (modo + opciones) -> quiz.
- Modos de juego por sesion:
  - **Secuencial**: permite elegir en que pregunta empezar.
  - **Aleatorio**: mezcla el rango elegido sin filtrar historial. Cada sesion nueva es independiente.
- Las sesiones se guardan en `localStorage` y se pueden **continuar**. Se borran al terminar.
- Para volver al menu desde el quiz hay una flecha arriba a la izquierda.

## Workflow / Git
- **Nunca hacer `git push` sin confirmacion explicita del usuario.**
  - Hacer cambios y commit en local, avisar, y esperar confirmacion.
  - El usuario prefiere probar en local (`file:///.../quiz/index.html`) antes de subir.

## Convenciones
- Variables con nombres en espanol/euskera (`aukera`, `eranmota`, `pregunta`, `correcta`).
- No hay test runner. `--self-test` es la unica verificacion automatizada.
- No hay `requirements.txt`, `pyproject.toml` ni lockfiles. Instalar `playwright` manualmente.
