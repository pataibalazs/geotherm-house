import { notFound } from "next/navigation";

const references = {
  "tervezesi-1": {
    title: "ÜZLETHÁZ BŐVÍTÉS, VERESEGYHÁZ",
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
      "ALAPRAJZ",
      "DÉL-NYUGATI HOMLOKZAT",
      "DÉL-KELETI HOMLOKZAT",
      "METSZET A",
      "METSZET B",
    ],
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/best_5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/best_3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/7.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/8.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/9.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/F%C5%91%C3%BAt2/nagy/10.webp",
    ],
  },
  "tervezesi-2": {
    title: "CSALÁDI HÁZ, BAJTÓT ",
    descriptionParagraphs: [
      "A megrendelő pár egy hagyományos parasztház ihlette, kortárs családi otthont képzelt el. Fontos szempont volt, hogy az épület a jelenlegi háromfős használat mellett a későbbiekben két főre is jól működjön, alkalmazkodva az élethelyzet változásaihoz.",
      "A ház központi tere a nyitott konyha–nappali, amelyből közvetlenül elérhetők a legfontosabb funkciók. Innen nyílik a szülői háló, valamint a keleti terasz és az oldalsó bejárati tér. A gyerek háló és a kiszolgáló helyiségek az utcai homlokzat felé, a bejárati tér túloldalán helyezkednek el, így az alaprajz jól elkülönülő, mégis egységes rendszert alkot.",
      "Az épület megjelenését vakolt felületek és terméskő burkolat váltakozása határozza meg, a nyílásokat faragott kőkeretek emelik ki. A megrendelők kiemelt kérése volt, hogy a keleti homlokzat különleges hangsúlyt kapjon. A kert felől egy markáns boltív jelöli ki az épület fő tengelyét és keleti megközelítését. A boltívet követő fedett terasz és az íves nyílászáró együttese adja a kívánt plasztikus, emelkedett karaktert a homlokzatnak. ",
    ],
    meta: {
      year: "2025",
      area: "663 m²",
      leadArchitect: "Pintér Balázs",
      architects: "Fülöp Theodóra Eszter, Takács Johanna Krisztina",
      contractor: "Geotherm House Kft.",
    },
    featuredIndices: [0, 5],
    captions: [
      "TERVEZETT LÁTVÁNY",
      "MEGLÉVŐ ÉPÜLET",
      "TERVEZETT LÁTVÁNY",
      "MEGLÉVŐ ÉPÜLET",
      "TERVEZETT LÁTVÁNY",
    ],
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/baj%C3%B3t/nagy/3_best.jpg",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/baj%C3%B3t/k%C3%B6zepes/2.jpg",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/baj%C3%B3t/k%C3%B6zepes/1.jpg",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/tervez%C3%A9s/baj%C3%B3t/k%C3%B6zepes/4.jpg",
    ],
  },
  "kivitelezesi-1": {
    title: "4 LAKÁSOS SORHÁZ 1",
    description:
      "Ez az első kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/7.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/8.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/9.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/10.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/11.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%202/nagy/kezd%C5%91.webp",
    ],
  },
  "kivitelezesi-2": {
    title: "13 LAKÁSOS TÁRSASHÁZ",
    description: "Ez egy példa kivitelezési referencia leírás.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/7.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai1/nagy/KEZD%C5%90.webp",
    ],
  },
  "kivitelezesi-3": {
    title: "8 LAKÁSOS TÁRSASHÁZ",
    description:
      "Ez a harmadik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%202/nagy/6.webp",
    ],
  },
  "kivitelezesi-4": {
    title: "8 LAKÁSOS TÁRSASHÁZ",
    description:
      "Ez a negyedik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%203/nagy/7.webp",
    ],
  },
  "kivitelezesi-5": {
    title: "9 LAKÁSOS TÁRSASHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%204/nagy/6.webp",
    ],
  },
  "kivitelezesi-6": {
    title: "8 LAKÁSOS TÁRSASHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/J%C3%B3kai%205/nagy/6.webp",
    ],
  },
  "kivitelezesi-7": {
    title: "IKERHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/ikerh%C3%A1z/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/ikerh%C3%A1z/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/ikerh%C3%A1z/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/ikerh%C3%A1z/nagy/kezd%C5%91.webp",
    ],
  },
  "kivitelezesi-8": {
    title: "IKERHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "Fotókat készítette: Érsek Máté Attila",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/3.1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/3.2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/7.webp",
    ],
  },
  "kivitelezesi-9": {
    title: "CSALÁDI HÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "A projektben művezetőként vettünk részt.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Kod%C3%A1ly/nagy/KEZD%C5%90.webp",
    ],
  },
  "kivitelezesi-10": {
    title: "6 LAKÁSOS SORHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    credit: "A projektben művezetőként vettünk részt.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/3.1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/3.2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/6.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/7.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Mosonyi/nagy/KEZD%C5%90.webp",
    ],
  },
  "kivitelezesi-11": {
    title: "SZILASLIGETI SORHÁZAK",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/szilasliget/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/szilasliget/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/szilasliget/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/szilasliget/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/szilasliget/nagy/5.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/szilasliget/nagy/6.webp",
    ],
  },
  "kivitelezesi-12": {
    title: "4 LAKÁSOS SORHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%201/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%201/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%201/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/4%20lak%C3%A1sos%20sorh%C3%A1z%201/nagy/kezd%C5%91.webp",
    ],
  },
  "kivitelezesi-13": {
    title: "10 LAKÁSOS SORHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/10%20lak%C3%A1sos%20sorh%C3%A1z/nagy/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/10%20lak%C3%A1sos%20sorh%C3%A1z/nagy/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/10%20lak%C3%A1sos%20sorh%C3%A1z/nagy/3.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/10%20lak%C3%A1sos%20sorh%C3%A1z/nagy/4.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/10%20lak%C3%A1sos%20sorh%C3%A1z/nagy/kezd%C5%91.webp",
    ],
  },
  "kivitelezesi-14": {
    title: "CSALÁDI HÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/csal%C3%A1di%20h%C3%A1z%201/k%C3%B6zepes/1.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/csal%C3%A1di%20h%C3%A1z%201/k%C3%B6zepes/2.webp",
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/csal%C3%A1di%20h%C3%A1z%201/k%C3%B6zepes/kezd%C5%91.webp",
    ],
  },
  "kivitelezesi-15": {
    title: "130 LAKÁSOS TÁRSASHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Budapest%201/nagy/1.webp",
    ],
  },
  "kivitelezesi-16": {
    title: "120 LAKÁSOS TÁRSASHÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Budapest%202/nagy/1.webp",
    ],
  },
  "kivitelezesi-17": {
    title: "CSALÁDI HÁZ",
    description:
      "Ez az ötödik kivitelezési referencia leírása. Itt részletezheted a projektet, technológiát, helyszínt, stb.",
    images: [
      "https://geotherm.sirv.com/geotherm/referenci%C3%A1k/kivitelez%C3%A9s/Le%C3%A1nyfalu/nagy/1.webp",
    ],
  },
};

export default async function ReferenceDetail({ params }) {
  const { slug } = await params;
  const ref = references[slug];
  if (!ref) return notFound();

  return (
    <div className="mx-auto min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-4 text-black">{ref.title}</h1>
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
                    <img
                      src={heroImg}
                      alt={`${ref.title} hero kép`}
                      className="w-full rounded shadow object-contain"
                    />
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
                              <img
                                src={src}
                                alt={`${ref.title} kép ${idx + 1}`}
                                className="w-full rounded shadow object-contain"
                              />
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
                            <img
                              src={src}
                              alt={`${ref.title} kép ${idx + 1}`}
                              className="rounded shadow object-contain w-full"
                            />
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
                    <img
                      src={ref.images[0]}
                      alt={`${ref.title} kép 1`}
                      className="w-full rounded shadow object-contain"
                    />
                  </div>
                );
              }
              return (
                <div className="columns-1 sm:columns-2 gap-6">
                  {ref.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${ref.title} kép ${i + 1}`}
                      className="mb-6 break-inside-avoid rounded shadow object-contain w-full"
                    />
                  ))}
                </div>
              );
            })()}
        {ref.credit && (
          <div className="mt-1 text-sm text-gray-500">{ref.credit}</div>
        )}
      </div>
    </div>
  );
}
