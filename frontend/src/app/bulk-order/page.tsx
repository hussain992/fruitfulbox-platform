import Link from "next/link";

export const metadata = {
  title: "Bulk Order | Fruitful Box",
  description:
    "Place bulk fruit orders with Fruitful Box in Pune. Minimum 10 kg and special rates for corporate and events.",
};

export default function BulkOrderPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello Fruitful Box team!\n\nI would like to place a bulk order.\n\n- Name: \n- Phone: \n- Preferred delivery date: \n- Product / quantity details: \n- Special notes: \n\nPlease advise pricing and delivery options."
  );

  return (
    <main className="w-full px-4 py-12 md:py-16 max-w-6xl mx-auto bg-[var(--color-background)] text-[var(--color-foreground)]">
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-4">
          Bulk Order
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
          Need fruits for an event, office, or large family? We offer bulk-order support
          with special pricing, dedicated packing, and fast delivery across Pune.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="bg-brand-100 rounded-2xl p-6 border border-[var(--color-border)]">
          <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
            How bulk ordering works
          </h2>
          <ul className="list-disc list-inside text-[var(--color-muted-foreground)] space-y-2">
            <li>Minimum order: 10 kg (or box equivalent).</li>
            <li>Custom fruit mix and packaging available.</li>
            <li>Delivery every Sunday and Wednesday.</li>
            <li>Corporate and event discounts apply for 25 kg+.</li>
          </ul>
        </div>

        <div className="rounded-2xl p-6 border border-[var(--color-border)] shadow-sm bg-[var(--color-card)]">
          <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
            Start your bulk order
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-5">
            Click the button below to send your bulk order details on WhatsApp.
            Our specialist will follow up within 30 minutes.
          </p>
          <a
            className="inline-block text-center w-full bg-brand-500 hover:bg-brand-600 text-[var(--color-primary-foreground)] px-5 py-3 rounded-lg font-semibold transition"
            href={`https://wa.me/7558535953?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
          <p className="text-sm text-[var(--color-muted-foreground)] mt-4">
            Or email us at &quot;fruitfulbox992@gmail.com&quot; with your order details.
          </p>
        </div>
      </section>

      <section className="mt-12 bg-[var(--color-card)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
        <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">Pricing example</h3>
        <p className="text-[var(--color-muted-foreground)]">
          Depending on the product mix, bulk orders are typically 10-15% off retail and include free delivery for 30 kg+.
        </p>
      </section>

      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-block text-[var(--color-primary)] hover:text-[var(--color-brand-700)] font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
