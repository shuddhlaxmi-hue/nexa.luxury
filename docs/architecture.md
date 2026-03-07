# Project Architecture - Nexa.luxury

## Tech Stack
- **Frontend**: HTML5, Vanilla JavaScript.
- **Styling**: SCSS (compiled to CSS).
- **Build Tool**: ESBuild (for JavaScript bundling and minification) and SASS (for CSS compilation).
- **Deployment**: Netlify (via netlify.toml).
- **Automation**: NPM scripts for building, serving, and SEO generation.

## Directory Structure
- `/root`: Configuration files (`package.json`, `netlify.toml`, `robots.txt`, `sitemap.xml`, `llms.txt`).
- `/index.html`: Main entry point.
- `/css`: Compiled production styles.
- `/scss`: Source styles.
- `/js`: Source JavaScript.
- `/dist`: Production JS bundles.
- `/assets`: Images, icons, and other static assets.
- `/scripts`: Shell scripts for build tasks (sitemap, robots).
- `/docs`: Project documentation and release notes.

## SEO Strategy
- **Traditional**: Meta tag optimization, canonical URLs, semantic HTML.
- **Modern**: JSON-LD Structured Data for Educational Organization and Cryptocurrency information.
- **AI-Focused**: `llms.txt` file at root to guide LLMs and AI crawlers to the most relevant information.

## Animations
- Custom canvas-based Starfield background.
- CSS-based micro-animations and transitions.
