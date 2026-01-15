"use client";

import Head from "next/head";
import Image from "next/image";

const HERO_IMAGE =
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/nagy/fund.webp";

const GALLERY_IMAGES = [
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/1.webp",
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/2.webp",
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/3.webp",
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/4.webp",
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/5.webp",
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/6.webp",
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/7.webp",
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/8.webp",
  "https://geotherm.sirv.com/geotherm/p%C3%A1ly%C3%A1zat/k%C3%B6zepes/9.webp",
];

export default function FundGalleryPage() {
  return (
    <div className="bg-stone-50">
      <Head>
        <title>Pályázat | Geotherm House Kft.</title>
        <meta
          name="description"
          content="A Geotherm House Kft. vissza nem térítendő támogatás keretében megvalósult eszközbeszerzése – projektbemutató képgalériával."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* HERO SZEKCIÓ */}

      {/* SZÖVEGES BLOKK */}
      <section className="max-w-6xl mx-auto px-6 mb-16 bg-stone-50">
        <h1 className="text-3xl sm:text-4xl text-center pt-10 font-semibold text-gray-900 mb-6">
          Pályázati támogatás bemutatása
        </h1>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
          A Geotherm House Kft. a Széchenyi 2020 program keretében vissza nem
          térítendő európai uniós támogatásban részesült. A projekt célja az
          építőipari kivitelezéshez szükséges eszközpark fejlesztése volt, amely
          hozzájárul a hatékonyabb, gyorsabb és magasabb minőségű
          munkavégzéshez.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <Image
            src={HERO_IMAGE}
            alt="Széchenyi 2020 pályázat – Geotherm House Kft."
            fill
            priority
            className="object-contain bg-white rounded-md"
          />
        </div>
      </section>

      {/* GALÉRIA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={src}
                alt={`Pályázati megvalósítás ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
