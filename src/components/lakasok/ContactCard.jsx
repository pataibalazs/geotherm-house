import { PhoneIcon } from "@heroicons/react/24/outline";
import { apartmentContacts } from "@/data/lakasok";

export default function ContactCard({ title = "Kérdése van? Hívjon minket!" }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <ul className="mt-4 space-y-4">
        {apartmentContacts.map((c) => (
          <li key={c.phone}>
            <p className="font-semibold text-gray-900">{c.name}</p>
            <p className="text-sm text-gray-500">{c.role}</p>
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow-sm tabular-nums hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              <PhoneIcon aria-hidden="true" className="size-4" />
              {c.phone}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
