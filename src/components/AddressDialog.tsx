"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose

} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import React from "react";

interface Address {
  flatNo: string;
  wing: string;
  society: string;
}
export const AddressDialog = ({ getAddress, defaultOpen }: { getAddress: (address: Address) => void, defaultOpen: boolean }) => {
  const [flatNo, setFlatNo] = useState("");
  const [wing, setWing] = useState("");
  const [society, setSociety] = useState("");
  const [open, setOpen] = useState(false); // State to control the dialog open/close    

  const handleOpenChange = () => {
    if(open ) setOpen(false);
  };
  React.useEffect(() => { 
    if (defaultOpen) {    
      setOpen(true)
    }}, [defaultOpen]);

  const handleSubmit = () => {
    console.log({ flatNo, wing, society });
    getAddress({ flatNo, wing, society });
    // You can send this data to an API or store in state
  };
  // console.log('defaultOpen', defaultOpen, open);
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger onClick={() => {setOpen(true)}} asChild >
        <Button variant="outline">Add Address</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md fixed">
        <DialogHeader>
          <DialogTitle>Enter Your Address</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
}
