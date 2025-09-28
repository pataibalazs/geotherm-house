import MenuSection from "@/components/MenuSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-50 min-h-screen flex flex-col">
      {/* Hero text */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 text-center font-semibold leading-tight sm:max-w-xl sm:max-w-2xl md:max-w-3xl text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-tight">
          <span className="text-gray-800 block">Az ötlettől az átadásig,</span>
          <span className="text-green-600 block">
            a teljes folyamat egy kézben!
          </span>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-12 px-10 pb-20 content-center">
        <Link
          href="/construction"
          className="block focus:outline-none focus:ring-2 focus:ring-green-600 rounded-2xl focus:ring-offset-2 focus:ring-offset-stone-50"
        >
          <MenuSection
            imageUrl="https://geotherm.sirv.com/geotherm/f%C5%91oldal/kivitelez%C3%A9s_f%C5%91k%C3%A9p.webp"
            text="KIVITELEZÉS"
          />
        </Link>
        <Link
          href="/design"
          className="block focus:outline-none focus:ring-2 focus:ring-green-600 rounded-2xl focus:ring-offset-2 focus:ring-offset-stone-50"
        >
          <MenuSection
            imageUrl="https://geotherm.sirv.com/geotherm/f%C5%91oldal/tervez%C3%A9s_f%C5%91k%C3%A9p.jpg"
            text="TERVEZÉS"
          />
        </Link>
      </div>
    </div>
  );
}
