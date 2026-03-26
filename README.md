# Andrew Zvoma — Portfolio Site

UX/UI & Product Designer portfolio. Built with plain HTML/CSS/JS — no build tools required.

## File Structure

```
a2zee-site/
├── index.html                    ← Home page
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css             ← All shared styles
│   └── js/
│       └── shared.js             ← Nav & footer injection
└── case-studies/
    ├── index.html                ← Case studies listing
    ├── mindnest.html
    ├── bluvape.html
    ├── surgeryprep.html
    ├── harrods.html
    └── samsung.html
```

## Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload all files (maintaining the folder structure above)
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` (or `master`) branch, `/ (root)` folder → **Save**
6. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Local Preview

Open `index.html` directly in a browser, or use a simple local server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`

## Notes

- All case study images load from the original CDN (`a2zee.uk/_astro/...`) — internet connection required for images
- No dependencies, frameworks, or build steps needed
- Fully responsive down to 375px
