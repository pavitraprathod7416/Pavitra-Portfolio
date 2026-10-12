# Pavitra Rathod – Developer Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Run locally (VS Code)
1. Install Node.js 18+ from nodejs.org.
2. Open this folder in VS Code, then open the terminal (Ctrl+`).
3. `npm install`
4. `npm run dev` and open the URL it prints (usually http://localhost:5173).
5. `npm run build` creates the production build in `dist/`; `npm run preview` serves it locally.

## Update your content
Everything lives in **`src/data/portfolio.js`**: projects, skills, education, achievements, socials, email.
- Add each project's `github` and `demo` URLs (search for `TODO`). Buttons appear automatically once set.
- Replace `public/resume.pdf` with a newer resume (keep the file name).
- After deploying, set `og:url` and add an `og:image` in `index.html`.

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/pavitra-rathod/portfolio.git
git push -u origin main
```

## Deploy on Vercel
1. Sign in at vercel.com with GitHub.
2. Add New → Project → import the repo.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click Deploy.
4. Every push to `main` redeploys.

## Structure
```
src/components  reusable UI (Navbar, Reveal, Socials, RagPipeline...)
src/sections    page sections (Hero, About, Skills, Projects...)
src/data        portfolio.js – all content
public          resume.pdf, favicon
```
