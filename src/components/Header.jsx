"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { navigation } from "./navigation";
import { contacts } from "@/data/lakasok";

// Header call shortcut uses the primary sales contact.
const phone = contacts[0].phone;
const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-stone-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-10 p-6 lg:px-8"
      >
        <Link
          href="/fooldal"
          className="-m-1.5 shrink-0 p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
        >
          <span className="sr-only">Geotherm House</span>
          <img
            alt="Geotherm House logo"
            src="/images/gh_logo.png"
            className="h-12 sm:h-23 w-auto sm:-mt-4"
          />
        </Link>
        <div className="flex items-center gap-4 xl:hidden">
          <a
            href={phoneHref}
            className="inline-flex size-10 items-center justify-center rounded-full bg-amber-500 text-white shadow-sm hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            <span className="sr-only">Hívás: {phone}</span>
            <PhoneIcon aria-hidden="true" className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Desktop: links centered in the free space, call button pinned to the right edge */}
        <div className="hidden xl:flex xl:flex-1 xl:items-center xl:justify-center xl:gap-x-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="whitespace-nowrap text-base font-bold text-black hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Icon-only call button keeps the menu airy; the number shows as a tooltip and to screen readers */}
        <a
          href={phoneHref}
          title={`Hívás: ${phone}`}
          className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white shadow-sm hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 xl:ml-4 xl:inline-flex"
        >
          <PhoneIcon aria-hidden="true" className="size-5" />
          <span className="sr-only">Hívás: {phone}</span>
        </a>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="xl:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-50 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <Link
              href="/fooldal"
              className="-m-1.5 p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Geotherm House</span>
              <img
                alt="Geotherm House"
                src="/images/gh_logo.png"
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 "
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 text-lg font-bold block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
