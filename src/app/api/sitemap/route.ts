export async function GET() {
  const baseUrl = 'https://therecherche.co.uk';

  const staticPages = [
    '',
    '/fitted-wardrobes',
    '/sliding-wardrobe-doors',
    '/walk-in-wardrobes',
    '/home-office-storage',
    '/media-tv-units',
    '/home-libraries',
    '/portfolio',
    '/reviews',
    '/about',
    '/contact',
    '/guides',
    '/guides/fitted-wardrobe-design-ideas',
    '/guides/sliding-door-options',
    '/guides/walk-in-wardrobe-planning',
    '/guides/home-office-storage-solutions',
    '/guides/wardrobe-maintenance-care',
    '/faq',
    '/pricing',
    '/process',
    '/areas-covered',
    '/guarantee',
    '/sustainability',
  ];

  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages
    .map((page) => {
      const url = `${baseUrl}${page}`;
      const priority = page === '' ? '1.0' : page.includes('/guides/') ? '0.7' : '0.8';
      const changefreq = page === '' ? 'weekly' : page.includes('/guides/') ? 'monthly' : 'monthly';
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-GB" href="${url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />
  </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}