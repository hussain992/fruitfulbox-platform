"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Head from "next/head";

const productData = {
	"devgad-mangoes": {
		title: "Devgad Alphanso Mangoes",
		image: "/images/mangoes-fruit.png",
		description: "Devgad Alphonso mangoes are sourced at semi-ripe stage and naturally ripened for unmatched taste. Perfectly sweet, aromatic, and juicy.",
		benefits: [
			"Rich in Vitamin A & C",
			"Boosts immunity",
			"Supports digestion"
		],
		price: "₹999/dozen",
		stock: 12,
		reviews: [
			{ name: "Anita", text: "Best mangoes I’ve had this season!" },
			{ name: "Rahul", text: "Juicy and flavorful — will order again." }
		]
	},
	"alphanso-mangoes": {
		title: "Alphanso Mangoes (karnataka)",
		image: "/images/mango-karnataka.png",
		description: "Naturally sweet and deliciously juicy! 🥭 Badami Mangoes are Karnataka’s golden treasure. Perfectly ripened for a royal summer bite! 👑",
		benefits: [
			"Rich in Vitamin A & C",
			"Boosts immunity",
			"Supports digestion"
		],
		price: "₹449/dozen",
		stock: 12,
		reviews: [
			// { name: "Anita", text: "Best mangoes I’ve had this season!" },
			// { name: "Rahul", text: "Juicy and flavorful — will order again." }
		]
	},
	"avocados": {
		title: "Fresh Avocados",
		image: "/images/avocado-fruit.webp",
		description: "Creamy Hass avocados sourced fresh. Great for toast, guacamole, or smoothies. Packed with healthy fats and nutrients.",
		benefits: [
			"High in fiber",
			"Heart-healthy fats",
			"Rich in potassium"
		],
		price: "₹499/6 pcs",
		stock: 8,
		reviews: [
			{ name: "Sara", text: "Perfect texture for guac!" }
		]
	},
	"pears": {
		title: "Green Pears",
		image: "/images/pear-fruit-1.png",
		description: "Crisp and sweet green pears — naturally grown and full of hydration. Excellent as a snack or dessert topper.",
		benefits: [
			"Low calorie",
			"High in antioxidants",
			"Promotes gut health"
		],
		price: "₹249/kg",
		stock: 20,
		reviews: []
	}
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
	const product = productData[params.slug as keyof typeof productData];
	console.log('product', product, params)
	if (!product) return notFound();
	const handleWhatsAppOrder = () => {
		const message = `Hi, I'm interested in buying:\n\n🍎 ${product.title}\n💰 Price: ${product.price}`;
		const encodedMessage = encodeURIComponent(message);
		const phoneNumber = "917558535953"; // Replace with your number
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
		window.open(whatsappUrl, "_blank");
	};
	return (
		<>
			<Head>
				<title>{product.title} – Buy Now | Fruitful Box</title>
				<meta name="description" content={`Buy fresh ${product.title} online. Premium quality from Fruitful Box.`} />
				<meta property="og:title" content={`${product.title} – Fruitful Box`} />
				<meta property="og:description" content={`Order premium ${product.title} now via WhatsApp!`} />
				<meta property="og:image" content={product.image} />
				<meta property="og:url" content={`https://fruitfulbox.vercel.app/products/${params.slug}`} />
			</Head>
			<main className="max-w-5xl mx-auto py-16 px-4">
				<div className="grid md:grid-cols-2 gap-10 items-start">
					<Image
						src={product.image}
						alt={product.title}
						width={500}
						height={500}
						className="rounded-xl shadow-lg"
					/>
					<div>
						<h1 className="text-4xl font-bold mb-4">{product.title}</h1>
						<p className="text-lg text-gray-700 mb-4">{product.description}</p>
						<p className="text-xl font-semibold text-green-700 mb-2">{product.price}</p>
						<p className={`text-sm mb-4 ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
							{/* {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"} */}
							{"In stock"}

						</p>
						<ul className="list-disc list-inside text-sm text-green-700 mb-6">
							{product.benefits.map((benefit, i) => (
								<li key={i}>{benefit}</li>
							))}
						</ul>
						<Button
							onClick={handleWhatsAppOrder}
							className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow"
						>
							Order on WhatsApp
						</Button>
						{/* <Button className="w-full md:w-auto">Add to Cart</Button> */}
					</div>
				</div>

				{product.reviews.length > 0 && (
					<div className="mt-12 border-t pt-8">
						<h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
						<div className="space-y-4">
							{product.reviews.map((review, i) => (
								<div key={i} className="bg-gray-100 p-4 rounded-md shadow-sm">
									<p className="font-semibold">{review.name}</p>
									<p className="text-sm text-gray-700">{review.text}</p>
								</div>
							))}
						</div>
					</div>
				)}

				<div className="mt-12 text-center">
					<Link href="/" className="text-blue-600 hover:underline">← Back to Products</Link>
				</div>
			</main>
		</>
	);
}