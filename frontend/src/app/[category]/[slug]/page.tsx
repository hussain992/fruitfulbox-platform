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
  // const products = await getProductsByCategory(category);

  // const product = products.find((p: {slug: string}) => p.slug === slug);
  // console.log('product in metadata ', product);
  return {
    title: slug,
    alternates: {
      canonical: `https://fruitfulbox.vercel.app/${category}/${slug}`,
    },
    // description: product?.seo?.description ?? undefined,
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
  // const products = use(getProductsByCategory(category));

  // const product = products.find((p: {slug: string}) => p.slug === slug);
  return (
    <div>
      <ProductDetails category={category} slug={slug}/>
    </div>
  );
};

export default ProductDetailPage;