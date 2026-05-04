"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QuantitySelectorProps {
  quantity: string;
  onChange: (value: string) => void;
}

export default function QuantitySelector({ quantity, onChange }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-[var(--color-muted-foreground)]">Quantity</span>
      <div className="flex items-center gap-1 bg-[var(--color-card)] rounded-lg p-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange((Number(quantity) - 1).toString())}
          className="h-8 w-8 rounded-md"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </Button>
        <Input
          type="number"
          min={1}
          step={1}
          value={quantity}
          onChange={(e) => onChange(e.target.value)}
          className="w-16 h-8 text-center border-0 bg-transparent font-medium"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange((Number(quantity || "0") + 1).toString())}
          className="h-8 w-8 rounded-md"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </Button>
      </div>
      <span className="text-sm text-[var(--color-muted)]">box(es)</span>
    </div>
  );
}