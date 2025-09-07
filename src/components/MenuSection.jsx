import Image from "next/image";

export default function MenuSection({ imageUrl, text }) {
  return (
    <div className="group flex flex-col items-center hover:scale-103 transition-transform duration-200">
      <span className="mb-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
        {text}
      </span>
      <div className="relative w-90 h-70 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={text}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 512px"
          priority
        />
      </div>
    </div>
  );
}
