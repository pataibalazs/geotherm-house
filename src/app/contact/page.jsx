"use client";

import Head from "next/head";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xrbpaake");

  return (
    <div className="bg-stone-50 flex flex-col items-center">
      <Head>
        <title>Kapcsolat | Deckbae – Gyors házépítés ajánlatkérés</title>
        <meta
          name="description"
          content="Lépj kapcsolatba velünk modern és gyors könnyűszerkezetes házak építéséhez! Írj üzenetet és kérj személyre szabott ajánlatot."
        />
        <meta
          name="keywords"
          content="kapcsolat deckbae, házépítés kapcsolat, ajánlatkérés könnyűszerkezetes ház, kapcsolatfelvétel modern házhoz"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kapcsolat | Deckbae" />
        <meta
          property="og:description"
          content="Vedd fel velünk a kapcsolatot! Könnyűszerkezetes házak, garázsok és pergolák kivitelezése. Egyedi ajánlatkérés néhány kattintással."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://deckbae.hu/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kapcsolat | Deckbae" />
        <meta
          name="twitter:description"
          content="Lépj kapcsolatba a Deckbae csapatával gyors házépítési megoldásokért!"
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://deckbae.hu/contact" />
      </Head>

      <main
        className="flex flex-col items-center p-6 bg-stone-50 rounded-lg mt-10 mb-10 
        max-w-full xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl w-full"
      >
        <div className="bg-stone-50 w-full">
          <div className="mx-auto max-w-7xl mb-10 w-full">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="mt-2 mb-4 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                Kérdésed van? Vedd fel velünk a kapcsolatot!
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Írj nekünk üzenetet, és hamarosan jelentkezünk egy személyre
                szabott válasszal vagy ajánlattal.
              </p>

              <div className="text-left w-full">
                {state.succeeded ? (
                  <div className="mx-auto mt-14 mb-14 max-w-xl text-center p-6 sm:p-8 border border-green-200 bg-green-50 rounded-lg shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-green-600 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                      Köszönjük!
                    </h3>
                    <p className="text-base sm:text-lg text-green-700">
                      Az üzeneted sikeresen elküldtük. Hamarosan felvesszük
                      veled a kapcsolatot.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mx-auto mt-14 mb-14 max-w-xl"
                  >
                    <div className="grid grid-cols-1 gap-y-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Email cím
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-green-600 text-sm mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Üzenet
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          />
                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-green-600 text-sm mt-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className={`block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-200 ${
                          state.submitting
                            ? "opacity-70 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {state.submitting ? "Küldés folyamatban..." : "Küldés"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Céges információ blokk */}
              <div className="mt-10 w-full mx-auto max-w-xl">
                <div className="bg-stone-50 border border-gray-200 p-4 sm:p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg w-full">
                  <div className="flex items-center justify-center mb-6 sm:mb-8">
                    <div className="mr-4 p-3 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Geotherm House Kft.
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-10">
                      {/* Telefon */}
                      <div className="flex items-center">
                        <div className="min-w-[36px] sm:min-w-[40px] flex justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div className="ml-3 text-left">
                          <p className="text-sm text-gray-500">Telefon</p>
                          <p className="text-base font-medium text-gray-800">
                            +36 30 612 7858
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-center">
                        <div className="min-w-[36px] sm:min-w-[40px] flex justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-3 text-left">
                          <p className="text-sm text-gray-500">Email</p>
                          <a
                            href="mailto:geothermhouse@gmail.com"
                            className="text-base font-medium text-green-600 hover:underline"
                          >
                            geothermhouse@gmail.com
                          </a>
                        </div>
                      </div>

                      {/* Iroda */}
                      <div className="flex items-center md:col-span-2">
                        <div className="min-w-[36px] sm:min-w-[40px] flex justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z"
                            />
                          </svg>
                        </div>
                        <div className="ml-3 text-left">
                          <p className="text-sm text-gray-500">Iroda</p>
                          <p className="text-base font-medium text-gray-800">
                            1132 Budapest, Váci út
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vége céginfóknak */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
