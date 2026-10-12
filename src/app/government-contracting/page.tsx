import Link from "next/link";
import { site } from "@/config/site";
import { naicsCodes } from "@/config/naics";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = pageMetadata({
  title: "Government Contracting",
  description:
    "Government contractor profile for PURE FUEL SOLUTION, LLC — UEI D6XSN3ESNPS4, CAGE 20UN0, SAM.gov registered. NAICS codes, capability statement, and RFQ submission for contracting officers.",
  path: "/government-contracting",
});

const reasons: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "layers",
    title: "Centralized Project Management",
    text: "One accountable contractor and one point of contact for scheduling, site coordination, and status reporting.",
  },
  {
    icon: "users",
    title: "Specialized Vendor Coordination",
    text: "Manufacturers, distributors, and licensed trades coordinated under a single contract and a clear scope.",
  },
  {
    icon: "clipboard",
    title: "Government Contract Administration",
    text: "Acknowledged amendments, accurate pricing, compliant submittals, invoicing, and closeout documentation.",
  },
  {
    icon: "search",
    title: "Technical Equipment Sourcing",
    text: "Specification review, salient-characteristic matching, and documented lead times for equipment requirements.",
  },
  {
    icon: "file",
    title: "Documentation & Compliance Support",
    text: "Submittals, product data, certificates, and reports prepared to the requirements of the contract.",
  },
  {
    icon: "chat",
    title: "Responsive Communication",
    text: "Prompt responses to contracting officers, CORs, and facility points of contact throughout performance.",
  },
];

const lifecycle: { step: string; title: string; text: string }[] = [
  { step: "01", title: "Requirement Review", text: "Solicitation, SOW, specifications, and amendments reviewed for compliance and scope." },
  { step: "02", title: "Quote / Proposal", text: "Pricing built with manufacturers, distributors, and qualified subcontractors." },
  { step: "03", title: "Award & Kickoff", text: "Contract review, schedule, submittals, and points of contact confirmed." },
  { step: "04", title: "Procurement & Mobilization", text: "Equipment ordered, deliveries scheduled, and site access coordinated." },
  { step: "05", title: "Execution & QA", text: "Work performed and inspected against contract and manufacturer requirements." },
  { step: "06", title: "Acceptance & Closeout", text: "Documentation, warranties, and final reports delivered for acceptance." },
];

export default function GovernmentContractingPage() {
  const profile: { label: string; value: string; mono?: boolean }[] = [
    { label: "Legal Name", value: site.legalName },
    { label: "UEI", value: site.identifiers.uei, mono: true },
    { label: "CAGE Code", value: site.identifiers.cage, mono: true },
    { label: "SAM.gov", value: `Registered — ${site.identifiers.samStatus}` },
    { label: "Business Type", value: site.entityType },
    { label: "Coverage", value: site.coverage.government },
  ];

  return (
    <>
      <PageHero
        kicker="Government Contracting"
        title="Your Partner in Government Contracting & Infrastructure Support"
        intro="Generator systems, fuel infrastructure, equipment procurement, and facility support for federal, state, and local agencies — with the contract administration discipline public-sector work requires."
        image="/images/aircraft-ground-power"
        imageAlt="Aircraft connected to ground power on an airfield ramp (representative image)"
      >
        <a href="#rfq" className="btn btn-primary">
          Submit an RFQ
          <Icon name="arrowRight" className="h-4 w-4" />
        </a>
        <a href={site.capabilityStatement.href} className="btn btn-outline-light" download>
          <Icon name="download" className="h-4 w-4" />
          Download Capability Statement
        </a>
      </PageHero>

      {/* Contractor profile */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Contractor Profile"
              title="Registration & Identifiers"
              intro="Contracting officers can confirm our registration status, representations, and certifications directly in SAM.gov using the UEI or CAGE code below."
            />
            <a
              href={site.identifiers.samRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-8"
            >
              Look us up on SAM.gov
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="plate plate-rivets rounded-sm p-6 text-white sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/60">Government Contractor Profile</p>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  SAM.gov Active
                </span>
              </div>
              <dl className="mt-2 divide-y divide-white/10">
                {profile.map((row) => (
                  <div key={row.label} className="grid gap-1 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-4">
                    <dt className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-orange">{row.label}</dt>
                    <dd className={row.mono ? "font-mono text-lg tracking-wider" : "font-medium"}>{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 border-t border-white/10 pt-4 text-xs text-white/50">
                SAM.gov registration current through {site.identifiers.samExpiration}. Verify current status at SAM.gov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAICS */}
      <section className="grid-bg-light border-y border-line bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            kicker="Industry Classification"
            title="NAICS Codes"
            intro="Codes aligned with our generator, fuel system, equipment procurement, and facility service capabilities."
          />
          {naicsCodes.length > 0 ? (
            <div className="mt-10 overflow-hidden border border-line bg-white">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">NAICS codes</caption>
                <thead className="bg-navy text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em]">Code</th>
                    <th scope="col" className="px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em]">Title</th>
                    <th scope="col" className="hidden px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] md:table-cell">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {naicsCodes.map((n) => (
                    <tr key={n.code} className="align-top">
                      <td className="whitespace-nowrap px-4 py-3.5 font-mono text-base font-medium text-navy">
                        {n.code}
                        {n.primary ? <span className="ml-2 bg-orange px-1.5 py-0.5 text-[0.6rem] uppercase text-navy">Primary</span> : null}
                      </td>
                      <td className="px-4 py-3.5 text-ink">
                        {n.title}
                        <span className="mt-1 block text-xs text-slate md:hidden">{n.category}</span>
                      </td>
                      <td className="hidden px-4 py-3.5 text-slate md:table-cell">{n.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-8 text-slate">NAICS codes are listed in our SAM.gov registration and capability statement.</p>
          )}
        </div>
      </section>

      {/* Why agencies */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading kicker="Why Pure Fuel Solution" title="Why Government Agencies Work With Us" />
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="reveal bg-white p-7">
                <Icon name={r.icon} className="h-7 w-7 text-orange-700" />
                <h3 className="mt-5 text-2xl uppercase text-navy">{r.title}</h3>
                <p className="mt-2 text-[0.95rem] text-slate">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="grid-bg bg-navy py-20 text-white lg:py-28">
        <div className="container-x">
          <SectionHeading tone="dark" kicker="Contract Lifecycle" title="From Solicitation to Closeout" />
          <ol className="mt-12 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((p) => (
              <li key={p.step} className="reveal bg-navy p-7">
                <span className="font-mono text-sm text-orange">{p.step}</span>
                <h3 className="mt-3 text-2xl uppercase">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] text-white/70">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capability statement */}
      <section className="border-b border-line bg-mist py-14">
        <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-navy text-orange">
              <Icon name="file" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-3xl uppercase text-navy">Capability Statement</h2>
              <p className="mt-1 text-slate">Core competencies, identifiers, NAICS codes, and projects on one page.</p>
            </div>
          </div>
          <a href={site.capabilityStatement.href} className="btn btn-dark" download>
            <Icon name="download" className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </section>

      {/* RFQ */}
      <section id="rfq" className="py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              kicker="For Contracting Officers"
              title="Submit an RFQ or Capability Inquiry"
              intro="Send solicitation details, a sources-sought notice, or a request for our capability information. Attach the RFQ or SOW if available."
            />
            <ul className="mt-8 space-y-3 text-[0.95rem] text-slate">
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />
                <span>
                  Prefer email? Send solicitations to{" "}
                  <a href={`mailto:${site.contact.email}`} className="font-semibold text-navy underline decoration-orange underline-offset-2">
                    {site.contact.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="lock" className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />
                Do not submit classified, CUI, or export-controlled information through this website.
              </li>
            </ul>
            <Link href="/partner-with-us#teaming" className="link-arrow mt-8">
              Prime contractor? Request teaming
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div className="border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(16,32,51,0.5)] sm:p-9 lg:col-span-8">
            <ContactForm defaultCategory="government-rfq" idPrefix="rfq" submitLabel="Submit RFQ / Inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
