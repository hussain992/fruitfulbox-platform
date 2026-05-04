"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[var(--color-muted)] text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-40 h-40 relative mb-6">
        <Image
          src="/404-fruit.png" // 🔸 Make sure to place this image in /public
          alt="Lost Fruit"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold text-[var(--color-error)] mb-2">Oops! Page not found</h1>
      <p className="text-[var(--color-muted-foreground)] max-w-md mb-6">
        This fruit rolled out of the basket 🍌. But the good stuff’s waiting for you on the homepage.
      </p>

      <Link href="/">
        <Button className="bg-brand-500 hover:bg-brand-600 text-[var(--color-primary-foreground)] rounded-full px-6 py-2">
          Go back to Homepage
        </Button>
      </Link>
    </motion.div>
  );
}