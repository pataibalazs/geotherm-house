import { statusLabels } from "@/data/lakasok";

// Available apartments get no badge; only upcoming/reserved/sold ones are marked.
const styles = {
  hamarosan: "bg-sky-100 text-sky-800 ring-1 ring-inset ring-sky-600/30",
  foglalt: "bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-600/30",
  eladva: "bg-stone-500 text-white",
};

export default function StatusBadge({ status, className = "" }) {
  if (!styles[status]) return null;
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status]} ${className}`}
    >
      {statusLabels[status]}
    </span>
  );
}
