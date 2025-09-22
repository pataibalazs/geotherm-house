import MenuSection from "@/components/MenuSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-50 min-h-screen flex flex-col">
      <div className="text-center py-20 font-semibold text-4xl leading-tight">
        <span className="text-gray-800 block">Az ötlettől az átadásig,</span>
        <span className="text-indigo-600">a teljes folyamat egy kézben!</span>
      </div>

      <div className="flex flex-wrap justify-center gap-12 px-10 pb-20">
        <Link
          href="/construction"
          className="block focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-2xl focus:ring-offset-2 focus:ring-offset-stone-50"
        >
          <MenuSection
            imageUrl="https://geotherm.sirv.com/geotherm/f%C5%91oldal/kivitelez%C3%A9s_f%C5%91k%C3%A9p.webp"
            text="KIVITELEZÉS"
          />
        </Link>
        <Link
          href="/design"
          className="block focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-2xl focus:ring-offset-2 focus:ring-offset-stone-50"
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
