"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import React from "react";
import { getNextDeliveryDates } from "@/lib/utils";

interface UserDetails {
  selectedDate: string;
  flatNo: string;
  wing: string;
  society: string;
  area: string;
}

interface DetailsDialogProps {
  getDetails: (address: UserDetails) => void;
  defaultOpen: boolean;
}

export const DetailsDialog: React.FC<DetailsDialogProps> = ({
  getDetails,
  defaultOpen,
}) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    selectedDate: "",
    flatNo: "",
    wing: "",
    society: "",
    area: "",
  });
  const [hasError, setHasError] = useState(false);
  const [open, setOpen] = useState(false);

  // Sync internal open state with prop
  useEffect(() => {
    if (defaultOpen) setOpen(true);
  }, [defaultOpen]);

  // IMPORTANT: This allows the X button and Overlay clicks to work
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) setHasError(false); // Reset error when closing
  };

  const deliveryOptions = getNextDeliveryDates();

  const handleSubmit = () => {
    if (
      !userDetails.selectedDate ||
      !userDetails.flatNo ||
      !userDetails.wing ||
      !userDetails.society
    ) {
      setHasError(true);
    } else {
      setHasError(false);
      getDetails(userDetails);
      setOpen(false); // Manually close only if validation passes
    }
  };

  if (!deliveryOptions || deliveryOptions.length === 0) {
    return <div>No delivery dates available</div>;
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md fixed" aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>Enter Your Delivery Details</DialogTitle>
        </DialogHeader>

        {/* Delivery Date Select */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="deliveryDate">Select Delivery Date:</Label>
          <select
            id="deliveryDate"
            value={userDetails.selectedDate}
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, selectedDate: e.target.value }))
            }
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
          >
            <option value="">Choose a date</option>
            {deliveryOptions.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4 py-2">
          {[
            { id: "flatNo", label: "Flat No." },
            { id: "wing", label: "Wing" },
            { id: "society", label: "Society Name" },
            { id: "area", label: "Area" },
          ].map((field) => (
            <div key={field.id} className="grid grid-cols-1 gap-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              <Input
                id={field.id}
                value={userDetails[field.id as keyof UserDetails]}
                onChange={(e) =>
                  setUserDetails((prev) => ({ ...prev, [field.id]: e.target.value }))
                }
                placeholder={`e.g. ${field.label}`}
              />
            </div>
          ))}
        </div>

        {hasError && (
          <div className="text-red-500 text-sm font-medium">
            Please fill in all required fields.
          </div>
        )}

        <DialogFooter>
          {/* Use a normal Button here to handle validation before closing */}
          <Button onClick={handleSubmit} className="w-full">
            Order Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
