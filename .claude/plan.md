# Plan: Favicon + Community Page Breakout

## 1. Favicon
- Generate a simple text-based "UPG" favicon using an SVG in `public/favicon.svg`
- Use the site's serif display font style, dark on transparent
- Add `<link rel="icon">` to BaseLayout.astro

## 2. Break Community into Sub-Pages

### New Pages
- **`/events`** — Upcoming events list (moved from community page)
- **`/upgna`** — Static info page about the neighborhood association (what it is, how to join, meeting schedule, etc.)
- **`/newsletters`** — Archive of past newsletters (content collection) + the signup form
- **`/contact`** — Contact form (moved from community page)

### Navigation
- "Community" becomes a dropdown in the nav with links to: Events, UPGNA, Newsletters, Contact Us
- Desktop: hover/click dropdown
- Mobile: expandable section in the hamburger menu
- The `/community` URL will redirect or serve as a landing page linking to the sub-pages

### Content Collection
- Add a `newsletters` content collection with schema: `title`, `date`, `description`, `file` (optional PDF link), `url` (optional external link)
- Create a placeholder entry so the page isn't empty

### Files to Create
- `src/pages/events.astro`
- `src/pages/upgna.astro`
- `src/pages/newsletters.astro`
- `src/pages/contact.astro`
- `src/content/newsletters/` directory with a sample entry
- `public/favicon.svg`

### Files to Modify
- `src/components/Nav.astro` — add community dropdown
- `src/components/Footer.astro` — update links
- `src/layouts/BaseLayout.astro` — add favicon link
- `src/pages/community.astro` — convert to landing page or redirect
- `src/styles/global.css` — dropdown styles
