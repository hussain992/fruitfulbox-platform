"use client";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DetailsDialog } from "./DetailsDialog";
import { useCaptureUTM } from "@/hooks/useCaptureUTM";
import { useDeviceType } from "@/hooks/useDeviceType";
import FallbackOrderOptions from "./FallbackOrderOptions";

interface Props {
  title?: string;
  totalPrice: string;
  isAvailable?: boolean; // Optional prop to indicate availability
}

const OrderDetails: React.FC<Props> = ({ title, totalPrice, isAvailable }) => {
  const [userDetails, setUserDetails] = useState({
    selectedDate: "",
    flatNo: "",
    wing: "",
    society: "",
  });
  const [open, setOpen] = useState(false); // State to control the dialog open/close
  const [isRedirecting, setIsRedirecting] = useState(false); // State to show redirect message
  const [showFallback, setShowFallback] = useState(false); // State to show fallback options
  const [messageText, setMessageText] = useState(""); // Store the message for fallback
  const { isMobile } = useDeviceType(); // Detect if device is mobile or desktop
  const searchParams = useSearchParams();
  const isBuyNow = searchParams.get("action") === "buy-now";
  useEffect(() => {
    if (isBuyNow) {
      setOpen(true);
    }
  }, [isBuyNow]);
  // This hook captures UTM parameters and stores them in localStorage
  useCaptureUTM();

  // Function to handle WhatsApp order
  const handleWhatsAppOrder = () => {
    if (userDetails.flatNo == "") {
      setOpen(true);
    } else {
      performWhatsAppRedirect();
    }
  };

  const performWhatsAppRedirect = useCallback(() => {
    const addr = `\n🏠 Address: Flat no ${userDetails.flatNo}, ${
      userDetails.wing
    } ${userDetails.wing && "wing,"} ${
      userDetails.society && userDetails.society
    }`;
    const source = localStorage.getItem("utm_source") || "direct";
    const message = `Hi, I'm interested in buying:\n\n🥭 ${title}\n💰 Total Price: ${totalPrice} 
      ${
        userDetails.selectedDate &&
        `\n📅 Preferred Delivery: ${userDetails.selectedDate}`
      } ${addr && addr} ${source}`;

    setMessageText(message);
    setIsRedirecting(true);

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "917558535953";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // console.log("WhatsApp URL: ", whatsappUrl);

    // Show fallback options only on desktop, after a delay
    if (!isMobile) {
      setTimeout(() => {
        setIsRedirecting(false);
        setShowFallback(true);
      }, 500);
    } else {
      // On mobile, just hide the redirecting modal
      setTimeout(() => {
        setIsRedirecting(false);
        // Open WhatsApp (works on mobile for app, desktop for web)
        window.open(whatsappUrl, "_blank");
      }, 500);
    }
  }, [userDetails, title, totalPrice, isMobile]);

  useEffect(() => {
    if (userDetails?.flatNo && userDetails?.society) {
      performWhatsAppRedirect();
    }
  }, [performWhatsAppRedirect, userDetails]);

  const buttonTitle = isAvailable
    ? `Order on WhatsApp for ${totalPrice}`
    : "Out of Stock";
  const disableOrderButton = !isAvailable;
  return (
    <>
      <div className="mb-4"></div>
      {isAvailable && (
        <DetailsDialog
          getDetails={(details) => {
            setUserDetails(details);
            // Trigger WhatsApp redirect after details are set
            // setTimeout(() => performWhatsAppRedirect(), 500);
          }}
          defaultOpen={open}
          closeDialog={() => setOpen(false)}
        />
      )}
      {/* Redirect Message */}
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

      {/* Fallback Options Modal - Only show on desktop */}
      {!isMobile && (
        <FallbackOrderOptions
          isOpen={showFallback}
          messageText={messageText}
          onClose={() => setShowFallback(false)}
          phoneNumber="917558535953"
          // whatsappweburl={}
        />
      )}
      {/* Order Button - Sticky on Mobile, Inline on Desktop */}
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
