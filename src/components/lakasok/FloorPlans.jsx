"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { apartments, floors, formatArea, sitePlan } from "@/data/lakasok";
import StatusBadge from "./StatusBadge";

const tabs = [
  ...floors,
  { key: "helyszin", label: "Helyszínrajz", plan: sitePlan },
];

export default function FloorPlans() {
  const [active, setActive] = useState(floors[0].key);
  const tab = tabs.find((t) => t.key === active);
  const floorApartments = apartments.filter((a) => a.floor === active);

  return (
    <section aria-labelledby="szintek-cim">
      <h2
        id="szintek-cim"
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900"
      >
        Szintek és elhelyezkedés
      </h2>
      <div
        role="tablist"
        aria-label="Szintek"
        className="mt-6 inline-flex flex-wrap gap-1 rounded-2xl bg-stone-200/70 p-1 sm:rounded-full"
      >
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            type="button"
            aria-selected={active === t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              active === t.key
                ? "bg-white text-gray-900 shadow-md shadow-stone-900/10 ring-1 ring-stone-300"
                : "text-gray-600 hover:bg-white/60 hover:text-gray-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200">
          <a href={tab.plan.src} target="_blank" rel="noopener">
            <Image
              src={tab.plan.src}
              width={tab.plan.width}
              height={tab.plan.height}
              alt={`Csonkás központ, Veresegyház – ${tab.label.toLowerCase()} alaprajz`}
              sizes="(min-width: 1024px) 800px, 100vw"
              className="mx-auto h-auto max-h-[80vh] w-auto max-w-full"
            />
          </a>
        </div>
        {floorApartments.length > 0 && (
          <ul className="space-y-2 self-start">
            {floorApartments.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/lakasok/${a.slug}`}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-stone-200 hover:ring-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {/* Fixed columns: code left, status badge centered, area always right-aligned */}
                  <span className="font-semibold text-gray-900">{a.code}</span>
                  <span className="justify-self-center">
                    <StatusBadge status={a.status} />
                  </span>
                  <span className="justify-self-end text-sm tabular-nums text-gray-600">
                    {formatArea(a.area)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
