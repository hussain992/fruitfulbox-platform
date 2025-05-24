import Image from "next/image";
import Link from "next/link";
// import { ProductTag } from "./ProductTag";

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  slug?: string; // Optional prop for slug
  price?: string; // Optional prop for type
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
}: ProductCardProps) {
  // const imgWidth = type === 'full'? 300: 200; // Set a fixed width for the image
  // const imgHeight = type === 'full'? 300: 200;; // Set a fixed height for the image
  return (
    <Link href={`/products/${slug}`}>
      <div className="bg-orange-100 p-3 mx-0 md:p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-yellow-200">
        {/* <Image src={image} alt={title} 
      fill
      className="object-cover rounded-xl"
      sizes="(max-width: 768px) 100vw, 33vw"
      priority/> */}

        {/* // className=" sm:h-45 lg:h-50 mx-auto mb-4" width={imgWidth} height={imgHeight} /> */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-4">
          {/* <ProductTag label="Best Seller" color="green" /> */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <h3 className=" text-sm md:text-lg font-bold line-clamp-2 h-10 sm:h-13">
          {title}
        </h3>
        {description && (
          <p className="text-md text-gray-700 line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  );
}
