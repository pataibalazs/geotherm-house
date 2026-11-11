"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ThankYouModal({ open, onClose, title, children }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full p-1.5 text-gray-400 hover:bg-stone-100 hover:text-gray-700"
          >
            <span className="sr-only">Bezárás</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
          <CheckCircleIcon
            aria-hidden="true"
            className="mx-auto size-14 text-emerald-600"
          />
          <DialogTitle className="mt-3 text-xl font-semibold text-gray-900">
            {title}
          </DialogTitle>
          <p className="mt-2 text-gray-600">{children}</p>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-amber-500 px-4 py-2.5 font-semibold text-white hover:bg-amber-400"
          >
            Rendben
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
