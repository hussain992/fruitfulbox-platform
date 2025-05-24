export const productData = {
  "kesar-mangoes": {
    id: "kesar-mango",
    title: "Kesar Mango",
    description:
      "Juicy, aromatic Kesar mangoes known for their rich flavor and vibrant color. Perfect for summer indulgence.",
    price:{
      original: '299/2kg',
      discounted: '249/2kg',
    },
    // weight: "1 dozen (approx. 3.5kg)",
    image: "/images/Kesar-Mangoes.jpg", // Adjust the path if different
    available: true,
    stock: 12,
    // deliveryDays: ["Wednesday", "Saturday", "Sunday"],
    benefits: [
      "Rich in Vitamin A and C",
      "Boosts immunity",
      "Great for desserts and juices",
    ],
    reviews: [
      { name: "Raj", text: "Sweet and juicy, perfect for summer." },
    ],
  },
  "devgad-mangoes": {
    title: "Devgad Alphanso Mangoes",
    image: "/images/mangoes-fruit.png",
    description:
      "Devgad Alphonso mangoes are sourced at semi-ripe stage and naturally ripened for unmatched taste. Perfectly sweet, aromatic, and juicy.",
    benefits: [
      "Rich in Vitamin A & C",
      "Boosts immunity",
      "Supports digestion",
    ],
    // price: "₹999/dozen",
    price: {
      original: "₹999",
      discounted: "₹799/dozen",
    },
    stock: 12,
    reviews: [
      { name: "Anita", text: "Best mangoes I’ve had this season!" },
      { name: "Rahul", text: "Juicy and flavorful — will order again." },
    ],
  },
  "alphanso-mangoes": {
    title: "Alphanso Mangoes (karnataka)",
    image: "/images/mango-karnataka.png",
    description:
      "Naturally sweet and deliciously juicy! 🥭 Badami Mangoes are Karnataka’s golden treasure. Perfectly ripened for a royal summer bite! 👑",
    benefits: [
      "Rich in Vitamin A & C",
      "Boosts immunity",
      "Supports digestion",
    ],
    price: {
      original: "₹449",
      discounted: "₹399/dozen",
    },
    // price: "₹449/dozen",
    stock: 12,
    reviews: [
      // { name: "Anita", text: "Best mangoes I’ve had this season!" },
      // { name: "Rahul", text: "Juicy and flavorful — will order again." }
    ],
  },
  avocados: {
    title: "Fresh Avocados",
    image: "/images/avocado-fruit.webp",
    description:
      "Creamy Hass avocados sourced fresh. Great for toast, guacamole, or smoothies. Packed with healthy fats and nutrients.",
    benefits: ["High in fiber", "Heart-healthy fats", "Rich in potassium"],
    // price: "₹499/6 pcs",
    price: {
      original: "",
      discounted: "₹499/6 pcs",
    },
    stock: 8,
    reviews: [{ name: "Sara", text: "Perfect texture for guac!" }],
  },
  pears: {
    title: "Green Pears",
    image: "/images/pear-fruit-1.png",
    description:
      "Crisp and sweet green pears — naturally grown and full of hydration. Excellent as a snack or dessert topper.",
    benefits: ["Low calorie", "High in antioxidants", "Promotes gut health"],
    price: {
      original: "",
      discounted: "₹249/kg",
    },
    // price: "₹249/kg",
    stock: 20,
    reviews: [],
  },
  pomegranate: {
    title: "Fresh Pomegranates",
    image: "/images/Vibrant Pomegranate.png", // Ensure this is in public/images
    description:
      "Juicy, ruby-red pomegranates bursting with antioxidants. Handpicked for freshness and flavor.",
    benefits: [
      "Rich in antioxidants",
      "Supports heart health",
      "Boosts immunity",
    ],
    price: {
      original: "₹249/kg",
      discounted: "₹179/kg",
    },
    stock: 10,
    reviews: [
      { name: "Meera", text: "Super fresh and sweet — highly recommend!" },
    ],
  },
  chickoo: {
    title: "Fresh Chikoo (Sapodilla)",
    image: "/images/chickoo-fruit.png", // make sure to save and reference the correct path
    description:
      "Sweet and grainy sapodillas (Chikoo) picked ripe for natural flavor. Great for smoothies, snacks, or as-is.",
    benefits: [
      "Good source of dietary fiber",
      "Boosts energy naturally",
      "Rich in antioxidants and vitamins",
    ],
    price: {
      original: "₹119/kg",
      discounted: "₹99/kg",
    },
    // price: "₹299/kg",
    // originalPrice: "₹349/kg", // if you show discounts
    stock: 10,
    reviews: [{ name: "Nikhil", text: "Soft and super sweet. Loved it!" }],
  },
  "indian-plum": {
    title: "Plum (indian)",
    image: "/images/plum-fruit.png",
    description:
      "Sweet and tangy Indian Plums, also known as Ber, are packed with flavor and nutrients. A perfect traditional snack enjoyed across India.",
    benefits: ["Boosts immunity", "Rich in Vitamin C", "Aids digestion"],
    // price: "₹199",
    // originalPrice: "₹249",
    price: {
      original: "₹199/500g",
      discounted: "₹149/500g",
    },
    stock: 15,
    deliveryDates: ["Wednesday", "Saturday", "Sunday"],
    reviews: [
      { name: "Meera", text: "Took me back to childhood! So fresh and tasty." },
      { name: "Ravi", text: "Excellent quality and packaging." },
    ],
    seo: {
      title: "Buy Indian Plum (Ber) Online - Fresh & Tangy",
      description:
        "Shop fresh Indian Plums (Ber) online at Fruitful Box. Sweet, tangy, and rich in nutrients. Available for delivery on weekends. Order now!",
      keywords: [
        "Indian Plum",
        "Ber",
        "Buy Ber Online",
        "Fresh Indian Fruit",
        "Traditional Indian Fruits",
      ],
    },
  },
};

export type Product = (typeof productData)[keyof typeof productData];
export type ProductSlug = keyof typeof productData;
