# Madi Wilkerson — Portfolio

A React + Vite site based on the [Figma portfolio file](https://www.figma.com/design/EGQUmApa6ar1upl8lDi4H9/Portfolio) (dev mode layout: powder blue, ice background, maroon type).

## Run locally

```bash
npm install
npm run dev
```

`npm run build` outputs a static `dist/` folder (set `base` in `vite.config.ts` if you deploy to a subpath, e.g. GitHub Pages).

## Assets

- Image URLs in `src/figmaAssets.ts` come from the Figma MCP export and are **temporary** (about a week). For a permanent site, **export** images from Figma to `public/images/` and point `figmaAssets` (or the components) at those files.
- **Elmer’s Glue video:** add `public/glue-animation.mp4` to enable the project video player, or replace that block with an embed in `ProjectContent.tsx`.
- **About:** update the email, LinkedIn, and Instagram links in `AboutPage.tsx`.

## Structure

- `/` — Work grid, Paula Scher quote, project cards
- `/about` — Bio and contact icons
- `/project/<slug>` — Case study for each class project, with “next” navigation between them