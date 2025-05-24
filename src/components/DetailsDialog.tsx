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
export const DetailsDialog = ({
  getDetails,
  defaultOpen,
}: {
  getDetails: (address: UserDetails) => void;
  defaultOpen: boolean;
}) => {
  const [flatNo, setFlatNo] = useState("");
  const [wing, setWing] = useState("");
  const [society, setSociety] = useState("");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [open, setOpen] = useState(false); // State to control the dialog open/close

  const handleOpenChange = () => {
    if (open) setOpen(false);
  };
  React.useEffect(() => {
    if (defaultOpen) {
      setOpen(true);
    }
  }, [defaultOpen]);
  const deliveryOptions = getNextDeliveryDates();
  // const deliveryOptions: unknown[] = [];


  const handleSubmit = () => {
    console.log({ flatNo, wing, society });
    getDetails({ selectedDate, flatNo, wing, society });
    // You can send this data to an API or store in state
  };
  // console.log('defaultOpen', defaultOpen, open);
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
        <Label htmlFor="Select Delivery Date">Select Delivery Date:</Label>
        <select
          id="deliveryDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        >
          <option value="">Choose a date</option>
          {deliveryOptions.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
        <div className="grid gap-4 py-2">
          <div className="grid col-span-6 gap-2">
            <Label htmlFor="flatNo">Flat No.</Label>
            <Input
              id="flatNo"
              value={flatNo}
              onChange={(e) => setFlatNo(e.target.value)}
              placeholder="e.g. 203"
            />
          </div>
          <div className="grid col-span-6 gap-2">
            <Label htmlFor="wing">Wing</Label>
            <Input
              id="wing"
              value={wing}
              onChange={(e) => setWing(e.target.value)}
              placeholder="e.g. B"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="society">Society Name</Label>
            <Input
              id="society"
              value={society}
              onChange={(e) => setSociety(e.target.value)}
              placeholder="e.g. Green Meadows"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
