import Image from "next/image";
import Link from "next/link";
// import { ProductTag } from "./ProductTag";

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  slug?: string; // Optional prop for slug
  price?: string; // Optional prop for type
  isAvailable?: boolean; // Optional prop for availability
  // price: {
  //   original: string;
  //   discounted?: string;
  // };
}

export default function ProductCard({
  image,
  title,
  description,
  slug,
  isAvailable,
}: ProductCardProps) {
  // const imgWidth = type === 'full'? 300: 200; // Set a fixed width for the image
  // const imgHeight = type === 'full'? 300: 200;; // Set a fixed height for the image
  console.log('isAvailable === false',isAvailable === false, isAvailable)
  return (
    <Link href={`/products/${slug}`}>
      <div className="bg-lime-100 p-3 mx-0 md:p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-amber-100">
        {/* <Image src={image} alt={title} 
      fill
      className="object-cover rounded-xl"
      sizes="(max-width: 768px) 100vw, 33vw"
      priority/> */}

        {/* // className=" sm:h-45 lg:h-50 mx-auto mb-4" width={imgWidth} height={imgHeight} /> */}
        <div className="relative w-full aspect-1/1 overflow-hidden rounded-xl mb-2 sm:mb-4">
          {/* <ProductTag label="Best Seller" color="green" /> */}

          {isAvailable === false && <span className="absolute top-2 right-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded shadow-md z-10">
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
        <h3 className=" text-md md:text-lg font-bold line-clamp-2 h-12 sm:h-13">
          {title}
        </h3>
        {description && (
          <p className="text-md text-gray-700 line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  );
}
