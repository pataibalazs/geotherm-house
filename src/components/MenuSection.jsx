import Image from "next/image";

export default function MenuSection({ imageUrl, text, variant = "elegant" }) {
  if (variant === "legacy") {
    return (
      <div className="group relative w-full max-w-[600px] aspect-square sm:w-[550px] sm:h-[550px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex justify-center items-center mx-auto">
        <Image
          src={imageUrl}
          alt={text}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
          priority
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-3xl font-bold tracking-wide">
            {text}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative w-full max-w-[600px] aspect-square sm:w-[550px] sm:h-[550px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
      aria-label={text}
      role="button"
      tabIndex={0}
    >
      <Image
        src={imageUrl}
        alt={text}
        fill
        className="object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
        priority
      />

      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/15" />

      {/* Tartalom */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative block text-center">
          <span className="block text-white text-3xl sm:text-4xl font-semibold tracking-wide">
            {text}
          </span>
          {/* Vékony, elegáns aláhúzás – hover-re nő és lágyan jelenik meg */}
          <span className="mx-auto mt-3 block h-[2px] w-0 opacity-0 rounded-full bg-white/80 transition-all duration-300 group-hover:w-2/3 group-hover:opacity-100" />
        </span>
      </div>

      {/* Finom árnyék csak hover-kor */}
      <div className="absolute inset-0 pointer-events-none transition-shadow duration-300 group-hover:shadow-lg" />
    </div>
  );
}
