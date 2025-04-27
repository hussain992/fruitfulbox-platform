export const boxData = {
	"delight-box": {
		title: "Delight Box",
		image: "/images/Delight-box.png",
		description: "A box full of 3 Mangoes, 6 Chickoo, and 3 Pomegranates.",
		benefits: [],
		// price: "₹999/dozen",
		price: {
			original: "₹349",
			discounted: "₹299/box"
		},
		stock: 12,
		reviews: [
		]
	}
}
export type BoxData = typeof boxData;
export type BoxSlug = keyof typeof boxData; // "delight-box"