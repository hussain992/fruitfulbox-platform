/**
 * Utility functions for ProductDetails component
 */

/**
 * Format price string to extract numeric value
 * @param priceLabel - Price string like "₹129/kg" or "129"
 * @returns Numeric price value
 */
export function parsePrice(priceLabel: string | undefined): number {
  if (!priceLabel) return 0;
  const match = priceLabel.match(/[0-9]+(?:\.[0-9]+)?/);
  return match ? Number(match[0]) : 0;
}

/**
 * Format number as Indian currency
 * @param amount - Numeric amount
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Calculate discount percentage
 * @param original - Original price string
 * @param discounted - Discounted price string
 * @returns Discount percentage
 */
export function calculateDiscount(original: string | undefined, discounted: string | undefined): number {
  const originalPrice = parsePrice(original);
  const discountedPrice = parsePrice(discounted);
  if (!originalPrice || !discountedPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}