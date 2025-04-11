"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  price: string;
}

const OrderButton: React.FC<Props> = ({ title, price }) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi, I'm interested in buying:\n\n🍎 ${title}\n💰 Price: ${price}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "917558535953";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppOrder}
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow"
    >
      Order on WhatsApp
    </Button>
  );
};

export default OrderButton;