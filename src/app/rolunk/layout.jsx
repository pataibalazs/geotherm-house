import { ogDefaults, ogImages, ogPhotos } from "@/data/seo";

export const metadata = {
  title: "Rólunk | Geotherm House",
  description:
    "Csapatunkban az innovatív tervezői szemlélet több évtizedes generálkivitelezői szaktudással találkozik. Ismerje meg a Geotherm House Kft. csapatát.",
  alternates: { canonical: "/rolunk" },
  openGraph: {
    ...ogDefaults,
    title: "Rólunk | Geotherm House",
    description:
      "Csapatunkban az innovatív tervezői szemlélet több évtizedes generálkivitelezői szaktudással találkozik. Ismerje meg a Geotherm House Kft. csapatát.",
    url: "/rolunk",
    images: ogImages(ogPhotos.construction),
  },
};

export default function Layout({ children }) {
  return children;
}
