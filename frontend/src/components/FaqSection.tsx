export const FaqSection = () => {
  return (
    <section className="w-full px-4 py-8 md:py-16 bg-[var(--color-card)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-[var(--color-foreground)]">
          FAQ
        </h2>

        <div className="space-y-3 md:space-y-6">
          {[
            {
              q: "What areas do you deliver to?",
              a: "We deliver to all areas in Pune. Orders are delivered every Sunday and Wednesday.",
            },
            {
              q: "How fresh are the fruits?",
              a: "All our fruits are handpicked at peak ripeness and delivered within 24-48 hours of packing.",
            },
            {
              q: "Can I customize my fruit box?",
              a: "Yes! You can customize your fruit box by ordering via WhatsApp and specifying your preferences.",
            },
            {
              q: "What if I'm not satisfied?",
              a: "We guarantee 100% fresh fruits. If you're not satisfied, we'll replace them at no cost.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="border border-[var(--color-border)] rounded-lg p-3 md:p-4 cursor-pointer hover:bg-[var(--color-card)] transition"
            >
              <summary className="font-semibold text-sm md:text-base text-[var(--color-foreground)]">{faq.q}</summary>
              <p className="text-xs md:text-sm text-[var(--color-muted-foreground)] mt-2 md:mt-3">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
