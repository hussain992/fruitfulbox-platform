// app/sitemap.xml/route.ts

import fruits from '@/lib/fruits.json'; 
import jams from '@/lib/jams.json';
import cutFruits from '@/lib/cut_fruits.json';
import boxes from '@/lib/boxes.json'; 
import type { MetadataRoute } from 'next'

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fruitfulbox.vercel.app'; // Replace with real domain or use env

  const staticRoutes = ['', '/fruits', '/cut_fruits', '/jams', '/boxes'];
  // const productArr = fruits.map(key => ({ key: key, value: fruits }));
  const fruitsRoutes = fruits.map(
    (product) => `/fruits/${product.slug}`
  );
  const jamsRoutes = jams.map(
    (product) => `/jams/${product.slug}`
  );
  const cutFruitsRoutes = cutFruits.map(
    (product) => `/cutFruits/${product.slug}`
  );
  const boxesRoutes = boxes.map(
    (product) => `/boxes/${product.slug}`
  );

  const urls = [...staticRoutes, ...fruitsRoutes, ...jamsRoutes, ...cutFruitsRoutes, ...boxesRoutes];

  return urls.map((url) => ({
    url: `${baseUrl}${url}`,
  }));
}
