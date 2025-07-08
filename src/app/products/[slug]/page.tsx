// "use client";
// import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import OrderDetails from "@/components/OrderComponents";
import { productData } from "@/lib/products";
import { boxData } from "@/lib/boxData";
import ServiceNotice from "@/components/ServiceNotice";
import type { Metadata } from 'next' 

// type ProductSlug = keyof typeof productData;

// interface Props {
// 	params: { slug: string }; // Corrected parameter type
// }


// 2️⃣ Metadata function
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const product = productData[params.slug as keyof typeof productData];

  if (!product) {
    return {
      title: "Product not found | Fruitful Box",
      description: "This product does not exist on Fruitful Box.",
    };
  }

  return {
    title: `${product.title} – Buy Now | Fruitful Box`,
    description: `Buy fresh ${product.title} online. Premium quality from Fruitful Box.`,
    openGraph: {
      title: `${product.title} – Fruitful Box`,
      description: `Order premium ${product.title} now via WhatsApp!`,
      images: [`https://fruitfulbox.vercel.app${product.image}`],
      url: `https://fruitfulbox.vercel.app/products/${params.slug}`,
      type: 'website',
    },
  };
}

const ProductDetailPage: React.FC<{ params: Promise<{ slug: string }> }> = ({
  params,
}) => {
  const resolvedParams = use(params);
  const product =
    resolvedParams.slug == "delight-box"
      ? boxData[resolvedParams.slug as keyof typeof boxData]
      : productData[resolvedParams.slug as keyof typeof productData];
  // if (!product) return notFound();
  return (
    <>
      <ServiceNotice />
      <main className="max-w-5xl mx-auto py-6 sm:py-16 px-4">
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
                    product.stock > 0 ? "text-green-600" : "text-red-500"
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
        </div>

        {product?.reviews && product.reviews?.length > 0 && (
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
          <Link href="/products" className="text-blue-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </main>
    </>
  );
};
export default ProductDetailPage;
