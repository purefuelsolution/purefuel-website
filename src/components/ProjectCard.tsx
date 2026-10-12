import type { Project } from "@/config/projects";
import { statusLabel } from "@/config/projects";
import { Icon } from "@/components/ui/Icon";

/** Reusable project card. Renders only the fields that are populated. */
export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const p = project;
  return (
    <article className="reveal group flex h-full flex-col border border-line bg-white transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(16,32,51,0.45)]">
      {p.photos.length > 0 ? (
        <div className="aspect-[16/9] overflow-hidden bg-mist">
          <img src={p.photos[0].src} alt={p.photos[0].alt} className="h-full w-full object-cover" loading="lazy" />
        </div>
      ) : (
        <div className="flex items-center justify-between border-b border-line bg-navy px-5 py-3 text-white">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/70">{p.customerType}</span>
          <Icon name={p.customerType === "Federal" ? "flag" : "building"} className="h-5 w-5 text-orange" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          {p.status ? (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.72rem] font-semibold uppercase tracking-wide ${
                p.status === "completed" ? "bg-emerald-50 text-emerald-800" : "bg-orange-50 text-orange-700"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${p.status === "completed" ? "bg-emerald-600" : "bg-orange"}`} />
              {statusLabel[p.status]}
            </span>
          ) : null}
        </div>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-slate">{p.customer}</p>
        <h3 className="mt-1.5 text-2xl uppercase text-navy">{p.title}</h3>
        {p.location ? (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-slate">
            <Icon name="pin" className="h-4 w-4 text-orange-700" />
            {p.location}
          </p>
        ) : null}
        <p className="mt-3 text-[0.95rem] text-slate">{compact ? p.scope : p.description}</p>

        {!compact ? (
          <dl className="mt-5 grid gap-px overflow-hidden border border-line bg-line text-sm">
            <div className="bg-mist px-3 py-2.5">
              <dt className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-slate">Scope</dt>
              <dd className="mt-0.5 font-medium text-navy">{p.scope}</dd>
            </div>
            {p.period ? (
              <div className="bg-mist px-3 py-2.5">
                <dt className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-slate">Period of Performance</dt>
                <dd className="mt-0.5 font-medium text-navy">{p.period}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {p.disciplines.map((d) => (
            <li key={d} className="border border-line px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-slate">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
