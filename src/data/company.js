// Company contact details shown in the footer and on the contact page.
// Keep the addresses identical to the Google Business Profile and src/data/structuredData.js.

// Google Business Profile of the construction office (Jókai u. 1/a.).
export const googlePlaceId = "ChIJT4QRwabNQUcRS9r92o33RZQ";
// Canonical Maps URL of the profile (built from its CID); used in structured data.
export const googleProfileUrl = "https://www.google.com/maps?cid=10684217879642888779";

function directionsUrl(address, placeId) {
  const base = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  return placeId ? `${base}&destination_place_id=${placeId}` : base;
}

export const offices = [
  {
    label: "Kivitelezői iroda",
    address: "2112 Veresegyház, Jókai u. 1/a.",
    placeId: googlePlaceId,
  },
  {
    label: "Tervezői iroda",
    address: "1084 Budapest, József u. 42.",
  },
].map((o) => ({ ...o, directionsUrl: directionsUrl(o.address, o.placeId) }));

export const facebookUrl = "https://www.facebook.com/profile.php?id=100063270066044";
