// Shared Open Graph helpers.
// Next.js replaces (does not merge) a parent's `openGraph` object when a route defines its own,
// so every route spreads `ogDefaults` in to keep site name, locale and type.
export const ogDefaults = { siteName: "Geotherm House", locale: "hu_HU", type: "website" };

// Sirv resizes and re-encodes on the fly: a 1200px wide JPEG is the safe size for link previews.
export function ogImages(src) {
  if (!src.includes(".sirv.com/")) return [{ url: src }];
  const sep = src.includes("?") ? "&" : "?";
  return [{ url: `${src}${sep}w=1200&format=jpg` }];
}

const SIRV = "https://geotherm.sirv.com/geotherm";
// High-resolution originals were uploaded from macOS, so Sirv keeps their names in decomposed
// Unicode (NFD): "á" is "a" + U+0301. Their URLs must be percent-encoded in that form.
const HIGH_RES = `${SIRV}/geotherm_high_resolution`;
export const ogPhotos = {
  construction: `${SIRV}/f%C5%91oldal/kivitelez%C3%A9s_f%C5%91k%C3%A9p2.jpg`,
  design: `${HIGH_RES}/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/kezdo%CC%8B.jpg`,
  references: `${HIGH_RES}/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/KEZDO%CC%8B.jpg`,
};

// Ask Sirv for a resized copy (it also serves WebP/AVIF to browsers that accept them).
// Used for thumbnails so a 300px tile does not download a 1200px original.
export function sirvResize(src, width) {
  if (!src || !src.includes(".sirv.com/")) return src;
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}

// Responsive candidates for a Sirv image, so the browser downloads only the width it will display.
// High-res originals are 3000-6000px wide; serving them unresized would cost several MB per photo.
export function sirvSrcSet(src, widths = [640, 960, 1280, 1920, 2560]) {
  if (!src || !src.includes(".sirv.com/")) return undefined;
  // Commas separate srcset candidates, so encode the one in folder names like "Családi ház, Bajót".
  const safe = src.replaceAll(",", "%2C");
  return widths.map((w) => `${sirvResize(safe, w)} ${w}w`).join(", ");
}
