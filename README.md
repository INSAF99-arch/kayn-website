# KAYN website

Frontend-only pre-launch storefront for KAYN, a men's diamond bracelet brand. Static HTML, CSS and JavaScript with no build step and no backend. Available in English, French and Arabic (right-to-left).

## Run it

Open `index.html` in a browser, or serve the folder with any static server (for example `powershell -File serve.ps1`, then open http://localhost:5174/). It can be deployed as-is to any static host (Netlify, Vercel, GitHub Pages).

## Where things are

- `js/data.js`: products (names, prices in MAD, photos, colours, specs), customer reviews and site settings. Most content edits happen here.
- `js/i18n.js`: all interface text in English, French and Arabic.
- `js/pages.js`, `js/ui.js`, `js/notify.js`, `js/app.js`: page templates, components, the availability and email demo form, and the router.
- `css/tokens.css`, `css/main.css`: design tokens (official brand colours) and styles.
- `assets/`: product photography.

## Notes

- The email form is a visual demo only. Nothing is stored or sent.
- The reviews in `KAYN.reviews` are labelled sample reviews. Replace them with real ones before launch.
- The Instagram link and handle in `KAYN.site` are placeholders.
