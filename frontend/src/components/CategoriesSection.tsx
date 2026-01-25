"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Fruits", icon: "🍎", href: "/fruits" },
  { name: "Cut Fruits", icon: "🍉", href: "/cut_fruits" },
  { name: "Fruit Boxes", icon: "📦", href: "/boxes" },
  { name: "Jam", icon: "🍯", href: "/jams" },
];

export default function CategoriesSection() {
  const [active, setActive] = useState(5);

  return (
    <section className="w-full px-4 py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Shop By Category
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Browse our curated selection of fresh fruits and products
        </p>
        
        <div className="grid grid-flow-col gap-4 sm:gap-16 justify-center">
          {categories.map((cat, i) => (
            <div key={i}>
              <Link
                href={cat.href}
                onClick={() => setActive(i)}
                className={`
                  flex flex-col items-center justify-center m-auto
                  w-20 h-20
                  bg-white shadow-md transition transform hover:scale-105 active:scale-95
                  ${active === i ? "ring-2 ring-green-500" : ""}
                  
                  rounded-full 
                  sm:rounded-2xl sm:w-32 sm:h-28
                `}
              >
                <span className="text-5xl sm:text-7xl" role="img" aria-label={cat.name}>
                  {cat.icon}
                </span>
              </Link>
              <div className="text-sm sm:text-base mt-2 text-center font-medium text-gray-900">
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
