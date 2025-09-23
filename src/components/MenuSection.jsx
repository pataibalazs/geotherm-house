import Image from "next/image";

export default function MenuSection({ imageUrl, text }) {
  return (
    <div className="group relative w-[500px] h-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer">
      <Image
        src={imageUrl}
        alt={text}
        fill
        className="object-cover transition-transform duration-500"
        sizes="(max-width: 768px) 200vw, 700px"
        priority
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
        <span className="text-white text-3xl font-bold tracking-wide transition-colors duration-500 group-hover:text-indigo-500">
          {text}
        </span>
      </div>
    </div>
  );
}
