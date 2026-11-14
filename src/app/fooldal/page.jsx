import MenuSection from "@/components/MenuSection";
import Link from "next/link";
import { ogDefaults, ogImages, ogPhotos } from "@/data/seo";

// Company homepage. The site root (/) shows the apartments for sale while they are on the market;
// the logo links here.
export const metadata = {
  alternates: { canonical: "/fooldal" },
  openGraph: {
    ...ogDefaults,
    title: "Geotherm House – Tervezés és generálkivitelezés egy kézben",
    description: "Építészeti tervezés és generálkivitelezés egy kézben, az ötlettől az átadásig.",
    url: "/fooldal",
    images: ogImages(ogPhotos.construction),
  },
};

export default function Home() {
  return (
    <div className="bg-stone-50 min-h-screen flex flex-col">
      {/* Hero text */}
      <div className="py-16 sm:py-20">
        <h1 className="mx-auto px-4 sm:px-6 text-center font-semibold leading-tight sm:max-w-xl sm:max-w-2xl md:max-w-3xl text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-tight">
          <span className="text-black block">Az ötlettől az átadásig,</span>
          <span className="text-amber-500 block">
            a teljes folyamat egy kézben!
          </span>
        </h1>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-12 px-10 pb-20 content-center">
        <Link
          href="/kivitelezes"
          className="block focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl focus:ring-offset-2 focus:ring-offset-stone-50"
        >
          <MenuSection
            imageUrl="https://geotherm.sirv.com/geotherm/f%C5%91oldal/kivitelez%C3%A9s_f%C5%91k%C3%A9p2.jpg"
            text="KIVITELEZÉS"
          />
        </Link>
        <Link
          href="/tervezes"
          className="block focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl focus:ring-offset-2 focus:ring-offset-stone-50"
        >
          <MenuSection
            imageUrl="https://geotherm.sirv.com/geotherm/f%C5%91oldal/tervez%C3%A9s_f%C5%91k%C3%A9p2.jpg"
            text="TERVEZÉS"
          />
        </Link>
      </div>
    </div>
  );
}
