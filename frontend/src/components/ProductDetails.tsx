"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import OrderDetails from "@/components/OrderComponents";
import ServiceNotice from "@/components/ServiceNotice";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import useStore from "@/lib/store";
import { useEffect, useState } from "react";
import { ProductDetailsSkeleton } from "./ProductDetailsSkeleton";

const ProductDetails: React.FC<{ category: string; slug: string }> = ({
  slug,
}) => {
  const product = useStore((state) => state.product);
  const setProduct = useStore((state) => state.setProduct);

  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState<string>("1");

  // parse price like "₹129/kg" (or "129") then calculate total
  const unitPriceLabel =
    product?.price?.discounted ?? product?.price?.original ?? "₹0/kg";
  const unitPrice = Number(
    (unitPriceLabel.match(/[0-9]+(?:\.[0-9]+)?/) || ["0"])[0],
  );

  const quantityNumber = Number(quantity);
  const totalPrice = Number.isFinite(quantityNumber)
    ? unitPrice * quantityNumber
    : 0;

  const formattedTotal = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const handleQuantityChange = (value: string) => {
    if (value === "") {
      setQuantity("");
      return;
    }
    const next = Number(value);
    if (Number.isNaN(next) || next < 0) return;
    setQuantity(next.toFixed(2).replace(/\.00$/, ""));
  };
  useEffect(() => {
    const getData = async () => {
      // console.log('get data for slug', slug);
      try {
        setIsLoading(true);
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

        const apiUrl = `${apiBaseUrl}/products/${slug}`;
        const res = await fetch(apiUrl);
        if (!res.ok) {
          setIsLoading(false);
        }
        const data = await res.json();
        if (!data) {
          setIsLoading(false);
        }
        // Backend returns a single product object; handle array or object safely
        const productData = Array.isArray(data) ? data[0] : data;
        if (!productData)
          setIsLoading(false);

        setProduct(productData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setIsLoading(false);
        notFound();
      }
    };
    // console.log('current product in store', product);
    if (!product || product.slug !== slug) {
      getData();
    } else if (product.slug === slug) {
      setIsLoading(false);
    }
  }, [slug, setProduct, product]);

  return (
    <>
      <ServiceNotice />
      <main className="max-w-5xl mx-auto py-6 sm:py-16 px-4">
        {isLoading && <ProductDetailsSkeleton />}
        {!isLoading && product && (
          <>
            <div className="grid md:grid-cols-2 gap-5 sm:gap-10 items-start">
              <Image
                src={product.image}
                alt={product.title ?? "Product Image"}
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
              />
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">{product?.title}</h1>
                <p className="text-lg text-gray-700 mb-4">
                  {product?.description}
                </p>
                {product.isAvailable && (
                  <>
                    <div className="mb-2">
                      <span className="text-xl font-bold text-green-700">
                        {product.price.discounted}
                      </span>
                      <span className="text-lg text-gray-500 line-through ml-2">
                        {product.price.original}
                      </span>
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                      <span className="font-medium">Quantity</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            (Number(quantity) - 1).toString(),
                          )
                        }
                        className="px-2 py-1 border rounded"
                        type="button"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={0}
                        step={0.1}
                        value={quantity}
                        onChange={(e) => handleQuantityChange(e.target.value)}
                        className="w-20 p-1 border rounded"
                      />
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            (Number(quantity || "0") + 1).toString(),
                          )
                        }
                        className="px-2 py-1 border rounded"
                        type="button"
                      >
                        +
                      </button>
                      <span className="text-sm text-gray-600">box</span>
                    </div>

                    <p className="text-sm mb-4 text-green-700">
                      Total: <strong>{formattedTotal}</strong>
                    </p>

                    <p
                      className="text-sm mb-4 text-green-600">
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
                  totalPrice={formattedTotal}
                  isAvailable={product.isAvailable}
                />
              </div>
            </div>
            <CustomerReviewsSection reviews={product?.reviews} />
            <div className="sm:mt-12 text-center">
              <Link
                href={`/${product.category}`}
                className="text-blue-600 hover:underline"
              >
                ← Back to {product.category || "products"}
              </Link>
            </div>
          </>
        )}
        {!isLoading && !product && notFound()}
      </main>
    </>
  );
};
export default ProductDetails;
