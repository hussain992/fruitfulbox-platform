"use client";
import ServiceNotice from "@/components/ServiceNotice";
import ProductCard from "@/components/ProductCard";
import { ProductGridSkeleton } from "@/components/ProductCardSkeleton";
import { use } from "react";
// import { notFound } from "next/navigation";
import { Product } from "@/types";
import { useCachedData } from "@/hooks/useCachedData";

const ProductListPage: React.FC<{
  params: Promise<{ category: string; slug: string }>;
}> = ({ params }) => {
  const resolvedParams = use(params);
  const { category } = resolvedParams;
  const { data: products, isLoading: isProductsLoading } = useCachedData(`${category}`);
  const safeProducts: Product[] = Array.isArray(products) ? products : [];

  const availableProducts =
    safeProducts.length > 0
      ? safeProducts.filter((item: Product) => item.isAvailable)
      : [];
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
            {availableProducts.length === 0 && <p>No products available.</p>}{" "}
            {availableProducts?.map((product: Product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                title={product.title ?? "Untitled Product"}
                image={product.image ?? "/placeholder.png"}
                isAvailable={product.isAvailable}
                category={category}
                price={product.price }
                description={product.description}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};
export default ProductListPage;
