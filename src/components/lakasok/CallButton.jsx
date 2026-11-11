import { PhoneIcon } from "@heroicons/react/24/solid";
import { contacts } from "@/data/lakasok";

// Primary sales contact is the first entry in `contacts`.
export const salesContact = contacts[0];

export default function CallButton({ className = "" }) {
  return (
    <a
      href={`tel:${salesContact.phone.replace(/\s/g, "")}`}
      className={`flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-lg font-[680] text-white shadow-sm transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${className}`}
    >
      <PhoneIcon aria-hidden="true" className="size-5" />
      Hívás: {salesContact.phone}
    </a>
  );
}
