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
import { useState, useEffect, useMemo } from "react";
import { getNextDeliveryDates } from "@/lib/utils";
import useStore from "@/lib/store";

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
  closeDialog: () => void;
}

const requiredFields: Array<keyof UserDetails> = [
  "selectedDate",
  "flatNo",
  "society",
];

export const DetailsDialog: React.FC<DetailsDialogProps> = ({
  getDetails,
  defaultOpen,
  closeDialog,
}) => {
  const userDetails = useStore((state) => state.deliveryDetails);
  const setUserDetails = useStore((state) => state.setDeliveryDetails);
  const [hasError, setHasError] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (defaultOpen) setOpen(true);
  }, [defaultOpen]);

  const deliveryOptions = useMemo(() => getNextDeliveryDates(), []);
  const deliveryNote = useMemo(() => {
    if (deliveryOptions.length === 0) return "";

    const firstOption = deliveryOptions[0];
    const { daysAhead, label } = firstOption;
    const daysText =
      daysAhead === 0 ? "today" : daysAhead === 1 ? "in 1 day" : `in ${daysAhead} days`;

    return `Fastest delivery available ${daysText} (${label}).`;
  }, [deliveryOptions]);

  const handleClose = () => {
    setOpen(false);
    setHasError(false);
    closeDialog();
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setHasError(false);
      closeDialog();
    }
  };

  const getFieldError = (field: keyof UserDetails) =>
    hasError && requiredFields.includes(field) && !userDetails[field];

  const handleSubmit = () => {
    if (requiredFields.some((field) => !userDetails[field])) {
      setHasError(true);
      return;
    }

    setHasError(false);
    getDetails(userDetails);
    handleClose();
  };

  if (!deliveryOptions || deliveryOptions.length === 0) {
    return (
      <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
        No delivery dates are available at the moment. Please try again later.
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md fixed" aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>Delivery details</DialogTitle>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
            Share your delivery address and preferred delivery date so we can prepare your order for WhatsApp confirmation.
          </p>
        </DialogHeader>

        <div className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="deliveryDate">Delivery date</Label>
            <select
              id="deliveryDate"
              value={userDetails.selectedDate}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  selectedDate: e.target.value,
                })
              }
              className={`w-full rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                getFieldError("selectedDate")
                  ? "border-red-500 bg-red-50"
                  : "border-[var(--color-border)] bg-white"
              }`}
            >
              <option value="">Choose your date</option>
              {deliveryOptions.map((option, index) => (
                <option key={index} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-[var(--color-muted-foreground)]">
              {deliveryNote}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { id: "flatNo", label: "Flat / Door No*", placeholder: "e.g. 102" },
              { id: "wing", label: "Wing / Block", placeholder: "e.g. A" },
              { id: "society", label: "Society Name*", placeholder: "e.g. Green Meadows" },
              { id: "area", label: "Area", placeholder: "e.g. Baner" },
            ].map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input
                  id={field.id}
                  value={userDetails[field.id as keyof UserDetails]}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      [field.id]: e.target.value,
                    })
                  }
                  placeholder={field.placeholder}
                  className={getFieldError(field.id as keyof UserDetails) ? "border-red-500 bg-red-50" : ""}
                  aria-invalid={getFieldError(field.id as keyof UserDetails)}
                />
              </div>
            ))}
          </div>

          {hasError && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Please fill in the required fields marked with *.
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col gap-3 sm:flex-row sm:justify-end sm:gap-4">
          <Button variant="secondary" onClick={handleClose} className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="w-full sm:w-auto">
            Confirm details
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
