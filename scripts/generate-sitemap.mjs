import { writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const siteUrl = 'https://vedanthasolutions.com'

/** @returns {string} ISO date (YYYY-MM-DD) for sitemap lastmod */
export function getSitemapLastmod() {
  return new Date().toISOString().slice(0, 10)
}

/** Write public/sitemap.xml with today's lastmod. */
export function generateSitemap() {
  const lastmod = getSitemapLastmod()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

</urlset>
`

  const outPath = join(publicDir, 'sitemap.xml')
  writeFileSync(outPath, sitemap, 'utf8')
  return { outPath, lastmod }
}

const isCli = process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))

if (isCli) {
  const { outPath, lastmod } = generateSitemap()
  console.log(`Generated ${outPath} (lastmod: ${lastmod})`)
}
