import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const STATIC_PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/places/', priority: 0.9, changefreq: 'monthly' },
  { path: '/experiences/', priority: 0.9, changefreq: 'monthly' },
  { path: '/passport/', priority: 0.8, changefreq: 'monthly' },
  { path: '/stories/', priority: 0.8, changefreq: 'weekly' },
  { path: '/about/', priority: 0.7, changefreq: 'monthly' },
];

export const GET: APIRoute = async ({ site }) => {
  const base = site!.toString().replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];
  const stories = await getCollection('stories', ({ data }) => !data.draft);
  const urls = [
    ...STATIC_PAGES.map((p) => ({ loc: `${base}${p.path}`, lastmod: today, ...p })),
    ...stories.map((s) => ({
      loc: `${base}/stories/${s.id}/`,
      lastmod: s.data.date.toISOString().split('T')[0],
      priority: 0.6,
      changefreq: 'yearly',
    })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
