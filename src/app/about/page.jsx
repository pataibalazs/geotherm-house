const stats = [
  { label: "Átadott lakás", value: "250+" },
  { label: "Tapasztalat", value: "30 éves" },
  { label: "Alkalmazott", value: "35" },
];

const people = [
  {
    name: "FÜLÖP VILMOS",
    role: "Ügyvezető",
    imageUrl: "https://geotherm.sirv.com/geotherm/csapat/Vilmos.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },

  {
    name: "FÜLÖP THEODÓRA ESZTER",
    role: "Okleves építészmérnök",
    imageUrl: "https://geotherm.sirv.com/geotherm/csapat/pupi.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "TAKÁCS JOHANNA KRISZTINA",
    role: "Okleves építészmérnök",
    imageUrl: "https://geotherm.sirv.com/geotherm/csapat/hanka.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "VÖRÖSMARTI JÓZSEF",
    role: "Művezető",
    imageUrl: "https://geotherm.sirv.com/geotherm/csapat/J%C3%B3zsef.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "KUTYAE",
    role: "Területvédelmi specialista",
    imageUrl: "https://geotherm.sirv.com/geotherm/csapat/dog.jpg",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

export default function About() {
  return (
    <div className="bg-stone-50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            RÓLUNK
          </h2>

          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w/full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
                Lelkes, kreatív csapat vagyunk, ahol a friss, fiatalos tervezési
                szemlélet találkozik a több évtizedes generálkivitelezési
                tapasztalattal. Ez a kombináció teszi minden projektünket
                izgalmassá és megbízhatóvá egyszerre.<br></br>
                <br></br> Az új ötletek energiája mellett mindig ott van a
                stabil szakmai háttér. Legyen szó meglévő épületek
                átalakításáról vagy teljesen új épület megálmodásáról, nálunk a
                tervezés és a kivitelezés természetesen összefonódik, így a
                végeredmény nálunk mindig kreatív, élhető és fenntartható
                egyszerre.
              </p>
            </div>

            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* --- Céginfó CTA kártya --- */}
          <div className="mt-20 border-t border-gray-200 pt-10">
            <a
              href="https://www.ceginformacio.hu/cr9314233028"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Céginformációk megnyitása a Ceginformacio.hu oldalon"
              className="group block rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-inset ring-gray-200 hover:ring-amber-300 hover:bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-4 p-6">
                {/* Ikon (épület) */}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-inset ring-amber-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M9 8h6v13H9z" />
                    <path d="M4 21V10l8-6 8 6v11" />
                  </svg>
                </span>

                {/* Szöveg */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Céginformációk
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nyilvános adatok a Geotherm House Kft.-ről a
                    Céginformáció.hu oldalán.
                  </p>
                </div>

                {/* Külső hivatkozás ikon */}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-inset ring-gray-200 group-hover:ring-amber-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 group-hover:text-amber-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l10-10" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-stone-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              CSAPATUNK
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Elkötelezett és dinamikus csapat vagyunk, akik szenvedéllyel
              végzik munkájukat, és minden esetben a lehető legjobb eredményre
              törekednek ügyfeleink számára.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-square w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base/7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
