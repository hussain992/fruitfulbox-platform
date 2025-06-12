import ProductCard from "./ProductCard";

interface ProductSectionProps {
	title?: string;

}
const boxProducts = [
	{
		slug: "delight-box",
		image: "/images/Delight-box.png",
		title: "Delight Box",
		description: "A box full of 3 Mangoes, 6 Chickoo, and 3 Pomegranates."
	},
];
const FruitProducts = [
	{
		slug:"jamun",
		image: "/images/jamun.png",
		title: "Jamun",
		description: 'Jamun, also known as black plum, is a seasonal summer fruit known for its deep purple color and sweet-tart flavor. Rich in antioxidants and great for digestion and blood sugar control.'
	},
	{
		slug: "indian-plum",
		image: "/images/plum-fruit.png",
		title: "Plum (Indian)",
		description: "Plum is a juicy fruit with a sweet and tart flavor, perfect for snacking or baking."
	},
	
	{
		slug: "litchi",
		image: "/images/litchi.png",
		title: "Fresh Litchi",
		description: "Juicy and aromatic fresh litchis, handpicked for premium quality and taste.",
	},
	// {
	// 	slug: "pears",
	// 	image: "/images/pear-fruit-1.png",
	// 	title: "Pear",
	// 	description: "Freshness in every bite and The ultimate crisp and juicy experience."
	// }
];
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

export default function ProductSection({ title }: ProductSectionProps) {
	const products = title == 'Our Fruit Boxes 📦'? boxProducts : FruitProducts;
	return (
		<section className="py-16 px-4 bg-white">
			<h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
			<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
				{products.map((product, index) => (
					<ProductCard
						key={index}
						image={product.image}
						title={product.title}
						description={product.description}
						slug={product.slug}
					/>
				))}
			</div>
		</section>
	);
}