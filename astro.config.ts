import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// --- Deployment configuration -------------------------------------------
// Deployed as a GitHub Pages *project page*: https://<user>.github.io/<repo>
//
// When you later move to a custom domain:
//   1. set SITE_URL to 'https://your-domain.tld'
//   2. set BASE_PATH to '/'
//   3. add `public/CNAME` containing your domain
//   4. update the Sitemap line in public/robots.txt
const GITHUB_USER = 'omegajz';
const REPO_NAME = 'portfolio';

const SITE_URL = `https://${GITHUB_USER}.github.io`;
const BASE_PATH = `/${REPO_NAME}`;
// ------------------------------------------------------------------------

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // With a `base` path Astro emits the home route both with and without a
      // trailing slash; keep the first form of each URL so the sitemap has no
      // duplicate entries.
      filter: (() => {
        const seen = new Set<string>();
        return (page: string) => {
          const normalised = page.replace(/\/$/, '');
          if (seen.has(normalised)) return false;
          seen.add(normalised);
          return true;
        };
      })(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
