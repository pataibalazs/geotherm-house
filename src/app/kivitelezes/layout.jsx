import { ogDefaults, ogImages, ogPhotos } from "@/data/seo";

export const metadata = {
  title: "Generálkivitelezés | Geotherm House",
  description:
    "Magas minőségű alapanyagok és szakértő csapat az alapozástól a kulcsrakész átadásig. Társasházak, sorházak és családi házak kivitelezése.",
  alternates: { canonical: "/kivitelezes" },
  openGraph: {
    ...ogDefaults,
    title: "Generálkivitelezés | Geotherm House",
    description:
      "Magas minőségű alapanyagok és szakértő csapat az alapozástól a kulcsrakész átadásig. Társasházak, sorházak és családi házak kivitelezése.",
    url: "/kivitelezes",
    images: ogImages(ogPhotos.construction),
  },
};

export default function Layout({ children }) {
  return children;
}
