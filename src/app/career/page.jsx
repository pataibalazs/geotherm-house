"use client";
import React from "react";
import Link from "next/link";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-amber-700">
      {children}
    </span>
  );
}

function Section({ title, items, icon }) {
  if (!items?.length) return null;
  return (
    <div>
      <h5 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
        {icon}
        {title}
      </h5>
      <ul className="ml-1 space-y-2">
        {items.map((it, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-gray-700"
          >
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Careers() {
  const [openJob, setOpenJob] = React.useState(null);

  const commonBenefits = [
    "Teljes munkaidős jogviszony",
    "Biztos háttér",
    "Versenyképes jövedelem",
    "Fizetési ütemezés megegyezés szerint",
    "Munkavédelmi eszközök, szerszámok",
    "Egész éves foglalkoztatás biztos megrendelői háttérrel",
    "Kiszámítható, hosszú távú munkalehetőség",
    "Képzési lehetőség",
    "Előrelépési lehetőség",
  ];

  const commonMustHave = [
    "Szakirányú végzettség",
    "Megbízhatóság",
    "Önálló munkavégzésre való hajlandóság",
    "Józan életvitel",
    "Felelős, igényes munkavégzés",
    "Teljesítményorientált szemlélet",
  ];

  const jobs = [
    {
      id: 1,
      title: "Építésvezető",
      location: "Magyarország",
      type: "Teljes munkaidő",
      summary:
        "Kivitelezési munkák teljes körű irányítása, csapatok koordinálása és a határidők betartatása.",
      responsibilities: [
        "Helyszíni munkák szervezése és felügyelete",
        "Alvállalkozók irányítása",
        "Minőségi és munkavédelmi előírások betartatása",
      ],
      mustHave: commonMustHave,
      niceToHave: [],
      benefits: commonBenefits,
    },
    {
      id: 2,
      title: "Művezető",
      location: "Magyarország",
      type: "Teljes munkaidő",
      summary:
        "Helyszíni kivitelezési munkák napi szintű irányítása, munkafolyamatok összehangolása.",
      responsibilities: [
        "Napi munkaszervezés",
        "Dolgozók koordinálása",
        "Anyagok és eszközök felügyelete",
      ],
      mustHave: commonMustHave,
      niceToHave: [],
      benefits: commonBenefits,
    },
    {
      id: 3,
      title: "Ács",
      location: "Magyarország",
      type: "Teljes munkaidő",
      summary:
        "Fa- és tetőszerkezetek kivitelezése, precíz és minőségi munkavégzés.",
      responsibilities: [
        "Tetőszerkezetek készítése",
        "Faipari szerkezetek szerelése",
        "Műszaki tervek alapján történő kivitelezés",
      ],
      mustHave: commonMustHave,
      niceToHave: [],
      benefits: commonBenefits,
    },
    {
      id: 4,
      title: "Burkoló",
      location: "Magyarország",
      type: "Teljes munkaidő",
      summary:
        "Hideg- és melegburkolási munkák végzése lakó- és ipari épületekben.",
      responsibilities: [
        "Csempézés, járólapozás",
        "Felület-előkészítés",
        "Pontos, esztétikus kivitelezés",
      ],
      mustHave: commonMustHave,
      niceToHave: [],
      benefits: commonBenefits,
    },
    {
      id: 5,
      title: "Festő",
      location: "Magyarország",
      type: "Teljes munkaidő",
      summary: "Belső és külső festési munkák precíz, igényes kivitelezése.",
      responsibilities: [
        "Festés, mázolás",
        "Felületjavítás",
        "Minőségi befejező munkák",
      ],
      mustHave: commonMustHave,
      niceToHave: [],
      benefits: commonBenefits,
    },
    {
      id: 6,
      title: "Kőműves",
      location: "Magyarország",
      type: "Teljes munkaidő",
      summary:
        "Szerkezetépítési és falazási munkák végzése új építésű projektekben.",
      responsibilities: [
        "Falazás, betonozás",
        "Zsaluzási munkák",
        "Műszaki tervek szerinti kivitelezés",
      ],
      mustHave: commonMustHave,
      niceToHave: [],
      benefits: commonBenefits,
    },
  ];

  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        {/* Hero */}
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl sm:text-4xl md:text-Sxl font-semibold tracking-tight text-gray-900">
            Nyitott pozíciók
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Csatlakozz hozzánk – stabil háttér, modern szemlélet, kézzelfogható
            eredmények.
          </p>
        </header>

        {/* Lista */}
        <div className="mt-10 grid gap-4 px-2 sm:px-0 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j) => (
            <div
              key={j.id}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {j.title}
                </h3>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-[11px] sm:text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-200">
                  {j.type}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{j.location}</p>
              <p className="mt-3 line-clamp-3 text-sm text-gray-700">
                {j.summary}
              </p>

              {/* Elvárás preview pill-ek */}
              <div className="mt-4 flex flex-wrap gap-2">
                {j.mustHave.slice(0, 3).map((req, i) => (
                  <Pill key={i}>{req}</Pill>
                ))}
                {j.mustHave.length > 3 && (
                  <Pill>+{j.mustHave.length - 3} további</Pill>
                )}
              </div>

              {/* Akciók */}
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  onClick={() => setOpenJob(j)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-amber-400"
                >
                  Megnézem
                  <svg
                    className="h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17l10-10M7 7h10v10"
                    />
                  </svg>
                </button>

                {/* IDE: /contact + position query */}
              </div>
            </div>
          ))}
        </div>

        {/* Modal – részletek */}
        {openJob && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4"
            onClick={() => setOpenJob(null)}
          >
            <div
              className="w-full max-w-lg sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 sm:p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="job-title"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4
                    id="job-title"
                    className="text-lg sm:text-xl font-semibold text-gray-900"
                  >
                    {openJob.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {openJob.location} • {openJob.type}
                  </p>
                </div>
                <button
                  onClick={() => setOpenJob(null)}
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50"
                  aria-label="Bezárás"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <p className="mt-3 text-sm text-gray-700">{openJob.summary}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <Section
                  title="Feladatok"
                  items={openJob.responsibilities}
                  icon={
                    <svg
                      className="h-4 w-4 text-amber-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6M9 16h6M7 7h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H9L5 9v10z"
                      />
                    </svg>
                  }
                />
                <Section
                  title="Elvárások (must-have)"
                  items={openJob.mustHave}
                  icon={
                    <svg
                      className="h-4 w-4 text-amber-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                />
                <Section
                  title="Előny (nice-to-have)"
                  items={openJob.niceToHave}
                  icon={
                    <svg
                      className="h-4 w-4 text-amber-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                />
                <Section
                  title="Mit kínálunk"
                  items={openJob.benefits}
                  icon={
                    <svg
                      className="h-4 w-4 text-amber-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM6 22a6 6 0 1112 0H6z"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        )}
        <div className="mt-20 text-left text-sm text-gray-800">
          Jelentkezni a fényképes önéletrajz{" "}
          <span className="font-medium">iroda@geothermhouse.hu</span> címre
          történő elküldésével, bérigény megjelölésével lehet.
        </div>
      </div>
    </section>
  );
}
