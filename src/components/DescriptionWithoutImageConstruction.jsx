const features = [
  {
    name: "MEGBÍZHATÓSÁG",
    description:
      "Három évtized tapasztalata és ügyfeleink bizalma biztosítja, hogy velünk építkezni hosszú távon is jó döntés.",
  },
  {
    name: "KORSZERŰ ÉS KÖRNYEZETBARÁT",
    description:
      "Fenntartható anyagokat és modern gépészeti megoldásokat alkalmazunk, hogy épületeink hosszú távon is alacsony fenntartási költséggel működjenek.",
  },
  {
    name: "SZEMÉLYES KAPCSOLATTARTÁS",
    description:
      "Előzetes egyeztetés után személyesen is betekinthet az aktuális kivitelezésbe, Fülöp Vilmos vezetésével.",
  },
];

export default function DescriptionWithoutImageConstruction() {
  return (
    <div className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            KIVITELEZÉS <br></br> KOMPROMISSZUMOK NÉLKÜL
          </h2>
          <p className="mt-6 text-lg/8 text-gray-700">
            30 év generálkivitelezési tapasztalattal, képzett szakemberekkel és
            minőségi anyagokkal garantáljuk a precíz, megbízható és tartós
            munkát.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
