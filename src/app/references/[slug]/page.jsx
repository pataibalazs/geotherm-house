import { notFound } from "next/navigation";

const references = {
  "tervezesi-1": {
    title: "Tervezési referencia 1",
    description:
      "Ez az első tervezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      "https://images.unsplash.com/photo-1544989164-31dc3c645987",
    ],
  },
  "tervezesi-2": {
    title: "Tervezési referencia 2",
    description:
      "Ez a második tervezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    ],
  },
  "tervezesi-3": {
    title: "Tervezési referencia 3",
    description:
      "Ez a harmadik tervezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    ],
  },
  "kivitelezesi-1": {
    title: "Kivitelezési referencia 1",
    description:
      "Ez az első kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/KEZD%C5%90.webp",
    ],
  },
  "kivitelezesi-2": {
    title: "Kivitelezési referencia 2",
    description: "Ez egy példa kivitelezési referencia leírás.",
    images: ["https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1"],
  },
  "kivitelezesi-3": {
    title: "Kivitelezési referencia 3",
    description:
      "Ez a harmadik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
    ],
  },
  "kivitelezesi-4": {
    title: "Kivitelezési referencia 4",
    description:
      "Ez a negyedik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
  "kivitelezesi-5": {
    title: "Kivitelezési referencia 5",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://images.unsplash.com/photo-1503389152951-9f343605f61e",
      "https://images.unsplash.com/photo-1507652955-f3dcef5a3be5",
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
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">{ref.title}</h1>
        <p className="mb-6 text-gray-700">{ref.description}</p>
        <div className="columns-1 sm:columns-2 gap-6">
          {ref.images.map((img, i) => {
            const size = ref.sizes?.[i];
            return (
              <img
                key={i}
                src={img}
                alt={`${ref.title} kép ${i + 1}`}
                className="mb-6 break-inside-avoid rounded shadow object-contain w-full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
