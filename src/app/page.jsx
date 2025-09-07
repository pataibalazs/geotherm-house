import MenuSection from "@/components/MenuSection";

export default function Home() {
  return (
    <div className="bg-stone-50">
      <div className="flex items-center justify-around p-30">
        <MenuSection imageUrl="/images/menu1.jpg" text="KIVITELEZÉS" />
        <MenuSection imageUrl="/images/menu2.jpg" text="TERVEZÉS" />
      </div>
    </div>
  );
}
