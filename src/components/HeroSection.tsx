'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
// import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-lime-100 to-amber-100 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Image
          src="/images/hero-fruit-pattern.png"
          alt="Fruit Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 sm:py-20 text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-extrabold text-green-800 leading-tight drop-shadow"
        >
          Fresh Fruits, <br />
          <span className="text-red-600">Delivered to Your Door</span>
        </motion.h1>

        {/* <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-green-700"
        >
          Handpicked, high-quality fruits at the best prices.
        </motion.p> */}

        {/* <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <Link href="/products">
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300">
              Shop Now
            </button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  )
}
// import { cn } from "@/lib/utils";
// import { Inter } from "next/font/google"; 
