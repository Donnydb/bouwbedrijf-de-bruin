// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ⚠️ Pas `site` aan naar je definitieve productie-URL vóór deploy.
// Deze waarde wordt gebruikt voor canonical tags, sitemap, robots.txt en JSON-LD.
const SITE = 'https://www.bouwbedrijfdebruin.nl';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Schone URL-structuur met sluitende slash: /diensten/sierpleister/
  trailingSlash: 'always',
  build: {
    // /diensten/sierpleister/index.html  →  schone URL /diensten/sierpleister/
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      // Alle pagina's wekelijks; pas changefreq/priority gerust aan.
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Houd noindex-pagina's (bedankt/404) uit de sitemap.
      filter: (page) => !page.includes('/bedankt') && !page.includes('/404'),
    }),
  ],
  vite: {
    // @ts-ignore - bekende vite-type duplicatie tussen Astro en de Tailwind-plugin
    plugins: [tailwindcss()],
  },
});
