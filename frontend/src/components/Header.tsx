"use client"; // This is a client component 👈🏽
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logo.png";
// import SearchBar from "./ui/Searchbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/cut_fruits", label: "Cut Fruits" },
    { href: "/fruits", label: "Fruits" },
    { href: "/jams", label: "Jams" },
    { href: "/boxes", label: "Boxes" },

    // { href: "/subscribe", label: "Subscribe" },
    // { href: "/about", label: "About" }, 
  ];

  const menu = () => {
    return (
      <>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block text-gray-700 hover:text-orange-500"
          >
            {link.label}
          </Link>
        ))}
    </>
    );
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            className="h-12 w-30 object-contain"
            src={logo}
            alt="Fruitful Box Logo"
          />
        </Link>

        <nav className="hidden md:flex space-x-6">
          {menu()}
        </nav>
        {/* <SearchBar /> */}
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-red-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 space-y-2 bg-white shadow"
          >
            <hr />
            {menu()}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
