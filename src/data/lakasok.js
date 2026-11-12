// Apartment data extracted from "FÜZET VEVŐKNEK 1-2 ÜTEM_javított.pdf".
// To update availability or prices edit `status` ("elerheto" | "foglalt" | "eladva")
// and `price` (number in HUF, or null for "Ár érdeklődésre").

export const project = {
  name: "Csonkás központ",
  city: "Veresegyház",
  developer: "Geotherm House Kft.",
  address: "Könyves Kálmán krt. 1., Veresegyház",
  // Exact location of the building (lat, lng)
  mapUrl: "https://www.google.com/maps/search/?api=1&query=47.652776,19.264478",
};

export const contacts = [
  { name: "Benke Zsófia", role: "Értékesítő", phone: "+36 20 418 4541" },
  { name: "Fülöp Vilmos", role: "Ügyvezető, Geotherm House Kft.", phone: "+36 30 932 1632" },
];

export const floors = [
  { key: "foldszint", label: "Földszint", plan: { src: "/images/lakasok/foldszint.webp", width: 2200, height: 2616 } },
  { key: "emelet", label: "1. emelet", plan: { src: "/images/lakasok/emelet.webp", width: 2200, height: 2620 } },
  { key: "tetoter", label: "Tetőtér", plan: { src: "/images/lakasok/tetoter.webp", width: 2200, height: 2647 } },
];

export const sitePlan = { src: "/images/lakasok/helyszinrajz.webp", width: 2200, height: 2637 };

export const statusLabels = {
  elerheto: "Elérhető",
  foglalt: "Foglalt",
  eladva: "Eladva",
};

export const apartments = [
  {
    "code": "1.01",
    "slug": "1-01",
    "floor": "foldszint",
    "floorLabel": "Földszint",
    "phase": 1,
    "area": 53.9,
    "terrace": 4.81,
    "bedrooms": 1,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 5.21,
        "finish": "kerámia"
      },
      {
        "name": "Konyha, étkező",
        "area": 10.64,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 21.2,
        "finish": "laminált parketta"
      },
      {
        "name": "Gardrób",
        "area": 2.92,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 10.13,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 3.8,
        "finish": "kerámia"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 4.81,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/1-01.webp",
      "width": 2080,
      "height": 1745
    },
    "keyPlan": {
      "src": "/images/lakasok/1-01-elhelyezes.webp",
      "width": 514,
      "height": 615
    }
  },
  {
    "code": "1.02",
    "slug": "1-02",
    "floor": "foldszint",
    "floorLabel": "Földszint",
    "phase": 1,
    "area": 51.31,
    "terrace": 7.78,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 4.45,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 3.99,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 8.18,
        "finish": "laminált parketta"
      },
      {
        "name": "Háló",
        "area": 12.51,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha",
        "area": 6.17,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.01,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 7.78,
        "finish": "kerámia"
      }
    ],
    "status": "eladva",
    "price": null,
    "plan": {
      "src": "/images/lakasok/1-02.webp",
      "width": 2200,
      "height": 1600
    },
    "keyPlan": {
      "src": "/images/lakasok/1-02-elhelyezes.webp",
      "width": 514,
      "height": 615
    }
  },
  {
    "code": "1.03",
    "slug": "1-03",
    "floor": "foldszint",
    "floorLabel": "Földszint",
    "phase": 1,
    "area": 51.31,
    "terrace": 7.78,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 4.45,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 3.99,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 8.18,
        "finish": "laminált parketta"
      },
      {
        "name": "Háló",
        "area": 12.51,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha",
        "area": 6.17,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.01,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 7.78,
        "finish": "kerámia"
      }
    ],
    "status": "eladva",
    "price": null,
    "plan": {
      "src": "/images/lakasok/1-03.webp",
      "width": 2177,
      "height": 1656
    },
    "keyPlan": {
      "src": "/images/lakasok/1-03-elhelyezes.webp",
      "width": 514,
      "height": 615
    }
  },
  {
    "code": "1.04",
    "slug": "1-04",
    "floor": "foldszint",
    "floorLabel": "Földszint",
    "phase": 1,
    "area": 51.31,
    "terrace": 5.64,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 4.45,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 3.99,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 8.18,
        "finish": "laminált parketta"
      },
      {
        "name": "Háló",
        "area": 12.51,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha",
        "area": 6.04,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.14,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 5.64,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/1-04.webp",
      "width": 2071,
      "height": 1587
    },
    "keyPlan": {
      "src": "/images/lakasok/1-04-elhelyezes.webp",
      "width": 514,
      "height": 615
    }
  },
  {
    "code": "1.05",
    "slug": "1-05",
    "floor": "foldszint",
    "floorLabel": "Földszint",
    "phase": 1,
    "area": 63.41,
    "terrace": 7.35,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 5.75,
        "finish": "kerámia"
      },
      {
        "name": "Wc",
        "area": 1.3,
        "finish": "kerámia"
      },
      {
        "name": "Konyha",
        "area": 5.12,
        "finish": "kerámia"
      },
      {
        "name": "Étkező",
        "area": 5.97,
        "finish": "laminált parketta"
      },
      {
        "name": "Nappali",
        "area": 17.08,
        "finish": "laminált parketta"
      },
      {
        "name": "Közlekedő",
        "area": 1.58,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 4.93,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 9.5,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 12.18,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 7.35,
        "finish": "laminált parketta"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/1-05.webp",
      "width": 2150,
      "height": 1885
    },
    "keyPlan": {
      "src": "/images/lakasok/1-05-elhelyezes.webp",
      "width": 514,
      "height": 615
    }
  },
  {
    "code": "1.06",
    "slug": "1-06",
    "floor": "foldszint",
    "floorLabel": "Földszint",
    "phase": 1,
    "area": 49.19,
    "terrace": 9.66,
    "bedrooms": 1,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 6.22,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 4.34,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 12.15,
        "finish": "laminált parketta"
      },
      {
        "name": "Nappali",
        "area": 16.82,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha, étkező",
        "area": 9.66,
        "finish": "kerámia"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 9.66,
        "finish": "kerámia"
      }
    ],
    "status": "eladva",
    "price": null,
    "plan": {
      "src": "/images/lakasok/1-06.webp",
      "width": 1692,
      "height": 2038
    },
    "keyPlan": {
      "src": "/images/lakasok/1-06-elhelyezes.webp",
      "width": 514,
      "height": 615
    }
  },
  {
    "code": "2.01",
    "slug": "2-01",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 1,
    "area": 53.9,
    "terrace": 4.81,
    "bedrooms": 1,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 5.21,
        "finish": "kerámia"
      },
      {
        "name": "Konyha, étkező",
        "area": 10.64,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 21.2,
        "finish": "laminált parketta"
      },
      {
        "name": "Gardrób",
        "area": 2.92,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 10.13,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 3.8,
        "finish": "kerámia"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 4.81,
        "finish": "kerámia"
      }
    ],
    "status": "eladva",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-01.webp",
      "width": 1936,
      "height": 1686
    },
    "keyPlan": {
      "src": "/images/lakasok/2-01-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.02",
    "slug": "2-02",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 1,
    "area": 51.31,
    "terrace": 7.78,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 4.45,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 3.99,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 8.18,
        "finish": "laminált parketta"
      },
      {
        "name": "Háló",
        "area": 12.51,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha",
        "area": 6.17,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.01,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 7.78,
        "finish": "kerámia"
      }
    ],
    "status": "eladva",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-02.webp",
      "width": 2200,
      "height": 1615
    },
    "keyPlan": {
      "src": "/images/lakasok/2-02-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.03",
    "slug": "2-03",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 1,
    "area": 51.31,
    "terrace": 7.78,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 4.45,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 3.99,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 8.18,
        "finish": "laminált parketta"
      },
      {
        "name": "Háló",
        "area": 12.51,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha",
        "area": 6.17,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.01,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 7.78,
        "finish": "kerámia"
      }
    ],
    "status": "eladva",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-03.webp",
      "width": 2200,
      "height": 1616
    },
    "keyPlan": {
      "src": "/images/lakasok/2-03-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.04",
    "slug": "2-04",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 1,
    "area": 51.31,
    "terrace": 5.64,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 4.45,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 3.99,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 8.18,
        "finish": "laminált parketta"
      },
      {
        "name": "Háló",
        "area": 12.51,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha",
        "area": 6.04,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.14,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 5.64,
        "finish": "kerámia"
      }
    ],
    "status": "eladva",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-04.webp",
      "width": 2045,
      "height": 1590
    },
    "keyPlan": {
      "src": "/images/lakasok/2-04-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.05",
    "slug": "2-05",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 1,
    "area": 63.41,
    "terrace": 7.35,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 5.75,
        "finish": "kerámia"
      },
      {
        "name": "Wc",
        "area": 1.3,
        "finish": "kerámia"
      },
      {
        "name": "Konyha",
        "area": 5.12,
        "finish": "kerámia"
      },
      {
        "name": "Étkező",
        "area": 5.97,
        "finish": "laminált parketta"
      },
      {
        "name": "Nappali",
        "area": 17.08,
        "finish": "laminált parketta"
      },
      {
        "name": "Közlekedő",
        "area": 1.58,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 4.93,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 9.5,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 12.18,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 7.35,
        "finish": "laminált parketta"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-05.webp",
      "width": 2144,
      "height": 1904
    },
    "keyPlan": {
      "src": "/images/lakasok/2-05-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.06",
    "slug": "2-06",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 1,
    "area": 79.22,
    "terrace": 9.79,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba, közlekedő",
        "area": 11.52,
        "finish": "kerámia"
      },
      {
        "name": "Wc",
        "area": 1.28,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 13.74,
        "finish": "laminált parketta"
      },
      {
        "name": "Nappali",
        "area": 16.58,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha, étkező",
        "area": 13.84,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 5.24,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 17.02,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 9.79,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-06.webp",
      "width": 2200,
      "height": 2063
    },
    "keyPlan": {
      "src": "/images/lakasok/2-06-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.07",
    "slug": "2-07",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 2,
    "area": 51.34,
    "terrace": 5.41,
    "bedrooms": 1,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 5.14,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 4.54,
        "finish": "kerámia"
      },
      {
        "name": "Hálószoba",
        "area": 14.49,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha, Étkező",
        "area": 10.42,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.75,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 5.41,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-07.webp",
      "width": 2006,
      "height": 1774
    },
    "keyPlan": {
      "src": "/images/lakasok/2-07-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.08",
    "slug": "2-08",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 2,
    "area": 49.18,
    "terrace": 5.41,
    "bedrooms": 1,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 5.25,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 4.25,
        "finish": "kerámia"
      },
      {
        "name": "Hálószoba",
        "area": 12.69,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha, étkező",
        "area": 10.24,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.75,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 5.41,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-08.webp",
      "width": 1791,
      "height": 1756
    },
    "keyPlan": {
      "src": "/images/lakasok/2-08-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.09",
    "slug": "2-09",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 2,
    "area": 91.12,
    "terrace": 12.48,
    "bedrooms": 3,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 7.91,
        "finish": "kerámia"
      },
      {
        "name": "Mosdó",
        "area": 2.72,
        "finish": "kerámia"
      },
      {
        "name": "Hálószoba",
        "area": 13.68,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 3.46,
        "finish": "kerámia"
      },
      {
        "name": "Konyha, étkező",
        "area": 18.64,
        "finish": "kerámia"
      },
      {
        "name": "Hálószoba",
        "area": 12.63,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 3.41,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 18.45,
        "finish": "laminált parketta"
      },
      {
        "name": "Hálószoba",
        "area": 10.22,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 12.48,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-09.webp",
      "width": 2200,
      "height": 2169
    },
    "keyPlan": {
      "src": "/images/lakasok/2-09-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.10",
    "slug": "2-10",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 2,
    "area": 73.78,
    "terrace": 10.91,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 3.95,
        "finish": "kerámia"
      },
      {
        "name": "Mosdó",
        "area": 1.28,
        "finish": "kerámia"
      },
      {
        "name": "Konyha",
        "area": 11.21,
        "finish": "kerámia"
      },
      {
        "name": "Étkező, Nappali",
        "area": 25.95,
        "finish": "laminált parketta"
      },
      {
        "name": "Közlekedő",
        "area": 2.95,
        "finish": "laminált parketta"
      },
      {
        "name": "Hálószoba",
        "area": 12.01,
        "finish": "laminált parketta"
      },
      {
        "name": "Hálószoba",
        "area": 11.73,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 4.7,
        "finish": "kerámia"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 10.91,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-10.webp",
      "width": 2135,
      "height": 2463
    },
    "keyPlan": {
      "src": "/images/lakasok/2-10-elhelyezes.webp",
      "width": 514,
      "height": 616
    }
  },
  {
    "code": "2.11",
    "slug": "2-11",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 2,
    "area": 50.77,
    "terrace": 6.88,
    "bedrooms": 1,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 4.13,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 4.61,
        "finish": "kerámia"
      },
      {
        "name": "Hálószoba",
        "area": 11.5,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha, étkező",
        "area": 13.74,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.79,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 6.88,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-11.webp",
      "width": 2024,
      "height": 1531
    },
    "keyPlan": {
      "src": "/images/lakasok/2-11-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.12",
    "slug": "2-12",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 2,
    "area": 51.36,
    "terrace": 7.18,
    "bedrooms": 1,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 4.13,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 4.65,
        "finish": "kerámia"
      },
      {
        "name": "Hálószoba",
        "area": 11.62,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha, étkező",
        "area": 13.98,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.98,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 7.18,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-12.webp",
      "width": 1996,
      "height": 1543
    },
    "keyPlan": {
      "src": "/images/lakasok/2-12-elhelyezes.webp",
      "width": 513,
      "height": 616
    }
  },
  {
    "code": "2.13",
    "slug": "2-13",
    "floor": "emelet",
    "floorLabel": "1. emelet",
    "phase": 2,
    "area": 51.08,
    "terrace": 9.98,
    "bedrooms": 1,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 3.39,
        "finish": "kerámia"
      },
      {
        "name": "Konyha, étkező",
        "area": 10.35,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 17.72,
        "finish": "laminált parketta"
      },
      {
        "name": "Közlekedő",
        "area": 2.6,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 4.32,
        "finish": "kerámia"
      },
      {
        "name": "Hálószoba",
        "area": 12.7,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 9.98,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/2-13.webp",
      "width": 2200,
      "height": 1625
    },
    "keyPlan": {
      "src": "/images/lakasok/2-13-elhelyezes.webp",
      "width": 513,
      "height": 616
    },
    "areaFull": 55.14
  },
  {
    "code": "3.01",
    "slug": "3-01",
    "floor": "tetoter",
    "floorLabel": "Tetőtér",
    "phase": 1,
    "area": 78.73,
    "terrace": 8.94,
    "bedrooms": 3,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 3.8,
        "finish": "kerámia"
      },
      {
        "name": "Wc",
        "area": 1.42,
        "finish": "kerámia"
      },
      {
        "name": "Konyha, étkező",
        "area": 11.52,
        "finish": "kerámia"
      },
      {
        "name": "Dolgozó szoba",
        "area": 9.37,
        "finish": "laminált parketta"
      },
      {
        "name": "Nappali",
        "area": 17.77,
        "finish": "laminált parketta"
      },
      {
        "name": "Közlekedő/gardrób",
        "area": 8.88,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 9.86,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 11.39,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 4.72,
        "finish": "kerámia"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 8.94,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/3-01.webp",
      "width": 1648,
      "height": 3019
    },
    "keyPlan": {
      "src": "/images/lakasok/3-01-elhelyezes.webp",
      "width": 494,
      "height": 594
    },
    "areaFull": 85.31
  },
  {
    "code": "3.02",
    "slug": "3-02",
    "floor": "tetoter",
    "floorLabel": "Tetőtér",
    "phase": 1,
    "area": 78.49,
    "terrace": 9.13,
    "bedrooms": 3,
    "rooms": [
      {
        "name": "Előszoba",
        "area": 3.8,
        "finish": "kerámia"
      },
      {
        "name": "Wc",
        "area": 1.42,
        "finish": "kerámia"
      },
      {
        "name": "Dolgozó szoba",
        "area": 9.37,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha, étkező",
        "area": 11.5,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 17.77,
        "finish": "laminált parketta"
      },
      {
        "name": "Közlekedő/gardrób",
        "area": 8.88,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 9.86,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 11.25,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 4.64,
        "finish": "kerámia"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 9.13,
        "finish": "kerámia"
      }
    ],
    "status": "eladva",
    "price": null,
    "plan": {
      "src": "/images/lakasok/3-02.webp",
      "width": 1674,
      "height": 2972
    },
    "keyPlan": {
      "src": "/images/lakasok/3-02-elhelyezes.webp",
      "width": 494,
      "height": 594
    },
    "areaFull": 85.07
  },
  {
    "code": "3.03",
    "slug": "3-03",
    "floor": "tetoter",
    "floorLabel": "Tetőtér",
    "phase": 1,
    "area": 70.56,
    "terrace": 5.97,
    "bedrooms": 2,
    "rooms": [
      {
        "name": "Előtér",
        "area": 4.97,
        "finish": "kerámia"
      },
      {
        "name": "Konyha, étkező",
        "area": 14.87,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 20.26,
        "finish": "laminált parketta"
      },
      {
        "name": "Wc",
        "area": 1.51,
        "finish": "kerámia"
      },
      {
        "name": "Közlekedő",
        "area": 5.16,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 5.33,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 9.68,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 8.78,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 5.97,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/3-03.webp",
      "width": 1689,
      "height": 2963
    },
    "keyPlan": {
      "src": "/images/lakasok/3-03-elhelyezes.webp",
      "width": 494,
      "height": 594
    },
    "areaFull": 83.73
  },
  {
    "code": "3.04",
    "slug": "3-04",
    "floor": "tetoter",
    "floorLabel": "Tetőtér",
    "phase": 2,
    "area": 73.65,
    "terrace": 11.2,
    "bedrooms": 0,
    "rooms": [
      {
        "name": "Előtér",
        "area": 3.66,
        "finish": "kerámia"
      },
      {
        "name": "Étkező",
        "area": 8.32,
        "finish": "laminált parketta"
      },
      {
        "name": "Nappali",
        "area": 18.02,
        "finish": "laminált parketta"
      },
      {
        "name": "Közlekedő",
        "area": 1.74,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 4.05,
        "finish": "kerámia"
      },
      {
        "name": "Konyha",
        "area": 6.0,
        "finish": "kerámia"
      },
      {
        "name": "Étkező",
        "area": 5.02,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha",
        "area": 5.14,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 16.07,
        "finish": "laminált parketta"
      },
      {
        "name": "Közlekedő",
        "area": 1.74,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 3.89,
        "finish": "kerámia"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 5.6,
        "finish": "kerámia"
      },
      {
        "name": "Terasz",
        "area": 5.6,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/3-04.webp",
      "width": 2200,
      "height": 1088
    },
    "keyPlan": {
      "src": "/images/lakasok/3-04-elhelyezes.webp",
      "width": 495,
      "height": 594
    },
    "areaFull": 83.49,
    "layoutNote": "2 nappali, 2 konyha, 2 fürdő, 2 terasz"
  },
  {
    "code": "3.05",
    "slug": "3-05",
    "floor": "tetoter",
    "floorLabel": "Tetőtér",
    "phase": 2,
    "area": 95.61,
    "terrace": 26.57,
    "bedrooms": 3,
    "rooms": [
      {
        "name": "Előtér",
        "area": 5.19,
        "finish": "kerámia"
      },
      {
        "name": "Wc",
        "area": 1.53,
        "finish": "kerámia"
      },
      {
        "name": "Közlekedő",
        "area": 4.79,
        "finish": "kerámia"
      },
      {
        "name": "Fürdő",
        "area": 5.8,
        "finish": "kerámia"
      },
      {
        "name": "Szoba",
        "area": 10.74,
        "finish": "laminált parketta"
      },
      {
        "name": "Szoba",
        "area": 13.53,
        "finish": "laminált parketta"
      },
      {
        "name": "Fürdő",
        "area": 4.4,
        "finish": "kerámia"
      },
      {
        "name": "Nappali",
        "area": 23.14,
        "finish": "laminált parketta"
      },
      {
        "name": "Konyha, étkező",
        "area": 15.5,
        "finish": "kerámia"
      },
      {
        "name": "Iroda",
        "area": 10.99,
        "finish": "laminált parketta"
      }
    ],
    "terraces": [
      {
        "name": "Terasz",
        "area": 3.17,
        "finish": "kerámia"
      },
      {
        "name": "Terasz",
        "area": 23.4,
        "finish": "kerámia"
      }
    ],
    "status": "elerheto",
    "price": null,
    "plan": {
      "src": "/images/lakasok/3-05.webp",
      "width": 2200,
      "height": 2563
    },
    "keyPlan": {
      "src": "/images/lakasok/3-05-elhelyezes.webp",
      "width": 495,
      "height": 594
    }
  }
];

export function getApartment(slug) {
  return apartments.find((a) => a.slug === slug);
}

export function formatArea(value) {
  return value.toLocaleString("hu-HU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " m²";
}

export function formatPrice(value) {
  return value == null ? "Ár érdeklődésre" : value.toLocaleString("hu-HU") + " Ft";
}

export function roomsLabel(apartment) {
  if (apartment.layoutNote) return apartment.layoutNote;
  return apartment.bedrooms === 0 ? "Nappali" : `Nappali + ${apartment.bedrooms} szoba`;
}

export const floorAdjectives = {
  foldszint: "földszinti",
  emelet: "1. emeleti",
  tetoter: "tetőtéri",
};

// Visualisation renders of the building (first one is the hero image).
export const renders = [
  { src: "/images/latvany/csonkas-kozpont-latvany-1.webp", width: 1518, height: 688, alt: "Csonkás központ, Veresegyház – főbejárat az ívelt kapuval (látványterv)" },
  { src: "/images/latvany/csonkas-kozpont-latvany-2.webp", width: 1456, height: 732, alt: "Az épület sarka az árkádsorral és a parkolóval (látványterv)" },
  { src: "/images/latvany/csonkas-kozpont-latvany-3.webp", width: 1456, height: 731, alt: "Téglahomlokzat erkélyekkel és tetőablakokkal (látványterv)" },
  { src: "/images/latvany/csonkas-kozpont-latvany-4.webp", width: 1634, height: 640, alt: "Utcai homlokzat a földszinti üzlethelyiséggel (látványterv)" },
  { src: "/images/latvany/csonkas-kozpont-latvany-5.webp", width: 1706, height: 608, alt: "Utcai homlokzat az erkélysorral (látványterv)" },
];
