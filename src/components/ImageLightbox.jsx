"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { sirvResize } from "@/data/seo";

// Wraps a server-rendered gallery: any descendant with data-lb="<index>" opens that image enlarged.
// Same look and controls as the apartment render gallery (arrows, keyboard, swipe).
export default function ImageLightbox({ images, captions = [], title, children }) {
  const [open, setOpen] = useState(null);
  const [sharpReady, setSharpReady] = useState({});
  const touchX = useRef(null);
  const galleryRef = useRef(null);

  // Enlarged size matched to the screen (1280 / 1920 / 2560px), so laptops do not fetch the largest variant.
  const sharpSrc = useCallback((i) => {
    const need = typeof window === "undefined" ? 2560 : window.innerWidth * (window.devicePixelRatio || 1);
    return sirvResize(images[i], need <= 1280 ? 1280 : need <= 1920 ? 1920 : 2560);
  }, [images]);

  // The thumbnail already on the page (in the browser cache) shows instantly while the sharp version loads.
  const previewSrc = (i) => {
    const img = galleryRef.current?.querySelector(`[data-lb="${i}"] img`);
    return img?.complete && img.naturalWidth > 0 ? img.currentSrc : null;
  };

  // Load the sharp version of the open image and its neighbours in the background.
  useEffect(() => {
    if (open === null) return;
    const n = images.length;
    for (const i of new Set([open, (open + 1) % n, (open - 1 + n) % n])) {
      const url = sharpSrc(i);
      const img = new Image();
      img.onload = () => setSharpReady((r) => (r[url] ? r : { ...r, [url]: true }));
      img.src = url;
    }
  }, [open, images.length, sharpSrc]);

  const step = useCallback(
    (dir) => setOpen((i) => (i + dir + images.length) % images.length),
    [images.length]
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

  const onClick = (e) => {
    const trigger = e.target.closest("[data-lb]");
    if (trigger) setOpen(Number(trigger.dataset.lb));
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  // The image box is larger than the picture itself (object-contain); a click on that empty margin
  // closes the gallery, like a click on the dark background.
  const closeOnLetterbox = (e) => {
    const img = e.currentTarget;
    if (!img.naturalWidth) return;
    const box = img.getBoundingClientRect();
    const scale = Math.min(box.width / img.naturalWidth, box.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = e.clientX - box.left - (box.width - w) / 2;
    const y = e.clientY - box.top - (box.height - h) / 2;
    if (x < 0 || y < 0 || x > w || y > h) setOpen(null);
  };

  const caption = open !== null ? captions[open] || title : "";

  return (
    <div ref={galleryRef} onClick={onClick}>
      {children}
      <Dialog open={open !== null} onClose={() => setOpen(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        <DialogPanel
          className="fixed inset-0 flex items-center justify-center p-4 sm:p-12"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
          // A click on the dark area around the image closes the gallery; the image and buttons stay interactive.
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          {open !== null && (
            <img
              src={sharpReady[sharpSrc(open)] ? sharpSrc(open) : previewSrc(open) || sharpSrc(open)}
              alt={`${title} – ${open + 1}. kép`}
              // Fills the panel so the preview and the sharp version occupy the same box (no jump on swap).
              className="h-full w-full object-contain"
              onClick={closeOnLetterbox}
            />
          )}
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <span className="sr-only">Bezárás</span>
            <XMarkIcon aria-hidden="true" className="size-7" />
          </button>
          {images.length > 1 && (
            <>
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
            </>
          )}
          {open !== null && (
            <p className="absolute bottom-4 left-0 right-0 px-4 text-center text-sm text-white/80">
              {caption} · {open + 1} / {images.length}
            </p>
          )}
        </DialogPanel>
      </Dialog>
    </div>
  );
}
