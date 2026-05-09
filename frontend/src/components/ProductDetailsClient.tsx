"use client";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import QuantitySelector from "./ProductDetailsQuantitySelector";
import OrderDetails from "@/components/OrderComponents";
import { parsePrice, formatCurrency } from "./ProductDetails.utils";
import useStore from "@/lib/store";
import { Product } from "@/types";

interface ProductDetailsClientProps {
  product: Product;
}

const ProductDetailsClient: React.FC<ProductDetailsClientProps> = ({ product }) => {
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

  return (
    <>
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

      <div className="mt-auto">
        <OrderDetails
          totalPrice={formattedTotal}
          isAvailable={product.isAvailable}
          quantity={quantity}
          product={product}
        />
      </div>
    </>
  );
};

export default ProductDetailsClient;
