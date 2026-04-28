"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import OrderDetails from "@/components/OrderComponents";
import ServiceNotice from "@/components/ServiceNotice";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import useStore from "@/lib/store";
import { useEffect, useState, useCallback } from "react";
import { ProductDetailsSkeleton } from "./ProductDetailsSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// ============ Utility Functions ============

function parsePrice(priceLabel: string | undefined): number {
  if (!priceLabel) return 0;
  const match = priceLabel.match(/[0-9]+(?:\.[0-9]+)?/);
  return match ? Number(match[0]) : 0;
}

function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function calculateDiscount(original: string | undefined, discounted: string | undefined): number {
  const originalPrice = parsePrice(original);
  const discountedPrice = parsePrice(discounted);
  if (!originalPrice || !discountedPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

// ============ Sub-Components ============

const QuantitySelector: React.FC<{
  quantity: string;
  onChange: (value: string) => void;
}> = ({ quantity, onChange }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm font-medium text-gray-600">Quantity</span>
    <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChange((Number(quantity) - 1).toString())}
        className="h-8 w-8 rounded-md"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </Button>
      <Input
        type="number"
        min={1}
        step={1}
        value={quantity}
        onChange={(e) => onChange(e.target.value)}
        className="w-16 h-8 text-center border-0 bg-transparent font-medium"
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChange((Number(quantity || "0") + 1).toString())}
        className="h-8 w-8 rounded-md"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </Button>
    </div>
    <span className="text-sm text-gray-500">box(es)</span>
  </div>
);

const ProductPrice: React.FC<{
  discounted: string | undefined;
  original: string | undefined;
}> = ({ discounted, original }) => {
  const discount = calculateDiscount(original, discounted);
  
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-3xl font-bold text-green-600">{discounted}</span>
      {original && discounted !== original && (
        <>
          <span className="text-lg text-gray-400 line-through">{original}</span>
          {discount > 0 && (
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
        </>
      )}
    </div>
  );
};

const ProductBenefits: React.FC<{
  benefits: string[] | undefined;
}> = ({ benefits }) =>
  benefits?.length ? (
    <div className="bg-green-50 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-green-800 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Why Choose Us
      </h3>
      <ul className="space-y-2">
        {benefits.map((benefit, i) => (
          <li key={i} className="text-sm text-green-700 flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 shrink-0">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  ) : null;

const StockBadge: React.FC<{ isAvailable: boolean }> = ({ isAvailable }) => (
  <span className={cn(
    "inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full",
    isAvailable 
      ? "bg-green-100 text-green-700" 
      : "bg-red-100 text-red-700"
  )}>
    <span className={cn(
      "w-2 h-2 rounded-full",
      isAvailable ? "bg-green-500 animate-pulse" : "bg-red-500"
    )} />
    {isAvailable ? "In Stock" : "Out of Stock"}
  </span>
);

// ============ Main Component ============

const ProductDetails: React.FC<{ category: string; slug: string }> = ({
  slug,
}) => {
  const product = useStore((state) => state.product);
  const setProduct = useStore((state) => state.setProduct);

  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState<string>("1");
  const [imageError, setImageError] = useState(false);

  // Derived values
  const unitPriceLabel =
    product?.price?.discounted ?? product?.price?.original ?? "₹0/kg";
  const unitPrice = parsePrice(unitPriceLabel);
  const totalPrice = unitPrice * Number(quantity || 0);
  const formattedTotal = formatCurrency(totalPrice);

  const handleQuantityChange = useCallback((value: string) => {
    if (value === "") {
      setQuantity("");
      return;
    }
    const next = Number(value);
    if (Number.isNaN(next) || next < 1) return;
    setQuantity(next.toString());
  }, []);

  // Reset image error when product changes
  useEffect(() => {
    setImageError(false);
  }, [product?.slug]);

  // Data fetching
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

  // Render
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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${product.category}`} className="hover:text-green-600 transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-800 truncate">{product.title}</span>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Product Image */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg"
              >
                {!imageError ? (
                  <Image
                    src={product.image}
                    alt={product.title ?? "Product Image"}
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                      <p className="text-sm">Image not available</p>
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm capitalize">
                    {product.category}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h1>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Price Section */}
                <div className="mb-6">
                  {product.isAvailable && (
                    <ProductPrice
                      discounted={product.price.discounted}
                      original={product.price.original}
                    />
                  )}
                </div>

                {/* Stock Status */}
                <div className="mb-6">
                  <StockBadge isAvailable={product.isAvailable ?? false} />
                </div>

                {/* Quantity Selector */}
                {product.isAvailable && (
                  <div className="mb-6">
                    <QuantitySelector
                      quantity={quantity}
                      onChange={handleQuantityChange}
                    />
                  </div>
                )}

                {/* Total Price */}
                {product.isAvailable && (
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Price</span>
                      <span className="text-2xl font-bold text-green-600">
                        {formattedTotal}
                      </span>
                    </div>
                  </div>
                )}

                {/* Benefits */}
                <div className="mb-8">
                  <ProductBenefits benefits={product.benefits} />
                </div>

                {/* Order Button */}
                <div className="mt-auto">
                  <OrderDetails
                    title={product.title}
                    totalPrice={formattedTotal}
                    isAvailable={product.isAvailable}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16"
        >
          <CustomerReviewsSection reviews={product.reviews} />
        </motion.div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href={`/${product.category}`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors"
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
