
const baseUrl = 'https://fruitfulbox.vercel.app'; // Replace with your actual domain

export async function getServerSideProps({ res }) {
  const staticRoutes = [
    '',
    '/products',
  ];

  const productSlugs = [
    'kesar-mango',
    'litchi',
    'sweet-lime',
    'jamun',
    'pear',
    'chickoo',
    'indian-plum',
    // Add more as needed or generate dynamically from product list
  ];

  const dynamicRoutes = productSlugs.map(slug => `/products/${slug}`);

  const urls = [...staticRoutes, ...dynamicRoutes];
  // console.log('Generated URLs for sitemap:', urls);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  // This page is never actually rendered
  return null;
}
