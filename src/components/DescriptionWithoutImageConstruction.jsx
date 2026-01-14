import {
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "MEGBÍZHATÓSÁG",
    description:
      "Három évtizedes tapasztalatunk és ügyfeleink bizalma garantálja, hogy minket választani biztos döntés. A legmagasabb elvárt minőség és az átadás utáni garancia nálunk egyértelmű.",
    icon: ShieldCheckIcon,
  },
  {
    name: "KORSZERŰ ÉS KÖRNYEZETBARÁT",
    description:
      "Modern és fenntartható anyagokat, gépészeti megoldásokat alkalmazunk, hogy épületeink a kényelem és korszerűség mellett, alacsony fenntartási költséggel működhessenek.",
    icon: SparklesIcon,
  },
  {
    name: "SZEMÉLYES KAPCSOLATTARTÁS",
    description:
      "Előzetes egyeztetés után személyesen is betekinthet az aktuális kivitelezésbe, és azonnali választ kaphat felmerülő kérdéseire, mindezt cégünk vezetője, Fülöp Vilmos vezetésével.",
    icon: UserGroupIcon,
  },
];

export default function DescriptionWithoutImageConstruction() {
  return (
    <section className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            KIVITELEZÉS <br /> KOMPROMISSZUMOK NÉLKÜL
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            30 év generálkivitelezési tapasztalattal, képzett szakemberekkel és
            gondosan kiválasztott anyagokkal biztosítjuk a precíz, megbízható és
            időtálló kivitelezést.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative rounded-xl border border-gray-200 bg-white p-6 pl-8"
            >
              <span className="absolute left-0 top-6 h-12 w-1 rounded-full bg-amber-500" />

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                <feature.icon className="h-6 w-6 text-amber-600" />
              </div>

              <dt className="text-sm font-semibold tracking-wide text-gray-900">
                {feature.name}
              </dt>
              <dd className="mt-2 text-sm leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
