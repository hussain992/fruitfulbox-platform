import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Fruitful Box",
  description: "Learn about Fruitful Box, our mission to deliver fresh, handpicked seasonal fruits to Pune. Quality, freshness, and customer satisfaction are our priorities.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Fruitful Box
          </h1>
          <p className="text-lg text-gray-600">
            Bringing fresh, handpicked seasonal fruits to your doorstep
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fruitful Box was born from a simple idea: to make fresh, quality fruits
            accessible to everyone in Pune. We believe that everyone deserves access
            to premium, handpicked seasonal fruits without compromising on quality or
            convenience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            What started as a small initiative has grown into a trusted fruit delivery
            service serving hundreds of happy customers across Pune. Our commitment to
            quality, freshness, and customer satisfaction remains unchanged.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-12 bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To provide the freshest seasonal fruits at their peak ripeness, delivered
            conveniently to doorsteps across Pune. We aim to make healthy eating
            accessible, affordable, and hassle-free for every family.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌱 Freshness</h3>
              <p className="text-gray-600">
                We handpick only the finest fruits at peak ripeness and deliver them within
                24-48 hours to ensure maximum freshness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Quality</h3>
              <p className="text-gray-600">
                Every fruit is carefully inspected and curated to meet our high-quality
                standards before reaching your door.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🤝 Trust</h3>
              <p className="text-gray-600">
                We build lasting relationships with our customers based on transparency,
                reliability, and honest communication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🚚 Convenience</h3>
              <p className="text-gray-600">
                Easy ordering via WhatsApp, fixed delivery days, and timely delivery make
                getting fresh fruits effortless.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Fruitful Box?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-4">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Handpicked Selection</p>
                <p className="text-gray-600">Each fruit is carefully selected for quality and ripeness</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-4">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Premium Seasonal Fruits</p>
                <p className="text-gray-600">We source the best seasonal fruits from trusted suppliers</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-4">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Same-Week Delivery</p>
                <p className="text-gray-600">Orders delivered every Sunday & Wednesday between 10 AM - 12 PM</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-4">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Easy Ordering</p>
                <p className="text-gray-600">Simple WhatsApp ordering with no complicated process</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-4">✓</span>
              <div>
                <p className="font-semibold text-gray-900">100% Satisfaction Guarantee</p>
                <p className="text-gray-600">Not satisfied? We&apos;ll replace the product at no extra cost</p>
              </div>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience Fresh?</h2>
          <p className="mb-6 text-green-50">
            Join hundreds of happy customers who trust Fruitful Box for their daily fruit needs
          </p>
          <Link
            href="/fruits"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </section>
      </div>
    </main>
  );
}
