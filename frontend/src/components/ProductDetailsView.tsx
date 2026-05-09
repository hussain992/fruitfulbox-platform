"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ServiceNotice from "@/components/ServiceNotice";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import ProductImage from "./ProductDetailsImage";
import ProductPrice from "./ProductDetailsPrice";
import ProductBenefits from "./ProductDetailsBenefits";
import StockBadge from "./ProductDetailsStockBadge";
import { Product } from "@/types";

interface ProductDetailsViewProps {
  product: Product;
}

export default function ProductDetailsView({ product }: ProductDetailsViewProps) {
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

                <ProductDetailsClient product={product} />

                <div className="mb-8">
                  <ProductBenefits benefits={product.benefits} />
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
}
