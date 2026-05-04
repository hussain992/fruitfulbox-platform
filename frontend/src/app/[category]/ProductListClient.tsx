"use client";

import ServiceNotice from "@/components/ServiceNotice";
import ProductCard from "@/components/ProductCard";
import { ProductGridSkeleton } from "@/components/ProductCardSkeleton";
import { Product } from "@/types";
import { useState } from "react";
import Link from "next/link";

interface ProductListClientProps {
  initialProducts: Product[];
  category: string;
}

export default function ProductListClient({
  initialProducts,
  category,
}: ProductListClientProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [isLoading] = useState(false);

  // Client-side filtering and sorting
  const availableProducts = products
    .filter((item: Product) => item.isAvailable)
    .sort((a, b) => {
      const dateA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const dateB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      return dateB - dateA;
    });

  // Category display names
  const categoryTitles: Record<string, string> = {
    fruits: "Fresh Fruits",
    jams: "Homemade Jams",
    boxes: "Fruit Boxes",
    cut_fruits: "Fresh Cut Fruits",
  };

  const categoryDescriptions: Record<string, string> = {
    fruits: "Handpicked seasonal fruits, delivered fresh to your doorstep.",
    jams: "Homemade preserves made from fresh fruits. No artificial preservatives.",
    boxes: "Curated fruit selections perfect for gifting or personal enjoyment.",
    cut_fruits: "Ready-to-eat fresh cut fruits, washed and packed for your convenience.",
  };

  const displayTitle = categoryTitles[category] || category.replace("_", " ");
  const displayDescription = categoryDescriptions[category] || "";

  return (
    <>
      <ServiceNotice />

      {/* Breadcrumb Navigation - Hidden on very small screens */}
      <nav
        className="max-w-6xl mx-auto px-4 pt-4 text-xs sm:text-sm text-[var(--color-muted-foreground)] hidden sm:block"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-brand-700 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-[var(--color-foreground)] font-medium" aria-current="page">
            {displayTitle}
          </li>
        </ol>
      </nav>

      <main className="max-w-6xl mx-auto px-3 sm:px-4 pb-8">
        {/* Category Header */}
        <header className="py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
            {displayTitle}
          </h1>
          {displayDescription && (
            <p className="mt-2 text-sm sm:text-base text-[var(--color-muted-foreground)] max-w-2xl">
            </p>
          )}
        </header>

        {/* Product Count & Sort Info - Mobile optimized */}
        <div className="flex items-center justify-between py-3 border-b border-[var(--color-border)]">
          <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">
            {availableProducts.length}{" "}
            {availableProducts.length === 1 ? "product" : "products"}{" "}
            available
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="mt-4">
            <ProductGridSkeleton />
          </div>
        )}

        {/* Products Grid - Mobile First: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        {!isLoading && (
          <section aria-label="Product list">
            {availableProducts.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-[var(--color-muted-foreground)] text-sm sm:text-base">
                  No products available at the moment.
                </p>
                <p className="text-[var(--color-muted)] text-xs sm:text-sm mt-2">
                  Check back soon for new arrivals!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-4">
                {availableProducts?.map((product: Product) => (
                  <ProductCard
                    key={product.slug}
                    slug={product.slug}
                    title={product.title ?? "Untitled Product"}
                    image={product.image ?? "/placeholder.png"}
                    isAvailable={product.isAvailable}
                    category={category}
                    price={product.price}
                    description={product.description}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
}