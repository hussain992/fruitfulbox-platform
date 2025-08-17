// import jamsData from '@/lib/jams.json';
import ProductDetails from '@/components/ProductDetails';
import { getProductsByCategory } from '@/lib/utils';
import { use } from 'react';

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