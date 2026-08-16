# VisitTaniti — Plain HTML / CSS / JavaScript

This is the Taniti Island tourism site rebuilt as **plain HTML, CSS, and JavaScript**.
No React, no npm, no build step, no server required.

## How to open it

**Option 1 — Just double-click (easiest)**
Open `index.html` in any web browser. That's it. All pages, the menu, the FAQ
accordion, and the contact form work offline.

**Option 2 — Lightweight local server (optional)**
If you prefer serving it (nicer for some browsers), run one of these from this folder:

    python3 -m http.server 8080
    # then visit http://localhost:8080

or with Node:

    npx serve .

## Pages

- `index.html` — Home (hero, section previews, deliverables)
- `lodging.html` — Lodging
- `transportation.html` — Transportation
- `entertainment.html` — Entertainment / Attractions
- `faqs.html` — Frequently Asked Questions
- `contact.html` — Contact & booking form

## Folders

- `css/styles.css` — all styling
- `js/main.js` — menu toggle, FAQ accordion, contact form, scroll reveals
- `images/` — photos
- `deliverables/` — the WGU Task 1 Word documents (A–G)

## Notes

- The Google Fonts (Fraunces / Nunito Sans) and the Lucide icons load from a CDN,
  so they need an internet connection to appear. Everything else works offline.
- The contact form is front-end only — it shows a confirmation message and does not
  send data anywhere (no backend, by design).
