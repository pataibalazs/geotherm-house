import Link from "next/link";

export default function ReferenceGallery() {
  const kivitelezesi = [
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/KEZD%C5%90.webp",
      title: "13 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/KEZD%C5%90.webp",
      title: "8 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/KEZD%C5%90.webp",
      title: "8 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/KEZD%C5%90.webp",
      title: "9 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/KEZD%C5%90.webp",
      title: "8 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/KEZD%C5%90.webp",
      title: "IKERHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/KEZD%C5%90.webp",
      title: "CSALÁDI HÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/KEZD%C5%90.webp",
      title: "6 LAKÁSOS SORHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Budapest%201/k%C3%B6zepes/1.webp",
      title: "130 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Budapest%202/k%C3%B6zepes/1.webp",
      title: "120 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Le%C3%A1nyfalu/k%C3%B6zepes/1.webp",
      title: "CSALÁDI HÁZ 1",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/szilasliget/k%C3%B6zepes/kezd%C5%91.webp",
      title: "SZILASLIGET",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%201/k%C3%B6zepes/kezd%C5%91.webp",
      title: "4 LAKÁSOS SORHÁZ 1",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/k%C3%B6zepes/kezd%C5%91.webp",
      title: "4 LAKÁSOS SORHÁZ 2",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/10%20lak%C3%A1sos%20sorh%C3%A1z/k%C3%B6zepes/kezd%C5%91.webp",
      title: "10 LAKÁSOS SORHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/csal%C3%A1di%20h%C3%A1z%201/k%C3%B6zepes/kezd%C5%91.webp",
      title: "CSALÁDI HÁZ 2",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/ikerh%C3%A1z/k%C3%B6zepes/kezd%C5%91.webp",
      title: "IKERHÁZ",
    },
  ];

  const tervezesi = [
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/kezd%C5%91.webp",
      title: "ÜZLETHÁZ BŐVÍTÉS",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/baj%C3%B3t/k%C3%B6zepes/KEZD%C5%90.jpg",
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
            className="group relative aspect-square overflow-hidden rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-500"
            prefetch={false}
          >
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="m-3 px-2.5 py-1 rounded text-white text-lg font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none line-clamp-1">
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
        title="TERVEZÉSI REFERENCIÁK"
        items={tervezesi}
        sectionKey="tervezesi"
      />
      <Section
        title="KIVITELEZÉSI REFERENCIÁK"
        items={kivitelezesi}
        sectionKey="kivitelezesi"
      />
    </div>
  );
}
