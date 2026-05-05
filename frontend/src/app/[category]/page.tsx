import type { Metadata } from "next";
import { Product } from "@/types";
import ProductListClient from "./ProductListClient";

// API base URL - use environment variable or default to local backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api";

// Category metadata
const categoryMeta: Record<string, { title: string; description: string }> = {
  fruits: {
    title: "Fresh Fruits",
    description: "Shop fresh seasonal fruits delivered across Pune. Handpicked for quality and taste.",
  },
  jams: {
    title: "Homemade Jams",
    description: "Discover our range of homemade jams made from fresh fruits. Perfect for breakfast and desserts.",
  },
  boxes: {
    title: "Fruit Boxes",
    description: "Explore our curated fruit boxes for gifting and personal consumption.",
  },
  cut_fruits: {
    title: "Fresh Cut Fruits",
    description: "Get fresh cut fruits delivered to your doorstep. Ready to eat and healthy.",
  },
};

// SEO: Dynamic metadata based on category
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category] || { title: category.replace("_", " "), description: `Shop ${category.replace("_", " ")} at Fruitful Box` };

  return {
    title: `${meta.title} in Pune | Fruitful Box`,
    description: `${meta.description} Quick WhatsApp ordering and delivery across Pune.`,
    openGraph: {
      title: `${meta.title} in Pune | Fruitful Box`,
      description: meta.description,
      type: "website",
    },
  };
}

// Server-side data fetching
async function getProducts(category: string): Promise<Product[]> {
  try {
    console.log(`Fetching products url: ${API_BASE_URL}/${category}`);
    const res = await fetch(`${API_BASE_URL}/${category}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    console.log('response status:', res);
    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status}`);
      return [];
    }

    const data = await res.json();
    console.log(`data for category "${category}":`, data);
    return data?.docs || data || [];
  } catch (error) {
    console.error(`Error fetching products for category "${category}":`, error);
    return [];
  }
}

// Server Component
export default async function ProductListPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const products = await getProducts(category);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: categoryMeta[category]?.title || category,
            description: categoryMeta[category]?.description || "",
            numberOfItems: products.length,
          }),
        }}
      />
      <ProductListClient initialProducts={products} category={category} />
    </>
  );
}
