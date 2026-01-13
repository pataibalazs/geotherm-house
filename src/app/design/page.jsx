"use client";

import DescriptionWithoutImageDesign from "@/components/DescriptionWithoutImageDesign";
import Link from "next/link";
import { useCallback } from "react";

export default function Design() {
  const handleScrollToReferences = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("references");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="bg-stone-50 pt-5">
      {/* Hero rész */}
      <div className="relative lg:flex lg:items-center max-w-xl sm:max-w-7xl justify-center mx-auto">
        {/* Text section */}
        <div className="mx-auto max-w-7xl lg:w-1/2 px-6 py-10 md:py-16 lg:px-8 flex items-center relative z-10">
          <div className="mx-auto max-w-xl md:max-w-2xl lg:mx-0">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl md:text-left text-center">
              ÉPÍTÉSZETI TERVEZÉS
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl md:text-left sm:text-center text-center">
              Egyedi igényekre szabott, esztétikus és fenntartható megoldásokat
              tervezünk.
            </p>

            <div className="mt-10 flex sm:flex-row flex-col items-center gap-x-6 md:justify-start sm:justify-center">
              <a
                href="#references"
                onClick={handleScrollToReferences}
                className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors mb-6 sm:mb-0"
              >
                Referenciák
              </a>
              <Link
                href="/contact"
                className="text-sm font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                Lépj velünk kapcsolatba! <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className="mx-auto max-w-3xl md:max-w-3xl lg:max-w-7xl px-6 md:px-8 lg:px-0 lg:w-1/2">
          <img
            alt="Construction"
            src="https://geotherm.sirv.com/geotherm/f%C5%91oldal/tervez%C3%A9s_f%C5%91k%C3%A9p.jpg"
            className="w-full h-auto object-cover rounded-md aspect-square"
            loading="lazy"
          />
        </div>
      </div>
      <DescriptionWithoutImageDesign />
      {/* Referencia szekció */}
      <div
        id="references"
        className="mx-auto md:max-w-3xl lg:max-w-7xl px-6 md:px-8 py-20 scroll-mt-0"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-10">
          REFERENCIÁK
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/k%C3%B6zepes/kezd%C5%91.webp",
              title: "REFERENCIA 1",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/baj%C3%B3t/k%C3%B6zepes/KEZD%C5%90.jpg",
              title: "REFERENCIA 2",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={`/references/tervezesi-${idx + 1}`}
              className="group relative aspect-square overflow-hidden rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end pb-6 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="mx-3 px-2.5 py-1 rounded text-white text-2xl font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none line-clamp-1 translate-y-2 group-hover:translate-y-0 transition-transform">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
