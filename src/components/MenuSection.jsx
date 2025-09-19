import Image from "next/image";

export default function MenuSection({ imageUrl, text }) {
  return (
    <div className="group relative w-[500px] h-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer">
      <Image
        src={imageUrl}
        alt={text}
        fill
        className="object-cover group-hover:scale-102 transition-transform duration-500"
        sizes="(max-width: 768px) 200vw, 700px"
        priority
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
        <span className="text-white text-2xl font-bold tracking-wide transition-colors duration-500 group-hover:text-indigo-500">
          {text}
        </span>
      </div>
    </div>
  );
}
