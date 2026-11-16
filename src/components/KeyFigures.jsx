// Company key figures, shown under the hero on the Construction page.
// Centered number, short amber rule, spaced uppercase label; hairlines separate the three blocks.
const figures = [
  { value: "250+", label: "Átadott lakás" },
  { value: "30 év", label: "Tapasztalat" },
  { value: "8500+ m²", label: "Megépített terület" },
];

export default function KeyFigures() {
  // Its own section with the site's standard section padding (py-24 sm:py-32).
  return (
    <section aria-label="Számokban" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl lg:max-w-7xl px-6 lg:px-8">
      <dl className="grid grid-cols-1 divide-y divide-stone-300 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
        {figures.map((figure) => (
          <div key={figure.label} className="flex flex-col items-center py-8 first:pt-0 last:pb-0 md:px-8 md:py-0">
            <dt className="order-3 text-sm font-bold uppercase tracking-[0.18em] text-gray-900">
              {figure.label}
            </dt>
            <dd className="order-1 whitespace-nowrap text-6xl font-semibold tracking-tight tabular-nums text-gray-900 lg:text-[4.25rem]/none">
              {figure.value}
            </dd>
            <div aria-hidden="true" className="order-2 mt-5 mb-4 h-[3px] w-9 bg-amber-500" />
          </div>
        ))}
      </dl>
      </div>
    </section>
  );
}
