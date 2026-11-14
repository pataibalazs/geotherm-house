import Image from "next/image";
import {
  ArrowsPointingOutIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  apartments,
  formatArea,
  formatPrice,
  getApartment,
  project,
  roomsLabel,
  floorAdjectives,
  floors,
  sitePlan,
} from "@/data/lakasok";
import StatusBadge from "@/components/lakasok/StatusBadge";
import FloorPill from "@/components/lakasok/FloorPill";
import ContactCard from "@/components/lakasok/ContactCard";
import InquiryForm from "@/components/lakasok/InquiryForm";
import CallButton, { salesContact } from "@/components/lakasok/CallButton";
import PdfDownloadCard from "@/components/lakasok/PdfDownloadCard";

export function generateStaticParams() {
  return apartments.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = getApartment(slug);
  if (!a) return {};
  const title = `${a.code} lakás – ${a.floorLabel}, ${formatArea(a.area)} | ${project.city}, ${project.name}`;
  const description = `${floorAdjectives[a.floor]} új építésű lakás Veresegyházon: ${formatArea(a.area)}, ${formatArea(a.terrace)} terasz, ${roomsLabel(a).toLowerCase()}. Alaprajz és helyiséglista.`;
  const url = `https://www.geothermhouse.hu/lakasok/${a.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "hu_HU",
      images: [{ url: `https://www.geothermhouse.hu${a.plan.src}`, width: a.plan.width, height: a.plan.height }],
    },
  };
}

export default async function ApartmentPage({ params }) {
  const { slug } = await params;
  const a = getApartment(slug);
  if (!a) notFound();

  const index = apartments.indexOf(a);
  const prev = apartments[index - 1];
  const next = apartments[index + 1];
  const similar = apartments
    .filter((o) => o.slug !== a.slug && o.status !== "eladva" && o.status !== "hamarosan")
    .sort((x, y) => Math.abs(x.area - a.area) - Math.abs(y.area - a.area))
    .slice(0, 3);
  const sold = a.status === "eladva";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: `${a.code} lakás – ${project.name}, ${project.city}`,
    floorSize: { "@type": "QuantitativeValue", value: a.area, unitCode: "MTK" },
    numberOfRooms: a.bedrooms + 1,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.city,
      addressCountry: "HU",
    },
    image: `https://www.geothermhouse.hu${a.plan.src}`,
  };

  const floorPlan = floors.find((f) => f.key === a.floor).plan;

  const facts = [
    { label: "Szint", value: <FloorPill label={a.floorLabel} /> },
    { label: "Alapterület", value: formatArea(a.area) },
    ...(a.areaFull
      ? [{ label: "Bruttó alapterület", value: formatArea(a.areaFull) }]
      : []),
    { label: "Terasz", value: formatArea(a.terrace) },
    { label: "Elosztás", value: roomsLabel(a) },
    { label: "Ütem", value: `${a.phase}. ütem` },
  ];

  return (
    <main className="bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8">
        <nav aria-label="Morzsamenü" className="text-sm text-gray-500">
          <Link href="/lakasok" className="hover:text-amber-600">
            Eladó lakások
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{a.code} lakás</span>
        </nav>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {a.code} lakás
          </h1>
          <FloorPill label={a.floorLabel} className="px-3! py-1! text-sm!" />
          <StatusBadge status={a.status} className="px-3! py-1! text-sm!" />
        </div>
        <p className="mt-2 text-lg text-gray-600">
          {formatArea(a.area)} · {roomsLabel(a)}
        </p>

        {/* Sold apartment: point visitors to similar available ones right away */}
        {sold && similar.length > 0 && (
          <section
            aria-labelledby="hasonlo-elerheto"
            className="mt-8 rounded-2xl bg-white p-5 ring-1 ring-stone-200 sm:p-6"
          >
            <p className="text-sm font-semibold text-stone-500">
              Ez a lakás már elkelt.
            </p>
            <h2
              id="hasonlo-elerheto"
              className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl"
            >
              Hasonló méretű elérhető lakások
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {similar.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/lakasok/${o.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 ring-stone-200 transition hover:shadow-md hover:ring-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={o.plan.src}
                        fill
                        alt={`${o.code} lakás alaprajza`}
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-contain p-3"
                      />
                    </div>
                    <div className="border-t border-stone-100 px-4 py-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-gray-900">
                          {o.code} lakás
                        </span>
                        <FloorPill label={o.floorLabel} />
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {formatArea(o.area)} · {roomsLabel(o)}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-amber-600 group-hover:text-amber-500">
                        Megnézem →
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <figure className="flex flex-col rounded-2xl bg-white p-4 ring-1 ring-stone-200">
              <a
                href={a.plan.src}
                target="_blank"
                rel="noopener"
                style={{ "--ar": `${a.plan.width} / ${a.plan.height}` }}
                className="relative block aspect-(--ar) lg:aspect-auto lg:min-h-0 lg:flex-1"
              >
                <Image
                  src={a.plan.src}
                  fill
                  alt={`${a.code} lakás alaprajza – ${a.floorLabel.toLowerCase()}, ${formatArea(a.area)}, ${roomsLabel(a).toLowerCase()}`}
                  sizes="(min-width: 1024px) 800px, 100vw"
                  priority
                  className="object-contain"
                />
              </a>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Kattintson az alaprajzra a teljes méretű nézethez.
              </figcaption>
            </figure>

            <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
              <p className={`text-2xl font-bold ${a.status === "eladva" ? "text-stone-500" : "text-gray-900"}`}>
                {a.status === "eladva"
                  ? "Eladva"
                  : a.status === "hamarosan"
                    ? "Értékesítés hamarosan"
                    : formatPrice(a.price)}
              </p>
              <dl className="mt-4 divide-y divide-stone-100 text-sm">
                {facts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4 py-2">
                    <dt className="text-gray-500">{f.label}</dt>
                    <dd className="text-right font-semibold text-gray-900">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-center text-gray-600">
                <span className="font-semibold text-gray-900">
                  {salesContact.name}
                </span>{" "}
                · értékesítő
              </p>
              <CallButton className="mt-3" />
            </div>

            <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200">
              <h2 className="px-2 text-sm font-semibold text-gray-900">
                Elhelyezkedés az épületben
              </h2>
              <Image
                src={a.keyPlan.src}
                width={a.keyPlan.width}
                height={a.keyPlan.height}
                alt={`A ${a.code} lakás helye az épület ${floorAdjectives[a.floor]} szintjén`}
                sizes="360px"
                className="mx-auto mt-2 h-auto w-full max-w-xs lg:max-w-none"
              />
            </div>
            </div>
        </div>

        {/* Rooms + site plan */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <section aria-labelledby="helyisegek" className="flex flex-col">
              <h2
                id="helyisegek"
                className="text-xl font-semibold text-gray-900"
              >
                Helyiségek
              </h2>
              <div className="mt-4 flex-1 overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-stone-100 text-gray-600">
                    <tr>
                      <th scope="col" className="px-4 py-2.5 font-semibold">
                        Helyiség
                      </th>
                      <th scope="col" className="px-4 py-2.5 text-right font-semibold">
                        Terület
                      </th>
                      <th scope="col" className="hidden px-4 py-2.5 font-semibold sm:table-cell">
                        Burkolat
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {a.rooms.map((r, i) => (
                      <tr key={i}>
                        <td className="px-4 py-2.5 text-gray-900">{r.name}</td>
                        <td className="px-4 py-2.5 text-right tabular-nums text-gray-900">
                          {formatArea(r.area)}
                        </td>
                        <td className="hidden px-4 py-2.5 text-gray-600 sm:table-cell">
                          {r.finish}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-stone-50 font-semibold">
                      <td className="px-4 py-2.5 text-gray-900">Lakás összesen</td>
                      <td className="px-4 py-2.5 text-right tabular-nums text-gray-900">
                        {formatArea(a.area)}
                      </td>
                      <td className="hidden sm:table-cell" />
                    </tr>
                    {a.terraces.map((r, i) => (
                      <tr key={`t${i}`}>
                        <td className="px-4 py-2.5 text-gray-900">{r.name}</td>
                        <td className="px-4 py-2.5 text-right tabular-nums text-gray-900">
                          {formatArea(r.area)}
                        </td>
                        <td className="hidden px-4 py-2.5 text-gray-600 sm:table-cell">
                          {r.finish}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {a.areaFull && (
                  <p className="border-t border-stone-100 px-4 py-3 text-sm text-gray-500">
                    Tetőtéri lakás: a hasznos alapterület {formatArea(a.area)},
                    a ferde tető alatti részekkel együtt{" "}
                    {formatArea(a.areaFull)}.
                  </p>
                )}
              </div>
            </section>

          <section aria-labelledby="helyszinrajz" className="flex flex-col">
            <h2
              id="helyszinrajz"
              className="text-xl font-semibold text-gray-900"
            >
              Helyszínrajz
            </h2>
            <div className="mt-4 flex flex-1 flex-col rounded-2xl bg-white p-4 ring-1 ring-stone-200">
              <a
                href={sitePlan.src}
                target="_blank"
                rel="noopener"
                className="relative block aspect-[22/26] lg:aspect-auto lg:min-h-[200px] lg:flex-1"
              >
                <Image
                  src={sitePlan.src}
                  fill
                  alt="Csonkás központ, Veresegyház – helyszínrajz"
                  sizes="360px"
                  className="object-contain"
                />
              </a>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={sitePlan.src}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-stone-100 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-stone-200 hover:text-gray-900"
                >
                  <ArrowsPointingOutIcon aria-hidden="true" className="size-4" />
                  Nagyítás
                </a>
                <a
                  href={floorPlan.src}
                  target="_blank"
                  rel="noopener"
                  title={`A teljes ${floorAdjectives[a.floor]} szint alaprajza`}
                  className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-stone-100 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-stone-200 hover:text-gray-900"
                >
                  <Squares2X2Icon aria-hidden="true" className="size-4" />
                  Teljes szint
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Contact + inquiry */}
        <section aria-labelledby="erdeklodes" className="mt-12">
          <h2 id="erdeklodes" className="text-xl font-semibold text-gray-900">
            {a.status === "eladva"
              ? "Hasonló lakást keres?"
              : `Érdekli a ${a.code} lakás?`}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {a.status === "eladva" ? (
              <>
                <ContactCard />
                <PdfDownloadCard />
              </>
            ) : (
              <>
                {/* Mobile order: contact, form, PDF. Desktop: contact + PDF left, form right. */}
                <ContactCard />
                <div className="md:col-start-2 md:row-span-2 md:row-start-1 *:h-full">
                  <InquiryForm apartmentCode={a.code} />
                </div>
                <div className="md:col-start-1 md:row-start-2 *:h-full">
                  <PdfDownloadCard />
                </div>
              </>
            )}
          </div>
        </section>

        <nav
          aria-label="Lakások lapozása"
          className="mt-12 flex justify-between border-t border-stone-200 pt-6 text-sm font-semibold"
        >
          {prev ? (
            <Link href={`/lakasok/${prev.slug}`} className="text-amber-600 hover:text-amber-500">
              ← {prev.code} lakás
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/lakasok/${next.slug}`} className="text-amber-600 hover:text-amber-500">
              {next.code} lakás →
            </Link>
          )}
        </nav>

        {!sold && (
        <section aria-labelledby="hasonlo" className="mt-12">
          <h2 id="hasonlo" className="text-xl font-semibold text-gray-900">
            Hasonló méretű lakások
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {similar.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/lakasok/${o.slug}`}
                  className="flex items-center justify-between rounded-xl bg-white px-4 py-3 ring-1 ring-stone-200 hover:ring-amber-400"
                >
                  <span>
                    <span className="block font-semibold text-gray-900">
                      {o.code} lakás
                    </span>
                    <span className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                      <FloorPill label={o.floorLabel} />
                      {formatArea(o.area)}
                    </span>
                  </span>
                  <StatusBadge status={o.status} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        )}
      </div>
    </main>
  );
}
