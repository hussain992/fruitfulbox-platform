"use client";

import { cn } from "@/lib/utils";

interface StockBadgeProps {
  isAvailable: boolean;
}

export default function StockBadge({ isAvailable }: StockBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full",
      isAvailable 
        ? "bg-brand-100 text-brand-700" 
        : "bg-red-100 text-red-700"
    )}>
      <span className={cn(
        "w-2 h-2 rounded-full",
        isAvailable ? "bg-brand-500 animate-pulse" : "bg-red-500"
      )} />
      {isAvailable ? "In Stock" : "Out of Stock"}
    </span>
  );
}