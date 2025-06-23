"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import React from "react";
import { getNextDeliveryDates } from "@/lib/utils";

interface UserDetails {
  selectedDate: string;
  flatNo: string;
  wing: string;
  society: string;
}
interface DetailsDialogProps {
  getDetails: (address: UserDetails) => void;
  defaultOpen: boolean;
}

export const DetailsDialog: React.FC<DetailsDialogProps> = ({
  getDetails,
  defaultOpen,
}) => {
  // State to hold user details
  const [userDetails, setUserDetails] = React.useState({
    selectedDate: "",
    flatNo: "",
    wing: "",
    society: "",
  });
  const [hasError, setHasError] = React.useState(false);
  // const [selectedDate, setSelectedDate] = React.useState("");
  const [open, setOpen] = useState(false); // State to control the dialog open/close


  React.useEffect(() => {
    if (defaultOpen) 
      setOpen(true);
  }, [defaultOpen]);

  const handleOpenChange = () => {
    if (open) setOpen(false);
  };
  const deliveryOptions = getNextDeliveryDates();

  const handleSubmit = () => {  
    if (!userDetails.selectedDate || !userDetails.flatNo || !userDetails.wing || !userDetails.society) {
      console.log("Please fill in all fields.");
      setHasError(true);
      setOpen(true);
      return;
    }
    getDetails(userDetails);
  };

  const deliveryDateComponent = () => {
    return (
      <>
        <Label htmlFor="Select Delivery Date">Select Delivery Date:</Label>
        <select
          id="deliveryDate"
          value={userDetails.selectedDate}
          onChange={(e) =>
            setUserDetails((prev) => ({
              ...prev,
              selectedDate: e.target.value,
            }))
          }
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        >
          <option value="">Choose a date</option>
          {deliveryOptions.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
      </>
    );
  };

  if (!deliveryOptions || deliveryOptions.length === 0) {
    return <div>No delivery dates available</div>;
  }

  const fields = [{name: "flatNo", label: "Flat No."}, {name: "wing", label: "Wing"}, {name: "society", label: "Society Name"}];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        onClick={() => {
          setOpen(true);
        }}
        asChild
      >
        <Button variant="outline">Add Delivery Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md fixed">
        <DialogHeader>
          <DialogTitle>Enter Your Delivery Details</DialogTitle>
        </DialogHeader>
        {deliveryDateComponent()}
        <div className="grid gap-4 py-2">
          {fields.map((field) => (
            <div key={field.name} className="grid col-span-6 gap-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                value={userDetails[field.name as keyof typeof userDetails]}
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    [field.name]: e.target.value,
                  }))
                }
                placeholder={`e.g. ${field.label}`}
              />
            </div>
          ))}
        </div>
        {hasError && <div className="text-red">Please fill in all fields.</div>}
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
