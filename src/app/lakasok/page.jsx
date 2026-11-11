import ApartmentList from "@/components/lakasok/ApartmentList";
import FloorPlans from "@/components/lakasok/FloorPlans";
import ContactCard from "@/components/lakasok/ContactCard";
import PdfDownloadCard from "@/components/lakasok/PdfDownloadCard";
import RenderGallery from "@/components/lakasok/RenderGallery";
import ScrollToListButton from "@/components/lakasok/ScrollToListButton";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { apartments, project, renders } from "@/data/lakasok";

const minArea = Math.floor(Math.min(...apartments.map((a) => a.area)));
const maxArea = Math.ceil(Math.max(...apartments.map((a) => a.area)));

export const metadata = {
  title: `Eladó új építésű lakások Veresegyházon – ${project.name} | Geotherm House`,
  description: `${apartments.length} eladó új építésű, teraszos lakás Veresegyház Csonkás városrészében, ${minArea}–${maxArea} m² között. Alaprajzok, alapterületek és elérhetőség lakásonként.`,
  alternates: { canonical: "https://www.geothermhouse.hu/lakasok" },
  openGraph: {
    title: `Eladó új építésű lakások – ${project.city}, ${project.name}`,
    description: `${apartments.length} teraszos lakás, ${minArea}–${maxArea} m². Nézze meg az alaprajzokat!`,
    url: "https://www.geothermhouse.hu/lakasok",
    type: "website",
    locale: "hu_HU",
    images: [
      {
        url: `https://www.geothermhouse.hu${renders[0].src}`,
        width: renders[0].width,
        height: renders[0].height,
      },
    ],
  },
};

export default function ApartmentsPage() {
  return (
    <main className="bg-stone-50">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-10 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-8">
        <div>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Eladó új építésű lakások Veresegyházon
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Teraszos lakások{" "}
          <a
            href={project.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`${project.address} – megnyitás a Google Térképen`}
            className="font-medium text-amber-600 underline decoration-amber-300 underline-offset-4 hover:text-amber-500"
          >
            Veresegyház Csonkás városrészében
            <MapPinIcon aria-hidden="true" className="ml-1 inline size-4 align-[-2px]" />
          </a>
          .{" "}
          Böngésszen az alaprajzok között, és kérjen visszahívást a kiválasztott
          lakásra.
        </p>
        </div>
        <div className="mt-6 shrink-0 lg:mt-0">
          <ScrollToListButton />
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-6 pb-20 lg:px-8">
        <RenderGallery />
        <ApartmentList />
        <FloorPlans />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ContactCard />
          <PdfDownloadCard />
        </div>
      </div>
    </main>
  );
}
