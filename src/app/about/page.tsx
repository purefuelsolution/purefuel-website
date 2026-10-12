import Link from "next/link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { DataPlate } from "@/components/DataPlate";
import { CtaBand } from "@/components/CtaBand";
import { Icon, type IconName } from "@/components/ui/Icon";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "PURE FUEL SOLUTION, LLC is a nationwide government contracting and infrastructure services company focused on contract compliance, quality assurance, and reliable project execution.",
  path: "/about",
});

const commitments: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "clipboard",
    title: "Contract Compliance",
    text: "We read the solicitation, the statement of work, and every amendment — then build our approach, submittals, and reporting around them.",
  },
  {
    icon: "check",
    title: "Quality Assurance",
    text: "Work is checked against the contract requirements and manufacturer specifications before it is presented for government acceptance.",
  },
  {
    icon: "clock",
    title: "Reliable Project Execution",
    text: "Realistic schedules, documented lead times, and proactive notice when conditions change.",
  },
  {
    icon: "users",
    title: "Subcontractor Management",
    text: "Subcontractors are vetted for licensing, insurance, and relevant experience, and are managed under clear scopes and site supervision.",
  },
  {
    icon: "hardhat",
    title: "Safety",
    text: "Site work is planned around applicable safety requirements, facility access rules, and the customer's operational constraints.",
  },
  {
    icon: "chat",
    title: "Customer Communication",
    text: "One point of contact, timely responses, and status updates that contracting officers and CORs can act on.",
  },
  {
    icon: "shield",
    title: "Government Procurement Standards",
    text: "We operate within the FAR clauses and agency requirements incorporated into each award, and maintain an active SAM.gov registration.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="An Organized, Accountable Government Contractor"
        intro={`${site.legalName} is a nationwide government contractor specializing in generator systems, fuel infrastructure, equipment procurement, facility support, and specialized project execution.`}
        image="/images/pumpjack-sunrise"
        imageAlt="Energy infrastructure at sunrise (representative image)"
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              kicker="Our Company"
              title="Infrastructure Support Built Around the Contract"
              intro={
                <>
                  <p>
                    We support federal, state, municipal, and commercial clients through project management,
                    equipment sourcing, qualified subcontractor coordination, technical services, and contract
                    administration.
                  </p>
                  <p className="mt-4">
                    Our focus is the equipment that keeps facilities operating when it matters most: emergency
                    generators, transfer switches, fuel storage and transfer systems, and the fuel itself. We pair
                    that focus with a disciplined approach to government contracting — compliant submittals,
                    accurate documentation, and dependable communication from award through closeout.
                  </p>
                  <p className="mt-4">
                    Pure Fuel Solution is not an equipment manufacturer. Equipment is sourced from manufacturers
                    and authorized distributors, and specialized field work is performed by qualified, licensed
                    subcontractors under our management and site supervision.
                  </p>
                </>
              }
            />
          </div>
          <div className="lg:col-span-5">
            <DataPlate
              title="Company Profile"
              rows={[
                { label: "Legal Name", value: "Pure Fuel Solution, LLC" },
                { label: "CAGE", value: site.identifiers.cage },
                { label: "UEI", value: site.identifiers.uei },
                { label: "SAM.gov", value: "Active" },
                { label: "Coverage", value: "Nationwide" },
                { label: "Clients", value: "Fed · State · Local" },
              ]}
            />
            <Link href="/government-contracting" className="link-arrow mt-6">
              Government contractor profile
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid-bg-light border-y border-line bg-mist py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading kicker="Our Commitments" title="How We Operate" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c) => (
              <div key={c.title} className="reveal border border-line bg-white p-7">
                <Icon name={c.icon} className="h-7 w-7 text-orange-700" />
                <h3 className="mt-5 text-2xl uppercase text-navy">{c.title}</h3>
                <p className="mt-2 text-[0.95rem] text-slate">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            kicker="Leadership"
            title="Leadership Team"
            intro="The people responsible for our contracts, projects, and administration."
          />
          <ul className="mt-12 grid border-t border-line md:grid-cols-3 md:border-t-0">
            {site.leadership.map((person) => (
              <li key={person.name} className="reveal border-b border-line py-6 md:border-b-0 md:border-l-[3px] md:border-l-orange md:px-6 md:py-2">
                <h3 className="text-3xl uppercase text-navy">{person.name}</h3>
                <p className="mt-1 text-[0.95rem] text-slate">{person.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
