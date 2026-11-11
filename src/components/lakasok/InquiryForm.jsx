"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "@formspree/react";
import ThankYouModal from "@/components/ThankYouModal";
import { contacts } from "@/data/lakasok";

const FORMSPREE_ID = "xqeeaaoz";

const inputBase =
  "mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6";
const inputOk = "ring-gray-300 focus:ring-amber-500";
const inputErr = "ring-red-500 focus:ring-red-500";

// Hungarian client-side validation (the browser's own messages follow the
// browser language, so native validation is disabled with noValidate).
function validate(data) {
  const errors = {};
  if (!String(data.get("name") || "").trim()) {
    errors.name = "Kérjük, adja meg a nevét.";
  }
  const phone = String(data.get("phone") || "").trim();
  if (!phone) {
    errors.phone = "Kérjük, adja meg a telefonszámát.";
  } else if (phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Kérjük, érvényes telefonszámot adjon meg.";
  }
  const email = String(data.get("email") || "").trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Kérjük, érvényes e-mail-címet adjon meg.";
  }
  return errors;
}

function FieldError({ message, id }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-red-600">
      {message}
    </p>
  );
}

export default function InquiryForm({ apartmentCode }) {
  const [state, submitToFormspree, resetSubmission] = useForm(FORMSPREE_ID);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  // After a successful submission clear the fields; the thank-you modal opens.
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

  const clearError = (field) =>
    errors[field] && setErrors((prev) => ({ ...prev, [field]: undefined }));

  const field = (name) => ({
    name,
    onChange: () => clearError(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-hiba` : undefined,
    className: `${inputBase} ${errors[name] ? inputErr : inputOk}`,
  });

  return (
    <>
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200"
    >
      <h2 className="text-lg font-semibold text-gray-900">
        Érdeklődöm a {apartmentCode} lakás iránt
      </h2>
      <p className="mt-1 text-sm text-gray-600">
        Hagyja meg elérhetőségét, és hamarosan visszahívjuk.
      </p>
      <input type="hidden" name="lakas" value={apartmentCode} />
      <input
        type="hidden"
        name="_subject"
        value={`Érdeklődés – ${apartmentCode} lakás (Csonkás központ)`}
      />
      <label className="mt-4 block text-sm font-medium text-gray-900">
        Név
        <input type="text" autoComplete="name" {...field("name")} />
      </label>
      <FieldError id="name-hiba" message={errors.name} />
      <label className="mt-3 block text-sm font-medium text-gray-900">
        Telefonszám
        <input type="tel" autoComplete="tel" {...field("phone")} />
      </label>
      <FieldError id="phone-hiba" message={errors.phone} />
      <label className="mt-3 block text-sm font-medium text-gray-900">
        E-mail cím <span className="font-normal text-gray-500">(nem kötelező)</span>
        <input type="email" autoComplete="email" {...field("email")} />
      </label>
      <FieldError id="email-hiba" message={errors.email} />
      <label className="mt-3 block text-sm font-medium text-gray-900">
        Üzenet
        <textarea
          name="message"
          rows={3}
          defaultValue={`Érdekel a ${apartmentCode} lakás, kérem, keressenek meg.`}
          className={`${inputBase} ${inputOk}`}
        />
      </label>

      {state.errors && !state.submitting && (
        <p role="alert" className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
          Hiba történt a küldés közben. Kérjük, próbálja újra, vagy hívjon
          minket: {contacts[0].phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-5 w-full rounded-md bg-amber-500 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
      >
        {state.submitting ? "Küldés…" : "Visszahívást kérek"}
      </button>
    </form>

    <ThankYouModal
      open={state.succeeded}
      onClose={resetSubmission}
      title="Köszönjük az érdeklődését!"
    >
      Megkaptuk az üzenetét a {apartmentCode} lakással kapcsolatban. Hamarosan
      visszajelzünk!
    </ThankYouModal>
    </>
  );
}
