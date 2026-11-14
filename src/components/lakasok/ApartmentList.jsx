"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  apartments,
  floors,
  formatArea,
  formatPrice,
  roomsLabel,
} from "@/data/lakasok";
import StatusBadge from "./StatusBadge";
import FloorPill from "./FloorPill";
import CallButton, { salesContact } from "./CallButton";

const roomFilters = [
  { key: "all", label: "Mind" },
  { key: "1", label: "Nappali + 1" },
  { key: "2", label: "Nappali + 2" },
  { key: "3", label: "Nappali + 3" },
];

// Available apartments first, then upcoming (phase 2), reserved, and sold ones at the end; original order is kept within a group.
const statusOrder = { elerheto: 0, hamarosan: 1, foglalt: 2, eladva: 3 };
const soldCount = apartments.filter((a) => a.status === "eladva").length;

function Pill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`w-full whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
        active
          ? "bg-white text-gray-900 shadow-md shadow-stone-900/10 ring-1 ring-stone-300"
          : "text-gray-600 hover:bg-white/60 hover:text-gray-900"
      }`}
    >
      {children}
    </button>
  );
}

export default function ApartmentList() {
  const [floor, setFloor] = useState("all");
  const [rooms, setRooms] = useState("all");

  const list = apartments
    .filter((a) => floor === "all" || a.floor === floor)
    .filter((a) => rooms === "all" || String(a.bedrooms) === rooms)
    .sort((a, b) => (statusOrder[a.status] ?? 0) - (statusOrder[b.status] ?? 0));

  return (
    <section id="lakasok" aria-labelledby="lakasok-cim" className="scroll-mt-8">
      <h2
        id="lakasok-cim"
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900"
      >
        Eladó lakások
      </h2>
      {soldCount > 0 && (
        <p className="mt-2 text-gray-600">{soldCount} lakás már elkelt.</p>
      )}

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-3 rounded-2xl bg-white p-4 ring-1 ring-stone-200 lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="shrink-0 text-sm font-medium text-gray-500 sm:w-16">Szint</span>
            <div className="grid flex-1 grid-cols-2 gap-1 rounded-2xl bg-stone-200/70 p-1 sm:grid-cols-4 sm:rounded-full">
            <Pill active={floor === "all"} onClick={() => setFloor("all")}>
              Mind
            </Pill>
            {floors.map((f) => (
              <Pill
                key={f.key}
                active={floor === f.key}
                onClick={() => setFloor(f.key)}
              >
                {f.label}
              </Pill>
            ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="shrink-0 text-sm font-medium text-gray-500 sm:w-16">Szobák</span>
            <div className="grid flex-1 grid-cols-2 gap-1 rounded-2xl bg-stone-200/70 p-1 sm:grid-cols-4 sm:rounded-full">
            {roomFilters.map((r) => (
              <Pill
                key={r.key}
                active={rooms === r.key}
                onClick={() => setRooms(r.key)}
              >
                {r.label}
              </Pill>
            ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-stone-200">
          <p className="text-center text-gray-600">
            <span className="font-semibold text-gray-900">
              {salesContact.name}
            </span>{" "}
            · értékesítő
          </p>
          <CallButton />
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-10 text-center text-gray-600">
          Nincs a szűrésnek megfelelő lakás.
        </p>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => {
            const sold = a.status === "eladva";
            return (
            <li key={a.slug}>
              <Link
                href={`/lakasok/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:shadow-md hover:ring-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <div className="relative aspect-[4/3] bg-white p-3">
                  <Image
                    src={a.plan.src}
                    alt={`${a.code} lakás alaprajza – ${a.floorLabel.toLowerCase()}, ${formatArea(a.area)}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-contain p-3 ${sold ? "opacity-40 grayscale" : ""}`}
                  />
                  <div className="absolute left-3 top-3 flex gap-1.5">
                    <FloorPill label={a.floorLabel} />
                    <StatusBadge status={a.status} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col border-t border-stone-100 p-5">
                  <h3 className={`text-xl font-bold ${sold ? "text-gray-500" : "text-gray-900"}`}>
                    {a.code} lakás
                  </h3>
                  <dl className={`mt-3 grid grid-cols-3 gap-2 text-sm ${sold ? "opacity-60" : ""}`}>
                    <div>
                      <dt className="text-gray-500">Alapterület</dt>
                      <dd className="font-semibold text-gray-900">
                        {formatArea(a.area)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Terasz</dt>
                      <dd className="font-semibold text-gray-900">
                        {formatArea(a.terrace)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Szobák</dt>
                      <dd className="font-semibold text-gray-900">
                        {a.layoutNote ? "2 egység" : `N + ${a.bedrooms}`}
                      </dd>
                    </div>
                  </dl>
                  <p className="sr-only">{roomsLabel(a)}</p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-sm font-semibold text-gray-700">
                      {a.status === "eladva"
                        ? ""
                        : a.status === "hamarosan"
                          ? "Értékesítés hamarosan"
                          : formatPrice(a.price)}
                    </span>
                    <span className="text-sm font-semibold text-amber-600 group-hover:text-amber-500">
                      Részletek →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
