// import { Button } from "@/components/ui/button";


// export default function HeroSection() {
//   return (
//     <section className="text-center py-16 px-4 bg-gradient-to-b from-red-100 to-yellow-200">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Fruitful Box 🥭</h1>
//       <p className="text-lg mb-6">Fresh, handpicked fruits delivered to your doorstep.</p>
//       <a
//         href="https://wa.me/917558535953?text=Hi%20Fruitful%20Box!%20I%20want%20to%20subscribe%20for%20weekly%20fruit%20updates."
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Button className="bg-yellow-400 hover:bg-red-700 text-white text-lg px-6 py-3">
//           Subscribe Now
//         </Button>
//       </a>
//       <p className="text-sm text-muted-foreground mt-2">
//         You’ll receive updates once a week. No spam, we promise! 💚
//       </p>
//     </section>
//   );
// }

// HeroSection.tsx
// 'use client'

// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import Image from 'next/image'

// export default function HeroSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#fffced] py-16 md:py-24">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//         <motion.div
//           className="text-center md:text-left md:max-w-xl"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] leading-tight mb-4">
//             Fresh Fruits, Delivered to Your Doorstep 🍉
//           </h1>
//           <p className="text-lg text-[#555] mb-6">
//             Order now and enjoy nature&apos;s sweetness with the best seasonal fruits.
//           </p>
//           <Link href="/products" className="inline-block bg-[#ffcc00] hover:bg-[#ffdb4d] text-[#3a3a3a] font-semibold py-3 px-6 rounded-xl transition-all">
//               Explore Our Fruits
//             {/* </a> */}
//           </Link>
//         </motion.div>

//         <motion.div
//           className="mt-10 md:mt-0"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <Image
//             src="/images/hero-fruits.png"
//             alt="Assorted fresh fruits"
//             width={500}
//             height={500}
//             className="rounded-xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
          className="text-4xl md:text-6xl font-extrabold text-green-800 leading-tight drop-shadow"
        >
          Fresh Fruits, <br />
          <span className="text-red-600">Delivered to Your Door</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-green-700"
        >
          Handpicked, high-quality fruits at the best prices.
        </motion.p>

        <motion.div
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
        </motion.div>
      </div>
    </section>
  )
}
// import { cn } from "@/lib/utils";
// import { Inter } from "next/font/google"; 
