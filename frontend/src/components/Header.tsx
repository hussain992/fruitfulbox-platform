"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import SearchBar from "./ui/Searchbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/fruits", label: "Fruits" },
    { href: "/cut_fruits", label: "Cut Fruits" },
    { href: "/boxes", label: "Boxes" },
    { href: "/jams", label: "Jams" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-green-50 border-b border-green-200 text-center text-xs md:text-sm text-gray-700 py-2">
        🚚 Delivery: Sunday & Wednesday | 10 AM - 12 PM
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Mobile/Tablet layout - Logo and Menu button */}
        <div className="flex items-center justify-between md:hidden mb-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="h-9 w-auto"
              src={logo}
              alt="Fruitful Box"
              priority
            />
            <span className="font-bold text-gray-900">Fruitful Box</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-green-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet - Search bar */}
        <div className="md:hidden mb-3">
          <SearchBar isMobile={true} />
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 items-center gap-4">
          {/* Left: Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="h-9 w-auto"
                src={logo}
                alt="Fruitful Box"
                priority
              />
              <span className="font-bold text-gray-900">Fruitful Box</span>
            </Link>
          </div>

          {/* Center: Search */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              {/* <SearchBar /> */}
            </div>
          </div>

          {/* Right: Navigation + CTA */}
          <div className="flex items-center justify-end gap-6">
            <nav className="hidden lg:flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="https://wa.me/7558535953"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex-shrink-0"
            >
              <MessageCircle size={16} />
              Order
            </a>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-green-600 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <a
                  href="https://wa.me/7558535953"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle size={16} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
