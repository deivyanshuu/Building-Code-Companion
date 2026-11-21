# Building Code Companion

Indian building codes explained in plain words for the people who use them every day: field engineers, students, CAD designers, architects, estimators, services engineers, lawyers, administrators and building owners.

**Open the site:** once GitHub Pages is switched on, it is served at `https://<your-username>.github.io/building-code-companion/`.

## What is inside

| Section | What you get |
|---|---|
| **Guides by role** | A starting path for each kind of user: what to read first, the numbers they need most, and the tools and forms that go with their work. |
| **Guides by task** | Step-by-step help for a job: getting building permission, preparing drawings, testing materials, building on site, designing the structure, fire safety, services, estimating and billing. |
| **All guides** | 69 guides covering approvals, planning, parking, accessibility, fire, drawings, materials testing, site practice, structural design, construction and estimation. |
| **Tools** | 30 calculators: FAR, setbacks, parking, exits, ramps, stairs, water tanks, fixtures, cube acceptance, mix targets, lap lengths, seismic and wind loads, beams, columns, quantities, deductions, steel take-off, earthwork and rate analysis. |
| **Forms** | 19 application and certificate forms from the annexures of the Model Building Bye-Laws 2016, as original page images and as fill-in versions that print on A4. |
| **Learn** | Practice questions in two tracks, B.Tech (GATE / ESE) and Masters (expert), with explanations linked back to the guides. |

## Sources

The guides are written in our own words and summarise the Indian Standards (IS 456, IS 800, IS 875, IS 1893, IS 13920, IS 1200, IS 10262 and others), the National Building Code of India and SP 7, and the Model Building Bye-Laws 2016 published by the Town and Country Planning Organisation, Government of India. The original form pages and reference tables come from the Model Building Bye-Laws 2016, which permits educational use with due credit.

No code documents are published in this repository.

## Please check before you rely on a number

Building rules are made by each State and local authority, and codes are revised from time to time. Use this companion to find the right provision quickly, then confirm it against the current official text and the bye-laws that apply to your site before using it for a design, an approval or a legal opinion.

## Running it locally

It is a plain static site with no build step. Because the pages load their content from the `content/` folder, open it through a small local server instead of double-clicking `index.html`:

```
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Folder layout

```
index.html        page shell, styles and shared helpers
content/          guides, tools, forms, quiz and the app engine (JavaScript)
forms/            original form pages (images)
refs/             original reference tables (images)
404.html          sends broken links back to the home page
```

## Corrections

Spotted a wrong number or an outdated clause? Please open an issue with the code, clause and edition, and it will be checked and fixed.
