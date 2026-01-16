import {
  UsersIcon,
  PuzzlePieceIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "SZEMÉLYRE SZABOTT",
    description:
      "A tervezés nálunk a közös gondolkodással és a környezet feltárásával indul, így válnak megoldásaink valóban személyessé és hosszú távon szerethetővé.",
    icon: UsersIcon,
  },
  {
    name: "TUDATOS TERVEZÉS",
    description:
      "Az igényes és élhető építészeti formavilágot kivitelezői tapasztalatunkkal ötvözzük, hogy terveink váratlan pluszköltségek nélkül, zökkenőmentesen épüljenek meg.",
    icon: PuzzlePieceIcon,
  },
  {
    name: "KOMPLEX SZOLGÁLTATÁS",
    description:
      "A koncepcionális vázlatoktól a hatósági engedélyezésen át a precíz kiviteli tervekig visszük végig a folyamatot, garantálva a tervezői gondolat és a műszaki tartalom összhangját.",
    icon: HomeModernIcon,
  },
];

export default function DescriptionWithoutImageDesign() {
  return (
    <section className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Headline */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            ÁTFOGÓ ÉPÍTÉSZETI MEGOLDÁSOK
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Az erős koncepció, a gondolati háttér és az építészeti problémák
            kreatív megközelítése adja tervezési szemléletünk alapját.
          </p>
        </div>

        {/* Features */}
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative rounded-xl border border-gray-200 bg-white p-6 pl-8"
            >
              {/* Bal oldali akcentus */}
              <span className="absolute left-0 top-6 h-12 w-1 rounded-full bg-amber-500" />

              {/* Icon */}
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
