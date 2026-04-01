"use client";
import boxes from "@/lib/boxes.json";
import cut_fruits from "@/lib/cut_fruits.json";
import jams from "@/lib/jams.json";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { useCachedData } from "@/hooks/useCachedData";
import { ProductGridSkeleton } from "./ProductCardSkeleton";

interface ProductSectionProps {
  title?: string;
  description?: string;
}

export default function ProductSection({
  title,
  description,
}: ProductSectionProps) {
  const category =
    (title?.includes("Fruit Boxes") && "boxes") ||
    (title?.includes("Cut Fruits") && "cut_fruits") ||
    (title?.includes("Jams") && "jams") ||
    (title?.includes("fruits") && "fruits") ||
    "";

  const { data: apiProducts, isLoading: isApiLoading } = useCachedData<
    Product[]
  >(category === "fruits" ? "fruits" : "");

  // console.log('apiProducts in ProductSection ', apiProducts);
  const sourceProducts: Product[] =
    category === "fruits" && apiProducts && apiProducts?.length > 0
      ? apiProducts
      : category === "boxes"
        ? boxes
        : category === "cut_fruits"
          ? cut_fruits
          : category === "jams"
            ? jams
            : [];

  const products = sourceProducts
    .filter((product) => product.isAvailable)
    .filter((product) => (product.tags ?? []).includes("trending"));
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>
        {isApiLoading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                slug={product.slug}
                isAvailable={product.isAvailable}
                category={category}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
