"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-yellow-50 text-center"
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

      <h1 className="text-3xl font-bold text-red-500 mb-2">Oops! Page not found</h1>
      <p className="text-muted-foreground max-w-md mb-6">
        This fruit rolled out of the basket 🍌. But the good stuff’s waiting for you on the homepage.
      </p>

      <Link href="/">
        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2">
          Go back to Homepage
        </Button>
      </Link>
    </motion.div>
  );
}