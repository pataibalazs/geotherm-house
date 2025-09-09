// ReferenceGallery.jsx
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
      title: "Tervezés 4",
    },
    {
      src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "Tervezés 5",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Tervezés 6",
    },
  ];

  const Section = ({ title, items }) => (
    <div className="pt-10">
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group relative aspect-square overflow-hidden rounded-md shadow"
          >
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              <p className="m-3 px-2.5 py-1 rounded bg-black/45 backdrop-blur-[2px] text-indigo-200 text-sm font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none line-clamp-1">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-6 py- lg:px-8 bg-stone-50">
      <Section title="Kivitelezési referenciák" items={kivitelezesi} />
      <Section title="Tervezési referenciák" items={tervezesi} />
    </div>
  );
}
