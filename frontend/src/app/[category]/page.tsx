'use client';
import ServiceNotice from "@/components/ServiceNotice";
import ProductCard from "@/components/ProductCard";
import { ProductGridSkeleton } from "@/components/ProductCardSkeleton";
import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { Product } from "@/types";
import { useCachedData } from "@/hooks/useCachedData";
// import { getProductsByCategory } from "@/lib/utils";

const ProductListPage: React.FC<{
  params: Promise<{ category: string; slug: string }>;
}> = ({ params }) => {
  const resolvedParams = use(params);
  const { category } = resolvedParams;
  // const products = use(getProductsByCategory(category));
  // const [products, setProducts] = useState<Product[]>();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isInvalidCategory, setIsInvalidCategory] = useState(false);
  // const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data: products, isLoading: isProductsLoading } = useCachedData(`${category}`);
  const safeProducts: Product[] = Array.isArray(products) ? products : []; 

  //  useEffect(() => {
  //   if (category) {
  //     // setIsLoading(true);
  //     setIsInvalidCategory(false);
  //     console.log('going if');
  //     // fetch(`${apiBaseUrl}/${category}`)
  //       // .then((res) => {
  //       //   if (!res.ok) {
  //       //     setIsInvalidCategory(true);
  //       //     setIsLoading(false);
  //       //     return null;
  //       //   }
  //       //   return res.json();
  //       // })
  //       // .then((data) => {
  //       //   if (data && Array.isArray(data)) {
  //       //     setProducts(data);
  //       //   } else {
  //       //     setIsInvalidCategory(true);
  //       //   }
  //       //   setIsLoading(false);
  //       // })
  //       // .catch((error) => {
  //       //   console.error("Error fetching fruits:", error);
  //       //   setIsInvalidCategory(true);
  //       //   setIsLoading(false);
  //       // });
  //   }
  // }, [category]);

  // if (isInvalidCategory) {
  //   notFound();
  // }
  // const product = products.find((p: { slug: string }) => p.slug === slug);
  // if (!product) return <div>Product not found.</div>;
  // console.log("this.page called", resolvedParams);
  console.log("products", products);

  // const sortedProducts = products.sort((a: { isAvailable: boolean; }, b: { isAvailable: boolean; }) =>
  //   Number(b.isAvailable) - Number(a.isAvailable))
  // interface Params {
  //   category: string;
  //   slug: string;
  // }

  const availableProducts = safeProducts.length > 0 ? safeProducts.filter((item: Product) => item.isAvailable) : [];
  return (
    <>
      <ServiceNotice />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {category.toUpperCase().replace("_", " ")}
        </h1>
        {isProductsLoading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {availableProducts?.map((product: Product) => (
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
        )}
      </main>
    </>
  );
};
export default ProductListPage;
