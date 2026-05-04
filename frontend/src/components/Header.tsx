"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock3, MapPin, Menu, MessageCircle, Sparkles, X } from "lucide-react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import SearchBar from "./ui/Searchbar";

const links = [
  { href: "/fruits", label: "Fruits" },
  { href: "/cut_fruits", label: "Cut Fruits" },
  { href: "/boxes", label: "Boxes" },
  { href: "/bulk-order", label: "Bulk Order" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileHeader = () => (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 z-50 md:hidden border-t border-[var(--color-border)] bg-[var(--color-card)] shadow-xl"
          >
            <div className="space-y-2 px-4 py-3">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-2 text-xs text-[var(--color-muted-foreground)]">
                <div className="flex items-start gap-1.5 font-semibold text-brand-700">
                  <Sparkles className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                  <span>Mango season - browse & order on WhatsApp</span>
                </div>
              </div>

              <div className="space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-xs font-medium text-[var(--color-muted-foreground)] transition hover:bg-[var(--color-card)] hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <a
                href="https://wa.me/7558535953"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-stone-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-800"
              >
                <MessageCircle size={14} />
                Order on WhatsApp
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );

  return (
    <header className="sticky top-[-36px] z-50 border-b border-amber-200 bg-[linear-gradient(180deg,_rgba(255,248,223,0.98)_0%,_rgba(255,253,244,0.97)_100%)] shadow-[0_10px_35px_rgba(120,53,15,0.08)] backdrop-blur">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-card)] px-4 py-1.5 text-xs text-[var(--color-muted-foreground)] md:py-2 md:text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-0.5 md:gap-y-1 font-medium">
          <span className="inline-flex items-center gap-1.5 md:gap-2">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-brand-700 flex-shrink-0" />
            <span className="hidden sm:inline">Mango season specials now on the homepage</span>
            <span className="sm:hidden">Mango season live</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-amber-800" />
            Delivery: Sunday & Wednesday, 10 AM - 12 PM
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-3 md:hidden">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="rounded-2xl border border-amber-200 bg-white/90 p-2 shadow-sm">
              <Image className="h-8 w-auto" src={logo} alt="Fruitful Box" priority />
            </div>
            {/* <div className="min-w-0">
              <p className="truncate text-base font-black text-stone-900">Fruitful Box</p>
              <p className="truncate text-xs font-medium uppercase tracking-[0.18em] text-amber-800">Mango Season</p>
            </div> */}
          </Link>

          <div className="flex items-center gap-2">
            <div className="mx-1">
              <SearchBar isMobile={true} />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-2 text-[var(--color-muted-foreground)] transition hover:text-brand-700"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className="hidden items-center gap-5 md:grid md:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-2xl border border-amber-200 bg-white/90 p-2 shadow-sm">
                <Image className="h-9 w-auto" src={logo} alt="Fruitful Box" priority />
              </div>
              {/* <div>
                <p className="text-lg font-black text-stone-900">Fruitful Box</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
                  <Sparkles className="h-3.5 w-3.5" />
                  Mango Season Edit
                </div>
              </div> */}
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-[var(--color-muted-foreground)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-card)] px-3 py-2 text-[var(--color-muted-foreground)] shadow-sm">
                <MapPin className="h-4 w-4 text-brand-700" />
                Pune
              </span>
              <nav className="flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] p-1 shadow-sm">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-muted-foreground)] transition hover:bg-[var(--color-card)] hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="w-full max-w-xs">
              <SearchBar />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <a
              href="https://wa.me/7558535953"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              <MessageCircle size={16} />
              Order Mangoes
            </a>
          </div>
        </div>
      </div>

      {mobileHeader()}
    </header>
  );
}
