'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
// import Link from "next/link";
import { Button } from "./ui/button";
// import { ProductTag } from "./ProductTag";

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  slug?: string; // Optional prop for slug
  // price?: string; // Optional prop for type
  isAvailable?: boolean; // Optional prop for availability
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

  // href={{
  //         // The destination page, e.g., /product/details/[id] or just /product-details
  //         // In the App Router, you can use a simple string for the pathname
  //         pathname: `/product/${productId}`, 
  //         // The 'query' object holds your extra parameters
  //         query: { 
  //           action: buyNowAction,
  //           source: 'homepage_sale'
  //         },
  //       }}
  const router = useRouter();
  const handleNavigation = (e: React.MouseEvent, isBuyNow: boolean) => {
  // If buyNow is true, append the query param
  const finalHref = isBuyNow 
    ? `${href}?action=buy-now` 
    : href;

  router.push(finalHref);
};
  return (
    // <Link rel="canonical" href={href}>
    <div 
    onClick={(e) => handleNavigation(e, false)} // Default card click
    className="cursor-pointer">
      <div className="bg-lime-100 p-1 md:p-3 mx-0 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-amber-100">
      
        <div className="relative w-full aspect-1/1 overflow-hidden rounded-xl mb-2 sm:mb-4">
          {/* <ProductTag label="Best Seller" color="green" /> */}
          {isAvailable === false && <span className="absolute top-0 right-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded shadow-md z-10">
            Out of Stock
          </span>}
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <h3 className=" text-md md:text-lg font-bold line-clamp-1">
          {title}
        </h3>
        {description && (
          <p className="text-md text-gray-700 line-clamp-2">{description}</p>
        )}
        {price && (
          <p className="text-md font-semibold mt-1 pl-3">
            {price.discounted ? (
              <>
                <span>{price.discounted}</span>
                <span className="line-through text-gray-500 mr-2 text-xs pl-2">
                  {price.original}
                </span>
              </>
            ) : (
              <>₹{price.original}</>
            )}
          </p>
        )}
        <Button disabled={isAvailable === false} className="mt-2 text-lime-700 ml-3" 
          variant={"outline"}
          onClick={(e) => {
        e.stopPropagation(); // Prevents the card's onClick from firing twice
        handleNavigation(e, true); // Specific "Buy Now" click
      }}
          >
          {isAvailable === false ? "Unavailable" : buttonText || "Buy Now"}  
        </Button>
      </div>
      </div>
    // {/* </Link> */}
  );
}
