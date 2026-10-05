# Code Blue PC Repair website

Static site for codebluepcrepair.com, hosted free on GitHub Pages.

- `index.html` is the whole site (styles and script are inline).
- `CNAME` tells GitHub Pages to serve the site at codebluepcrepair.com.

To edit: change text in `index.html`, commit, and push. GitHub Pages republishes automatically.

## Do not delete

- `google8e0f02fa1f3bdc92.html` verifies the site in Google Search Console.
- `logo.png` is the logo Google reads from the structured data in `<head>`, even though the page itself shows `logo-glow.png`.
- `CNAME` and `.nojekyll` are needed by GitHub Pages.
- `fonts/` holds the self-hosted fonts, and `fonts/OFL.txt` is their license.

## When editing

- FAQ answers live in two places: the visible `#faq` section and the FAQPage JSON-LD in `<head>`. Edit both identically.
- The self-hosted Archivo font only covers weights 700-900 and widths 66-85%. Using any other weight or width needs a new font file.
- `404.html` can be served at any path, so its links and assets use root-absolute URLs (`/fonts/...`).
- Update `<lastmod>` in `sitemap.xml` after content changes.
