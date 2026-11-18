// schema.org structured data (JSON-LD) describing the company to search engines.
// Rendered on every page by the root layout. Keep the name, address and phone identical to the
// Google Business Profile: Google cross-checks them for local search ranking.

import { facebookUrl, googleProfileUrl } from "./company";

export const SITE_URL = "https://www.geothermhouse.hu";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const PHONE = "+36 30 932 1632";

const areaServed = [
  { "@type": "City", name: "Veresegyház" },
  { "@type": "AdministrativeArea", name: "Pest megye" },
];

function service(name) {
  return { "@type": "Offer", itemOffered: { "@type": "Service", name } };
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Geotherm House",
  legalName: "Geotherm House Kft.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/gh_logo1.png`,
  telephone: PHONE,
  taxID: "13835235-2-13",
  areaServed,
  sameAs: [facebookUrl, googleProfileUrl],
  department: [
    {
      "@type": "GeneralContractor",
      "@id": `${SITE_URL}/#kivitelezesi-iroda`,
      name: "Geotherm House – Kivitelezési iroda",
      url: `${SITE_URL}/kivitelezes`,
      image: `${SITE_URL}/images/gh_logo1.png`,
      hasMap: googleProfileUrl,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jókai u. 1/a.",
        postalCode: "2112",
        addressLocality: "Veresegyház",
        addressRegion: "Pest megye",
        addressCountry: "HU",
      },
      areaServed,
      makesOffer: [service("Generálkivitelezés"), service("Új építésű lakások értékesítése")],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#tervezesi-iroda`,
      name: "Geotherm House – Tervezési iroda",
      url: `${SITE_URL}/tervezes`,
      image: `${SITE_URL}/images/gh_logo1.png`,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "József u. 42.",
        postalCode: "1084",
        addressLocality: "Budapest",
        addressCountry: "HU",
      },
      areaServed,
      makesOffer: [service("Építészeti tervezés")],
    },
  ],
};

// Breadcrumb trail for pages that show one. `items` is [{ name, path }], home first.
export function breadcrumbList(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
