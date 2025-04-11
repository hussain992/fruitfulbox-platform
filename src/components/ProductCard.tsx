import Link from "next/link";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  slug?: string; // Optional prop for slug
}

export default function ProductCard({ image, title, description, slug }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
    <div className="bg-orange-100 p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-yellow-200">
      <img src={image} alt={title} className="w-48 h-48 mx-auto mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
    </Link>
  );
}