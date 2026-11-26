import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const STATIC_PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/places/', priority: 0.9, changefreq: 'monthly' },
  { path: '/experiences/', priority: 0.9, changefreq: 'monthly' },
  { path: '/passport/', priority: 0.8, changefreq: 'monthly' },
  { path: '/stories/', priority: 0.8, changefreq: 'weekly' },
  { path: '/about/', priority: 0.7, changefreq: 'monthly' },
  { path: '/careers/', priority: 0.5, changefreq: 'monthly' },
  { path: '/press/', priority: 0.5, changefreq: 'monthly' },
  { path: '/privacy/', priority: 0.2, changefreq: 'yearly' },
  { path: '/cookies/', priority: 0.2, changefreq: 'yearly' },
];

export const GET: APIRoute = async ({ site }) => {
  const base = site!.toString().replace(/\/$/, '');
  const stories = await getCollection('stories', ({ data }) => !data.draft);
  const day = (d: Date) => d.toISOString().split('T')[0];
  const newestStory = stories.length ? day(new Date(Math.max(...stories.map((s) => s.data.date.getTime())))) : undefined;
  // lastmod only where the date is real: a build date on every page teaches crawlers to ignore it
  const urls: { loc: string; lastmod?: string; priority: number; changefreq: string }[] = [
    ...STATIC_PAGES.map((p) => ({
      loc: `${base}${p.path}`,
      lastmod: p.path === '/stories/' ? newestStory : undefined,
      priority: p.priority,
      changefreq: p.changefreq,
    })),
    ...stories.map((s) => ({
      loc: `${base}/stories/${s.id}/`,
      lastmod: day(s.data.date),
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
${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ''}    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
