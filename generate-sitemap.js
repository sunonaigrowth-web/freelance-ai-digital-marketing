const fs = require('fs');

const baseURL =
'https://sunonaigrowth-web.github.io/freelance-ai-digital-marketing';

const pages = [
  '',
];

const urls = pages.map(page => `
  <url>
    <loc>${baseURL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.0</priority>
  </url>
`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemap);

console.log('Sitemap generated');
