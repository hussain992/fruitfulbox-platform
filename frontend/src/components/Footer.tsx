import Link from "next/link";
import { Clock3, MapPin, MessageCircle, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,_#3a2406_0%,_#241405_100%)] text-[#f7e9c4]">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="mb-10 rounded-[2rem] border border-amber-300/20 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                <Sparkles className="h-4 w-4" />
                Mango season
              </div>
              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
                Fruitful Box is in summer mango mode.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#f4ddb0] md:text-base">
                Seasonal picks, direct WhatsApp ordering, and delivery across Pune for customers chasing the best mangoes
                of the season.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-amber-300/20 bg-[#fff3cf]/10 p-4">
                <Clock3 className="h-5 w-5 text-amber-300" />
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-amber-100/80">Delivery days</p>
                <p className="mt-1 text-lg font-bold text-white">Sunday and Wednesday</p>
              </div>
              <div className="rounded-3xl border border-amber-300/20 bg-[#fff3cf]/10 p-4">
                <MapPin className="h-5 w-5 text-amber-300" />
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-amber-100/80">Service area</p>
                <p className="mt-1 text-lg font-bold text-white">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-black text-white">Fruitful Box</h3>
            <p className="mt-3 text-sm leading-7 text-[#f4ddb0]">
              Handpicked fruit deliveries with a mango-first spotlight for the season's best sellers.
            </p>
            <a
              href="https://wa.me/7558535953"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.instagram.com/fruitful.box"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f4ddb0] transition hover:text-pink-300"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61569871812547"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f4ddb0] transition hover:text-blue-300"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/7558535953"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f4ddb0] transition hover:text-green-300"
                aria-label="WhatsApp"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.429.742 4.768 2.148 6.746L2.929 22.29l7.261-1.906a9.865 9.865 0 004.991 1.271h.004c5.444 0 9.867-4.414 9.967-9.852.099-5.438-4.314-9.888-9.679-9.888zM19.19 18.196c-5.582 5.592-14.556 5.592-20.139 0-5.582-5.591-5.582-14.655 0-20.247 5.582-5.592 14.556-5.592 20.139 0 5.582 5.592 5.582 14.655 0 20.247z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/fruits" className="transition hover:text-white">
                  Fresh Fruits
                </Link>
              </li>
              <li>
                <Link href="/cut_fruits" className="transition hover:text-white">
                  Cut Fruits
                </Link>
              </li>
              <li>
                <Link href="/boxes" className="transition hover:text-white">
                  Fruit Boxes
                </Link>
              </li>
              <li>
                <Link href="/jams" className="transition hover:text-white">
                  Jams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">Information</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:contact@fruitfulbox.com" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://wa.me/7558535953" className="transition hover:text-white">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <Link href="/about#faq" className="transition hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">Delivery</h4>
            <div className="space-y-4 text-sm">
              <div className="rounded-2xl border border-amber-300/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100/70">Service area</p>
                <p className="mt-1 text-base font-semibold text-white">Pune, Maharashtra</p>
              </div>
              <div className="rounded-2xl border border-amber-300/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100/70">Delivery days</p>
                <p className="mt-1 text-base font-semibold text-white">Sunday and Wednesday</p>
              </div>
              <div className="rounded-2xl border border-amber-300/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100/70">Time slot</p>
                <p className="mt-1 text-base font-semibold text-white">10 AM - 12 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-amber-300/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#f4ddb0] md:flex-row">
            <p>© {new Date().getFullYear()} Fruitful Box. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="transition hover:text-white">
                Terms & Conditions
              </Link>
              <a href="mailto:fruitfulbox992@gmail.com" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
