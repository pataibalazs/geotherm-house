import { ogDefaults, ogImages, ogPhotos } from "@/data/seo";

export const metadata = {
  title: "Referenciák | Geotherm House",
  description:
    "Tervezési és kivitelezési referenciáink Veresegyházról és más településekről: társasházak, sorházak, ikerházak és családi házak, a tervezéstől a kulcsrakész átadásig.",
  alternates: { canonical: "/referenciak" },
  openGraph: {
    ...ogDefaults,
    title: "Referenciák | Geotherm House",
    description:
      "Tervezési és kivitelezési referenciáink Veresegyházról és más településekről: társasházak, sorházak, ikerházak és családi házak, a tervezéstől a kulcsrakész átadásig.",
    url: "/referenciak",
    images: ogImages(ogPhotos.references),
  },
};

export default function Layout({ children }) {
  return children;
}
