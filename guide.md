# Replication Guide — Clear Compare landing pages + embedded form

How this site is built, and how to rebuild it as a **different brand** (different
name, colours, fonts, logo, imagery and copy) while keeping the exact same
behaviour: the landing pages, the embedded application form, and the click
attribution/analytics chain that connects them.

The guide is in two halves:

- **Part 1 — How it works today.** The architecture, file by file, and the
  behavioural contract that makes the funnel work.
- **Part 2 — How to replicate it.** Two routes (design in Webflow, or design
  from scratch in code), a full rebranding checklist, and an acceptance test
  list you can run against the finished site.

---

## Part 1 — How it works today

### 1.1 The one-paragraph version

The site is a **published Webflow design, self-hosted inside Next.js**. Each
page was captured from Webflow into a JSON file (`src/webflow/*.json`) that
holds the page's `<head>` metadata, its `<body>` HTML, and the ordered list of
scripts the page runs. A single React component (`WebflowPage.tsx`) injects
that HTML, links Webflow's stylesheet, and replays the scripts in order after
mount — so Webflow's nav, scroll animations, FAQ accordion and the form embed
all behave exactly as they do on a live Webflow site. Next.js supplies the
routing, the global analytics tags, redirects and the 404 page.

There are only two page *types*:

| Type | Routes | JSON | What it does |
|---|---|---|---|
| **Landing page** | `/` , `/home` | `index.json`, `home.json` | Full marketing page. Captures `gclid`/UTM params into a cookie. Every CTA points at an apply page. |
| **Form page** | `/apply/personal-loan`, `/apply/car-loans`, `/apply/home-loan` | `personal-loan.json`, `car-loans.json`, `home-loan.json` | Slim page — logo bar, the **RateMatch form in an iframe**, lender logos, footer. Reads the attribution cookie and passes it into the iframe URL. |

Everything else (`404`, redirects, meta, PWA manifest, GTM) is Next.js plumbing.

### 1.2 File map

```
src/
  components/WebflowPage.tsx      ← the whole rendering engine (~120 lines)
  pages/
    _document.tsx                 ← global <head>: GTM, gtag, OG defaults, JSON-LD, manifest, SW
    _app.tsx                      ← deliberately empty: NO global CSS (would bleed onto Webflow pages)
    index.tsx                     ← / → index.json          (personal-loan landing)
    home.tsx                      ← /home → home.json       (home-loan landing)
    apply/personal-loan.tsx       ← → personal-loan.json
    apply/car-loans.tsx           ← → car-loans.json
    apply/home-loan.tsx           ← → home-loan.json
    404.tsx                       ← self-contained branded 404 (styled-jsx, no shared CSS)
  webflow/*.json                  ← the captured pages (the actual content of the site)
public/
  webflow/
    css/clear-compare.webflow.shared.b5cebe7ae.css   ← the ONLY stylesheet the site uses
    js/jquery-3.5.1.min.js, webflow*.js              ← Webflow runtime
    gsap/3.15.0/{gsap,ScrollTrigger}.min.js          ← scroll animations (landing pages only)
    *.ttf  *.webp  *.png  *.svg                      ← fonts, imagery, logos
  og-image.png, favicon.ico, manifest.json, sw.js
next.config.mjs                   ← legacy-route redirects
.env                              ← NEXT_PUBLIC_RATEMATCH_FORM_URL
tailwind.config.ts, components.json, src/components/ui/*
                                  ← shadcn/Tailwind leftovers; the Webflow pages do NOT use them
```

> **Note:** Tailwind and the shadcn `ui/` components are vestigial — no rendered
> page imports them (there is no global stylesheet import in `_app.tsx`). Only
> `404.tsx` styles itself, via styled-jsx. Don't spend time theming Tailwind;
> the design tokens that matter live in the Webflow CSS file.

### 1.3 The page JSON contract

Each file in `src/webflow/` is one object:

```jsonc
{
  "wfPage": "6926942a483bd158adcd3acc",   // Webflow page id → set on <html data-wf-page>
  "wfSite": "69269428483bd158adcd3a6d",   // Webflow site id → set on <html data-wf-site>
  "meta": {
    "title": "Personal Loans | Clear Compare",
    "description": "…plain text, NOT HTML-escaped…",
    "og":      { "og:title": "…" },        // optional per-page overrides
    "twitter": { "twitter:title": "…" },
    "favicon": "/webflow/…png",
    "canonical": null,
    "headStyles": ["* { -webkit-font-smoothing: antialiased; … }"]
  },
  "scripts": [                             // executed IN ORDER after mount
    { "code": "…inline js…" },
    { "src":  "/webflow/js/jquery-3.5.1.min.js" }
  ],
  "bodyHtml": "<div class=\"page-wrapper\">…entire page…</div>"
}
```

`wfPage` / `wfSite` are not cosmetic: Webflow's interactions runtime (IX2) looks
up `data-wf-page` to find the interaction definitions compiled into
`webflow*.js`. If you re-capture a page from a different Webflow site, both ids
must be updated together with the JS bundles.

### 1.4 The rendering engine — `WebflowPage.tsx`

Read the file; it is short. The five things it does:

1. **Head** — title, description, viewport, the Webflow stylesheet (path is a
   module constant, `WEBFLOW_CSS`), any `headStyles`, canonical, favicon, and
   per-page OG/Twitter tags that fall back to `title`/`description`.
2. **Body** — `<div dangerouslySetInnerHTML={{ __html: bodyHtml }} />`.
3. **On mount** — sets `data-wf-page` / `data-wf-site` on `<html>`, adds
   `w-mod-js` (and `w-mod-touch` when touch is available). Webflow CSS gates
   several rules on those classes; without them, elements that animate in stay
   invisible.
4. **Scripts, in order** — external scripts are appended with `async = false`
   and *awaited* before the next one runs, so jQuery → Webflow chunks → Webflow
   main → GSAP load in the right sequence. Inline scripts are appended as
   `<script>` text nodes (not `eval`), so they behave like real page scripts.
5. **Two substitutions along the way:**
   - Any inline script matching `googletagmanager.com/gtm.js` or `'gtm.start'`
     is **skipped**, because GTM is already injected globally in `_document.tsx`.
     Loading it twice double-counts pageviews.
   - The literal token `__RATEMATCH_FORM_URL__` inside inline scripts is replaced
     with `process.env.NEXT_PUBLIC_RATEMATCH_FORM_URL` (default
     `https://forms.ratematch.ai/`), so the form endpoint is configurable per
     environment without touching the captured JSON.

### 1.5 Anatomy of a landing page (`index.json`)

Body order, with the class names you'd edit:

| # | Section | Class | Contains |
|---|---|---|---|
| 0 | GTM noscript + global style embed | `.page-wrapper` > `.global-styles` | Webflow's utility CSS (`.hide`, `.margin-0`, `.text-style-2lines`, colour-scheme mapping…) |
| 1 | Nav | `.navbar2_component` | Logo link → `/`, CTA button → `/apply/personal-loan` |
| 2 | Hero | `header.section_header1` | "Powered by" tagline chip, `h1.heading-style-h1.textcolor-blue`, sub-paragraph, 3 `.header1_list_item` ticks, CTA, hero image |
| 3 | Lender logo strip | `section.section_logo2` | `h2` + 5 `.logo2_wrapper > img.logo2_logo` |
| 4 | Testimonials | `section.section_testimonial17` | "Trusted by customers across Australia" |
| 5 | Purpose tiles | `section.section_loans` | Grid of `a.loads_grid-list_item` (Debt Consolidation, Holiday, Car Purchase…) each linking to an apply page |
| 6 | Value props | `section.section_features` | 4 × `h3` (Real offers / Fast Process / We Protect Credit Score / Direct Access) |
| 7 | How it works | `section.section_timeline1` | 3 steps; GSAP ScrollTrigger drives the scroll animation |
| 8 | FAQ | `section.section_faq` | `.faq_accordion` items, each with a `.faq_answer` |
| 9 | Final CTA | `section.section_cta39` | Full-bleed CTA with `cta-bg.svg` |
| 10 | Footer | `footer.footer7_component` | Link columns (`.footer_accordion` on mobile), AFCA links, disclaimers |

Layout primitives repeat throughout and are worth knowing:
`.padding-global` → `.container-large` → `.padding-section-large|medium`, plus
`.spacer-small|medium` and `.heading-style-h1…h6`, `.text-size-medium`,
`.text-weight-semibold`.

**`/home` is a copy of `/` with different words.** The diff between
`index.json` and `home.json` is only: the `h1`, three body paragraphs, the nine
purpose tiles, and every CTA `href` (`/apply/personal-loan` →
`/apply/home-loan`). That is the intended pattern for adding a vertical.

### 1.6 Anatomy of a form page (`personal-loan.json`)

Much smaller (~13 KB of HTML vs ~89 KB):

```
GTM noscript
.page-wrapper > .global-styles (same utility CSS)
main.main-wrapper
  .navbar2_component.align-center      ← logo only, centred, no CTA (nothing to click away to)
  .w-embed.w-iframe.w-script
     <div id="ratematch-form-container"></div>    ← the iframe is injected here
  section.section_logo2                ← lender logos (trust reinforcement)
footer.footer7_component
```

The form itself is built by an inline script (script #2, i.e. it runs *before*
jQuery/Webflow load — it doesn't need them):

```js
var src = new URL('__RATEMATCH_FORM_URL__');        // substituted by WebflowPage
src.searchParams.set('partnerId', 'CC001');          // ← per-brand partner id
src.searchParams.set('formType', 'personal');        // ← 'personal' | 'car' | 'home'

// attribution: cookie set on the landing page, overridden by fresh URL params
var stored = {};
var m = document.cookie.match(/(?:^|;\s*)rm_attribution=([^;]*)/);
if (m) { try { stored = JSON.parse(decodeURIComponent(m[1])); } catch (e) {} }
var urlParams = new URLSearchParams(window.location.search);
PARAMS.forEach(function (p) {
  var v = urlParams.get(p) || stored[p];
  if (v) src.searchParams.set(p, v);
});

var iframe = document.createElement('iframe');
iframe.src = src.toString();
iframe.width = '100%';
iframe.height = '1000';
iframe.style.cssText = 'border: none; min-height: 1000px;';
iframe.title = 'RateMatch Loan Application';
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allow', 'clipboard-write');
document.getElementById('ratematch-form-container').appendChild(iframe);
```

This works in the Next.js port because `bodyHtml` (and therefore
`#ratematch-form-container`) is already in the DOM before `useEffect` replays
the scripts.

### 1.7 The attribution + tracking chain (the part that must not break)

```
 Ad click  ─► /?gclid=…&utm_source=…
              │
              │ landing-page inline script
              ▼
        cookie rm_attribution = {"gclid":"…","utm_source":"…"}
        max-age 90d · path=/ · SameSite=Lax · Secure
        domain=.clearcompare.com.au  (only when hostname contains that domain)
              │
              │ user clicks a CTA → /apply/personal-loan
              ▼
        form-page inline script reads cookie (URL params win if present)
              │
              ▼
        iframe src = FORM_URL?partnerId=CC001&formType=personal&gclid=…&utm_source=…
              │
              │ form posts back:  { type: 'RATEMATCH_TRACKING', event, data }
              ▼
        window 'message' listener → dataLayer.push({ event, ...data })
        events: offers_displayed · offer_click · form_complete
              │
              ▼
        GTM (GTM-5RG38958) → Google Ads conversions (AW-17589801646)
```

Tracked params: `gclid, gbraid, wbraid, msclkid, fbclid, utm_source, utm_medium,
utm_campaign, utm_term, utm_content`.

Both the cookie-writer and the `postMessage` listener appear in **every** page's
script list — landing pages and form pages alike — so attribution survives a
user landing directly on an apply URL.

### 1.8 Global head, config, deployment

`_document.tsx` carries what is *not* page-specific:

- Google Tag Manager (`GTM-5RG38958`) + noscript iframe
- Google Ads gtag (`AW-17589801646`)
- `theme-color` / `msapplication-TileColor` `#ff7f35`, apple web-app meta
- OG/Twitter defaults — `og:site_name`, and an **absolute** `og:image`
  (`https://clearcompare.com.au/og-image.png`, 1200×630) plus
  `twitter:card=summary_large_image`
- PWA manifest + favicons, DNS prefetch/preconnect, Google Fonts (Open Sans —
  used only by the non-Webflow surfaces)
- `Organization` JSON-LD
- Service-worker registration for `/sw.js`, iOS pinch-zoom suppression
- A Softgen platform monitoring script (`cdn.softgen.ai/script.js`) — platform
  plumbing, not brand functionality

`next.config.mjs` holds permanent redirects from the pre-Webflow URL structure
(`/loans/personal` → `/apply/personal-loan`, `/blog/*` → `/`, …).
`vercel.json` adds `X-Content-Type-Options: nosniff`. `.env` holds
`NEXT_PUBLIC_RATEMATCH_FORM_URL`. Deployment is Vercel (`framework: nextjs`);
`ecosystem.config.js` is a PM2 dev-server helper.

### 1.9 Design tokens in the Webflow CSS

The brand lives in one `:root` block (~line 2090 of the stylesheet):

```css
:root{
  --_primitives---colors--white:#fff;
  --_primitives---colors--dark-blue:#1e2556;      /* headings, primary brand */
  --_primitives---colors--orange:#ff7f35;         /* CTAs, accent */
  --_primitives---colors--off-white:#f1f1f1;
  --_primitives---colors--light-blue:#ebf9ff;
  --_primitives---colors--neutral-darkest:#1e1e1e; /* body text */
  --_primitives---colors--neutral-lightest:#eee;   /* + neutral ramp: #ccc #aaa #666 #444 #222 */

  --_typography---font-styles--body:    Asap, Arial, sans-serif;
  --_typography---font-styles--heading: Asap, Arial, sans-serif;

  --_ui-styles---radius--small:.5rem;  --_ui-styles---radius--medium:1rem;  --_ui-styles---radius--large:1.5rem;
  --_ui-styles---stroke--border-width:1px;

  --color-scheme-1--background: var(--_primitives---colors--white);
  --color-scheme-1--text:       var(--_primitives---colors--neutral-darkest);
  --color-scheme-1--foreground: var(--_primitives---colors--neutral-lightest);
  --color-scheme-1--border:     var(--_primitives---colors--neutral-darkest);
  --color-scheme-1--accent:     var(--_primitives---colors--neutral-darkest);
}
```

Sections opt into palettes with `.color-scheme-2 … .color-scheme-10`, each of
which just remaps the five `--color-scheme-1--*` variables. **A full recolour is
mostly a rewrite of the `--_primitives---colors--*` values.** Fonts are six
self-hosted `@font-face` rules for Asap (300/400/500/600/700/800) pointing at
`../*.ttf` — i.e. `/public/webflow/*.ttf`.

---

## Part 2 — Replicating this for a new brand

### 2.1 Choose a route

**Route A — design in Webflow, capture, self-host.** Best when the new brand
wants a genuinely different layout and a designer will work visually. You design
in Webflow (cloning the existing project is the fastest start), publish, capture
each page into JSON, drop the assets into `public/`, and re-attach the behaviour
scripts. The engine (`WebflowPage.tsx`) needs no changes.

**Route B — design anywhere, implement in code.** Best when the design comes
from Figma or another tool, or when you'd rather own plain React/CSS. You throw
away the Webflow runtime and rebuild the pages as components — but you must
reimplement the **behavioural contract** in §2.5 exactly, because that's what
makes the funnel earn money, not the markup.

Both routes share the branding checklist (§2.3) and the acceptance tests (§2.6).

### 2.2 Route A — Webflow → self-hosted, step by step

1. **Design the pages in Webflow.** Keep the *page inventory* (one landing page
   per vertical, one slim form page per vertical) even if everything else
   changes. On the form page, place an **HTML embed containing a single empty
   div** with a stable id — keep `id="ratematch-form-container"` unless you also
   change the injector script.
2. **Publish** to the `.webflow.io` staging domain.
3. **Capture each page.** Save this as `scripts/extract-webflow-page.mjs`:

   ```js
   // node scripts/extract-webflow-page.mjs https://yoursite.webflow.io/ src/webflow/index.json
   import { writeFile } from 'node:fs/promises'
   const [url, out] = process.argv.slice(2)
   const html = await (await fetch(url)).text()

   const attr = (re) => (html.match(re) || [])[1] ?? null
   const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)[1]
   let body   = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]

   const scripts = []
   const SCRIPT = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi
   for (const src of [head, body]) {
     let m
     while ((m = SCRIPT.exec(src))) {
       const s = (m[1].match(/src="([^"]+)"/) || [])[1]
       if (s) scripts.push({ src: s })
       else if (m[2].trim()) scripts.push({ code: m[2].trim() })
     }
   }
   body = body.replace(SCRIPT, (m) => (/w-iframe|noscript/.test(m) ? m : ''))

   const headStyles = [...head.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1].trim())

   await writeFile(out, JSON.stringify({
     wfPage: attr(/data-wf-page="([^"]+)"/),
     wfSite: attr(/data-wf-site="([^"]+)"/),
     meta: {
       title: (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]?.trim(),
       description: attr(/<meta content="([^"]*)" name="description"/) ||
                    attr(/<meta name="description" content="([^"]*)"/),
       og: {}, twitter: {},
       favicon: attr(/<link href="([^"]+)" rel="shortcut icon"/),
       canonical: attr(/<link href="([^"]+)" rel="canonical"/),
       headStyles,
     },
     scripts,
     bodyHtml: body.trim(),
   }, null, 0))
   ```

   Treat the output as a **starting point** and diff it against an existing
   `src/webflow/*.json` before trusting it.
4. **Download the assets** Webflow references (stylesheet, `webflow*.js`
   chunks, jQuery, fonts, images) into `public/webflow/`, mirroring the paths
   you'll rewrite to. Then rewrite every `https://cdn.prod.website-files.com/…`
   and `https://assets.website-files.com/…` URL in the JSON to `/webflow/…`.
   Keep filenames URL-encoded exactly as they appear (`Group%2039427%201%20(1).png`).
5. **Point the engine at your stylesheet** — update `WEBFLOW_CSS` in
   `WebflowPage.tsx` to the new hashed filename.
6. **De-escape the meta description.** Store it as plain text (`it's`), never as
   `&#x27;` — React escapes the ampersand again and scrapers show the entity
   literally. This has bitten this repo before.
7. **Re-attach the behaviour scripts** in the captured `scripts` array, in this
   order (the order is load-bearing):

   | Order | Script | Pages |
   |---|---|---|
   | 1 | `w-mod-js` / `w-mod-touch` setter | all |
   | 2 | GTM snippet *(skipped at runtime; keep or drop)* | all |
   | 3 | **Form-iframe injector** | form pages |
   | 4 | jQuery → webflow chunks → webflow main | all |
   | 5 | GSAP + ScrollTrigger | landing pages |
   | 6 | `RATEMATCH_TRACKING` → `dataLayer` listener | all |
   | 7 | Accordion init (`.faq_accordion`, `.footer_accordion`) | pages with FAQ/footer accordions |
   | 8 | **Attribution cookie writer** | all |

8. **Add the route file** — six lines:

   ```tsx
   import WebflowPage, { WebflowData } from '@/components/WebflowPage'
   import data from '@/webflow/personal-loan.json'
   export default function PersonalLoanApply() { return <WebflowPage data={data as WebflowData} /> }
   ```

### 2.3 The rebranding checklist

Work through all of it — the misses are usually in the last third.

**Colour & type**
- [ ] `--_primitives---colors--*` in the stylesheet → new palette. Preserve the
      *roles*: one deep brand colour (headings/nav — today `#1e2556`), one
      accent (CTAs — today `#ff7f35`), a soft tint background (`#ebf9ff`), an
      off-white (`#f1f1f1`), and the neutral ramp.
- [ ] Hard-coded hexes that bypass the tokens: inline SVG `fill="#1E2556"` in
      the hero tick icons and tile arrows, and any `style="…"` in `bodyHtml`.
      Grep the JSON for `#1e2556` / `#ff7f35` case-insensitively.
- [ ] `--_ui-styles---radius--*` if the new brand is sharper or rounder.
- [ ] Replace the six Asap `@font-face` rules + `.ttf` files; update
      `--_typography---font-styles--body|heading`. Prefer `.woff2`.
- [ ] `_document.tsx`: `theme-color`, `msapplication-TileColor`,
      `apple-mobile-web-app-title`, the Google Fonts link.
- [ ] `manifest.json`: `name`, `short_name`, `description`, `theme_color`.
- [ ] `404.tsx`: the styled-jsx block hard-codes the navy/orange/Asap — it is a
      separate surface and will not follow the CSS variables.

**Identity & assets**
- [ ] Logos: `692ce2d9c2a2a18127597fc2_logo.svg` (nav), `692ce31e7f70740520311f6e_Alt Logo.svg`
      (footer/404), the favicon PNG (`Group 39427 1 (1).png`), `favicon.ico`,
      `favicon-16/32`, `apple-touch-icon`, `android-chrome-192/512`.
- [ ] `og-image.png` — 1200×630, and the **absolute** URL in `_document.tsx`
      must point at the new production domain.
- [ ] Hero/section imagery (`loan-match*.webp`, `comparison*.webp`,
      `pick-lender*.webp`, `offers*.webp`, the purpose photos, `cta-bg.svg`).
      Webflow ships `-p-500/-p-800/-p-1080/-p-1600` variants referenced by
      `srcset` — replace the whole set or strip `srcset`.
- [ ] Partner/lender logos in `.logo2_logo-list` — only use logos you're
      licensed to display.

**Copy & metadata**
- [ ] `meta.title` / `meta.description` per page (plain text — see §2.2 step 6).
- [ ] Every heading, paragraph, tile label, FAQ Q&A, footer column and legal
      line inside `bodyHtml`.
- [ ] Regulator/compliance references: the current footer links to AFCA
      (`afca.org.au`, `mailto:info@afca.org.au`). Different brand or
      jurisdiction ⇒ different scheme, licence numbers and disclaimers. Get this
      reviewed; it is not decoration.
- [ ] JSON-LD `Organization` block in `_document.tsx` (name, url, logo,
      description, country).
- [ ] `README.md`, `package.json` `name`.

**Wiring**
- [ ] `NEXT_PUBLIC_RATEMATCH_FORM_URL` in `.env` and in the Vercel project.
- [ ] `partnerId` in each form-page injector script — `CC001` is Clear
      Compare's identifier with the form provider. **A new brand needs its own
      id issued by the provider**; reusing `CC001` misattributes leads.
- [ ] `formType` per apply page (`personal` / `car` / `home`).
- [ ] Cookie name `rm_attribution` and the domain guard
      `location.hostname.indexOf('clearcompare.com.au')` → your domain.
- [ ] GTM container id (`GTM-5RG38958`) and Google Ads id (`AW-17589801646`) in
      `_document.tsx`, plus the GTM noscript iframe.
- [ ] `next.config.mjs` redirects — the current list maps *Clear Compare's* old
      URLs; replace with the new brand's legacy URLs, or delete.
- [ ] Decide on the Softgen monitoring script in `_document.tsx` (platform
      plumbing — keep only if you're still on that platform).
- [ ] `sw.js` — check what it caches before shipping it under a new brand.

### 2.4 Adding a landing page / vertical (the clone workflow)

This is the cheapest, most repeatable operation in the codebase, and the model
for spinning up a new brand's second vertical:

1. `cp src/webflow/index.json src/webflow/<vertical>.json`
2. In the copy, change: `meta.title`, `meta.description`, the `h1`, the
   supporting paragraphs, the purpose tiles (label + `href`), the "how it works"
   copy, and **every CTA `href`** → `/apply/<vertical>`.
3. `cp src/webflow/personal-loan.json src/webflow/<vertical>-apply.json`, change
   `meta`, and set `formType` in the injector script.
4. Add the two page files under `src/pages/`.
5. Verify the tile/CTA links resolve — a stale `/apply/personal-loan` inside a
   cloned page silently sends leads to the wrong form type.

### 2.5 Route B — the behavioural contract

If you rebuild the pages as ordinary React/CSS (no Webflow runtime), the design
is entirely yours, but these behaviours are what the funnel depends on. Treat
this as the spec.

1. **Two page types, same inventory.** Landing pages carry all persuasion and
   every CTA leads to an apply page. Apply pages are distraction-free: logo,
   form, trust logos, footer. No nav CTA on an apply page.
2. **The form is an iframe, built at runtime** — its `src` must be assembled in
   the browser, because the query string depends on cookies and the current URL.
   Don't hard-code it into server-rendered HTML. Keep `width=100%`,
   `min-height:1000px`, `border:none`, a meaningful `title`, and
   `allow="clipboard-write"`.
3. **Attribution capture on every page.** On load, read the ten tracked params
   from `location.search`; if any are present, merge them into the
   `rm_attribution` cookie (JSON, URL-encoded, 90 days, `path=/`,
   `SameSite=Lax; Secure`, apex `domain=` only on the production hostname so it
   still works on preview domains).
4. **Attribution replay on apply pages.** `URL params ?? cookie` — a fresh click
   always wins over a stored value. Plus `partnerId` and `formType`.
5. **Cross-frame analytics.** A `message` listener that forwards
   `{ type:'RATEMATCH_TRACKING', event, data }` into `window.dataLayer`, flattening
   `data` alongside `event`. Events: `offers_displayed`, `offer_click`,
   `form_complete`.
6. **GTM exactly once per page.** One container, in the document head.
7. **Accordions.** Click toggles: close all (instant, `maxHeight = null`), open
   the clicked one by setting `maxHeight = scrollHeight + 'px'`. FAQ opens its
   first item on load; the footer accordion doesn't.
8. **Head correctness.** Per-page `title`/`description`; `og:title`/
   `og:description` defaulting to them; absolute `og:image`;
   `twitter:card=summary_large_image`; canonical when the page has one.
9. **Legacy redirects** preserved as 301s so existing ads and indexed URLs don't
   dead-end.
10. **No CSS bleed.** If you keep the Webflow pages *and* add Tailwind pages,
    keep the global-stylesheet import out of `_app.tsx` (this is why it's empty
    today) — or scope one of the two.

A useful hybrid: rebuild the **landing** pages in React (they're the ones that
change often) while leaving the **apply** pages as captured Webflow, since they
are thin and their only real logic is the injector script.

### 2.6 Acceptance tests before launch

Run these against a preview deployment.

**Rendering**
- [ ] Every route returns 200 and is styled (a missing/renamed CSS file yields
      unstyled HTML — check `WEBFLOW_CSS`).
- [ ] No 404s in the network tab for `/webflow/*` assets.
- [ ] `<html>` has `data-wf-page`, `data-wf-site` and class `w-mod-js`
      (Route A only).
- [ ] Mobile nav, scroll animations, FAQ accordion and footer accordion all work.
- [ ] No console errors; jQuery loads before the Webflow chunks.

**Form**
- [ ] `#ratematch-form-container` contains exactly one iframe (not zero, not two
      — React 18 StrictMode double-invokes effects in dev; `reactStrictMode` is
      on, so confirm in a production build).
- [ ] The iframe URL carries the correct `partnerId` and `formType`.
- [ ] The form renders full-height without an inner scrollbar on mobile.

**Attribution**
- [ ] Visit `/?gclid=TEST123&utm_source=google` → `rm_attribution` cookie exists
      with both values, 90-day expiry, `Secure`, correct domain.
- [ ] Navigate to the apply page with a clean URL → iframe src still carries
      `gclid=TEST123`.
- [ ] Land directly on `/apply/personal-loan?gclid=DIRECT` → `DIRECT` wins.
- [ ] Cookie domain works on both the production apex and preview domains.

**Analytics**
- [ ] GTM fires once per pageview (Tag Assistant / Preview mode).
- [ ] A simulated `postMessage({type:'RATEMATCH_TRACKING',event:'form_complete',data:{…}})`
      lands in `dataLayer` with the data flattened.
- [ ] Google Ads conversion tags fire on the mapped events.

**SEO / social**
- [ ] Each page has a unique title and description; no HTML entities visible in
      a link preview (test in WhatsApp/Slack/LinkedIn).
- [ ] `og:image` resolves absolutely and is 1200×630.
- [ ] Every legacy URL 301s to a live page; the 404 page is branded.

### 2.7 Gotchas that will cost you an afternoon

- **`WEBFLOW_CSS` is a hard-coded constant** with a content hash in the
  filename. Republish the Webflow site and the hash changes; update it.
- **Script order is load-bearing.** jQuery must resolve before the Webflow
  chunks — that's why `loadExternal` awaits each script and sets `async=false`.
- **GTM de-duplication is a regex** on inline script text. If you paste a GTM
  snippet that doesn't match `googletagmanager.com/gtm.js` or `'gtm.start'`,
  you'll silently double-count.
- **HTML entities in `meta.description`** get escaped a second time by React.
  Store plain text.
- **`w-mod-js`** must be on `<html>` or animated elements can stay hidden.
- **Asset filenames contain spaces and parentheses** and are stored URL-encoded
  in the JSON. Don't "tidy" them without re-encoding.
- **The `@font-face` rules use `../` paths** relative to
  `/webflow/css/`, i.e. they resolve to `/webflow/*.ttf`. Move the CSS and the
  fonts break.
- **`_app.tsx` is empty on purpose.** Adding `import '@/styles/globals.css'`
  will restyle every Webflow page.
- **The iframe has a fixed 1000px height** — it does not auto-resize. If the new
  form is taller, adjust `height`/`min-height`, or add a `postMessage`-driven
  resize handler on both sides.
- **`partnerId=CC001` is an identity, not a config default.** Ship a new brand
  with its own id.
- **Purpose tiles are hand-linked.** After cloning a landing page, grep the JSON
  for the old `href` before shipping.
- **`data-wf-page` ids are per-Webflow-site.** Mixing JSON captured from one
  Webflow project with `webflow*.js` from another breaks interactions.

### 2.8 Local development

```bash
npm install
npm run dev          # http://localhost:3000  (next dev --turbopack)
npm run build        # always verify a production build before shipping
npm run lint
```

Handy checks:

```bash
# outline a captured page's sections
python3 -c "import json,re;h=json.load(open('src/webflow/index.json'))['bodyHtml'];\
print('\n'.join(m.group(0)[:90] for m in re.finditer(r'<(section|header|footer)[^>]*>',h)))"

# find brand colours that bypass the CSS tokens
grep -io '#1e2556\|#ff7f35' src/webflow/*.json | sort | uniq -c

# list every link on a page
python3 -c "import json,re;print(sorted(set(re.findall(r'href=\"([^\"]+)\"',\
json.load(open('src/webflow/index.json'))['bodyHtml']))))"
```
