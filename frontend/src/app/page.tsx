import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Leaf, MapPin, Sparkles } from "lucide-react";
import ServiceNotice from "@/components/ServiceNotice";
import fruits from "@/lib/fruits.json";
import { FaqSection } from "@/components/FaqSection";

const whatsappNumber = "7558535953";
const whatsappMessage =
  "Hi Fruitful Box, I want to order mangoes. Please share today's available varieties and prices.";

const mangoProducts = fruits.filter((product) => {
  const haystack = `${product.id ?? ""} ${product.title ?? ""} ${product.description ?? ""}`.toLowerCase();
  return haystack.includes("mango");
});

const spotlightPoints = [
  {
    title: "Seasonal mango selection",
    description: "A focused summer edit featuring Pairi, Kesar, Alphonso, and Devgad favorites.",
    icon: Sparkles,
  },
  {
    title: "Naturally ripened",
    description: "Picked for aroma, sweetness, and table-ready texture instead of rushed ripening.",
    icon: Leaf,
  },
  {
    title: "Pune delivery slots",
    description: "Simple doorstep delivery on the schedule already followed by Fruitful Box.",
    icon: Clock3,
  },
];

const trustPoints = [
  "Handpicked batches selected for aroma, color, and sweetness",
  "Great for gifting, aamras, slicing, and everyday summer eating",
  "Quick WhatsApp ordering for stock checks and mango recommendations",
];

export const metadata: Metadata = {
  title: "Mango Sale in Pune | Fruitful Box",
  description:
    "Shop Fruitful Box's mango sale in Pune. Explore seasonal Pairi, Kesar, Alphonso, and Devgad mangoes with quick WhatsApp ordering and delivery slots.",
  keywords:
    "mango sale Pune, Alphonso mango Pune, Kesar mango online, Pairi mangoes, Devgad mangoes, Fruitful Box mangoes",
  openGraph: {
    title: "Mango Sale in Pune | Fruitful Box",
    description:
      "Seasonal mangoes from Fruitful Box. Browse Pairi, Kesar, Alphonso, and Devgad varieties and order fast on WhatsApp.",
    type: "website",
    images: [
      {
        url: "/images/mangoes-fruit.png",
        width: 1200,
        height: 630,
        alt: "Fruitful Box mango sale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mango Sale in Pune | Fruitful Box",
    description:
      "Seasonal mangoes, direct ordering, and a homepage tailored for mango season.",
  },
  alternates: {
    canonical: "https://fruitfulbox.vercel.app",
  },
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#fffdf4]">
      <ServiceNotice />

      <section className="relative isolate overflow-hidden border-b border-amber-200 bg-[radial-gradient(circle_at_top_left,_rgba(255,208,75,0.38),_transparent_32%),linear-gradient(135deg,_#fff7cf_0%,_#fff3b5_30%,_#ffe7a0_58%,_#ffcf66_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#b45309_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 md:px-6 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/70 px-4 py-2 text-sm font-semibold text-amber-900 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Mango season at Fruitful Box
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-stone-900 md:text-6xl">
              Summer&apos;s best mangoes, delivered across Pune.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-stone-700 md:text-lg">
              Explore the season&apos;s most-loved varieties, compare styles and pricing quickly, and place your order in a
              few taps on WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Order Mangoes on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="#mango-lineup"
                className="inline-flex items-center justify-center rounded-full border border-stone-900 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-white"
              >
                View Mango Lineup
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {spotlightPoints.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/60 bg-white/65 p-4 shadow-[0_12px_40px_rgba(120,53,15,0.08)] backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-amber-700" />
                  <h2 className="mt-3 text-sm font-bold text-stone-900">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-stone-700">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-orange-300/60 blur-2xl md:-left-8 md:h-32 md:w-32" />
            <div className="absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-yellow-200/80 blur-2xl md:h-40 md:w-40" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#fffaf0] p-4 shadow-[0_30px_80px_rgba(120,53,15,0.18)]">
              <div className="rounded-[1.5rem] bg-[linear-gradient(160deg,_#fff8dc_0%,_#ffe39b_45%,_#ffc54d_100%)] p-6">
                <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/80">
                  <span>Mango sale</span>
                  <span>Pune delivery</span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white/50">
                  <Image
                    src="/images/mangoes-fruit.png"
                    alt="Premium mangoes from Fruitful Box"
                    fill
                    priority
                    className="object-contain p-4 drop-shadow-[0_24px_30px_rgba(120,53,15,0.25)]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-stone-950 px-4 py-4 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/60">Featured varieties</p>
                    <p className="mt-2 text-lg font-bold">Pairi, Kesar, Alphonso, Devgad</p>
                  </div>
                  <div className="rounded-2xl bg-white/80 px-4 py-4 text-stone-900">
                    <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Ordering flow</p>
                    <p className="mt-2 text-lg font-bold">Browse, enquire, and confirm fast on WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Why order from us</p>
            <h2 className="mt-3 text-3xl font-black text-stone-900 md:text-4xl">
              One focused seasonal collection, picked for mango lovers.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-amber-100 bg-[#fff9ea] p-5 text-sm leading-6 text-stone-700 shadow-[0_12px_30px_rgba(120,53,15,0.06)]"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-amber-700" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mango-lineup" className="bg-[#fffdf7] px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Mango lineup</p>
            <h2 className="mt-3 text-3xl font-black text-stone-900 md:text-5xl">Choose your mango mood.</h2>
            <p className="mt-4 text-base leading-7 text-stone-600">
              From juicy early-season picks to rich dessert mangoes, this collection brings the signature favorites of
              summer into one easy lineup.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mangoProducts.map((product) => (
              <article
                key={product.id}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_18px_40px_rgba(120,53,15,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,53,15,0.14)]"
              >
                <div className="relative aspect-square overflow-hidden bg-[linear-gradient(160deg,_#fff9df_0%,_#ffe59d_60%,_#ffd261_100%)]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-5 transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-800">
                    {product.isAvailable ? "Available now" : "Enquire for stock"}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-stone-900">{product.title}</h3>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
                      Mango
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-stone-600">{product.description}</p>

                  {product.benefits && product.benefits.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-stone-700">
                      {product.benefits.slice(0, 2).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Sale price</p>
                      <p className="mt-1 text-2xl font-black text-stone-900">{product.price.discounted}</p>
                      <p className="text-sm text-stone-400 line-through">{product.price.original}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/${product.category}/${product.slug}`}
                      className="inline-flex flex-1 items-center justify-center rounded-full border border-stone-900 px-4 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-white"
                    >
                      View details
                    </Link>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hi Fruitful Box, I want to order ${product.title}. Please share availability and delivery details.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-4 py-14 text-white md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,_rgba(251,191,36,0.12),_rgba(24,24,27,0.96))] p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Delivery and ordering</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Keep the buying journey simple during mango season.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300 md:text-base">
              Browse the collection, open any variety for details, or jump straight to WhatsApp to confirm stock,
              ripeness, and delivery timing before you order.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <MapPin className="h-5 w-5 text-amber-300" />
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-400">Service area</p>
              <p className="mt-1 text-lg font-bold">Pune</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <Clock3 className="h-5 w-5 text-amber-300" />
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-400">Delivery days</p>
              <p className="mt-1 text-lg font-bold">Sunday and Wednesday</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <Sparkles className="h-5 w-5 text-amber-300" />
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-400">Fastest action</p>
              <p className="mt-1 text-lg font-bold">WhatsApp your order</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-100 bg-[#fff8df] px-4 py-14 md:px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-200 bg-white px-6 py-10 text-center shadow-[0_24px_60px_rgba(120,53,15,0.08)] md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Order today</p>
          <h2 className="mt-3 text-3xl font-black text-stone-900 md:text-5xl">Bring home your favorite mangoes before the best lots are gone.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600">
            Pick your variety, check availability quickly, and confirm your order directly with the Fruitful Box team.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Order Mangoes Now
            </a>
            <Link
              href="/fruits"
              className="inline-flex items-center justify-center rounded-full border border-stone-900 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-white"
            >
              Browse Full Fruit Catalog
            </Link>
          </div>
        </div>
      </section>

      <FaqSection />
    </main>
  );
}
