# 🌐 Developer Portfolio

A single-page **portfolio website** (React + Vite) that showcases the projects
in this repo and presents your skills and contact details. Clean, responsive,
dark-themed, and **content-driven** — everything is edited in one file.

> **Stack:** React · Vite · plain CSS (no UI framework)

## Personalize it (one file)

All content lives in [`src/data.js`](./src/data.js). Open it and replace every
line marked `// TODO` with your real details:

- **`profile`** — your name, headline, about paragraph, location, email, and
  links (GitHub, LinkedIn, résumé).
- **`skills`** — grouped skill tags (pre-filled from this repo's projects).
- **`projects`** — the showcased projects (the three in this repo are pre-filled;
  update the `repo` / `demo` URLs once you push to GitHub or deploy).

You do **not** need to edit `App.jsx` — it renders whatever is in `data.js`.

### Add your résumé and a favicon
- Drop your CV as `public/resume.pdf` (the "Résumé" link points there).
- Optionally add `public/favicon.ico`.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
```

## Deploy (free options)

| Host | How |
|------|-----|
| **GitHub Pages** | `npm run build`, push `dist/` (or use the `gh-pages` action) |
| **Netlify / Vercel** | Connect the repo; build command `npm run build`, publish dir `dist` |

## Why it belongs in your portfolio

A portfolio site is itself a React project — it demonstrates component structure,
responsive CSS, and a data-driven render. It's also the **front door** that ties
your other projects together with live links.
