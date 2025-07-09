"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DetailsDialog } from "./DetailsDialog";
import { useCaptureUTM } from "@/hooks/useCaptureUTM";

interface Props {
  title: string;
  price: string;
  isAvailable?: boolean; // Optional prop to indicate availability
}

const OrderDetails: React.FC<Props> = ({ title, price, isAvailable }) => {
  const [userDetails, setUserDetails] = React.useState({
    selectedDate: "",
    flatNo: "",
    wing: "",
    society: "",
  });
  const [open, setOpen] = React.useState(false); // State to control the dialog open/close
  
  // This hook captures UTM parameters and stores them in localStorage
  useCaptureUTM();

  // Function to handle WhatsApp order
  const handleWhatsAppOrder = () => {
    if (userDetails.flatNo == "") {
      console.log("Please enter your userDetails.");
      setOpen(true);
      return;
    }
    const addr = `\n🏠 Address: Flat no ${userDetails.flatNo}, ${
      userDetails.wing
    } ${userDetails.wing && "wing,"} ${
      userDetails.society && userDetails.society
    }`;
    const source = localStorage.getItem("utm_source") || "direct";
    const message = `Hi, I'm interested in buying:\n\n🥭 ${title}\n💰 Price: ${price} 
      ${
        userDetails.selectedDate &&
        `\n📅 Preferred Delivery: ${userDetails.selectedDate}`
      } ${addr && addr} ${source}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "917558535953";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };
  const buttonTitle = isAvailable
    ? `Order on WhatsApp for ${price}`
    : "Out of Stock";
  return (
    <>
      <div className="mb-4"></div>
      {isAvailable && (
        <DetailsDialog
          getDetails={(details) => setUserDetails(details)}
          defaultOpen={open}
        />
      )}
      {/* Sticky Order Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white px-4 py-3 border-t shadow-lg">
        <Button
          onClick={handleWhatsAppOrder}
          disabled={!isAvailable || new Date() < new Date("2025-06-26")}
          className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow"
        >
          {buttonTitle}
        </Button>
      </div>
      <Button
        onClick={handleWhatsAppOrder}
        disabled={!isAvailable || new Date() < new Date("2025-06-26")}
        className="hidden ml-4 md:inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow"
      >
        {buttonTitle}
      </Button>
    </>
  );
};

export default OrderDetails;
