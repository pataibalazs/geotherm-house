import Image from "next/image";

export default function MenuSection({ imageUrl, text }) {
  return (
    <div className="group relative w-full max-w-[600px] aspect-square sm:w-[550px] sm:h-[550px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer flex justify-center items-center mx-auto">
      <Image
        src={imageUrl}
        alt={text}
        fill
        className="object-cover transition-transform duration-500"
        sizes="(max-width: 768px) 200vw, 700px"
        priority
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
        <span className="text-white text-3xl font-bold tracking-wide transition-colors duration-500 group-hover:text-green-500">
          {text}
        </span>
      </div>
    </div>
  );
}
