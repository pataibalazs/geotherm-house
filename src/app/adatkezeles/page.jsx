import { ogDefaults } from "@/data/seo";

const description =
  "A Geotherm House Kft. cégadatai és tájékoztatója arról, hogyan kezeljük a weboldalon keresztül megadott személyes adatokat.";

export const metadata = {
  title: "Adatkezelési tájékoztató és impresszum | Geotherm House",
  description,
  alternates: { canonical: "/adatkezeles" },
  openGraph: {
    ...ogDefaults,
    title: "Adatkezelési tájékoztató és impresszum | Geotherm House",
    description,
    url: "/adatkezeles",
  },
};

const EMAIL = "t.eszter.fulop@gmail.com";
const PHONE = "+36 30 932 1632";

const company = [
  ["Cégnév", "Geotherm House Építőipari és Szolgáltató Korlátolt Felelősségű Társaság (Geotherm House Kft.)"],
  ["Székhely", "2112 Veresegyház, Fő út 92."],
  ["Cégjegyzékszám", "13-09-110368 (Budapest Környéki Törvényszék Cégbírósága)"],
  ["Adószám", "13835235-2-13"],
  ["Képviselő", "Fülöp Vilmos ügyvezető"],
  ["E-mail", EMAIL],
  ["Telefon", PHONE],
  ["Tárhelyszolgáltató", "Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA – privacy@vercel.com"],
];

const processors = [
  ["Formspree, Inc. (USA)", "az űrlapok továbbítása e-mailben, a beküldött üzenetek tárolása"],
  ["Google Ireland Limited (Gmail)", "a beérkező e-mailek tárolása"],
  ["Vercel Inc. (USA)", "a weboldal tárhelye; technikai naplókat vezet (IP-cím, böngésző típusa, időpont)"],
  ["Sirv (sirv.com)", "a képek kiszolgálása; a képek betöltésekor a látogató IP-címét látja"],
];

function Section({ title, id, children }) {
  return (
    <section id={id} className="mt-12 scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4 text-base/7 text-gray-700">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-stone-50 py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Adatkezelési tájékoztató és impresszum
        </h1>
        <p className="mt-6 text-base/7 text-gray-600">Hatályos: 2026. november 16-tól.</p>

        <Section title="Impresszum" id="impresszum">
          <dl className="divide-y divide-stone-200 rounded-2xl bg-white ring-1 ring-stone-200">
            {company.map(([label, value]) => (
              <div key={label} className="grid gap-1 px-5 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">{label}</dt>
                <dd className="break-words sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Ki kezeli az adatait?">
          <p>
            Az adatkezelő a Geotherm House Kft. (adatai az impresszumban). Adatkezeléssel kapcsolatos
            kérdéseivel írjon a{" "}
            <a href={`mailto:${EMAIL}`} className="font-medium text-amber-600 hover:text-amber-500">
              {EMAIL}
            </a>{" "}
            címre, vagy hívjon minket: {PHONE}.
          </p>
        </Section>

        <Section title="Milyen adatokat kezelünk, és mire?">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Kapcsolati űrlap:</strong> név, e-mail-cím, üzenet.
            </li>
            <li>
              <strong>Lakásérdeklődés űrlap:</strong> név, telefonszám, e-mail-cím, üzenet és a
              lakás jelölése.
            </li>
            <li>
              <strong>E-mailben vagy telefonon</strong> megadott adatok.
            </li>
          </ul>
          <p>
            Az adatokat kizárólag arra használjuk, hogy megválaszoljuk a megkeresését,
            visszahívjuk, vagy ajánlatot adjunk. Hírlevelet nem küldünk, és az adatokat nem
            adjuk el senkinek.
          </p>
          <p>
            Az adatkezelés jogalapja a GDPR 6. cikk (1) bekezdés b) pontja (az Ön kérésére a
            szerződés megkötését megelőző lépések), általános kérdés esetén a 6. cikk (1)
            bekezdés f) pontja (jogos érdekünk a megkeresés megválaszolása).
          </p>
        </Section>

        <Section title="Meddig őrizzük az adatokat?">
          <p>
            Az érdeklődés lezárásáig, de legfeljebb egy évig. Ha szerződést kötünk, a
            szerződéshez kapcsolódó adatokat a jogszabályokban (például a számviteli
            törvényben) előírt ideig őrizzük.
          </p>
        </Section>

        <Section title="Ki fér még hozzá az adatokhoz?">
          <p>A weboldal működéséhez az alábbi szolgáltatókat (adatfeldolgozókat) vesszük igénybe:</p>
          <ul className="list-disc space-y-2 pl-5">
            {processors.map(([name, role]) => (
              <li key={name}>
                <strong>{name}:</strong> {role}.
              </li>
            ))}
          </ul>
          <p>
            Az Egyesült Államokban működő szolgáltatók felé az adattovábbítás az EU–USA
            adatvédelmi keretrendszer vagy az Európai Bizottság által elfogadott általános
            adatvédelmi kikötések alapján történik.
          </p>
        </Section>

        <Section title="Sütik">
          <p>
            A weboldal nem használ követő vagy reklámcélú sütiket, és nem méri a látogatók
            viselkedését.
          </p>
        </Section>

        <Section title="Az Ön jogai">
          <p>
            Kérheti, hogy tájékoztassuk az Önről kezelt adatokról, kérheti azok helyesbítését,
            törlését vagy kezelésük korlátozását, tiltakozhat az adatkezelés ellen, és kérheti
            az adatok átadását (GDPR 15–21. cikk). Kérését a fenti e-mail-címre küldje;
            legkésőbb egy hónapon belül válaszolunk.
          </p>
          <p>
            Ha úgy érzi, hogy megsértettük az adatvédelmi jogait, panaszt tehet a Nemzeti
            Adatvédelmi és Információszabadság Hatóságnál (1055 Budapest, Falk Miksa utca
            9–11.; postacím: 1363 Budapest, Pf. 9.; ugyfelszolgalat@naih.hu; +36 1 391 1400;
            naih.hu), vagy bírósághoz fordulhat.
          </p>
        </Section>
      </div>
    </main>
  );
}
