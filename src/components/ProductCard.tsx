import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  slug?: string; // Optional prop for slug
  price?: string;
  // price: {
  //   original: string;
  //   discounted?: string;
  // };
}

export default function ProductCard({ image, title, description, slug }: ProductCardProps) {
  const imgWidth = 200; // Set a fixed width for the image
  const imgHeight = 200; // Set a fixed height for the image
  return (
    <Link href={`/products/${slug}`}>
    <div className="bg-orange-100 p-3 md:p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-yellow-200">
      <Image src={image} alt={title} className="h-38 sm:h-45 lg:h-50 mx-auto mb-4" width={imgWidth} height={imgHeight} />
      <h3 className="text-sm lg:text-lg font-bold mb-2 line-clamp-2 h-10 sm:h-13">{title}</h3>
      {description && <p className="text-sm text-gray-700">{description}</p>}
    </div>
    </Link>
  );
}