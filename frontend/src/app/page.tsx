import { Metadata } from "next";
import CategoriesSection from "@/components/CategoriesSection";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ServiceNotice from "@/components/ServiceNotice";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Fresh Fruit Delivery in Pune | Fruitful Box",
  description:
    "Get premium fresh fruits, cut fruits, and curated fruit boxes delivered to your door in Pune. Same-week delivery every Sunday & Wednesday. Order online or via WhatsApp.",
  keywords:
    "fresh fruits Pune, fruit delivery, seasonal fruits, cut fruits, fruit boxes, mango delivery, avocado, fresh produce",
  openGraph: {
    title: "Fresh Fruit Delivery in Pune | Fruitful Box",
    description:
      "Premium seasonal fruits delivered fresh to your door. Order now for Sunday or Wednesday delivery.",
    type: "website",
    images: [
      {
        url: "/images/bannernw.png",
        width: 1200,
        height: 630,
        alt: "Fruitful Box - Fresh Fruit Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Fruit Delivery in Pune | Fruitful Box",
    description:
      "Premium seasonal fruits delivered to your door. Order via WhatsApp.",
  },
  alternates: {
    canonical: "https://fruitfulbox.vercel.app",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <ServiceNotice />
      <HeroSection />

      {/* Featured Section */}
      <section className="w-full px-4 py-12 md:py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fruitful Box?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked premium fruits delivered fresh to your door in Pune
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% Fresh
              </h3>
              <p className="text-gray-600">
                Handpicked seasonal fruits at peak ripeness
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Delivery
              </h3>
              <p className="text-gray-600">
                Delivered every Sunday & Wednesday to your door
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Ordering
              </h3>
              <p className="text-gray-600">
                Order directly via WhatsApp for convenience
              </p>
            </div>
          </div>
        </div>
      </section>

      <CategoriesSection />

      <ProductSection title="Trending Fruits" description="Our most popular fresh seasonal fruits" />
      <ProductSection
        title="Fresh Cut Fruits"
        description="Ready-to-eat cut fruits prepared fresh daily"
      />
      <ProductSection
        title="Our Fruit Boxes"
        description="Curated combinations of seasonal fruits"
      />

      {/* CTA Section */}
      <section className="w-full px-4 py-12 md:py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Taste Fresh?
          </h2>
          <p className="text-lg mb-8 text-green-50">
            Order your favorite fruits now and get them delivered this Sunday or
            Wednesday
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fruits"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Browse Fruits
            </Link>
            <a
              href="https://wa.me/7558535953"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </main>
  );
}
