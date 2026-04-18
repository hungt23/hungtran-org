# hungtran.org — Claude Code context

## Stack
- **Hugo** static site generator (v0.152.2+)
- **Theme**: PaperMod (in `themes/PaperMod/`) — used for blog/projects/consulting sub-pages
- **Home page**: Custom React SPA (`layouts/index.html`) — does NOT use PaperMod

## Home page architecture
The home page is a fully standalone React single-page app:

- `layouts/index.html` — complete HTML shell (no Hugo base template)
- `static/js/content.jsx` — all data: projects, blog posts, books, quick facts
- `static/js/components.jsx` — React components (Header, Hero, sections, Footer, hooks)
- `static/js/app.jsx` — App root, TweaksPanel, ReactDOM.createRoot
- `static/css/site.css` — component styles (imports colors_and_type.css)
- `static/css/colors_and_type.css` — design tokens: ocean color palette, typography, spacing

React is loaded via unpkg CDN (UMD build). JSX is compiled in-browser via Babel standalone.
No build step required — `hugo` builds the whole site.

## Design system
Ocean palette: `--midnight` (#0a2540) → `--shore` (#f5f9fb)
Fonts: Fraunces (serif), Inter (sans), JetBrains Mono — loaded via Google Fonts
Accent color is runtime-configurable via the Tweaks panel (amber/coral/kelp/tide)

## Images
All in `static/images/`:
- `profile.jpg` — profile photo
- `ocean_banner.jpeg` — hero banner
- `bathymetric_lines.png` — decorative background (editorial hero mode)
- `logomark.svg` / `logomark_light.svg` — site logo

## Build
```
hugo           # dev build
hugo --minify  # production build
hugo server    # local dev server at localhost:1313
```

## Content to update
- Blog posts and books live in `static/js/content.jsx` (not Hugo markdown)
- Hugo markdown pages (`content/blog/`, `content/projects/`) are separate from the SPA home
- The home page Writing section shows placeholder posts — link to real blog posts when ready
