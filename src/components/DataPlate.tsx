import { site } from "@/config/site";

type Row = { label: string; value: string };

/** Contractor identifier "nameplate". */
export function DataPlate({ rows, title = "Contractor Identifiers" }: { rows?: Row[]; title?: string }) {
  const data: Row[] = rows ?? [
    { label: "CAGE", value: site.identifiers.cage },
    { label: "UEI", value: site.identifiers.uei },
    { label: "SAM.gov", value: `${site.identifiers.samStatus} Registration` },
    { label: "Coverage", value: "Nationwide" },
  ];
  return (
    <div className="plate plate-rivets rounded-sm p-5 text-white sm:p-6">
      <p className="text-center font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/55">{title}</p>
      <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] bg-white/10">
        {data.map((r) => (
          <div key={r.label} className="bg-navy-950/70 px-4 py-3">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-orange">{r.label}</dt>
            <dd className="mt-1 font-mono text-[0.95rem] font-medium tracking-wide text-white sm:text-base">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
