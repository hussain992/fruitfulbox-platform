"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import OrderDetails from "@/components/OrderComponents";
import ServiceNotice from "@/components/ServiceNotice";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import useStore from "@/lib/store";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ProductDetailsSkeleton } from "./ProductDetailsSkeleton";
import ProductImage from "./ProductDetailsImage";
import ProductPrice from "./ProductDetailsPrice";
import ProductBenefits from "./ProductDetailsBenefits";
import StockBadge from "./ProductDetailsStockBadge";
import QuantitySelector from "./ProductDetailsQuantitySelector";
import { parsePrice, formatCurrency } from "./ProductDetails.utils";

const ProductDetails: React.FC<{ category: string; slug: string }> = ({
  slug,
}) => {
  const product = useStore((state) => state.product);
  const setProduct = useStore((state) => state.setProduct);

  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState<string>("1");
  const orderItems = useStore((state) => state.orderItems);
  const addOrderItem = useStore((state) => state.addOrderItem);

  const unitPriceLabel =
    product?.price?.discounted ?? product?.price?.original ?? "₹0/kg";
  const unitPrice = parsePrice(unitPriceLabel);
  const totalPrice = unitPrice * Number(quantity || 0);
  const formattedTotal = formatCurrency(totalPrice);
  const totalOrderCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToOrder = () => {
    if (!product) return;

    const qty = Number(quantity || "1");
    if (qty < 1) return;

    addOrderItem({
      ...product,
      quantity: qty,
    });
  };

  const handleQuantityChange = useCallback((value: string) => {
    if (value === "") {
      setQuantity("");
      return;
    }
    const next = Number(value);
    if (Number.isNaN(next) || next < 1) return;
    setQuantity(next.toString());
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
        const res = await fetch(`${apiBaseUrl}/products/${slug}`);

        if (!res.ok) {
          setIsLoading(false);
          return;
        }

        const data = await res.json();
        const productData = Array.isArray(data) ? data[0] : data;

        if (!productData) {
          setIsLoading(false);
          return;
        }

        setProduct(productData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setIsLoading(false);
        notFound();
      }
    };

    if (!product || product.slug !== slug) {
      fetchProduct();
    } else if (product.slug === slug) {
      setIsLoading(false);
    }
  }, [slug, setProduct, product]);

  if (isLoading) {
    return (
      <>
        <ServiceNotice />
        <main className="max-w-6xl mx-auto py-6 sm:py-16 px-4">
          <ProductDetailsSkeleton />
        </main>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <ServiceNotice />
        <main className="max-w-6xl mx-auto py-6 sm:py-16 px-4">
          {notFound()}
        </main>
      </>
    );
  }

  return (
    <>
      <ServiceNotice />
      <main className="max-w-6xl mx-auto py-6 sm:py-16 px-4">
        <nav className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] mb-6">
          <Link href="/" className="hover:text-brand-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${product.category}`} className="hover:text-brand-700 transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[var(--color-foreground)] truncate">{product.title}</span>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            <ProductImage
              image={product.image}
              title={product.title}
              category={product.category}
            />

            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-3">
                  {product.title}
                </h1>
                
                <p className="text-[var(--color-muted-foreground)] text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  {product.isAvailable && (
                    <ProductPrice
                      discounted={product.price.discounted}
                      original={product.price.original}
                    />
                  )}
                </div>

                <div className="mb-6">
                  <StockBadge isAvailable={product.isAvailable ?? false} />
                </div>

                {product.isAvailable && (
                  <div className="mb-6">
                    <QuantitySelector
                      quantity={quantity}
                      onChange={handleQuantityChange}
                    />
                  </div>
                )}

                {product.isAvailable && (
                  <div className="bg-[var(--color-card)] rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--color-muted-foreground)]">Total Price</span>
                      <span className="text-2xl font-bold text-brand-700">
                        {formattedTotal}
                      </span>
                    </div>
                  </div>
                )}

                {product.isAvailable && (
                  <div className="flex flex-col gap-3 mb-6">
                    <Button
                      onClick={handleAddToOrder}
                      className="w-full md:w-auto bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-md shadow"
                    >
                      Add to order
                    </Button>
                    {totalOrderCount > 0 && (
                      <p className="text-sm text-[var(--color-muted-foreground)]">
                        {totalOrderCount} item{totalOrderCount > 1 ? "s" : ""} currently added to your order list.
                      </p>
                    )}
                  </div>
                )}

                <div className="mb-8">
                  <ProductBenefits benefits={product.benefits} />
                </div>

                <div className="mt-auto">
                  <OrderDetails
                    totalPrice={formattedTotal}
                    isAvailable={product.isAvailable}
                    quantity={quantity}
                    product={product}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16"
        >
          <CustomerReviewsSection reviews={product.reviews} />
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href={`/${product.category}`}
            className="inline-flex items-center gap-2 text-[var(--color-muted-foreground)] hover:text-brand-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to {product.category || "products"}
          </Link>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
