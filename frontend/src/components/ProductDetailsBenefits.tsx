"use client";

interface ProductBenefitsProps {
  benefits: string[] | undefined;
}

export default function ProductBenefits({ benefits }: ProductBenefitsProps) {
  if (!benefits?.length) return null;

  return (
    <div className="bg-brand-100 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-brand-700 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Why Choose Us
      </h3>
      <ul className="space-y-2">
        {benefits.map((benefit, i) => (
          <li key={i} className="text-sm text-brand-700 flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600 mt-0.5 shrink-0">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}