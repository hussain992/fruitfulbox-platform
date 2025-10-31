import ProductDetails from '@/components/ProductDetails';
import { getProductsByCategory } from '@/lib/utils';
import { use } from 'react';

import type { Metadata } from 'next'
 
type Props = {
  params: Promise<{ category: string, slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const products = await getProductsByCategory(category);

  const product = products.find((p: {slug: string}) => p.slug === slug);
  // console.log('product in metadata ', product);
  return {
    title: product.title,
    alternates: {
      canonical: `https://fruitfulbox.vercel.app/${category}/${slug}`,
    },
    description: product.seo?.description,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}
 
const ProductDetailPage: React.FC<{ params: Promise<{ category: string, slug: string }> }> = ({
  params
}) => {
  const resolvedParams = use(params);
  const { category, slug } = resolvedParams;
  const products = use(getProductsByCategory(category));

  const product = products.find((p: {slug: string}) => p.slug === slug);
  // if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;