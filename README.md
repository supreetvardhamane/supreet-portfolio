# Supreet Vardhamane — Portfolio

A fast, accessible, single-page portfolio. **No frameworks, no build step** — just
hand-written HTML, CSS, and a sprinkle of vanilla JS. Designed to load instantly and
host for free on GitHub Pages.

## Stack
- Semantic HTML5 + CSS custom properties (palette preserved from v1)
- One web font (JetBrains Mono); body uses the system font stack — zero extra downloads
- Inline SVG icons (no Font Awesome / icon CDN)
- ~70 lines of dependency-free JS (mobile nav, scroll-spy, year)

## Structure
```
index.html              # all content + sections
css/style.css           # styles + palette tokens
js/main.js              # progressive enhancement only
assets/
  favicon.svg
  supreet-resume.pdf    # ← add this (see assets/README-resume.txt)
  projects/*.svg        # placeholders — swap with real screenshots
.nojekyll               # serve files as-is on GitHub Pages
```

## Edit your content
All text lives in `index.html`. Update projects, skills, education, and achievements
right in the markup — no tooling needed.

- **Résumé:** add `assets/supreet-resume.pdf`.
- **Project images:** replace the SVGs in `assets/projects/` with 16:9 screenshots and
  update each `<img src>` + `alt`.

## Run locally
Open `index.html` in a browser, or:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy to GitHub Pages
1. Push these files to your repo (e.g. `supreet-portfolio`).
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Branch: `main`, folder: `/ (root)`. Save.
4. Live at `https://<username>.github.io/<repo>/` in ~1 minute.

## Accessibility & performance
- Skip-to-content link, semantic landmarks, one `<h1>`, labelled controls
- Visible focus rings, keyboard-friendly nav, `prefers-reduced-motion` respected
- Lazy-loaded images with fixed dimensions (no layout shift)
- Static, render-blocking-free — fast even on slow connections
