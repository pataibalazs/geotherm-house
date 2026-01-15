const services = [
  {
    title: "TELJESKÖRŰ GENERÁLKIVITELEZÉS",
    description:
      "A projekt teljes körű lebonyolítása a tervezéstől a kulcsrakész átadásig.",
  },
  {
    title: "TÁRSASHÁZ- ÉS SORHÁZ-FEJLESZTÉS",
    description:
      "Nagy volumenű lakóingatlan-fejlesztések stabil szervezéssel és kivitelezéssel.",
  },
  {
    title: "CSALÁDI HÁZAK ÉPÍTÉSE",
    description:
      "Egyedi igényekre szabott otthonok prémium anyaghasználattal és hosszú távra.",
  },
  {
    title: "MŰSZAKI KOORDINÁCIÓ",
    description:
      "Folyamatos minőségellenőrzés és átlátható, dokumentált kivitelezés.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-16">
        SZOLGÁLTATÁSAINK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              group relative
              border-l-2 border-amber-200
              pl-8 pr-4 py-6
              transition-all duration-300 ease-out
              hover:border-amber-500
              hover:bg-gradient-to-r hover:from-amber-50/70 hover:to-transparent
            "
          >
            {/* nagy, halvány sorszám */}
            <span
              className="
                absolute top-4 left-4
                text-6xl font-bold
                text-amber-100
                opacity-60
                group-hover:text-amber-200
                transition-colors
                select-none
              "
            >
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* cím */}
            <h3
              className="
                relative z-10
                text-lg font-semibold text-gray-900
                mb-3
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              {service.title}
            </h3>

            {/* leírás */}
            <p
              className="
                relative z-10
                text-gray-600 text-sm leading-relaxed
                transition-colors duration-300
                group-hover:text-gray-700
              "
            >
              {service.description}
            </p>

            {/* statikus + animált alsó akcentus */}
            <div
              className="
                absolute bottom-4 left-8
                h-px w-6
                bg-amber-300
                transition-all duration-300
                group-hover:w-14 group-hover:bg-amber-500
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
