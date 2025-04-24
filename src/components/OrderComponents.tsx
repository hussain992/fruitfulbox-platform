"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { getNextDeliveryDates } from "@/lib/utils";

interface Props {
  title: string;
  price: string;
}

const OrderDetails: React.FC<Props> = ({ title, price }) => {
  const [selectedDate, setSelectedDate] = React.useState("");
  const deliveryOptions = getNextDeliveryDates();

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'm interested in buying:\n\n🍎 ${title}\n💰 Price: ${price} ${selectedDate ? `\n📅 Preferred Delivery: ${selectedDate}` : ""}`;
    // const message = `Hi, I'm interested in buying:\n\n🍎 ${product.title}\n💰 Price: ${product.price}${
    //   product.originalPrice ? ` (Original: ${product.originalPrice})` : ""
    // }${selectedDate ? `\n📅 Preferred Delivery: ${selectedDate}` : ""}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "917558535953";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (<>
    <div className="mb-4">
      <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">Select Delivery Date:</label>
      <select
        id="deliveryDate"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-45"
      >
        <option value="">Choose a date</option>
        {deliveryOptions.map((date, index) => (
          <option key={index} value={date}>{date}</option>
        ))}
      </select>
    </div>
    {/* Sticky Order Button for Mobile */}
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white px-4 py-3 border-t shadow-lg">
      <Button
        onClick={handleWhatsAppOrder}
        className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow"
      >
        Order on WhatsApp
      </Button>
    </div>
    <Button
      onClick={handleWhatsAppOrder}
      className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow"
    >
      Order on WhatsApp
    </Button>
  </>
  );
};

export default OrderDetails;