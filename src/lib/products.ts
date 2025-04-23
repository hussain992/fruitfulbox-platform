export const productData = {
	"devgad-mangoes": {
		title: "Devgad Alphanso Mangoes",
		image: "/images/mangoes-fruit.png",
		description: "Devgad Alphonso mangoes are sourced at semi-ripe stage and naturally ripened for unmatched taste. Perfectly sweet, aromatic, and juicy.",
		benefits: [
			"Rich in Vitamin A & C",
			"Boosts immunity",
			"Supports digestion"
		],
		// price: "₹999/dozen",
		price: {
			original: "₹999",
			discounted: "₹799/dozen"
		},
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
		price: {
			original: "₹449",
			discounted: "₹399/dozen"
		},
		// price: "₹449/dozen",
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
		// price: "₹499/6 pcs",
		price: {
			original: "",
			discounted: "₹499/6 pcs",
		},
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
		price: {
			original: "",
			discounted: "₹249/kg",
		},
		// price: "₹249/kg",
		stock: 20,
		reviews: []
	},
	"pomegranate": {
		title: "Fresh Pomegranates",
		image: "/images/Vibrant Pomegranate.png", // Ensure this is in public/images
		description: "Juicy, ruby-red pomegranates bursting with antioxidants. Handpicked for freshness and flavor.",
		benefits: [
			"Rich in antioxidants",
			"Supports heart health",
			"Boosts immunity"
		],
		price: {
			original: "₹299/kg",
			discounted: "₹249/kg",
		},
		stock: 10,
		reviews: [
			{ name: "Meera", text: "Super fresh and sweet — highly recommend!" }
		]
	}
};

export type Product = typeof productData[keyof typeof productData];
export type ProductSlug = keyof typeof productData;
