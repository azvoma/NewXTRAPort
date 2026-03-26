# Andrew Zvoma — Portfolio

UX/UI & Product Designer portfolio site.

## Structure

```
├── index.html                        # Home page
├── assets/
│   └── css/
│       └── style.css                 # Shared styles
└── case-studies/
    ├── index.html                    # Case studies listing
    ├── mindnest.html                 # MindNest case study
    ├── bluvape.html                  # Blu Vape Sprint case study
    ├── surgeryprep.html              # SurgeryPrep case study
    ├── harrods.html                  # Harrods Pre-Order case study
    └── samsung.html                  # Samsung B2B case study
```

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `Deploy from a branch`
4. Choose `main` branch and `/ (root)` folder
5. Click **Save**

Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```
