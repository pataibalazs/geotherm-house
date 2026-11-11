import { PhoneIcon } from "@heroicons/react/24/outline";
import { contacts } from "@/data/lakasok";

export default function ContactCard({ title = "Kérdése van? Hívjon minket!" }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <ul className="mt-4 space-y-4">
        {contacts.map((c) => (
          <li key={c.phone}>
            <p className="font-semibold text-gray-900">{c.name}</p>
            <p className="text-sm text-gray-500">{c.role}</p>
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="mt-1 inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
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
