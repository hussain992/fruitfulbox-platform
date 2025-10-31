import ServiceNotice from "@/components/ServiceNotice";
import ProductCard from "@/components/ProductCard";
import { use } from "react";
import { getProductsByCategory } from "@/lib/utils";

const ProductListPage: React.FC<{
  params: Promise<{ category: string; slug: string }>;
}> = ({ params }) => {
  const resolvedParams = use(params);
  const { category } = resolvedParams;
  const products = use(getProductsByCategory(category));

  // const product = products.find((p: { slug: string }) => p.slug === slug);
  // if (!product) return <div>Product not found.</div>;
  // console.log("this.page called", resolvedParams);
  console.log("products", products);

  // const sortedProducts = products.sort((a: { isAvailable: boolean; }, b: { isAvailable: boolean; }) =>
  //   Number(b.isAvailable) - Number(a.isAvailable))
  interface Product {
    slug: string;
    title: string;
    image: string;
    isAvailable?: boolean;
    price: {
      original: string;
      discounted?: string;
    };
    buttonText?: string;
  }

  // interface Params {
  //   category: string;
  //   slug: string;
  // }

  const availableProducts: Product[] = (products as Product[]).filter(
    (item: Product) => item.isAvailable
  );
  return (
    <>
      <ServiceNotice />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {category.toUpperCase().replace("_", " ")}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {availableProducts.map((product: Product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              title={product.title}
              image={product.image}
              isAvailable={product.isAvailable}
              category={category}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </>
  );
};
export default ProductListPage;
