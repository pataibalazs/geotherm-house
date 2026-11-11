import Link from "next/link";

export const metadata = {
  title: "Az oldal nem található | Geotherm House",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="bg-stone-50">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-6xl font-bold text-amber-500">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
        Ez az oldal nem található
      </h1>
      <p className="mt-3 text-gray-600">
        Lehet, hogy a cím elírás, vagy az oldal időközben megszűnt.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-amber-500 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-amber-400"
        >
          Vissza a főoldalra
        </Link>
        <Link
          href="/lakasok"
          className="rounded-xl bg-white px-5 py-2.5 font-semibold text-gray-900 ring-1 ring-stone-300 hover:ring-gray-900"
        >
          Eladó lakások
        </Link>
      </div>
      </div>
    </main>
  );
}
