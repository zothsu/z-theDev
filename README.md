# Accessible Portfolio for Z-theDev

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)  &nbsp; &nbsp;[![accessible-astro-starter](https://img.shields.io/badge/Theme-Accessible_Asto-brightgreen.svg?style=for-the-badge)](https://accessible-astro.incluud.dev/)

Accessibility focused portfolio with SEO integration.ormance.

## Tools and Technologies

- Deployed with Hostinger
- Astro 5+
  - Tailwind CSS
  - Prettier integration with `prettier-plugin-astro` and `prettier-plugin-tailwind`
  - ESLint integration with strict accessibility settings for `eslint-plugin-jsx-a11y`
  - Markdown and MDX support
  - Uses [astro-icon](https://www.astroicon.dev/getting-started/) package for the icons

Accessiblity Features

- Accessible landmarks such as `header`, `main`, `footer`, `section` and `nav`
- Outline focus indicator which works on dark and light backgrounds
- Several `aria` attributes which provide a better experience for screen reader users
- `[...page].astro` and `[post].astro` demonstrate the use of dynamic routes and provide a basic blog with breadcrumbs and pagination
- `SkipLinks.astro` component to skip to either the main menu or the main content
- `Navigation.astro` component with keyboard accessible (dropdown) navigation (arrow keys, escape key)
- `ResponsiveToggle.astro` component with an accessible responsive toggle button for the mobile navigation
- `DarkMode.astro` component toggle with accessible button and a user system preferred color scheme setting
- `SiteMeta.astro` SEO component for setting custom meta data on different pages
- `.sr-only` utility class for screen reader only text content (hides text visually)
- `prefers-reduced-motion` disables animations for users that have this preference turned on
- Ships with many components such as Accordions, Breadcrumbs, Modals, Pagination [and many more](https://accessible-astro-starter.incluud.dev/accessible-components/)
- A collection of utility classes such as breakpoints, button classes, font settings, resets and outlines in `src/assets/scss/base`
- Astro's View Transitions

## Getting started

Clone this theme locally and run any of the following commands in your terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
