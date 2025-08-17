// "use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import OrderDetails from "@/components/OrderComponents";
// import fruits from "@/lib/fruits.json";
import ServiceNotice from "@/components/ServiceNotice";
// import type { Metadata } from "next";

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

interface Product {
  image: string;
  title: string;
  description: string;
  isAvailable: boolean;
  price: {
    original: string;
    discounted?: string;
  };
  stock: number;
  benefits?: string[];
  reviews?: { user: string; comment: string }[];
}

const ProductDetails: React.FC<{ product: Product }> = ({
  product
}) => {
    console.log('product details ', product);
//   const resolvedParams = use(params);
//   const product =
//     resolvedParams.slug == "delight-box"
//       ? boxData[resolvedParams.slug as keyof typeof boxData]
//       : productData[resolvedParams.slug as keyof typeof productData];
  if (!product) return notFound();
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
            <h3 className="font-bold mb-4">Customer Reviews</h3>
            <div className="space-y-4">
              {product.reviews.map((review, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-sm text-gray-700">{review.comment}</p>
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
export default ProductDetails;
