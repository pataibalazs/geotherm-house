"use client";
import React from "react";
import Link from "next/link";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
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
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600"
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

  const jobs = [
    {
      id: 1,
      title: "Kivitelezésvezető",
      location: "Budapest",
      type: "Teljes munkaidő",
      summary:
        "Helyszíni csapatok koordinálása, határidők és minőség biztosítása.",
      mustHave: [
        "3+ év kivitelezésvezetői tapasztalat",
        "B kategóriás jogosítvány, utazási hajlandóság",
        "MS Project / ütemezés alapismeret",
      ],
      niceToHave: [
        "Építőipari technikus vagy mérnöki végzettség",
        "Költségvetés-készítés tapasztalat",
      ],
      responsibilities: [
        "Kivitelezési ütemterv készítése és nyomon követése",
        "Alvállalkozók, beszállítók koordinálása",
        "Minőség-, költség- és munkavédelmi előírások betartatása",
      ],
      benefits: [
        "Versenyképes alapbér + teljesítménybónusz",
        "Céges autó, telefon, laptop",
        "Stabil, 30+ éve működő cég háttere",
      ],
      applyTo: "geothermhouse@gmail.com",
    },
    {
      id: 2,
      title: "Értékesítő (lakossági)",
      location: "Debrecen",
      type: "Teljes munkaidő",
      summary:
        "Ügyféligények felmérése, ajánlatok készítése, szerződéskötés támogatása.",
      mustHave: [
        "Magabiztos kommunikáció, tárgyalókészség",
        "B2B/B2C értékesítésben szerzett tapasztalat",
        "Alap Office ismeretek (Excel, Word)",
      ],
      niceToHave: [
        "Építőipari termékismeret",
        "CRM-es tapasztalat (pl. HubSpot)",
      ],
      responsibilities: [
        "Bejövő megkeresések kezelése, hideg megkeresések minimalisan",
        "Ajánlatok összeállítása, utánkövetése",
        "Rendszeres riportálás a vezetőség felé",
      ],
      benefits: [
        "Fix + jutalék",
        "Képzések, karrierút",
        "Fiatalos, támogató csapat",
      ],
      applyTo: "geothermhouse@gmail.com",
    },
  ];

  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Nyitott pozíciók
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Csatlakozz hozzánk – stabil háttér, modern szemlélet, kézzelfogható
            eredmények.
          </p>
        </header>

        {/* Lista */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j) => (
            <div
              key={j.id}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {j.title}
                </h3>
                <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
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
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => setOpenJob(j)}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50"
                >
                  Megnézem
                  <svg
                    className="h-4 w-4 text-gray-500"
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
                <Link
                  href={`/contact?position=${encodeURIComponent(j.title)}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Jelentkezem
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modal – részletek */}
        {openJob && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => setOpenJob(null)}
          >
            <div
              className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="job-title"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4
                    id="job-title"
                    className="text-xl font-semibold text-gray-900"
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
                      className="h-4 w-4 text-indigo-600"
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
                      className="h-4 w-4 text-indigo-600"
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
                      className="h-4 w-4 text-indigo-600"
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
                      className="h-4 w-4 text-indigo-600"
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

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  onClick={() => setOpenJob(null)}
                  className="rounded-lg px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Mégse
                </button>

                {/* IDE: /contact + position query */}
                <Link
                  href={`/contact?position=${encodeURIComponent(
                    openJob.title
                  )}`}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Jelentkezem
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
