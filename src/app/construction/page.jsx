"use client";

const stats = [
  { id: 1, name: "Átadott lakás", value: "250" },
  { id: 2, name: "Tapasztalat", value: "30 éves" },
  { id: 3, name: "Alkalmazott", value: "35" },
];

import DescriptionWithoutImageConstruction from "@/components/DescriptionWithoutImageConstruction";
import Link from "next/link";
import { useCallback } from "react";

export default function Construction() {
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
              GENERÁL KIVITELEZÉS
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl md:text-left sm:text-center text-center">
              A legmagasabb minőséget, szakértelmet és professzionális
              kivitelezést nyújtjuk minden projektünkben.
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
            src="https://geotherm.sirv.com/geotherm/f%C5%91oldal/kivitelez%C3%A9s_f%C5%91k%C3%A9p.webp"
            className="w-full h-auto object-cover rounded-md aspect-square"
            loading="lazy"
          />
        </div>
      </div>
      {/* Statisztikák */}
      <div className="mx-auto md:max-w-[840px] lg:max-w-7xl px-6 lg:px-8 py-12 mt-20">
        <dl className="grid grid-cols-1 md:gap-x-16 lg:gap-x-8 gap-x-8 gap-y-16 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-2"
            >
              <dt className="text-base text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <DescriptionWithoutImageConstruction />
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
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/k%C3%B6zepes/kezd%C5%91.webp",
              title: "4 LAKÁSOS SORHÁZ",
            },
            {
              src: "https://deckbae.sirv.com/geotherm_house/j%C3%B3kai1/mid/KEZDŐ_compressed.webp",
              title: "13 LAKÁSOS TÁRSASHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/KEZD%C5%90.webp",
              title: "8 LAKÁSOS TÁRSASHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/KEZD%C5%90.webp",
              title: "8 LAKÁSOS TÁRSASHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/KEZD%C5%90.webp",
              title: "9 LAKÁSOS TÁRSASHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/KEZD%C5%90.webp",
              title: "8 LAKÁSOS TÁRSASHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/ikerh%C3%A1z/k%C3%B6zepes/kezd%C5%91.webp",
              title: "IKERHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Et%C3%BCd/nagy/KEZD%C5%90.webp",
              title: "IKERHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/KEZD%C5%90.webp",
              title: "CSALÁDI HÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/KEZD%C5%90.webp",
              title: "6 LAKÁSOS SORHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/szilasliget/k%C3%B6zepes/kezd%C5%91.webp",
              title: "SZILASLIGETI SORHÁZAK",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%201/nagy/kezd%C5%91.webp",
              title: "4 LAKÁSOS SORHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/10%20lak%C3%A1sos%20sorh%C3%A1z/k%C3%B6zepes/kezd%C5%91.webp",
              title: "10 LAKÁSOS SORHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/csal%C3%A1di%20h%C3%A1z%201/k%C3%B6zepes/kezd%C5%91.webp",
              title: "CSALÁDI HÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Budapest%201/k%C3%B6zepes/1.webp",
              title: "130 LAKÁSOS TÁRSASHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Budapest%202/k%C3%B6zepes/1.webp",
              title: "120 LAKÁSOS TÁRSASHÁZ",
            },
            {
              src: "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Le%C3%A1nyfalu/k%C3%B6zepes/1.webp",
              title: "CSALÁDI HÁZ",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={`/references/kivitelezesi-${idx + 1}`}
              className="group relative aspect-square overflow-hidden rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="m-3 px-2.5 py-1 rounded text-white text-lg font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-none line-clamp-1">
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
