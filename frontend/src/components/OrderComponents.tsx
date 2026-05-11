"use client";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { DetailsDialog } from "./DetailsDialog";
import { useCaptureUTM } from "@/hooks/useCaptureUTM";
import { useDeviceType } from "@/hooks/useDeviceType";
import FallbackOrderOptions from "./FallbackOrderOptions";
import useStore from "@/lib/store";
import { Product } from "@/types";
import { parsePrice, formatCurrency } from "./ProductDetails.utils";

interface Props {
  title?: string;
  totalPrice: string;
  isAvailable?: boolean; // Optional prop to indicate availability
  quantity?: string;
  product?: Product | null;
}

const OrderDetails: React.FC<Props> = ({ totalPrice, isAvailable, quantity, product }) => {
  const orderItems = useStore((state) => state.orderItems);
  const clearOrderItems = useStore((state) => state.clearOrderItems);
  const userDetails = useStore((state) => state.deliveryDetails);
  const setUserDetails = useStore((state) => state.setDeliveryDetails);
  const [open, setOpen] = useState(false); // State to control the dialog open/close
  const hasHydratedDetails = useRef(false);
  const [isRedirecting, setIsRedirecting] = useState(false); // State to show redirect message
  const [showFallback, setShowFallback] = useState(false); // State to show fallback options
  const [messageText, setMessageText] = useState(""); // Store the message for fallback
  const { isMobile } = useDeviceType(); // Detect if device is mobile or desktop
  const searchParams = useSearchParams();
  const isBuyNow = searchParams.get("action") === "buy-now";

  const currentItems = useMemo(
    () =>
      orderItems.length > 0
        ? orderItems
        : product
        ? [{ ...product, quantity: Number(quantity || "1") }]
        : [],
    [orderItems, product, quantity],
  );

  const orderItemCount = currentItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = currentItems.reduce((sum, item) => {
    const price = parsePrice(item.price.discounted ?? item.price.original);
    return sum + price * item.quantity;
  }, 0);

  const formattedOrderTotal = formatCurrency(totalAmount);

  useEffect(() => {
    if (isBuyNow) {
      setOpen(true);
    }
  }, [isBuyNow]);
  // This hook captures UTM parameters and stores them in localStorage
  useCaptureUTM();

  // Function to handle WhatsApp order
  const handleWhatsAppOrder = () => {
      setOpen(true);

  };

  const performWhatsAppRedirect = useCallback((details?: typeof userDetails) => {
    const currentDetails = details ?? userDetails;
    const addr = `\n🏠 Address: Flat no ${currentDetails.flatNo}, ${
      currentDetails.wing
    } ${currentDetails.wing ? "wing," : ""} ${currentDetails.society || ""}`;
    const source = localStorage.getItem("utm_source") || "direct";

    const orderLines = currentItems.map((item) => {
      const unitPrice = item.price.discounted ?? item.price.original;
      return `- ${item.quantity} x ${item.title} (${unitPrice})`;
    });

    const message = `Hi, I'm interested in buying:\n\n${orderLines.join("\n")}\n\nTotal: ${formattedOrderTotal}${
      userDetails.selectedDate ? `\n📅 Preferred Delivery: ${userDetails.selectedDate}` : ""
    }${addr}\nSource: ${source}`;

    setMessageText(message);
    setIsRedirecting(true);

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "917558535953";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    if (!isMobile) {
      setTimeout(() => {
        setIsRedirecting(false);
        setShowFallback(true);
      }, 500);
    } else {
      setTimeout(() => {
        setIsRedirecting(false);
        window.open(whatsappUrl, "_blank");
      }, 500);
    }
  }, [currentItems, formattedOrderTotal, isMobile, userDetails]);

  useEffect(() => {
    if (!hasHydratedDetails.current) {
      hasHydratedDetails.current = true;
      return;
    }
  }, []);

  const canOrder = orderItems.length > 0 || Boolean(isAvailable);
  const buttonTitle = orderItems.length > 0
    ? `Order ${orderItemCount} item${orderItemCount > 1 ? "s" : ""} on WhatsApp for ${formattedOrderTotal}`
    : isAvailable
    ? `Order on WhatsApp for ${totalPrice}`
    : "Out of Stock";
  const disableOrderButton = !canOrder;

  return (
    <>
      <div className="mb-4"></div>
      {(orderItems.length > 0 || isAvailable) && (
        <DetailsDialog
          getDetails={(details) => {
            setUserDetails(details);
            performWhatsAppRedirect(details);
          }}
          defaultOpen={open}
          closeDialog={() => setOpen(false)}
        />
      )}

      {orderItems.length > 0 && (
        <div className="mb-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[var(--color-foreground)]">Order list</p>
              <p className="text-sm text-[var(--color-muted-foreground)]">
                {orderItemCount} item{orderItemCount > 1 ? "s" : ""} added
              </p>
            </div>
            <button
              type="button"
              onClick={clearOrderItems}
              className="text-sm text-brand-600 hover:text-brand-700"
            >
              Clear
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {orderItems.map((item) => {
              const itemUnitPrice = item.price.discounted ?? item.price.original;
              const itemTotal = formatCurrency(parsePrice(itemUnitPrice) * item.quantity);
              return (
                <li key={item.slug} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-[var(--color-foreground)]">
                      {item.quantity} x {item.title}
                    </p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">
                      {itemUnitPrice} each
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-brand-700">{itemTotal}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {isRedirecting && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[var(--color-card)] rounded-lg shadow-lg p-6 text-center">
            <div className="animate-spin mb-4 inline-block">
              <div className="h-8 w-8 border-4 border-brand-500 border-t-transparent rounded-full"></div>
            </div>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">
              Opening WhatsApp...
            </p>
            <p className="text-sm text-[var(--color-muted-foreground)] mt-2">
              Redirecting to WhatsApp to complete your order
            </p>
            <button
              onClick={() => {
                setIsRedirecting(false);
                setShowFallback(true);
              }}
              className="mt-4 text-sm text-brand-700 hover:text-brand-800 underline"
            >
              Didn&apos;t work? Try alternatives
            </button>
          </div>
        </div>
      )}

      {!isMobile && (
        <FallbackOrderOptions
          isOpen={showFallback}
          messageText={messageText}
          onClose={() => setShowFallback(false)}
          phoneNumber="917558535953"
        />
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50 md:static bg-[var(--color-card)] px-4 py-3 md:p-0 border-t border-[var(--color-border)] md:border-t-0 shadow-lg md:shadow-none">
        <Button
          onClick={handleWhatsAppOrder}
          disabled={disableOrderButton || isRedirecting}
          className="w-full md:w-auto md:ml-4 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 md:py-2 rounded-md shadow"
        >
          {isRedirecting ? "Redirecting..." : buttonTitle}
        </Button>
      </div>
    </>
  );
};

export default OrderDetails;
