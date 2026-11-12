import { apartments } from "@/data/lakasok";

const BASE = "https://www.geothermhouse.hu";

// Reference detail pages: /references/tervezesi-1..2, /references/kivitelezesi-1..17
const referenceSlugs = [
  ...Array.from({ length: 2 }, (_, i) => `tervezesi-${i + 1}`),
  ...Array.from({ length: 17 }, (_, i) => `kivitelezesi-${i + 1}`),
];

export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = "monthly") => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1),
    page("/fooldal", 0.8),
    ...apartments.map((a) => page(`/lakasok/${a.slug}`, 0.8, "weekly")),
    page("/construction", 0.7),
    page("/design", 0.7),
    page("/references", 0.6),
    ...referenceSlugs.map((slug) => page(`/references/${slug}`, 0.5)),
    page("/about", 0.5),
    page("/contact", 0.6),
  ];
}
