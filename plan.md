# Union Park Gardens — Website Build Plan

## Overview

This document is a handoff guide for building out `unionparkgardens.com` — a community history and neighborhood website for Union Park Gardens, Wilmington, Delaware. A working HTML prototype exists (`index.html`) that establishes the visual design, content structure, and tone. The goal is to turn that prototype into a real, maintainable, hosted website.

---

## Project Goals

1. **Primary**: A beautifully designed, historically rich website celebrating the history of UPG — for current residents and anyone interested in the neighborhood's story.
2. **Secondary**: A community hub for events (cleanup days, gatherings) and a photo archive that grows over time as residents contribute.
3. **Tertiary**: A home for UPG-themed merch (print-on-demand, low overhead).

**Not goals (yet):** HOA-style governance tools, forums, paid membership.

---

## Design System

The prototype establishes a design language that must be preserved exactly.

### Typography
- **Display / headings**: Playfair Display (Google Fonts) — weights 400 and 600, italic variant used for emphasis
- **Body / UI**: EB Garamond (Google Fonts) — weights 400 and 500

### Color Palette
```
--stone:      #1a1a18   (primary dark, backgrounds)
--ash:        #2e2e2b
--slate:      #3d3d39
--warm-gray:  #6b6b64   (secondary text)
--light-gray: #a8a89e   (tertiary text, borders)
--parchment:  #d4cfc4   (light text on dark)
--cream:      #ede8de   (headings on dark)
--paper:      #f5f2ec   (primary light background)
```

### Aesthetic Principles
- Minimalist, editorial, archival
- All photography rendered in grayscale (CSS filter), with a subtle color reveal on hover
- Serif typography throughout — no sans-serif
- Generous whitespace; sections breathe
- No gradients except the hero overlay
- Subtle scroll-reveal animations (staggered fade-up)

---

## Site Structure

### Pages

#### 1. Home (`/`)
The prototype covers this page in full. Sections in order:
- **Hero** — full-bleed 1918 general plan map, diagonal pan animation, large title
- **About** — brief intro paragraph, sets the scene
- **Timeline** — six key historical moments (1882 → Today), dark background
- **Photo Archive** — current images, grid layout, grayscale
- **Architecture** — house layouts drawing + explanatory text
- **Community CTA** — get involved, cleanup days, contact

#### 2. History (`/history`)
Long-form narrative history of UPG. Content source: `wilmingtonmemories.com/2020/03/union-park-gardens.html` (already researched — do not copy verbatim, use as reference). Should include:
- Pre-neighborhood history (Union Park, the Quicksteps, the picnic grounds)
- WWI context and the Emergency Fleet Corporation
- John Nolen and the English Garden Suburb movement
- Construction (the scale, the brick shortage, the horses)
- Post-war ownership saga (the auctions, Senator DuPont, the deeds)
- The neighborhood today

#### 3. Archive (`/archive`)
Photo and document archive. Initially seeded with the four existing images. Built to accept community contributions over time.
- Grid layout of images with captions and dates
- Filter by decade or category (Construction, Architecture, Community, Maps)
- Lightbox on click
- "Submit a photo" form (see Content Management below)

#### 4. Architecture (`/architecture`)
Expanded version of the architecture section from the homepage. Could include:
- House type variations (row houses, semi-detached, corner units)
- Ballinger & Perrot drawings
- John Nolen's planning philosophy
- Then/now photo comparisons

#### 5. Community (`/community`)
- Upcoming events (cleanup days, neighborhood gatherings)
- How to get involved
- Link to neighborhood association (unionparkgardens@gmail.com / Rhianon Husmann)
- Simple email signup

#### 6. Merch (`/merch`) *(phase 2)*
- Print-on-demand store — no inventory
- UPG wordmark apparel
- "UPG + Cats" concept (neighborhood cats as characters)
- Recommended platform: Printful or Printify integrated with a simple storefront

---

## Technical Recommendations

### Stack
Keep it simple. This site is primarily static content with light interactivity.

**Recommended: Astro** (astro.build)
- Generates static HTML — fast, no server needed
- Supports Markdown for content (history pages, archive captions)
- Easy to add React/Svelte components where needed (lightbox, form)
- Deploys to Netlify or Vercel for free

**Alternative: plain HTML/CSS/JS** — the prototype already works this way. Fine for v1 if Astro feels like overkill.

### Hosting
- **Netlify** (recommended) — free tier, custom domain, form handling built in, easy deploys from GitHub
- Domain: `unionparkgardens.com` (already registered)

### CMS / Content Management
For a site maintained ~1 hour/week with occasional community contributions:
- **Netlify CMS** (now Decap CMS) — free, Git-based, admin UI at `/admin`
- Allows non-technical collaborators to add photos, edit text, post events
- Content stored as Markdown files in the repo — no database

### Photo Archive
- Images stored in the repo for now (small collection)
- As the archive grows, move to **Cloudinary** (free tier generous) for image hosting + optimization
- Grayscale applied via CSS, not baked into the images — preserves originals

### Forms
- **Netlify Forms** — zero config, handles "Submit a photo" and "Get in touch" 
- Submissions arrive by email; no backend needed

### Analytics
- **Plausible** or **Fathom** — privacy-friendly, no cookie banner needed, ~$9/mo
- Or just use Netlify's basic analytics

---

## Content To Source / Create

| Item | Status | Source |
|------|--------|--------|
| 1918 General Plan map | ✅ Have it | Uploaded |
| Construction panorama (c. 1918–19) | ✅ Have it | Uploaded |
| House layouts drawing | ✅ Have it | Uploaded |
| Modern house photo | ✅ Have it | Uploaded |
| Historical narrative text | ✅ Researched | wilmingtonmemories.com, Wikipedia, LALH |
| Additional construction photos | 🔍 Source needed | Cornell University Library archives |
| John Nolen portrait / drawings | 🔍 Source needed | Cornell / Library of Congress |
| Neighborhood today photos | 📷 Shoot needed | Walk the neighborhood |
| Cat photos | 📷 Shoot needed | The cats |
| Community events info | 📋 Coordinate needed | Rhianon Husmann / neighborhood association |

**Cornell University Library** holds a significant archive of UPG construction photos (cited in multiple sources). Contact: `rareref@cornell.edu` — many may be public domain given the age.

---

## Phase Plan

### Phase 1 — Launch (v1)
*Target: something to show Rhianon and neighbors*

- [ ] Convert prototype to Astro (or ship prototype as-is)
- [ ] Home page complete and polished
- [ ] History page with full narrative
- [ ] Basic archive page with existing 4 images
- [ ] Community page with contact form and association info
- [ ] Deploy to Netlify with custom domain
- [ ] Basic SEO (meta tags, OG image, sitemap)

### Phase 2 — Community
*Target: after first community contact / cleanup day*

- [ ] Photo submission form live
- [ ] Events section with first cleanup day posted
- [ ] Email newsletter signup (Buttondown or Mailchimp free tier)
- [ ] Expanded archive (Cornell photos sourced)
- [ ] Then/now photo comparisons on architecture page

### Phase 3 — Merch & Growth
- [ ] Printful/Printify store integrated
- [ ] UPG + Cats merch designed and live
- [ ] National Register of Historic Places info page (this is an open civic question in the community)

---

## Key Contacts

| Name | Role | Contact |
|------|------|---------|
| Rhianon Husmann | UPG Neighborhood Association | unionparkgardens@gmail.com / (302) 345-5031 |
| Adele Meehan | Former association president, preservation champion | Unknown — ask Rhianon |
| Cornell University Library | Archive of construction photos | rareref@cornell.edu |

---

## Notes on Tone

The site should feel like it was made by someone who lives there and cares — not a civic institution or a real estate marketing page. Writing should be warm, specific, and occasionally surprising. The history is genuinely good; let it speak.

The neighborhood association exists and is active (quarterly Zoom meetings). The site is complementary to them, not a replacement. When in doubt, link to them and credit them.

The cats are real and beloved. They are not a joke. They are a feature.
