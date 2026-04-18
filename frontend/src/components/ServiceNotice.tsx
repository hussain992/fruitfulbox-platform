"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ServiceNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const today = new Date();
    const start = new Date("2025-06-26");
    const end = new Date("2025-07-07");
    if (today >= start && today <= end) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="bg-yellow-200 text-yellow-900 px-4 py-2 md:py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-xs md:text-base">
      <p className="font-medium">
        Note: Service paused{" "}
        <strong>June 26-July 7</strong>. Resume <strong>July 8</strong>.
      </p>
      <button onClick={() => setShow(false)} className="ml-auto flex-shrink-0">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
