"use client";

interface ProductPriceProps {
  discounted: string | undefined;
  original: string | undefined;
}

function parsePrice(priceLabel: string | undefined): number {
  if (!priceLabel) return 0;
  const match = priceLabel.match(/[0-9]+(?:\.[0-9]+)?/);
  return match ? Number(match[0]) : 0;
}

function calculateDiscount(original: string | undefined, discounted: string | undefined): number {
  const originalPrice = parsePrice(original);
  const discountedPrice = parsePrice(discounted);
  if (!originalPrice || !discountedPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

export default function ProductPrice({ discounted, original }: ProductPriceProps) {
  const discount = calculateDiscount(original, discounted);
  
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-3xl font-bold text-brand-700">{discounted}</span>
      {original && discounted !== original && (
        <>
          <span className="text-lg text-[var(--color-muted)] line-through">{original}</span>
          {discount > 0 && (
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
        </>
      )}
    </div>
  );
}