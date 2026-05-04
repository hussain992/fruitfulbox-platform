// app/sitemap.xml/route.ts

import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fruitfulbox.vercel.app'; // Replace with real domain or use env

  const staticRoutes = ['', '/fruits', '/cut_fruits', '/jams', '/boxes'];

  // Dynamic data fetching from API
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api';

  try {
    // Fetch all products from different categories
    const [fruitsRes, jamsRes, cutFruitsRes, boxesRes] = await Promise.all([
      fetch(`${apiBaseUrl}/fruits`),
      fetch(`${apiBaseUrl}/jams`),
      fetch(`${apiBaseUrl}/cut_fruits`),
      fetch(`${apiBaseUrl}/boxes`)
    ]);

    // Parse responses and extract slugs
    const fruits = fruitsRes.ok ? await fruitsRes.json() : [];
    const jams = jamsRes.ok ? await jamsRes.json() : [];
    const cutFruits = cutFruitsRes.ok ? await cutFruitsRes.json() : [];
    const boxes = boxesRes.ok ? await boxesRes.json() : [];

    // Generate dynamic routes for each category
    const fruitsRoutes = fruits
      .filter((product: any) => product.slug)
      .map((product: any) => `/fruits/${product.slug}`);

    const jamsRoutes = jams
      .filter((product: any) => product.slug)
      .map((product: any) => `/jams/${product.slug}`);

    const cutFruitsRoutes = cutFruits
      .filter((product: any) => product.slug)
      .map((product: any) => `/cut_fruits/${product.slug}`);

    const boxesRoutes = boxes
      .filter((product: any) => product.slug)
      .map((product: any) => `/boxes/${product.slug}`);

    const urls = [...staticRoutes, ...fruitsRoutes, ...jamsRoutes, ...cutFruitsRoutes, ...boxesRoutes];

    return urls.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: url === '' ? 1.0 : 0.8,
    }));
  } catch (error) {
    console.error('Error fetching sitemap data:', error);

    // Fallback to static routes if API fails
    return staticRoutes.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: url === '' ? 1.0 : 0.8,
    }));
  }
}
