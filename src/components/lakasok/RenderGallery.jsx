"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { renders } from "@/data/lakasok";

export default function RenderGallery() {
  const [open, setOpen] = useState(null); // index of the enlarged image, or null
  const [hero, ...rest] = renders;

  const step = useCallback(
    (dir) => setOpen((i) => (i + dir + renders.length) % renders.length),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const thumbClass =
    "group relative block overflow-hidden rounded-2xl ring-1 ring-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500";

  return (
    <section aria-label="Látványtervek">
      <button
        type="button"
        onClick={() => setOpen(0)}
        className={`${thumbClass} aspect-[1518/688] w-full`}
      >
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </button>

      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {rest.map((r, i) => (
          <button
            key={r.src}
            type="button"
            onClick={() => setOpen(i + 1)}
            className={`${thumbClass} aspect-[16/9]`}
          >
            <Image
              src={r.src}
              alt={r.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={open !== null}
        onClose={() => setOpen(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        <DialogPanel className="fixed inset-0 flex items-center justify-center p-4 sm:p-12">
          {open !== null && (
            <div className="relative h-full w-full">
              <Image
                src={renders[open].src}
                alt={renders[open].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <span className="sr-only">Bezárás</span>
            <XMarkIcon aria-hidden="true" className="size-7" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-4"
          >
            <span className="sr-only">Előző kép</span>
            <ChevronLeftIcon aria-hidden="true" className="size-7" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-4"
          >
            <span className="sr-only">Következő kép</span>
            <ChevronRightIcon aria-hidden="true" className="size-7" />
          </button>
          {open !== null && (
            <p className="absolute bottom-4 left-0 right-0 px-4 text-center text-sm text-white/80">
              {renders[open].alt} · {open + 1} / {renders.length}
            </p>
          )}
        </DialogPanel>
      </Dialog>
    </section>
  );
}
