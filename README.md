# Andrew Zvoma — Portfolio Site

UX/UI & Product Designer portfolio. Plain HTML/CSS/JS — no build tools required.

## File Structure

```
a2zee-site/
├── index.html                      ← Home page
├── README.md
├── assets/
│   ├── css/style.css               ← All shared styles
│   └── js/shared.js                ← Nav & footer injection
└── case-studies/
    ├── index.html                  ← Case studies listing
    ├── bluebadge.html              ← Blue Badge Digital Companion
    ├── mindnest.html               ← MindNest
    ├── bluvape.html                ← Blu Vape Sprint
    ├── surgeryprep.html            ← SurgeryPrep
    ├── harrods.html                ← Harrods Pre-Order
    └── samsung.html                ← Samsung B2B
```

## Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` branch, `/ (root)` folder → **Save**
6. Live at: `https://<username>.github.io/<repo-name>/`

## Local Preview

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`

## Notes

- Images load from the original CDN (`a2zee.uk/_astro/...`) — internet required for images
- No dependencies, frameworks, or build steps needed
- Responsive down to 375px
- Colour scheme: white `#ffffff`, blue accent `#2563eb`, navy footer `#0f172a`
