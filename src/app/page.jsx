import MenuSection from "@/components/MenuSection";

export default function Home() {
  return (
    <div className="bg-stone-50 min-h-screen flex flex-col">
      <div className="text-center py-20 font-semibold text-4xl leading-tight">
        <span className="text-gray-800 block">Az ötlettől az átadásig,</span>
        <span className="text-indigo-600">a teljes folyamat egy kézben!</span>
      </div>

      <div className="flex flex-wrap justify-center gap-12 px-10 pb-20">
        <MenuSection imageUrl="/images/menu1.jpg" text="KIVITELEZÉS" />
        <MenuSection imageUrl="/images/menu2.jpg" text="TERVEZÉS" />
      </div>
    </div>
  );
}
