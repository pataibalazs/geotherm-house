const inputClass =
  "mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6";

export default function InquiryForm({ apartmentCode }) {
  return (
    <form
      action="https://formspree.io/f/xqeeaaoz"
      method="POST"
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
        <input type="text" name="name" required className={inputClass} />
      </label>
      <label className="mt-3 block text-sm font-medium text-gray-900">
        Telefonszám
        <input type="tel" name="phone" required className={inputClass} />
      </label>
      <label className="mt-3 block text-sm font-medium text-gray-900">
        E-mail cím
        <input type="email" name="email" className={inputClass} />
      </label>
      <label className="mt-3 block text-sm font-medium text-gray-900">
        Üzenet
        <textarea
          name="message"
          rows={3}
          defaultValue={`Érdekel a ${apartmentCode} lakás, kérem, keressenek meg.`}
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-amber-500 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
      >
        Visszahívást kérek
      </button>
    </form>
  );
}
