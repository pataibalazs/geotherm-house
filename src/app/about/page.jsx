const stats = [
  { label: "Átadott lakás", value: "250+" },
  { label: "Tapasztalat", value: "30 éves" },
  { label: "Alkalmazott", value: "35" },
];

const people = [
  {
    name: "FÜLÖP VILMOS",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },

  {
    name: "FÜLÖP THEODÓRA ESZTER",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "TAKÁCS JOHANNA",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
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
                Cégünk célja, hogy olyan korszerű, környezetbarát épületeket
                alkossunk, melyek emelik környezetük és használóik
                életminőségét. Kiemelten fontosnak tartjuk, hogy személyre
                szabott megoldásokat adjunk minden felmerülő igényre.
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
              className="group block rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-inset ring-gray-200 hover:ring-indigo-300 hover:bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-4 p-6">
                {/* Ikon (épület) */}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-inset ring-indigo-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
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
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-inset ring-gray-200 group-hover:ring-indigo-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
              OUR TEAM
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base/7 text-gray-600">{person.role}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={person.xUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">X</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
