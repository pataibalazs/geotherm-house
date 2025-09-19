import Link from "next/link";

export default function ReferenceGallery() {
  const kivitelezesi = [
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Kivitelezés 1",
    },
    {
      src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
      title: "Kivitelezés 2",
    },
    {
      src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
      title: "Kivitelezés 3",
    },
    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Kivitelezés 4",
    },
    {
      src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Kivitelezés 5",
    },
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      title: "Kivitelezés 6",
    },
    {
      src: "https://images.unsplash.com/photo-1503389152951-9f343605f61e",
      title: "Kivitelezés 7",
    },
    {
      src: "https://images.unsplash.com/photo-1507652955-f3dcef5a3be5",
      title: "Kivitelezés 8",
    },
  ];

  const tervezesi = [
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Tervezés 1",
    },
    {
      src: "https://images.unsplash.com/photo-1544989164-31dc3c645987",
      title: "Tervezés 2",
    },
    {
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
      title: "Tervezés 3",
    },
    {
      src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "Tervezés 4",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Tervezés 5",
    },
    {
      src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      title: "Tervezés 7",
    },
    {
      src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Tervezés 8",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      title: "Tervezés 9",
    },
  ];

  const muvezetesi = [
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Művezetés 1",
    },
    {
      src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
      title: "Művezetés 2",
    },
    {
      src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
      title: "Művezetés 3",
    },
    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Művezetés 4",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      title: "Művezetés 7",
    },
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      title: "Művezetés 8",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Művezetés 9",
    },
  ];

  const Section = ({ title, items, sectionKey }) => (
    <div className="pt-20">
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={`/references/${sectionKey}-${idx + 1}`}
            className="group relative aspect-square overflow-hidden rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-600"
            prefetch={false}
          >
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="m-3 px-2.5 py-1 rounded text-indigo-200 text-2xl font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none line-clamp-1">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-6 py- lg:px-8 bg-stone-50">
      <Section
        title="Tervezési referenciák"
        items={tervezesi}
        sectionKey="tervezesi"
      />
      <Section
        title="Kivitelezési referenciák"
        items={kivitelezesi}
        sectionKey="kivitelezesi"
      />
      <Section
        title="Művezetési referenciák"
        items={muvezetesi}
        sectionKey="muvezetesi"
      />
    </div>
  );
}
