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
export const ogPhotos = {
  construction: `${SIRV}/f%C5%91oldal/kivitelez%C3%A9s_f%C5%91k%C3%A9p2.jpg`,
  design: `${SIRV}/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/kezd%C5%91.jpg`,
  references: `${SIRV}/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/KEZD%C5%90.webp`,
};
