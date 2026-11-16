import { notFound } from "next/navigation";
import { ogDefaults, ogImages, sirvResize, sirvSrcSet } from "@/data/seo";
import ImageLightbox from "@/components/ImageLightbox";

// Image trigger for the lightbox: pointer cursor and a subtle hover lighten.
const zoomClass =
  "block w-full cursor-pointer rounded transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2";

// Rendered image widths inside the max-w-7xl px-4 container, so srcset picks the right Sirv size.
const FULL_WIDTH = "(min-width: 1280px) 1248px, calc(100vw - 2rem)";
const HALF_WIDTH = "(min-width: 1280px) 612px, (min-width: 640px) calc(50vw - 1.75rem), calc(100vw - 2rem)";

const references = {
  "tervezesi-1": {
    title: "ÜZLETHÁZ BŐVÍTÉS, VERESEGYHÁZ",
    seoTitle: "Üzletház bővítés tervezése, Veresegyház",
    descriptionParagraphs: [
      "Tervezési feladatunk a Veresegyház Fő útján álló, családi ház karakterű, jelenleg üzletházként működő épület korszerűsítése és társasházzá alakítása volt, amelynek részeként a tetőidom átformálására és a tetőtér beépítésére is sor került.",
      "A telek Veresegyház településközponti részén helyezkedik el, a Fő út és a vasút kereszteződésének közvetlen szomszédságában. A telek adottságai kiváló lehetőséget kínálnak egy olyan új arculat létrehozásához, amely minőségében és megjelenésében is hozzájárul a környezet vizuális megújulásához, és hosszú távon erősítheti a városrész identitását.",
      "A tervezett oromfalas nyeregtető vörös cserépfedést kap, a homlokzaton pedig a fehérre vakolt falsíkok és a téglaburkolat váltakozása hoz létre harmonikus összhatást. Az új tetőtérben két, háromszobás lakás kap helyet, amelyek közös kültéri előteréhez vezető lépcsője az épület tömegébe szerves módon illeszkedik. A lépcső egy áttört, gerendákkal merevített, tégla pillérekből álló homlokzati sík mögött kap helyet, mely egyszerre biztosít átlátást és árnyékolást, és egyben karaktert ad az épület megjelenésének.",
    ],
    meta: {
      year: "2025",
      area: "663 m²",
      leadArchitect: "Farkas László",
      architects: "Fülöp Theodóra Eszter, Takács Johanna Krisztina",
      contractor: "Geotherm House Kft.",
    },
    featuredIndices: [0, 5],
    captions: [
      "TERVEZETT LÁTVÁNY",
      "TERVEZETT LÁTVÁNY",
      "TERVEZETT LÁTVÁNY",
      "DÉL-NYUGATI HOMLOKZAT",
      "DÉL-KELETI HOMLOKZAT",
      "ALAPRAJZ",
      "METSZET A",
      "METSZET B",
    ],
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/6_tervezett%20a%CC%81talaki%CC%81ta%CC%81s.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/7_tervezett%20a%CC%81talaki%CC%81ta%CC%81s.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/8_tervezett%20a%CC%81talaki%CC%81ta%CC%81s.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/4_homlokzat.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/9_homlokzat.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/3_alaprajz.jpg",

      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/10_metszet.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Megle%CC%81vo%CC%8B%20e%CC%81pu%CC%88let%20a%CC%81talaki%CC%81ta%CC%81s,%20bo%CC%8Bvi%CC%81te%CC%81s%20Veresegyha%CC%81z/5_metszet.jpg",
    ],
  },
  "tervezesi-2": {
    title: "CSALÁDI HÁZ, BAJÓT ",
    seoTitle: "Családi ház tervezése, Bajót",
    descriptionParagraphs: [
      "A megrendelő pár egy hagyományos parasztház ihlette, kortárs családi otthont képzelt el. Fontos szempont volt, hogy az épület a jelenlegi háromfős használat mellett a későbbiekben két főre is jól működjön, alkalmazkodva az élethelyzet változásaihoz.",
      "A ház központi tere a nyitott konyha–nappali, amelyből közvetlenül elérhetők a legfontosabb funkciók. Innen nyílik a szülői háló, valamint a keleti terasz és az oldalsó bejárati tér. A gyerek háló és a kiszolgáló helyiségek az utcai homlokzat felé, a bejárati tér túloldalán helyezkednek el, így az alaprajz jól elkülönülő, mégis egységes rendszert alkot.",
      "Az épület megjelenését vakolt felületek és terméskő burkolat váltakozása határozza meg, a nyílásokat faragott kőkeretek emelik ki. A megrendelők kiemelt kérése volt, hogy a keleti homlokzat különleges hangsúlyt kapjon. A kert felől egy markáns boltív jelöli ki az épület fő tengelyét és keleti megközelítését. A boltívet követő fedett terasz és az íves nyílászáró együttese adja a kívánt plasztikus, emelkedett karaktert a homlokzatnak. ",
    ],
    meta: {
      year: "2025",
      area: "175 m²",
      leadArchitect: "Pintér Balázs",
      architects: "Fülöp Theodóra Eszter, Takács Johanna Krisztina",
      contractor: "Geotherm House Kft.",
    },
    featuredIndices: [0, 5],
    captions: [
      "TERVEZETT LÁTVÁNY",
      "TERVEZETT LÁTVÁNY",
      "TERVEZETT LÁTVÁNY",
      "TERVEZETT LÁTVÁNY",
      "TERVEZETT LÁTVÁNY",
      "ALAPRAJZ",
      "DÉLI HOMLOKZAT",
      "KELETI HOMLOKZAT",
      "METSZET",
    ],
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/Ez%20legyen%20nagybab.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/de%CC%81li%20la%CC%81tva%CC%81ny.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/utcai%20la%CC%81tva%CC%81ny.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/keleti%20la%CC%81tva%CC%81ny.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/Ez%20legyen%20nagybab.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/alaprajz.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/de%CC%81li%20homlokzat.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/keleti%20homlokzat.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/tervezes/Csala%CC%81di%20ha%CC%81z,%20Bajo%CC%81t/metszet.jpg",
    ],
  },
  "kivitelezesi-1": {
    title: "VERESEGYHÁZ, LIGETEK SORHÁZ",
    seoTitle: "Ligetek sorház kivitelezése, Veresegyház",
    descriptionParagraphs: [
      "Négylakásos sorház a veresegyházi Ligetekben. Minden lakáshoz saját kert és autóbeálló tartozik.",
      "A legizgalmasabb feladatot a homlokzat jelentette: a sorházas tömeget a téglaburkolat tagolja és teszi karakteressé. Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { year: "2023", units: "4 lakás", area: "kb. 500 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott tégla homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/1(1).jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/2(1).jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/3(1).jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/6.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/7.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/8.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/9.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/10.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/11.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/kezdo%CC%8Bo%CC%8B.jpg",
    ],
  },
  "kivitelezesi-2": {
    title: "VERESEGYHÁZ, JÓKAI UTCA 1. TÁRSASHÁZ",
    seoTitle: "Társasház kivitelezése, Jókai utca 1., Veresegyház",
    descriptionParagraphs: [
      "Tizenhárom lakásos társasház Veresegyház központjában, a Jókai utcában. Ez volt az első ekkora léptékű saját beruházásunk, és nagy sikert hozott: a lakások rendkívül keresettek, a jó környék miatt pedig kiváló befektetésnek bizonyultak.",
      "Karakteres homlokzata ma meghatározó eleme az utcaképnek. Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { year: "2018", units: "13 lakás", area: "kb. 950 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott tégla homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
      "Gipszbeton lépcsőszerkezet",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/6.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/7U%CC%81J.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/13%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresehyga%CC%81z/KEZDO%CC%8B.jpg",
    ],
  },
  "kivitelezesi-3": {
    title: "VERESEGYHÁZ, JÓKAI UTCA 2. TÁRSASHÁZ",
    seoTitle: "Társasház kivitelezése, Jókai utca 2., Veresegyház",
    descriptionParagraphs: [
      "Nyolclakásos társasház a veresegyházi Jókai utcában, kőburkolatú homlokzattal. Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { year: "2020", units: "8 lakás", area: "kb. 800 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott kő homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%201/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%201/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%201/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%201/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%201/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%201/6U%CC%81J.jpg",
    ],
  },
  "kivitelezesi-4": {
    title: "VERESEGYHÁZ, JÓKAI UTCA 3. TÁRSASHÁZ",
    seoTitle: "Társasház kivitelezése, Jókai utca 3., Veresegyház",
    descriptionParagraphs: [
      "Nyolclakásos társasház a veresegyházi Jókai utcában. Különlegessége, hogy a nyolc lakásból négy kétszintes, belső lépcsős (duplex) lakás.",
      "A homlokzatot a kőburkolat és a kékre pácolt faszerkezetek együtt teszik izgalmassá. Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { year: "2021", units: "8 lakás", area: "kb. 750 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott kő homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
      "Gipszbeton lépcsőszerkezet",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%202/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%202/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%202/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%202/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%202/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%202/6.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%202/7.jpg",
    ],
  },
  "kivitelezesi-5": {
    title: "VERESEGYHÁZ, JÓKAI UTCA 4. TÁRSASHÁZ",
    seoTitle: "Társasház kivitelezése, Jókai utca 4., Veresegyház",
    descriptionParagraphs: [
      "Kilenclakásos társasház a veresegyházi Jókai utcában, téglaburkolatú homlokzattal. Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { year: "2022", units: "9 lakás", area: "kb. 700 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott tégla homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
      "Gipszbeton lépcsőszerkezet",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/9%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/9%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/9%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/9%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/9%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/9%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z/6U%CC%81J.jpg",
    ],
  },
  "kivitelezesi-6": {
    title: "VERESEGYHÁZ, JÓKAI UTCA 5. TÁRSASHÁZ",
    seoTitle: "Társasház kivitelezése, Jókai utca 5., Veresegyház",
    descriptionParagraphs: [
      "Nyolclakásos társasház a veresegyházi Jókai utcában, kőburkolatú homlokzattal. Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { year: "2023", units: "8 lakás", area: "kb. 600 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott kő homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
      "Gipszbeton lépcsőszerkezet",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%203/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%203/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%203/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%203/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%203/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/8%20laka%CC%81sos%20ta%CC%81rsasha%CC%81z%20Veresegyha%CC%81z%203/6U%CC%81J.jpg",
    ],
  },
  "kivitelezesi-7": {
    title: "VERESEGYHÁZ, LIGETEK, IKERHÁZ",
    seoTitle: "Ikerház kivitelezése, Ligetek, Veresegyház",
    descriptionParagraphs: [
      "Kétlakásos ikerház a veresegyházi Ligetekben. A tetőteret úgy alakítottuk ki, hogy később beépíthető legyen, így a lakások idővel bővíthetők.",
      "Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { year: "2024", units: "2 lakás", area: "kb. 300 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott tégla homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
      "Gipszbeton lépcsőszerkezet",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z/ke%CC%81ezdo%CC%8B.jpg",
    ],
  },
  "kivitelezesi-8": {
    title: "VERESEGYHÁZ, ETÜD UTCA, CSALÁDI HÁZ",
    seoTitle: "Családi ház kivitelezése, Etüd utca, Veresegyház",
    descriptionParagraphs: [
      "Két ikerház, összesen négy lakással a veresegyházi Etüd utcában. Az épületeket kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { units: "4 lakás (2 ikerház)", area: "kb. 600 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott tégla homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
      "Gipszbeton lépcsőszerkezet",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/6.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/7.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Ikerha%CC%81z%20Veresegyha%CC%81z/KEZDO%CC%8B.jpg",
    ],
  },
  "kivitelezesi-9": {
    title: "VERESEGYHÁZ, KODÁLY ZOLTÁN UTCA, CSALÁDI HÁZ",
    seoTitle: "Családi ház, Kodály Zoltán utca, Veresegyház",
    descriptionParagraphs: [
      "Családi ház a veresegyházi Kodály Zoltán utcában, téglaburkolatú homlokzattal. A házat kulcsrakészen kiviteleztük, és az értékesítést is mi végeztük.",
    ],
    meta: { units: "1 családi ház", area: "kb. 250 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott tégla homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
      "Gipszbeton lépcsőszerkezet",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z%20Veresegyha%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z%20Veresegyha%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z%20Veresegyha%CC%81z/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z%20Veresegyha%CC%81z/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z%20Veresegyha%CC%81z/5U%CC%81J.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z%20Veresegyha%CC%81z/KEZDO%CC%8B.jpg",
    ],
  },
  "kivitelezesi-10": {
    title: "VERESEGYHÁZ, LIGETEK, SORHÁZ",
    seoTitle: "Sorház kivitelezése, Ligetek, Veresegyház",
    descriptionParagraphs: [
      "Hatlakásos sorház a veresegyházi Ligetekben. Megjelenését a karakteres, íves nyílászárók határozzák meg.",
      "Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { year: "2014", units: "6 lakás", area: "kb. 950 m²", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
      "Háromrétegű hőszigetelő üvegezésű nyílászárók",
      "Ragasztott tégla homlokzatburkolat",
      "A+ energetikai besorolás",
      "Padló- és falfűtés",
      "Gipszbeton lépcsőszerkezet",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/3.1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/3.2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/6.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/7.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/6%20laka%CC%81sos%20sorha%CC%81z%20Veresegyha%CC%81z/KEZDO%CC%8B.jpg",
    ],
  },
  "kivitelezesi-11": {
    title: "SZILASLIGETI SORHÁZAK",
    seoTitle: "Szilasligeti sorházak kivitelezése",
    descriptionParagraphs: [
      "A szilasligeti sorházak szerkezetkész kivitelezését végeztük.",
    ],
    meta: { scope: "Szerkezetkész kivitelezés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Sorha%CC%81zak%20Szilasliget/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Sorha%CC%81zak%20Szilasliget/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Sorha%CC%81zak%20Szilasliget/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Sorha%CC%81zak%20Szilasliget/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Sorha%CC%81zak%20Szilasliget/5.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Sorha%CC%81zak%20Szilasliget/6.jpg",
    ],
  },
  "kivitelezesi-12": {
    title: "VERESEGYHÁZ, 4 LAKÁSOS SORHÁZ",
    seoTitle: "4 lakásos sorház kivitelezése, Veresegyház",
    descriptionParagraphs: [
      "Négylakásos sorház Veresegyházon. Az épületet kulcsrakészen kiviteleztük, a lakásokat mi értékesítettük.",
    ],
    meta: { units: "4 lakás", scope: "Kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/4%20laka%CC%81sos%20sorha%CC%81z/kezdo%CC%8B.jpg",
    ],
  },
  "kivitelezesi-13": {
    title: "VERESEGYHÁZ, 10 LAKÁSOS SORHÁZ",
    seoTitle: "10 lakásos sorház kivitelezése, Veresegyház",
    descriptionParagraphs: [
      "Tízlakásos sorház Veresegyházon. Az épületet mi terveztük, kulcsrakészen kiviteleztük, és a lakásokat is mi értékesítettük: a tervezéstől az átadásig minden egy kézben volt.",
    ],
    meta: { units: "10 lakás", scope: "Tervezés, kulcsrakész generálkivitelezés és értékesítés" },
    specs: [
      "Kerámia falazóblokk falazat",
      "Monolit vasbeton födém",
      "Hagyományos ácsszerkezetű magastetős fedélszék",
    ],
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/10%20laka%CC%81sos%20sorha%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/10%20laka%CC%81sos%20sorha%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/10%20laka%CC%81sos%20sorha%CC%81z/3.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/10%20laka%CC%81sos%20sorha%CC%81z/4.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/10%20laka%CC%81sos%20sorha%CC%81z/kezdo%CC%8B.jpg",
    ],
  },
  "kivitelezesi-14": {
    title: "VERESEGYHÁZ, CSALÁDI HÁZ",
    seoTitle: "Családi ház kivitelezése, Veresegyház",
    descriptionParagraphs: [
      "Családi ház Veresegyházon, amelyet kulcsrakészen kiviteleztünk.",
    ],
    meta: { units: "1 családi ház", scope: "Kulcsrakész generálkivitelezés" },
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z/1.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z/2.jpg",
      "https://geotherm.sirv.com/geotherm/geotherm_high_resolution/kivitelezes/Csala%CC%81di%20ha%CC%81z/kezdo%CC%8B.jpg",
    ],
  },
  "kivitelezesi-15": {
    title: "130 LAKÁSOS TÁRSASHÁZ",
    seoTitle: "130 lakásos társasház kivitelezése",
    descriptionParagraphs: [
      "Százharminc lakásos társasház, amelynek építésén felelős műszaki vezetőként dolgoztunk.",
    ],
    meta: { units: "130 lakás", scope: "Felelős műszaki vezetés" },
    images: [
      "/images/referenciak/budapest-1.webp",
    ],
  },
  "kivitelezesi-16": {
    title: "120 LAKÁSOS TÁRSASHÁZ",
    seoTitle: "120 lakásos társasház kivitelezése",
    descriptionParagraphs: [
      "Százhúsz lakásos társasház, amelynek építésén felelős műszaki vezetőként dolgoztunk.",
    ],
    meta: { units: "120 lakás", scope: "Felelős műszaki vezetés" },
    images: [
      "/images/referenciak/budapest-2.webp",
    ],
  },
  "kivitelezesi-17": {
    title: "CSALÁDI HÁZ",
    seoTitle: "Családi ház kivitelezése",
    descriptionParagraphs: [
      "Családi ház, amelyet kulcsrakészen kiviteleztünk.",
    ],
    meta: { units: "1 családi ház", scope: "Kulcsrakész kivitelezés" },
    images: [
      "/images/referenciak/leanyfalu.webp",
    ],
  },
};

// Construction references: key facts on the left, short story and technical content on the right.
// Rows with no data are skipped, since not every project has every detail on record.
function ConstructionInfo({ item }) {
  const meta = item.meta ?? {};
  const rows = [
    { label: "Átadás éve", value: meta.year },
    { label: "Lakások", value: meta.units },
    { label: "Alapterület", value: meta.area },
    { label: "Feladatunk", value: meta.scope },
  ].filter((r) => r.value);
  if (rows.length === 0 && !item.descriptionParagraphs) return null;

  return (
    <div className="mb-14 md:grid md:grid-cols-2 md:gap-12">
      <dl className="mb-8 space-y-4 md:mb-0">
        {rows.map((r) => (
          <div key={r.label}>
            <dt className="text-md font-semibold uppercase text-gray-500">{r.label}</dt>
            <dd className="text-black text-md">{r.value}</dd>
          </div>
        ))}
      </dl>
      <div>
        <div className="space-y-5">
          {item.descriptionParagraphs?.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
        {item.specs && (
          <div className="mt-8">
            <h2 className="text-md font-semibold uppercase text-gray-500">Műszaki tartalom</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-700 marker:text-amber-500">
              {item.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ref = references[slug];
  if (!ref) return {};
  const kind = slug.startsWith("tervezesi-") ? "Tervezési" : "Kivitelezési";
  const text =
    ref.descriptionParagraphs?.[0] ??
    ref.description ??
    `${kind} referencia a Geotherm House Kft.-től – tervezés és generálkivitelezés az alapozástól a kulcsrakész átadásig.`;
  const title = `${ref.seoTitle} | Geotherm House`;
  const description = text.length > 160 ? `${text.slice(0, 157)}…` : text;
  const url = `/referenciak/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { ...ogDefaults, title, description, url, images: ogImages(ref.images[0]) },
  };
}

export default async function ReferenceDetail({ params }) {
  const { slug } = await params;
  const ref = references[slug];
  if (!ref) return notFound();

  return (
    <div className="mx-auto min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-4 text-black">{ref.title}</h1>
        {slug.startsWith("kivitelezesi-") && <ConstructionInfo item={ref} />}
        {/* Every image is a data-lb trigger: clicking opens it enlarged in the lightbox */}
        <ImageLightbox images={ref.images} captions={ref.captions} title={ref.title}>
        {/* Design (tervezési) speciális layout: hero kép -> meta + leírás -> maradék képek */}
        {slug.startsWith("tervezesi-")
          ? (() => {
              const featuredList = Array.isArray(ref.featuredIndices)
                ? ref.featuredIndices
                : typeof ref.featuredIndex === "number"
                ? [ref.featuredIndex]
                : [];
              const heroIndex = featuredList.length > 0 ? featuredList[0] : 0;
              const heroImg = ref.images[heroIndex];
              const remaining = ref.images
                .map((src, idx) => ({ src, idx }))
                .filter((it) => it.idx !== heroIndex);
              const remainingHasFeatured = remaining.some((it) =>
                featuredList.includes(it.idx)
              );
              return (
                <>
                  <div className="mb-10">
                    <button type="button" data-lb={heroIndex} aria-label="Kép nagyítása" className={zoomClass}>
                      <img
                        src={sirvResize(heroImg, 1280)}
                        srcSet={sirvSrcSet(heroImg)}
                        sizes={FULL_WIDTH}
                        alt={`${ref.title} hero kép`}
                        className="w-full rounded shadow object-contain"
                      />
                    </button>
                  </div>
                  <div className="mb-14 md:grid md:grid-cols-2 md:gap-12">
                    <div className="mb-8 md:mb-0">
                      {ref.meta && (
                        <dl className="space-y-4">
                          {[
                            { label: "Tervezés éve", value: ref.meta.year },
                            {
                              label: "Bruttó szintterület",
                              value: ref.meta.area,
                            },
                            {
                              label: "Vezető tervező",
                              value: ref.meta.leadArchitect,
                            },
                            {
                              label: "Tervező építészek",
                              value: ref.meta.architects,
                            },
                            { label: "Kivitelező", value: ref.meta.contractor },
                          ]
                            .filter((m) => m.value)
                            .map((m) => (
                              <div key={m.label}>
                                <dt className="text-md font-semibold uppercase text-gray-500">
                                  {m.label}
                                </dt>
                                <dd className="text-black text-md">
                                  {m.value}
                                </dd>
                              </div>
                            ))}
                        </dl>
                      )}
                    </div>
                    <div>
                      {ref.descriptionParagraphs ? (
                        <div className="space-y-5">
                          {ref.descriptionParagraphs.map((para, i) => (
                            <p
                              key={i}
                              className="text-gray-700 leading-relaxed whitespace-pre-line"
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                          {ref.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {remaining.length > 0 &&
                    (remainingHasFeatured ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {remaining.map(({ src, idx }) => {
                          const isFeatured = featuredList.includes(idx);
                          const caption = ref.captions?.[idx] ?? ref.title;
                          return (
                            <figure
                              key={idx}
                              className={
                                (isFeatured ? "sm:col-span-2 " : "") + "mb-6"
                              }
                            >
                              <button type="button" data-lb={idx} aria-label="Kép nagyítása" className={zoomClass}>
                                <img
                                  src={sirvResize(src, 1280)}
                                  srcSet={sirvSrcSet(src)}
                                  sizes={isFeatured ? FULL_WIDTH : HALF_WIDTH}
                                  loading="lazy"
                                  alt={`${ref.title} kép ${idx + 1}`}
                                  className="w-full rounded shadow object-contain"
                                />
                              </button>
                              <figcaption className="mt-2 text-black text-xs md:text-sm font-semibold tracking-wide">
                                {caption}
                              </figcaption>
                            </figure>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="columns-1 sm:columns-2 gap-6">
                        {remaining.map(({ src, idx }) => (
                          <figure key={idx} className="mb-6 break-inside-avoid">
                            <button type="button" data-lb={idx} aria-label="Kép nagyítása" className={zoomClass}>
                              <img
                                src={sirvResize(src, 1280)}
                                srcSet={sirvSrcSet(src)}
                                sizes={HALF_WIDTH}
                                loading="lazy"
                                alt={`${ref.title} kép ${idx + 1}`}
                                className="rounded shadow object-contain w-full"
                              />
                            </button>
                            <figcaption className="mt-2 text-black text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide">
                              {ref.captions?.[idx] ?? ref.title}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                </>
              );
            })()
          : (() => {
              const isSingleConstruction =
                slug.startsWith("kivitelezesi-") && ref.images.length === 1;
              if (isSingleConstruction) {
                return (
                  <div className="mb-10">
                    <button type="button" data-lb={0} aria-label="Kép nagyítása" className={zoomClass}>
                      <img
                        src={sirvResize(ref.images[0], 1280)}
                        srcSet={sirvSrcSet(ref.images[0])}
                        sizes={FULL_WIDTH}
                        alt={`${ref.title} kép 1`}
                        className="w-full rounded shadow object-contain"
                      />
                    </button>
                  </div>
                );
              }
              return (
                <div className="columns-1 sm:columns-2 gap-6">
                  {ref.images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      data-lb={i}
                      aria-label="Kép nagyítása"
                      className={`${zoomClass} mb-6 break-inside-avoid`}
                    >
                      <img
                        src={sirvResize(img, 1280)}
                        srcSet={sirvSrcSet(img)}
                        sizes={HALF_WIDTH}
                        loading={i < 2 ? "eager" : "lazy"}
                        alt={`${ref.title} kép ${i + 1}`}
                        className="rounded shadow object-contain w-full"
                      />
                    </button>
                  ))}
                </div>
              );
            })()}
        </ImageLightbox>
        {ref.credit && (
          <div className="mt-1 text-sm text-gray-500">{ref.credit}</div>
        )}
      </div>
    </div>
  );
}
