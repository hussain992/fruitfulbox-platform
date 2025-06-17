// app/sitemap.xml/route.ts

import { productData } from '../../lib/products'; // adjust as per your path

export async function GET() {
  const baseUrl = 'https://fruitfulbox.vercel.app'; // Replace with real domain or use env

  const staticRoutes = ['', '/products', '/about'];
const productArr = (Object.keys(productData) as Array<keyof typeof productData>).map(key => ({ key: key, value: productData[key] }));
  const productRoutes = productArr.map(
    (product) => `/products/${product.value.id}`
  );

  const urls = [...staticRoutes, ...productRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
