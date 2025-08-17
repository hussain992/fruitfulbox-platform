// import jamsData from '@/lib/jams.json';
import ProductDetails from '@/components/ProductDetails';
import fs from 'fs';
import path from 'path';

const ProductDetailPage = async ({
  params,
}: {
  params: { category: string; slug: string };
}) => {
  console.log('this.page called',params);
  const { category, slug } = params;
  const filePath = path.join(process.cwd(), 'src', 'lib', `${category}.json`);
  let products = [];
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    products = JSON.parse(fileContents);
  } catch (e) {
    console.error(`Error reading file for category ${category}:`, e);
    return <div>Category not found.</div>;
  }

  const product = products.find((p: {slug: string}) => p.slug === slug);
  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;