"use client";

import Image from "next/image";

interface ProductImageProps {
  image: string;
  title: string | undefined;
  category: string | undefined;
}

export default function ProductImage({ image, title, category }: ProductImageProps) {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--color-card)] shadow-lg">
      <Image
        src={image}
        alt={title ?? "Product Image"}
        fill
        className="object-cover"
        priority
      />
      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[var(--color-muted-foreground)] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm capitalize">
            {category}
          </span>
        </div>
      )}
    </div>
  );
}