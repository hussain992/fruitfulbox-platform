// app/sitemap.xml/route.ts

import { productData } from '../lib/products'; // adjust as per your path
import type { MetadataRoute } from 'next'

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fruitfulbox.vercel.app'; // Replace with real domain or use env

  const staticRoutes = ['', '/products'];
  const productArr = (Object.keys(productData) as Array<keyof typeof productData>).map(key => ({ key: key, value: productData[key] }));
  const productRoutes = productArr.map(
    (product) => `/products/${product.value.id}`
  );

  const urls = [...staticRoutes, ...productRoutes];

  return urls.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}
