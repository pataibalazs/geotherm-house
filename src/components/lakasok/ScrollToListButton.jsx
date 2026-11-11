"use client";

import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function ScrollToListButton() {
  return (
    <a
      href="#lakasok"
      onClick={(e) => {
        const target = document.getElementById("lakasok");
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#lakasok");
      }}
      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-semibold text-gray-900 shadow-sm ring-1 ring-stone-300 transition hover:ring-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
    >
      Lakások megtekintése
      <ArrowDownIcon aria-hidden="true" className="size-4" />
    </a>
  );
}
