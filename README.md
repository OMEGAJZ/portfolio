# Portfolio & Consulting Website

Personal portfolio and consulting website of Justin Zacharias — Business
Intelligence & Data Engineering Consultant.

**Live:** https://omegajz.github.io/portfolio

## Tech stack

[Astro](https://astro.build) · TypeScript · [Tailwind CSS](https://tailwindcss.com)

Static site generation with zero client-side JavaScript, deployed to GitHub
Pages via GitHub Actions.

## Development

Requires Node 22 (see [`.nvmrc`](./.nvmrc)).

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site locally
npm run check    # Astro + TypeScript diagnostics
```

## Deployment

Pushing to `main` builds the site and publishes it to GitHub Pages
(see [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)).
