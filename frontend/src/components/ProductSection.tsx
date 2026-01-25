import boxes from "@/lib/boxes.json";
import cut_fruits from "@/lib/cut_fruits.json";
import fruits from "@/lib/fruits.json";
import jams from "@/lib/jams.json";
import ProductCard from "./ProductCard";

// import { Button } from "./ui/button";
// import Link from "next/link";
interface ProductSectionProps {
  title?: string;
  description?: string;
}
// const boxProducts = [
// 	{
// 		slug: "delight-box",
// 		image: "/images/Delight-box.png",
// 		title: "Delight Box 📦",
// 		description: "A box full of 3 Pears, 6 Chickoo, and 3 Pomegranates."
// 	},
// ];
// const cutProducts = [
// 	{
// 		slug: "cut-fruits",
// 		image: "/images/mix-fruits.png",
// 		title: "Cut Fruits 🥭",
// 		description: "Freshly cut mangoes, avocados, and more. Perfect for snacking or adding to your meals."
// 	}
// ]
// const FruitProducts = [
// 	{
// 		slug: "indian-plum",
// 		image: "/images/plum-fruit.png",
// 		title: "Plum (Indian)",
// 		description: "Plum is a juicy fruit with a sweet and tart flavor, perfect for snacking or baking."
// 	},
// 	{
// 		slug: "pears",
// 		image: "/images/pear.png",
// 		title: "Green Pear",
// 		description: "Crisp and sweet green pears — naturally grown and full of hydration. Excellent as a snack or dessert topper."
// 	},
// 	// {
// 	// 	slug:"jamun",
// 	// 	image: "/images/jamun.png",
// 	// 	title: "Jamun",
// 	// 	description: 'Jamun, also known as black plum, is a seasonal summer fruit known for its deep purple color and sweet-tart flavor. Rich in antioxidants and great for digestion and blood sugar control.'
// 	// },
// 	// {
// 	// 	slug: "pears",
// 	// 	image: "/images/pear-fruit-1.png",
// 	// 	title: "Pear",
// 	// 	description: "Freshness in every bite and The ultimate crisp and juicy experience."
// 	// }
// ];
// const products1 = [
// 	{
// 		image: "/images/fruit-1.jpg",
// 		title: "Tropical Mix",
// 		description: "A juicy blend of mangoes, pineapples & passionfruit."
// 	},
// 	{
// 		image: "/images/apple.jpeg",
// 		title: "Berry Box",
// 		description: "Fresh strawberries, blueberries & raspberries."
// 	},
// 	{
// 		image: "/images/fruit-box-3.pn",
// 		title: "Citrus Boost",
// 		description: "Oranges, lemons, and grapefruit for your daily zing!"
// 	}
// ];

export default function ProductSection({ title, description }: ProductSectionProps) {
  const category = title?.includes("Fruit Boxes")
    ? "boxes"
    : title?.includes("Cut Fruits")
    ? "cut_fruits"
    : title?.includes("Jams")
    ? "jams"
    : "fruits";

  const products = (
    category === "boxes"
      ? boxes
      : category === "cut_fruits"
      ? cut_fruits
      : category === "jams"
      ? jams
      : fruits
  ).filter(
    (product) => product.isAvailable && product.tags.includes("trending")
  );
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>
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
      </div>
    </section>
  );
}
