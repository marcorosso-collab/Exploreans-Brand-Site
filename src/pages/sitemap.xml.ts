import type { APIRoute } from 'astro';

const siteUrl = 'https://exploreans.com';

const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/#pillars', priority: 0.8, changefreq: 'monthly' },
  { url: '/#places', priority: 0.9, changefreq: 'weekly' },
  { url: '/#beyond', priority: 0.8, changefreq: 'monthly' },
  { url: '/#group', priority: 0.7, changefreq: 'monthly' },
];

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
