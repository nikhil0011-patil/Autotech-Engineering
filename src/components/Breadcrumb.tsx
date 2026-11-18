import { Link } from "@tanstack/react-router";

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 flex flex-wrap gap-2">
      {items.map((it, i) => (
        <span key={i} className="flex gap-2">
          {it.to ? (
            <Link to={it.to} className="hover:text-[var(--gold)]">{it.label}</Link>
          ) : (
            <span className="text-[var(--gold)]">{it.label}</span>
          )}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}
