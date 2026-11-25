// Runs after `vite build`. Social apps and some crawlers do not run
// JavaScript, so each public page gets its own HTML file with its own title,
// description and Open Graph tags. Also writes sitemap.xml and robots.txt.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { site } from '../src/config/site.js';
import { demoMeta, pageMeta } from '../src/data/seo.js';
import { publicUrl } from '../src/utils/domains.js';

const dist = path.resolve(import.meta.dirname, '../dist');
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const block = /<!--seo-->[\s\S]*?<!--\/seo-->/;
if (!block.test(template)) throw new Error('SEO markers are missing from dist/index.html');

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function head(route, { title, description }, noindex) {
  const url = publicUrl(route);
  return `<!--seo-->
    <title>${escape(title)}</title>
    <meta name="description" content="${escape(description)}" />
    <meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escape(site.name)}" />
    <meta property="og:locale" content="en_NG" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${site.url}/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <!--/seo-->`;
}

async function writePage(route, meta, noindex) {
  const file = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
  const target = path.join(dist, file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, template.replace(block, () => head(route, meta, noindex)));
}

for (const [route, meta] of Object.entries(pageMeta)) await writePage(route, meta, false);
for (const [route, meta] of Object.entries(demoMeta)) await writePage(route, meta, true);

const urls = Object.keys(pageMeta)
  .map((route) => `  <url><loc>${site.url}${route}</loc></url>`)
  .join('\n');
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
// Demo pages are not blocked here: crawlers must read them to see "noindex".
await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`SEO: ${Object.keys(pageMeta).length + Object.keys(demoMeta).length} pages, sitemap.xml and robots.txt written.`);
