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

## Custom domain

The site is intended to be served from **iberoiltradearbitrage.com**. To connect it:

1. Add a `CNAME` file at the repository root containing `iberoiltradearbitrage.com`.
2. At the domain registrar, **add** these records — do not replace the existing
   ones, and in particular leave the `MX` records untouched, as company email runs
   on that domain:

   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  iberoiltradearbitrage.github.io
   ```

3. In the repository settings, under Pages, set the custom domain and enable
   "Enforce HTTPS" once the certificate has been issued.

## Status

- [x] Photography licensed (Adobe Stock — see `assets/CREDITS.md`)
- [x] Registered company name, address and tax identification number confirmed
- [ ] Replace the logo with a transparent PNG or SVG
- [ ] Point the custom domain (see above)
- [ ] Connect the enquiry form to a mail handler (currently it shows a message
      directing the visitor to the published email address)

## Editing

Both language versions share the same stylesheet and section structure. When a
section is edited in one language, apply the equivalent change to the other so
the two stay in step.
