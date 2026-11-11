import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function PdfDownloadCard() {
  return (
    <a
      href="/letoltes/csonkas-kozpont-lakasok-alaprajzok.pdf"
      download
      className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-stone-200 transition hover:ring-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
    >
      <DocumentArrowDownIcon aria-hidden="true" className="size-12 text-amber-500" />
      <span>
        <span className="block text-lg font-semibold text-gray-900">
          Az összes alaprajz letöltése
        </span>
        <span className="text-sm text-gray-600">
          Vevői füzet, 1–2. ütem (PDF, 13 MB)
        </span>
      </span>
      <span className="rounded-xl px-5 py-2 font-semibold text-amber-600 ring-1 ring-amber-500 transition group-hover:bg-amber-500 group-hover:text-white">
        PDF letöltése
      </span>
    </a>
  );
}
