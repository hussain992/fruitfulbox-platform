"use client";
import ServiceNotice from "@/components/ServiceNotice";
import ProductCard from "@/components/ProductCard";
import { ProductGridSkeleton } from "@/components/ProductCardSkeleton";
import { use } from "react";
import { Product } from "@/types";
import { useCachedData } from "@/hooks/useCachedData";

const ProductListPage: React.FC<{
  params: Promise<{ category: string; slug: string }>;
}> = ({ params }) => {
  const resolvedParams = use(params);
  const { category } = resolvedParams;
  const { data: products, isLoading: isProductsLoading } = useCachedData(`${category}`);
  const safeProducts: Product[] = Array.isArray(products) ? products : [];

  // Filter available products and sort by updatedAt (newest first)
  const availableProducts = safeProducts
    .filter((item: Product) => item.isAvailable)
    .sort((a, b) => {
      const dateA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const dateB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      return dateB - dateA; // Descending order (newest first)
    });

  return (
    <>
      <ServiceNotice />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          {category.toUpperCase().replace("_", " ")}
        </h1>
        {isProductsLoading && <ProductGridSkeleton />}
        {!isProductsLoading && (
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
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
