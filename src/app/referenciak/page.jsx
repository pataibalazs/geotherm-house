import Link from "next/link";
import { sirvResize } from "@/data/seo";

export default function ReferenceGallery() {
  const kivitelezesi = [
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/kezdo%CC%8Bo%CC%8B.jpg",
      title: "4 LAKÁSOS SORHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/KEZDO%CC%8B.jpg",
      title: "13 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%201/KEZDO%CC%8B.jpg",
      title: "8 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%202/KEZDO%CC%8B.jpg",
      title: "8 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/9%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z/KEZDO%CC%8B.jpg",
      title: "9 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%203/KEZDO%CC%8B.jpg",
      title: "8 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z/ke%CC%81ezdo%CC%8B.jpg",
      title: "IKERHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/KEZDO%CC%8B.jpg",
      title: "IKERHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z%20Veresegyha%CC%81z/KEZDO%CC%8B.jpg",
      title: "CSALÁDI HÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/KEZDO%CC%8B.jpg",
      title: "6 LAKÁSOS SORHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Sorha%CC%81zak%20Szilasliget/kezdo%CC%8B.jpg",
      title: "SZILASLIGET",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/kezdo%CC%8B.jpg",
      title: "4 LAKÁSOS SORHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/10%20laka%CC%81sos%20sorha%CC%81z/kezdo%CC%8B.jpg",
      title: "10 LAKÁSOS SORHÁZ",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z/kezdo%CC%8B.jpg",
      title: "CSALÁDI HÁZ",
    },
    {
      src: "/images/referenciak/budapest-1.webp",
      title: "130 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "/images/referenciak/budapest-2.webp",
      title: "120 LAKÁSOS TÁRSASHÁZ",
    },
    {
      src: "/images/referenciak/leanyfalu.webp",
      title: "CSALÁDI HÁZ",
    },
  ];

  const tervezesi = [
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/kezdo%CC%8B.jpg",
      title: "ÜZLETHÁZ BŐVÍTÉS",
    },
    {
      src: "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/KEZDO%CC%8B.jpg",
      title: "CSALÁDI HÁZ, BAJÓT",
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
            href={`/referenciak/${sectionKey}-${idx + 1}`}
            className="group relative aspect-square overflow-hidden rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-500"
            prefetch={false}
          >
            <img
              src={sirvResize(item.src, 640)}
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
      <h1 className="sr-only">Referenciák – tervezés és generálkivitelezés</h1>
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
