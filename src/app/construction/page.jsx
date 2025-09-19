const stats = [
  { id: 1, name: "Átadott lakás", value: "250" },
  { id: 2, name: "Tapasztalat", value: "30 éves" },
  { id: 3, name: "Alkalmazott", value: "35" },
];

import DescriptionWithoutImage from "@/components/DescriptionWithoutImage";

export default function Construction() {
  return (
    <div className="bg-stone-50 pt-5">
      {/* Hero rész */}
      <div className="relative lg:flex lg:items-center">
        {/* Text section */}
        <div className="mx-auto max-w-7xl lg:w-1/2 px-6 py-16 lg:px-8 flex items-center relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Generál kivitelezés
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              30 év generálkivitelezési tapasztalattal, képzett szakemberekkel
              és minőségi anyagokkal biztosítjuk a precíz, tartós munkát.
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Referenciák
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Lépj velünk kapcsolatba! <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="lg:w-1/2 h-full flex items-center">
          <img
            alt="Construction"
            src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
            className="w-full h-full object-cover rounded-md"
            loading="lazy"
          />
        </div>
      </div>
      {/* Statisztikák */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mt-20">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-2"
            >
              <dt className="text-base text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <DescriptionWithoutImage />
      {/* Referencia szekció */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
              title: "REFERENCIA 1",
            },
            {
              src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
              title: "REFERENCIA 2",
            },
            {
              src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
              title: "REFERENCIA 3",
            },
            {
              src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
              title: "REFERENCIA 4",
            },
            {
              src: "https://images.unsplash.com/photo-1494526585095-c41746248156",
              title: "REFERENCIA 5",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-md shadow"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {/* Szöveg csak hover esetén jelenik meg */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="m-3 px-2.5 py-1 rounded text-indigo-200 text-2xl font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none line-clamp-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
