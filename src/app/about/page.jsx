const stats = [
  { label: "Átadott lakás", value: "250+" },
  { label: "Tapasztalat", value: "30 éves" },
  { label: "Alkalmazott", value: "35" },
];

export default function About() {
  return (
    <div className="bg-stone-50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our mission
          </h2>

          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w/full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>

            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* --- Céginfó CTA kártya --- */}
          <div className="mt-20 border-t border-gray-200 pt-10">
            <a
              href="https://www.ceginformacio.hu/cr9314233028"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Céginformációk megnyitása a Ceginformacio.hu oldalon"
              className="group block rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-inset ring-gray-200 hover:ring-indigo-300 hover:bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-4 p-6">
                {/* Ikon (épület) */}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-inset ring-indigo-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M9 8h6v13H9z" />
                    <path d="M4 21V10l8-6 8 6v11" />
                  </svg>
                </span>

                {/* Szöveg */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Céginformációk
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nyilvános adatok a Geotherm House Kft.-ről a
                    Céginformáció.hu oldalán.
                  </p>
                </div>

                {/* Külső hivatkozás ikon */}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-inset ring-gray-200 group-hover:ring-indigo-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l10-10" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
