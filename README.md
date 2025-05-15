# z-theDev.xyz

[![Deployment Status](https://github.com/zothsu/z-thedev.xyz/actions/workflows/deploy.yml/badge.svg)](https://github.com/zothsu/z-thedev.xyz/actions/workflows/deploy.yml) &nbsp; &nbsp;
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build) &nbsp; &nbsp;
[![Accessible Astro Starter](https://img.shields.io/badge/Theme-Accessible_Astro-brightgreen.svg?style=for-the-badge)](https://accessible-astro.incluud.dev/)

> A fast, accessible, and SEO-friendly personal portfolio built with Astro and deployed via GitHub Actions.

**z-thedev.xyz** is the online home of Z — a full-stack developer focused on building thoughtful, performant, and inclusive web experiences.

---

## Table of Contents

- [Background](#background)
- [Features](#features)
  - [Accessibility Features](#accessibility-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Accessibility](#accessibility)
- [Maintainers](#maintainers)
- [License](#license)

---

## Background

This project began as a fork of [accessible-astro-starter](https://accessible-astro.incluud.dev/), modified to reflect my own identity, skills, and current work. The goal is to share my work in an environment that respects user access, performance, and developer joy.

---

## Features

- Static site generation using [Astro](https://astro.build)
- Styling with [Tailwind CSS](https://tailwindcss.com) + [SCSS](https://sass-lang.com/)
- MDX for flexible content authoring
- Deployed securely over SSH via GitHub Actions
- SEO-focused metadata and components
- [Dark mode support](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- Responsive navigation

### Accessibility Features

- Accessible landmarks such as `header`, `main`, `footer`, `section`, and `nav`
- Outline focus indicator that works on both dark and light backgrounds
- Several `aria` attributes to enhance screen reader experiences
- `[...page].astro` and `[post].astro` demonstrate dynamic routes with breadcrumbs and pagination
- `SkipLinks.astro` component to skip to the main menu or main content
- `Navigation.astro` component with keyboard-accessible dropdowns (arrow keys, escape key)
- `ResponsiveToggle.astro` for accessible mobile navigation toggling
- `DarkMode.astro` with system preference detection and accessible toggle button
- `SiteMeta.astro` for custom SEO metadata per page
- `.sr-only` utility class for screen-reader-only content
- `prefers-reduced-motion` support disables animations when requested
- Includes components like Accordions, Breadcrumbs, Modals, Pagination, and more
- Utility SCSS classes for breakpoints, buttons, fonts, resets, and outlines
- Astro View Transitions enabled

---

## Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com), [SCSS](https://sass-lang.com/)
- **Content:** Markdown, MDX
- **Accessibility:** Accessible Astro Components
- **CI/CD:** GitHub Actions
- **Deployment:** Hostinger via SSH
- **Tooling:** ESLint, Prettier, Astro Icons

---

## Getting Started

git clone https://github.com/zothsu/z-thedev.xyz.git  
cd z-thedev.xyz  
npm install  
npm run dev       # Start dev server at localhost:4321  
npm run build     # Build for production  
npm run preview   # Preview the production build  

---

## Accessibility

This site was built with accessibility first. It follows WCAG AA principles and includes skip links, semantic structure, responsive keyboard navigation, ARIA support, reduced motion preferences, and more.

---

## Maintainers

[@z-theDev](https://github.com/zothsu)

---

## License

[MIT](LICENSE)
