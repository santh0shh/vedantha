import { generateSitemap } from './generate-sitemap.mjs'

/** Regenerate sitemap.xml before Vite copies public/ to dist/. */
export function sitemapPlugin() {
  return {
    name: 'vite-plugin-sitemap',
    buildStart() {
      const { lastmod } = generateSitemap()
      console.log(`[sitemap] lastmod set to ${lastmod}`)
    },
  }
}
