'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  slug?: string;
  isAvailable?: boolean;
  category: string;
  price: {
    original: string;
    discounted?: string;
  };
  buttonText?: string;
}

export default function ProductCard({
  image,
  title,
  description,
  slug,
  isAvailable,
  category,
  price,
  buttonText
}: ProductCardProps) {
  const href = `/${category}/${slug}`;
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent, isBuyNow: boolean) => {
    const finalHref = isBuyNow 
      ? `${href}?action=buy-now` 
      : href;
    router.push(finalHref);
  };

  const discountPercentage = price.discounted 
    ? Math.round(((parseFloat(price.original.replace('₹', '').replace(/,/g, '')) - parseFloat(price.discounted.replace('₹', '').replace(/,/g, ''))) / parseFloat(price.original.replace('₹', '').replace(/,/g, ''))) * 100)
    : null;

  return (
    <div 
      onClick={(e) => handleNavigation(e, false)}
      className="cursor-pointer h-full group"
    >
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        
        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Discount Badge */}
          {discountPercentage && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              -{discountPercentage}%
            </div>
          )}

          {/* Out of Stock Badge */}
          {isAvailable === false && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                Out of Stock
              </span>
            </div>
          )}

          {/* Product Image */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />

        </div>

        {/* Content Container */}
        <div className="p-4 md:p-5 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-green-600 transition-colors">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {description}
            </p>
          )}

          {/* Pricing */}
          {price && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg md:text-xl font-bold text-gray-900">
                {price.discounted || price.original}
              </span>
              {price.discounted && (
                <span className="text-sm text-gray-500 line-through">
                  {price.original}
                </span>
              )}
            </div>
          )}

          {/* Button */}
          <Button
            disabled={isAvailable === false}
            className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleNavigation(e, true);
            }}
          >
            {isAvailable === false ? "Unavailable" : (buttonText || "Buy Now")}
          </Button>
        </div>
      </div>
    </div>
  );
}
