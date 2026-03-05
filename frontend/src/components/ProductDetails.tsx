"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import OrderDetails from "@/components/OrderComponents";
import ServiceNotice from "@/components/ServiceNotice";
// import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import useStore from "@/lib/store";
import { useEffect, useState } from "react";
import { ProductGridSkeleton } from "./ProductCardSkeleton";
// import fruits from "@/lib/fruits.json";

// type ProductSlug = keyof typeof productData;

// 2️⃣ Metadata function
// export async function generateMetadata(product): Promise<Metadata> {
//   const slug = (await params).slug;
//   const product = productData[slug as keyof typeof productData];

//   if (!product) {
//     return {
//       title: "Product not found | Fruitful Box",
//       description: "This product does not exist on Fruitful Box.",
//     };
//   }

//   return {
//     title: `${product.title} – Buy Now | Fruitful Box`,
//     description: `Buy fresh ${product.title} online in Pune. ${product.description}`,
//     openGraph: {
//       title: `${product.title} – Fruitful Box`,
//       description: `Order premium ${product.title} now via WhatsApp in Pune. ${product.description}`,
//       images: [
//         {
//           // image extension can be anything like jpg, png, webp, etc.
//           url: `https://fruitfulbox.vercel.app${product.image}`,
//           width: 1200,
//           height: 630,
//         },
//       ],
//       siteName: "Fruitful Box",
//       url: `https://fruitfulbox.vercel.app/products/${slug}`,
//       type: "website",
//     },
//   };
// }

// interface Product {
//   image?: string;
//   title?: string;
//   description?: string;
//   isAvailable?: boolean;
//   price: {
//     original: string;
//     discounted?: string;
//   };
//   stock?: number;
//   benefits?: string[];
//   reviews?: { user: string; comment: string }[];
//   category: string;
// }

const ProductDetails: React.FC<{ category: string; slug: string }> = ({
  slug,
}) => {
  const product = useStore((state) => state.product);
  const setProduct = useStore((state) => state.setProduct);

  const [isLoading, setIsLoading] = useState(false);
  // const [isInvalidCategory, setIsInvalidCategory] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
        const apiUrl = `${apiBaseUrl.endsWith("/") ? "" : ""}/api/products/${slug}`;
        console.log("Fetching product details from:", apiUrl);

        const res = await fetch(apiUrl);
        if (!res.ok) {
          setIsLoading(false);
          return notFound();
        }

        const data = await res.json();
        console.log("api reply details page", data);

        if (!data) {
          setIsLoading(false);
          return notFound();
        }

        // Backend returns a single product object; handle array or object safely
        const productData = Array.isArray(data) ? data[0] : data;
        if (!productData) {
          setIsLoading(false);
          return notFound();
        }

        setProduct(productData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setIsLoading(false);
        notFound();
      }
    };
    if(!product || product.slug !== slug){
      getData();
    }
    // getData();
  }, [slug, setProduct, product]);

  console.log("product details ", product);
  // const resolvedParams = use(params);
  //   const product =
  //     resolvedParams.slug == "delight-box"
  //       ? boxData[resolvedParams.slug as keyof typeof boxData]
  //       : productData[resolvedParams.slug as keyof typeof productData];
  if (!product) {
    // setIsLoading(true);
  }
  return (
    <>
      <ServiceNotice />
      <main className="max-w-5xl mx-auto py-6 sm:py-16 px-4">
        {isLoading ? (
          <ProductGridSkeleton />
        ) : product ? (
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Image
              src={product.image}
              alt={product.title ?? "Product Image"}
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">{product?.title}</h1>
              <p className="text-lg text-gray-700 mb-4">
                {product?.description}
              </p>
              {/* <p className="text-xl font-semibold text-green-700 mb-2">{product.price}</p> */}
              {product.isAvailable && (
                <>
                  <div className="mb-2">
                    <span className="text-lg text-gray-500 line-through mr-2">
                      {product.price.original}
                    </span>
                    <span className="text-xl font-bold text-green-700">
                      {product.price.discounted}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-4 ${
                      product.stock && product.stock > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {/* {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"} */}
                    {"In stock"}
                  </p>
                </>
              )}
              <ul className="list-disc list-inside text-sm text-green-700 mb-6">
                {product?.benefits?.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <OrderDetails
                title={product.title}
                price={
                  product.price.discounted
                    ? product.price.discounted
                    : product.price.original
                }
                isAvailable={product.isAvailable}
              />
            </div>
            {/* <CustomerReviewsSection reviews={product.reviews} /> */}
            <div className="mt-12 text-center">
              <Link
                href={`/${product.category}`}
                className="text-blue-600 hover:underline"
              >
                ← Back to {product.category || "products"}
              </Link>
            </div>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </main>
    </>
  );
};
export default ProductDetails;
