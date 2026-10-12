import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/config/site";
import { homeServices, directRoles, subcontractedRoles } from "@/config/capabilities";
import { publishedProjects } from "@/config/projects";
import { Photo } from "@/components/ui/Photo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { DataPlate } from "@/components/DataPlate";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: { absolute: `${site.legalName} | Government Contracting & Infrastructure Services` },
  description:
    "Mission-ready infrastructure for federal, state, and local agencies: generator systems, fuel infrastructure, fuel polishing, equipment procurement, and specialized government contracting. CAGE 20UN0 · UEI D6XSN3ESNPS4.",
  alternates: { canonical: "/" },
};

const pillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "clipboard",
    title: "Contract Management",
    text: "Submittals, schedules, reporting, invoicing, and closeout handled by a dedicated contract manager.",
  },
  {
    icon: "search",
    title: "Equipment Sourcing",
    text: "Specification review and sourcing through manufacturers and authorized distributors.",
  },
  {
    icon: "layers",
    title: "Project Coordination",
    text: "One accountable point of contact coordinating vendors, trades, deliveries, and site access.",
  },
  {
    icon: "gear",
    title: "Specialized Technical Solutions",
    text: "Generator, fuel system, and facility work executed with qualified, licensed technical partners.",
  },
];

const audiences = [
  "Federal contracting officers",
  "State and local procurement departments",
  "Government prime contractors",
  "Commercial facility managers",
  "Equipment procurement specialists",
  "Subcontractors and equipment suppliers",
];

export default function HomePage() {
  const featured = publishedProjects.slice(0, 3);

  return (
    <>
      {/* ------------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Photo
          src="/images/field-technicians"
          alt="Field technicians in hard hats inspecting an industrial pipe rack (representative image)"
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,#0a1522_0%,rgba(10,21,34,0.96)_34%,rgba(16,32,51,0.72)_62%,rgba(16,32,51,0.25)_100%)]" />
        <div className="grid-bg absolute inset-0 -z-10 opacity-50" aria-hidden="true" />

        <div className="container-x grid gap-12 pb-20 pt-16 sm:pt-20 lg:grid-cols-12 lg:items-end lg:pb-28 lg:pt-28">
          <div className="lg:col-span-8">
            <p className="kicker kicker-light hero-in">Government Contracting · Infrastructure Services</p>
            <h1 className="hero-in-2 mt-6 text-[2.45rem] uppercase leading-[0.95] xs:text-[3rem] sm:text-7xl lg:text-[5.6rem]">
              Mission-Ready Infrastructure.
              <span className="block text-orange">Reliable Solutions.</span>
            </h1>
            <p className="hero-in-3 mt-7 max-w-2xl text-lg text-white/85 sm:text-xl">
              Supporting Federal, State, and Local Government Agencies Through Generator Systems, Fuel
              Infrastructure, Equipment Procurement, and Specialized Contracting Services.
            </p>
            <div className="hero-in-3 mt-9 flex flex-wrap gap-3">
              <Link href="/capabilities" className="btn btn-primary">
                Explore Our Capabilities
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <a href={site.capabilityStatement.href} className="btn btn-outline-light" download>
                <Icon name="download" className="h-4 w-4" />
                Download Capability Statement
              </a>
            </div>
          </div>
          <div className="hero-in-3 lg:col-span-4">
            <DataPlate />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Capability strip */}
      <div className="border-b border-line bg-mist">
        <ul className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-slate">
          {["Generator Systems", "ATS", "Aboveground Storage Tanks", "Fuel Polishing", "Equipment Procurement", "Facility Support"].map(
            (t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-orange" aria-hidden="true" />
                {t}
              </li>
            ),
          )}
        </ul>
      </div>

      {/* ------------------------------ Supporting Government Operations */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              kicker="01 / Who We Are"
              title="Supporting Government Operations Nationwide"
              intro={
                <>
                  <p>
                    {site.legalName} is a government contracting and infrastructure services company. We give
                    agencies and prime contractors a single, accountable partner for generator systems, fuel
                    infrastructure, equipment procurement, and facility support.
                  </p>
                  <p className="mt-4">
                    Our team provides contract management, equipment sourcing, project coordination, and
                    specialized technical solutions — delivered through our own capabilities and a network of
                    qualified vendors and licensed subcontractors.
                  </p>
                </>
              }
            />
            <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="reveal bg-white p-6">
                  <Icon name={p.icon} className="h-7 w-7 text-orange-700" />
                  <h3 className="mt-4 text-xl uppercase text-navy">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-slate">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Photo
                src="/images/generator-enclosure"
                alt="Enclosed standby generator installed beside a commercial building (representative image)"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 bg-navy p-6 text-white shadow-xl sm:left-auto sm:w-80">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-orange">Coverage</p>
              <p className="mt-2 font-display text-2xl font-semibold uppercase">{site.coverage.government}</p>
              <p className="mt-1 text-sm text-white/70">Federal, state, local, and commercial clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Service cards */}
      <section className="grid-bg-light border-y border-line bg-mist py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="02 / Core Services"
              title="Infrastructure Capabilities for Mission-Critical Facilities"
            />
            <Link href="/capabilities" className="link-arrow shrink-0">
              View all capabilities
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="reveal group relative flex flex-col border border-line bg-white p-7 transition hover:-translate-y-0.5 hover:border-navy hover:shadow-[0_22px_40px_-26px_rgba(16,32,51,0.55)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center bg-navy text-orange transition-colors group-hover:bg-orange group-hover:text-navy">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-xs text-slate/70">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-2xl uppercase text-navy">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] text-slate">{s.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Learn more
                  <Icon name="arrowRight" className="h-4 w-4 text-orange-700 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Delivery model */}
      <section className="grid-bg bg-navy py-20 text-white lg:py-28">
        <div className="container-x">
          <SectionHeading
            tone="dark"
            kicker="03 / How We Deliver"
            title="One Accountable Contractor. A Qualified Execution Network."
            intro="We are transparent about how work is performed. Pure Fuel Solution manages the contract and the project; specialized field work is performed by qualified, licensed subcontractors under our supervision."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="reveal border border-white/15 bg-white/[0.03] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-orange text-navy">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                <h3 className="text-2xl uppercase">Managed by Pure Fuel Solution</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {directRoles.map((r) => (
                  <li key={r} className="flex gap-3 text-white/85">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal border border-white/15 bg-white/[0.03] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border border-orange text-orange">
                  <Icon name="hardhat" className="h-5 w-5" />
                </span>
                <h3 className="text-2xl uppercase">Our Qualified Partner Network</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {subcontractedRoles.map((r) => (
                  <li key={r} className="flex gap-3 text-white/85">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-white/50" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/60">
                Subcontractors are selected for licensing, insurance, and relevant experience, and work under
                Pure Fuel Solution&apos;s contract management and site supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Projects */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="04 / Projects"
              title="Project References"
              intro="Fuel infrastructure and fuel quality work for federal and municipal customers."
            />
            <Link href="/projects" className="link-arrow shrink-0">
              View all projects
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} compact />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Who we support */}
      <section className="border-t border-line bg-mist py-20 lg:py-24">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="05 / Who We Support"
              title="Built for Public-Sector Buyers and Their Partners"
              intro="Whether you are issuing an RFQ, building a team for a prime contract, or sourcing equipment to specification, we respond with clear documentation and a single point of contact."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {audiences.map((a) => (
              <li key={a} className="reveal flex items-center gap-3 border-l-[3px] border-orange bg-white px-5 py-4 font-semibold text-navy">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
