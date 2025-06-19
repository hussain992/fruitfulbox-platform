'use client';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function ServiceNotice() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const today = new Date();
    const start = new Date('2025-06-26');
    const end = new Date('2025-07-07');
    if (today >= start && today <= end) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="bg-yellow-200 text-yellow-900 px-4 py-3 flex justify-between items-center text-sm md:text-base">
      <p>
        Note: We are not accepting orders from <strong>June 26 to July 7</strong>.
        Service will resume on <strong>July 8</strong>.
      </p>
      <button onClick={() => setShow(false)} className="ml-4">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
