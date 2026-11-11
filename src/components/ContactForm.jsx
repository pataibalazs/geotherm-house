"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "@formspree/react";
import ThankYouModal from "./ThankYouModal";

const FORMSPREE_ID = "xqeeaaoz";

const inputBase =
  "mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6";
const inputOk = "ring-gray-300 focus:ring-amber-500";
const inputErr = "ring-red-500 focus:ring-red-500";

// Hungarian validation; native browser messages follow the browser language.
function validate(data) {
  const errors = {};
  const email = String(data.get("email") || "").trim();
  if (!email) {
    errors.email = "Kérjük, add meg az e-mail-címed.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Kérjük, érvényes e-mail-címet adj meg.";
  }
  if (!String(data.get("message") || "").trim()) {
    errors.message = "Kérjük, írd meg az üzeneted.";
  }
  return errors;
}

export default function ContactForm() {
  const [state, submitToFormspree, resetSubmission] = useForm(FORMSPREE_ID);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) formRef.current?.reset();
  }, [state.succeeded]);

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(new FormData(e.currentTarget));
    setErrors(found);
    if (Object.keys(found).length > 0) {
      e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    submitToFormspree(e);
  };

  const field = (name) => ({
    name,
    onChange: () =>
      errors[name] && setErrors((prev) => ({ ...prev, [name]: undefined })),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-hiba` : undefined,
    className: `${inputBase} ${errors[name] ? inputErr : inputOk}`,
  });

  const error = (name) =>
    errors[name] && (
      <p id={`${name}-hiba`} className="-mt-2 mb-4 text-sm text-red-600">
        {errors[name]}
      </p>
    );

  return (
    <>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        noValidate
        className="mx-auto mt-14 mb-14 max-w-xl"
      >
        <label className="block mb-4 text-black font-medium">
          Neved:
          <input type="text" autoComplete="name" {...field("name")} />
        </label>
        <label className="block mb-4 text-black font-medium">
          Email címed:
          <input type="email" autoComplete="email" {...field("email")} />
        </label>
        {error("email")}
        <label className="block mb-4 text-black font-medium">
          Üzeneted:
          <textarea rows={5} {...field("message")} />
        </label>
        {error("message")}

        {state.errors && !state.submitting && (
          <p role="alert" className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
            Hiba történt a küldés közben. Kérjük, próbáld újra, vagy hívj
            minket: +36 30 932 1632.
          </p>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="block w-full rounded-md bg-amber-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 disabled:cursor-wait disabled:opacity-70"
        >
          {state.submitting ? "Küldés…" : "Küldés"}
        </button>
      </form>

      <ThankYouModal
        open={state.succeeded}
        onClose={resetSubmission}
        title="Köszönjük az üzeneted!"
      >
        Megkaptuk, hamarosan visszajelzünk.
      </ThankYouModal>
    </>
  );
}
