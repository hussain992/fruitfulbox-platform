"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Fruits", icon: "🍎", href: "/fruits" },
  { name: "Cut Fruits", icon: "🍉", href: "/cut_fruits" },
  { name: "Fruit Boxes", icon: "📦", href: "/boxes" },
  { name: "Jam", icon: "🍯", href: "/jams" },
  // { name: "New Category", icon: "✨" }, // added new category
];

export default function CategoriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full px-4 py-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Explore Categories ✨</h2>
      <div className="grid grid-flow-col gap-4 sm:gap-16 justify-center">
        {categories.map((cat, i) => (<div key={i} >
          <Link
            href={cat.href}
            onClick={() => setActive(i)}
            className={`
              flex flex-col items-center justify-center m-auto
              w-20 h-20
              bg-white shadow-md transition transform hover:scale-105
              ${active === i ? "ring-2 ring-green-500" : ""}
              
              // Mobile = circle
              rounded-full 
              
              // Desktop override
              sm:rounded-2xl sm:w-32 sm:h-28
            `}
          >
            <span className="text-3xl sm:text-4xl">{cat.icon}</span>
          </Link>
            <div className="text-sm sm:text-base mt-2 text-center">{cat.name}</div>
</div>
        ))}
      </div>
    </section>
  );
}
