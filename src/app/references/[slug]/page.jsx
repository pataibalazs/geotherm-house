import { notFound } from "next/navigation";

// Példa adatok (helyettesítsd saját adatforrással)
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
  "kivitelezesi-2": {
    title: "Kivitelezési referencia 2",
    description: "Ez egy példa kivitelezési referencia leírás.",
    images: ["https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1"],
  },
  // ...további referenciák
};

export default function ReferenceDetail({ params }) {
  const ref = references[params.slug];
  if (!ref) return notFound();

  return (
    <div className="bg-stone-50 mx-auto min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4 ">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">{ref.title}</h1>
        <p className="mb-6 text-gray-700">{ref.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ref.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={ref.title + " kép " + (i + 1)}
              className="rounded shadow object-cover w-full h-64"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
