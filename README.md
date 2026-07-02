# Yang Meng · Academic Personal Website

A local static academic homepage based on an HTML CV design.

## File Structure

```
academic-site/
├── index.html          # Home
├── research.html       # Research interests
├── publications.html   # Publication list (with filters)
├── cv.html             # Full CV (printable)
├── contact.html        # Contact information
├── css/style.css
├── js/main.js
└── assets/img/
    └── myphoto.jpg     # Your photo (optional)
```

## Open Locally

**Option 1 (simplest):** Double-click `index.html`

**Option 2 (recommended):** Run a local server in this directory

```bash
python -m http.server 8080
```

Then visit: http://localhost:8080

## Add Your Photo

Save your photo as `myphoto.jpg` in the `assets/img/` directory.

## Print CV

Open `cv.html`, click "Print / Save as PDF", and choose "Save as PDF" to export a B4-sized resume.
