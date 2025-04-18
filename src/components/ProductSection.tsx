import ProductCard from "./ProductCard";

interface ProductSectionProps {
	title?: string;

}

const FruitProducts = [
	{
		slug: "devgad-mangoes",
		image: "/images/mangoes-fruit.png",
		title: "Devgad Alphonso Mangoes",
		description: "A Taste of Maharashtra.Taste the legacy from Devgad's orchards."
	},
	{
		slug: "alphanso-mangoes",
		image: "/images/mango-karnataka.png",
		title: "karnataka Mangoes (karnataka)",
		description: "It is an exquisite mango Sweet, succulent, flavoursome."
	},
	{
		slug: "avocados",
		image: "/images/avocado-fruit.webp",
		title: "Avocado",
		description: "Dive into the creamy, dreamy world of avocados"
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
	const products = FruitProducts;
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