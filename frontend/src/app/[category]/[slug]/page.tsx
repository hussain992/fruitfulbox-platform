import ProductDetails from '@/components/ProductDetails';
// import { getProductsByCategory } from '@/lib/utils';
import type { Metadata } from 'next'
import {use} from 'react';
type Props = {
  params: Promise<{ category: string, slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  try {
    const res = await fetch(`${apiBaseUrl}/products/${slug}`);
    if (!res.ok) {
      return {
        title: "Product not found | Fruitful Box",
        description: "This product does not exist on Fruitful Box.",
      };
    }

    const data = await res.json();
    const product = Array.isArray(data) ? data[0] : data;

    if (!product) {
      return {
        title: "Product not found | Fruitful Box",
        description: "This product does not exist on Fruitful Box.",
      };
    }

    return {
      title: `${product.title} – Buy Now | Fruitful Box`,
      description: `Buy fresh ${product.title} online in Pune. ${product.description}`,
      alternates: {
        canonical: `https://fruitfulbox.vercel.app/${category}/${slug}`,
      },
      openGraph: {
        title: `${product.title} – Fruitful Box`,
        description: `Order premium ${product.title} now via WhatsApp in Pune. ${product.description}`,
        images: [
          {
            url: `https://fruitfulbox.vercel.app${product.image}`,
            width: 1200,
            height: 630,
          },
        ],
        siteName: "Fruitful Box",
        url: `https://fruitfulbox.vercel.app/${category}/${slug}`,
        type: "website",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: slug,
      alternates: {
        canonical: `https://fruitfulbox.vercel.app/${category}/${slug}`,
      },
    };
  }
}
 
const ProductDetailPage: React.FC<{ params: Promise<{ category: string, slug: string }> }> = ({
  params
}) => {
  const resolvedParams = use(params);
  const { category, slug } = resolvedParams;
  // const products = use(getProductsByCategory(category));

  // const product = products.find((p: {slug: string}) => p.slug === slug);
  return (
    <div>
      <ProductDetails category={category} slug={slug}/>
    </div>
  );
};

export default ProductDetailPage;