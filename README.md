# IBER OIL TRADE ARBITRAGE S.L. — Website

Static, self-contained corporate website. No build step, no dependencies, no
tracking scripts.

## Contents

| File | Purpose |
|---|---|
| `index.html` | English version |
| `es.html` | Spanish version |
| `styles.css` | Single stylesheet for both pages |
| `script.js` | Enquiry-form confirmation message |
| `assets/` | Logo and photography |

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deployment

The site is plain HTML and can be served by any static host. For GitHub Pages,
enable Pages on the default branch, root folder. To use a custom domain, add a
`CNAME` file at the repository root containing the domain, and point the domain's
DNS to the hosting provider.

## Before going live

- [ ] Replace the photography with licensed, full-resolution files
- [ ] Replace the logo with a transparent PNG or SVG
- [ ] Confirm the registered company name and tax identification number
- [ ] Confirm the contact address and the domain the site will be served from
- [ ] Connect the enquiry form to a mail handler (currently it shows a message
      directing the visitor to the published email address)

## Editing

Both language versions share the same stylesheet and section structure. When a
section is edited in one language, apply the equivalent change to the other so
the two stay in step.
