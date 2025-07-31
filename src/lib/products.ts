/**
 * A comprehensive collection of product details for the FruitfulBox platform.
 *
 * Each product entry contains metadata such as title, description, pricing, availability, benefits, tags, reviews, and image paths.
 * Some products may include additional fields like delivery dates, SEO metadata, or unit information.
 *
 * @remarks
 * - Pricing is represented either as a string or an object with `original` and `discounted` fields.
 * - Availability is indicated by `isAvailable` and, for some products, specific delivery days.
 * - Reviews are user-generated and may include ratings.
 * - Image paths should correspond to files in the public/images directory.
 *
 * @example
 * ```typescript
 * const mango = productData['pairi'];
 * console.log(mango.title); // "Pairi Mangoes (Payari)"
 * ```
 */
export const productData = {
  pairi: {
    id: "pairi-mangoes",
    title: "Pairi Mangoes (Payari)",
    description:
      "Pairi Mangoes are known for their vibrant aroma and tangy-sweet flavor. These early-season mangoes are perfect for juice lovers and mango purists.",
    // price: 399,
    // originalPrice: 449,
    price: {
      original: "₹249/2kg",
      discounted: "₹179/2kg",
    },
    unit: "Dozen (Approx. 12 pcs)",
    image: "/images/pairi-mango.png", // make sure this image is available
    tags: ["seasonal"],
    stock: 12,
    isAvailable: false,
    benefits: [
      "High in Vitamin C",
      "Excellent for juicing",
      "Boosts energy and hydration",
    ],
    reviews: [
      {
        name: "Amit",
        text: "Loved the tangy sweetness! Really juicy and fresh.",
      },
      { name: "Neha", text: "Best mangoes for making aamras!" },
    ],
  },
  pears: {
    id: "pears",
    title: "Green Pears",
    image: "/images/pear.png",
    description:
      "Crisp and sweet green pears — naturally grown and full of hydration. Excellent as a snack or dessert topper.",
    benefits: ["Low calorie", "High in antioxidants", "Promotes gut health"],
    price: {
      original: "",
      discounted: "₹249/kg",
    },
    tags: ["new-arrival"],
    isAvailable: true,
    // price: "₹249/kg",
    stock: 20,
    reviews: [],
  },
  pomegranate: {
    id: "pomegranate",
    title: "Fresh Pomegranates",
    image: "/images/Vibrant Pomegranate.png", // Ensure this is in public/images
    description:
      "Juicy, ruby-red pomegranates bursting with antioxidants. Handpicked for freshness and flavor.",
    benefits: [
      "Rich in antioxidants",
      "Supports heart health",
      "Boosts immunity",
    ],
    tags: ["seasonal", "new-arrival"],
    price: {
      original: "₹249/kg",
      discounted: "₹199/kg",
    },
    isAvailable: true,
    stock: 10,
    reviews: [
      { name: "Meera", text: "Super fresh and sweet — highly recommend!" },
    ],
  },
  "sweet-lime": {
    id: "sweet-lime",
    title: "Sweet Lime (Mosambi)",
    description:
      "Sweet Lime (Mosambi) is known for its refreshing and mild citrus flavor. Packed with Vitamin C and hydration, it is perfect for juicing and snacking.",
    price: {
      original: "₹279/2kg",
      discounted: "₹229/2kg",
    },
    image: "/images/sweet-lime-fruit.png",
    tags: ["new-arrival"],
    isAvailable: true,
    benefits: [
      "Rich in Vitamin C, boosts immunity",
      "Excellent for hydration and detox",
      "Helps in digestion and improves skin health",
    ],
    stock: 12,
    reviews: [
      { name: "Aarav", text: "Best sweet lime I've ever had! So refreshing." },
      {
        name: "Saanvi",
        text: "Perfect for making fresh juice. Highly recommend!",
      },
    ],
  },
  peach: {
    id: "peach",
    title: "Peach",
    description:
      "Juicy and semi-ripe peaches perfect for snacking or desserts. Rich in vitamins A and C, and known for their sweet, refreshing taste.",
    price: {
      original: "₹249/1kg",
      discounted: "₹199/1kg",
    },
    unit: "500g (Approx. 3-4 pcs)",
    image: "/images/peaches.png", // make sure your image is saved at this path
    tags: ["new-arrival"],
    isAvailable: true,
    benefits: [
      "Rich in vitamins A and C",
      "Good source of dietary fiber",
      "Supports skin health and hydration",
    ],
    stock: 12,
    reviews: [
      {
        name: "Priya M.",
        text: "Fresh and juicy peaches! Loved the taste.",
        rating: 5,
      },
      {
        name: "Anil K.",
        text: "Great for making smoothies, will order again.",
        rating: 4,
      },
    ],
  },
  "apple":{
    id:"apple", 
  title: "Apple",
  benefits: [
    "Rich in fiber and vitamin C",    
    "Supports heart health",
    "Aids in weight management",
  ],
  slug: "apple",
  image: "/images/apple.png", // Adjust as needed
  price: {
      original: "₹299/kg",
      discounted: "₹279/kg",
    },
  discountPrice: 100,
  unit: "1kg",
  category: "fruit",
  isAvailable: true,
  isCutFruit: false,
  description: "Sweet, crisp, and juicy red apples – perfect for daily snacking and nutrition.",
  nutrition: {
    calories: "52 kcal (per 100g)",
    sugar: "10g",
    fiber: "2.4g",
    carbs: "14g"
  },
  stock:12,
  tags: ["new-arrival", "healthy-snack"],
  reviews: [
    {
      name: "Ayesha K.",
      rating: 5,
      text: "Super fresh and sweet! Will order again."
    },
    {
      name: "Ravi M.",
      rating: 4,
      text: "Good quality, though a couple were slightly bruised."
    }
  ]
  },
  "jamun": {
    id: "jamun",
    title: "Jamun",
    description:
      "Jamun, also known as black plum, is a seasonal summer fruit known for its deep purple color and sweet-tart flavor. Rich in antioxidants and great for digestion and blood sugar control.",
    // price: 129,
    // originalPrice: 159,
    price: {
      original: "₹249/kg",
      discounted: "₹229/kg",
    },
    // unit: '250g (Approx. 15-20 pcs)',
    image: "/images/jamun.png",
    tags: ["seasonal", "new-arrival"],
    isAvailable: true,
    benefits: [
      "Helps manage blood sugar levels",
      "Rich in Vitamin C and antioxidants",
      "Supports digestion and oral health",
    ],
    stock: 12,
    reviews: [
      {
        name: "Neha R.",
        text: "Absolutely fresh and juicy! Loved the quality.",
        rating: 5,
      },
      {
        name: "Amit P.",
        text: "Perfectly packed and delivered. Will buy again!",
        rating: 4,
      },
    ],
  },
  litchi: {
    id: "litchi",
    title: "Fresh Litchi",
    image: "/images/litchi.png", // adjust path if different
    price: {
      original: "399/kg",
      discounted: "349/kg",
    },
    stock: 12,
    weight: "500g",
    description:
      "Juicy and aromatic fresh litchis, handpicked for premium quality and taste.",
    benefits: [
      "Rich in Vitamin C",
      "Boosts immunity",
      "Hydrates and cools the body",
    ],
    tags: ["new-arrival"],
    availability: ["wednesday", "saturday", "sunday"],
    isAvailable: false,
    reviews: [
      { name: "Aisha", text: "Best litchis I've ever tasted! So fresh." },
      { name: "Rahul", text: "Perfectly sweet and juicy. Highly recommend!" },
    ],
  },
  "kesar-mangoes": {
    id: "kesar-mango",
    title: "Kesar Mango",
    description:
      "Juicy, aromatic Kesar mangoes known for their rich flavor and vibrant color. Perfect for summer indulgence.",
    price: {
      original: "249/2kg",
      discounted: "229/2kg",
    },
    // weight: "1 dozen (approx. 3.5kg)",
    image: "/images/Kesar-Mangoes.jpg", // Adjust the path if different
    isAvailable: false,
    stock: 12,
    tags: ["seasonal", "new-arrival"],
    // deliveryDays: ["Wednesday", "Saturday", "Sunday"],
    benefits: [
      "Rich in Vitamin A and C",
      "Boosts immunity",
      "Great for desserts and juices",
    ],
    reviews: [{ name: "Raj", text: "Sweet and juicy, perfect for summer." }],
  },
  "devgad-mangoes": {
    id: "devgad-mangoes",
    title: "Devgad Alphanso Mangoes",
    image: "/images/mangoes-fruit.png",
    description:
      "Devgad Alphonso mangoes are sourced at semi-ripe stage and naturally ripened for unmatched taste. Perfectly sweet, aromatic, and juicy.",
    benefits: [
      "Rich in Vitamin A & C",
      "Boosts immunity",
      "Supports digestion",
    ],
    isAvailable: false,
    price: {
      original: "₹999",
      discounted: "₹799/dozen",
    },
    stock: 12,
    tags: ["seasonal", "new-arrival"],
    reviews: [
      { name: "Anita", text: "Best mangoes I’ve had this season!" },
      { name: "Rahul", text: "Juicy and flavorful — will order again." },
    ],
  },
  "alphanso-mangoes": {
    id: "alphanso-mangoes",
    title: "Alphanso Mangoes (karnataka)",
    image: "/images/mango-karnataka.png",
    description:
      "Naturally sweet and deliciously juicy! 🥭 Badami Mangoes are Karnataka’s golden treasure. Perfectly ripened for a royal summer bite! 👑",
    benefits: [
      "Rich in Vitamin A & C",
      "Boosts immunity",
      "Supports digestion",
    ],
    isAvailable: false,
    tags: ["seasonal", "new-arrival"],
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
    id: "avocados",
    title: "Fresh Avocados",
    image: "/images/avocado-fruit.webp",
    description:
      "Creamy Hass avocados sourced fresh. Great for toast, guacamole, or smoothies. Packed with healthy fats and nutrients.",
    benefits: ["High in fiber", "Heart-healthy fats", "Rich in potassium"],
    // price: "₹499/6 pcs",
    tags: ["new-arrival"],
    price: {
      original: "",
      discounted: "₹349/3 pcs",
    },
    stock: 8,
    isAvailable: true,
    reviews: [{ name: "Sara", text: "Perfect texture for guac!" }],
  },
  chickoo: {
    id: "chickoo",
    title: "Fresh Chikoo (Sapodilla)",
    image: "/images/chickoo-fruit.png", // make sure to save and reference the correct path
    description:
      "Sweet and grainy sapodillas (Chikoo) picked ripe for natural flavor. Great for smoothies, snacks, or as-is.",
    benefits: [
      "Good source of dietary fiber",
      "Boosts energy naturally",
      "Rich in antioxidants and vitamins",
    ],
    tags: ["seasonal", "new-arrival"],
    isAvailable: true,
    price: {
      original: "₹119/kg",
      discounted: "₹99/kg",
    },
    stock: 10,
    reviews: [{ name: "Nikhil", text: "Soft and super sweet. Loved it!" }],
  },
  "indian-plum": {
    id: "plum",
    title: "Plum (indian)",
    image: "/images/plum-fruit.png",
    description:
      "Sweet and tangy Indian Plums, also known as Ber, are packed with flavor and nutrients. A perfect traditional snack enjoyed across India.",
    benefits: ["Boosts immunity", "Rich in Vitamin C", "Aids digestion"],
    price: {
      original: "₹299/kg",
      discounted: "₹249/kg",
    },
    tags: ["seasonal", "traditional"],
    stock: 15,
    deliveryDates: ["Wednesday", "Saturday", "Sunday"],
    reviews: [
      { name: "Meera", text: "Took me back to childhood! So fresh and tasty." },
      { name: "Ravi", text: "Excellent quality and packaging." },
    ],
    isAvailable: true,
    // Add SEO metadata for the product
    seo: {
      title: "Buy Indian Plum (Ber) Online - Fresh & Tangy",
      description:
        "Shop fresh Indian Plums (Ber) online at Fruitful Box. Sweet, tangy, and rich in nutrients. Available for delivery on weekends. Order now! ",
      keywords: [
        "Indian Plum",
        "Ber",
        "Buy Ber Online",
        "Fresh Indian Fruit",
        "Traditional Indian Fruits",
      ],
    },
  },
  "cut-fruits": {
    id: "cut-fruits",
    title: "Cut Mixed Fruits Box",
    description:
      "A ready-to-eat mix of seasonal fruits. Freshly cut and packed on order.",
    price: {
      original: "₹199",
      discounted: "₹149/400g",
    },
    unit: "400g box",
    image: "/images/mix-fruits.png",
    tags: ["cut-fruit", "new-arrival"],
    isAvailable: true,
    stock: 20,
    benefits: ["Ready to eat", "No mess", "High in vitamins"],
    reviews: [{ name: "Ayesha", text: "So convenient for busy mornings!" }],
  },
};

// export type Product = (typeof productData)[keyof typeof productData];
export type Product = {
  id: string;
  title: string;
  description: string;
  price: {
    original: string;
    discounted: string;
  };
  unit?: string;
  image: string;
  tags?: string[];
  stock?: number;
  isAvailable: boolean;
  benefits?: string[];
  reviews?: { name: string; text: string; rating?: number }[];
};

export type ProductSlug = keyof typeof productData;
