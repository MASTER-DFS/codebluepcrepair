# Code Blue PC Repair website

Static site for codebluepcrepair.com, hosted free on GitHub Pages.

- `index.html` is the main page; `home-repair/index.html` and `business-it/index.html` are the two service pages; `privacy/index.html` is the privacy policy.
- `site.css` and `site.js` are shared by all four pages.
- `CNAME` tells GitHub Pages to serve the site at codebluepcrepair.com.

To edit: change the page's HTML, commit, and push. GitHub Pages republishes automatically.

## Do not delete

- `google8e0f02fa1f3bdc92.html` verifies the site in Google Search Console.
- `logo.png` is the logo Google reads from the structured data in `<head>`, even though the page itself shows `logo-glow.png`.
- `CNAME` and `.nojekyll` are needed by GitHub Pages.
- `fonts/` holds the self-hosted fonts, and `fonts/OFL.txt` is their license.

## When editing

- The header and footer are repeated on all four pages, and the booking form on the first three. Change them on every page.
- The privacy policy says the site has no cookies, analytics or third-party scripts. If you ever add any (or a form service), update `privacy/index.html` and its effective date first.
- Links between pages and to images and fonts use root-absolute URLs (`/site.css`, `/fonts/...`).
- The FAQ lives only on the main page, in two places: the visible `#faq` section and the FAQPage JSON-LD in `<head>`. Edit both identically.
- A bright blue outline (`--click-line`) means "you can click this". Plain cards use `--line`.
- The self-hosted Archivo font only covers weights 700-900 and widths 66-85%. Using any other weight or width needs a new font file.
- `404.html` can be served at any path, so it is self-contained.
- Update `<lastmod>` in `sitemap.xml` after content changes.
