import { notFound } from "next/navigation";

const references = {
  "tervezesi-1": {
    title: "TERVEZÉSI REFERENCIA 1",
    description:
      "Ez az első tervezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    featuredIndices: [0, 5],
    captions: [
      "TERVEZET LÁTVÁNY",
      "MEGLÉVŐ ÉPÜLET",
      "MEGLÉVŐ ÉPÜLET",
      "TERVEZET LÁTVÁNY",
      "TERVEZET LÁTVÁNY",
      "ALAPRAJZ",
      "HOMLOKZAT",
      "HOMLOKZAT",
      "METSZET",
      "METSZET",
    ],
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/7.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/8.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/9.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/10.webp",
    ],
  },
  "tervezesi-2": {
    title: "Tervezési referencia 2",
    description:
      "Ez az első tervezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    featuredIndices: [2, 5],
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    ],
  },
  "tervezesi-3": {
    title: "TERVEZÉSI REFERENCIA 3",
    description:
      "Ez a harmadik tervezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    captions: ["Előtéri atrium", "Belső szervezés"],
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    ],
  },
  "kivitelezesi-1": {
    title: "KIVITELEZÉSI REFERENCIA 1",
    description:
      "Ez az első kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/6.webp",
    ],
  },
  "kivitelezesi-2": {
    title: "KIVITELEZÉSI REFERENCIA 2",
    description: "Ez egy példa kivitelezési referencia leírás.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/5.webp",
    ],
  },
  "kivitelezesi-3": {
    title: "KIVITELEZÉSI REFERENCIA 3",
    description:
      "Ez a harmadik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/7.webp",
    ],
  },
  "kivitelezesi-4": {
    title: "KIVITELEZÉSI REFERENCIA 4",
    description:
      "Ez a negyedik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/5.webp",
    ],
  },
  "kivitelezesi-5": {
    title: "KIVITELEZÉSI REFERENCIA 5",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/5.webp",
    ],
  },
  "kivitelezesi-6": {
    title: "KIVITELEZÉSI REFERENCIA 6",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/7.webp",
    ],
  },
  "kivitelezesi-7": {
    title: "KIVITELEZÉSI REFERENCIA 7",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/4.webp",
    ],
  },
  "kivitelezesi-8": {
    title: "KIVITELEZÉSI REFERENCIA 8",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/3.1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/3.2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/7.webp",
    ],
  },
};

export default async function ReferenceDetail({ params }) {
  const { slug } = await params;
  const ref = references[slug];
  if (!ref) return notFound();

  return (
    <div className="mx-auto min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-4 text-black">{ref.title}</h1>
        <p className="mb-6 text-gray-700">{ref.description}</p>
        {/* Tervezési referenciák speciális elrendezés logika */}
        {slug.startsWith("tervezesi-") ? (
          (() => {
            const featuredList = Array.isArray(ref.featuredIndices)
              ? ref.featuredIndices
              : typeof ref.featuredIndex === "number"
              ? [ref.featuredIndex]
              : [];
            const useGrid = featuredList.length > 0; // ha van legalább egy kiemelt, gridet használunk
            if (useGrid) {
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {ref.images.map((img, i) => {
                    const isFeatured = featuredList.includes(i);
                    const caption = ref.captions?.[i] ?? ref.title;
                    return (
                      <figure
                        key={i}
                        className={
                          (isFeatured ? "sm:col-span-2 " : "") + "mb-6"
                        }
                      >
                        <img
                          src={img}
                          alt={`${ref.title} kép ${i + 1}`}
                          className="w-full rounded shadow object-contain"
                        />
                        <figcaption className="mt-2 text-black text-xs md:text-sm font-semibold tracking-wide">
                          {caption}
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              );
            }
            // fallback: nincs kiemelt -> oszlopos megjelenítés
            return (
              <div className="columns-1 sm:columns-2 gap-6">
                {ref.images.map((img, i) => (
                  <figure key={i} className="mb-6 break-inside-avoid">
                    <img
                      src={img}
                      alt={`${ref.title} kép ${i + 1}`}
                      className="rounded shadow object-contain w-full"
                    />
                    <figcaption className="mt-2 text-black text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide">
                      {ref.captions?.[i] ?? ref.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            );
          })()
        ) : (
          <div className="columns-1 sm:columns-2 gap-6">
            {ref.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${ref.title} kép ${i + 1}`}
                className="mb-6 break-inside-avoid rounded shadow object-contain w-full"
              />
            ))}
          </div>
        )}
        {ref.credit && (
          <div className="mt-1 text-sm text-gray-500">{ref.credit}</div>
        )}
      </div>
    </div>
  );
}
