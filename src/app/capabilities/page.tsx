import Link from "next/link";
import { site } from "@/config/site";
import { capabilityGroups } from "@/config/capabilities";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMetadata({
  title: "Capabilities",
  description:
    "Generator systems and ATS, aboveground fuel storage and transfer systems, fuel polishing, equipment procurement, and facility support for government and commercial facilities.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        kicker="Core Capabilities"
        title="Generator, Fuel, and Facility Infrastructure"
        intro="Comprehensive support for the power and fuel systems that keep government and commercial facilities operational — managed under one contract and one point of accountability."
        image="/images/generator-engine"
        imageAlt="Industrial diesel generator set (representative image)"
      >
        <Link href={site.quoteHref} className="btn btn-primary">
          Request a Quote
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
        <a href={site.capabilityStatement.href} className="btn btn-outline-light" download>
          <Icon name="download" className="h-4 w-4" />
          Capability Statement
        </a>
      </PageHero>

      {/* In-page navigation */}
      <nav aria-label="Capability sections" className="border-b border-line bg-white">
        <ul className="container-x flex gap-2 overflow-x-auto py-3 text-sm [scrollbar-width:none]">
          {capabilityGroups.map((g) => (
            <li key={g.id}>
              <a
                href={`#${g.id}`}
                className="flex items-center gap-2 whitespace-nowrap border border-line px-3.5 py-2 font-semibold text-navy hover:border-navy"
              >
                <Icon name={g.icon} className="h-4 w-4 text-orange-700" />
                {g.shortTitle}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {capabilityGroups.map((g, i) => (
        <section
          key={g.id}
          id={g.id}
          className={`py-20 lg:py-24 ${i % 2 === 1 ? "grid-bg-light border-y border-line bg-mist" : "bg-white"}`}
        >
          <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-square overflow-hidden bg-mist">
                <Photo src={g.image} alt={g.imageAlt} sizes="(min-width: 1024px) 40vw, 100vw" className="h-full w-full object-cover" />
                <span className="absolute left-0 top-0 bg-navy px-3 py-2 font-mono text-xs text-orange">
                  {String(i + 1).padStart(2, "0")} / {String(capabilityGroups.length).padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="reveal">
                <span className="flex h-12 w-12 items-center justify-center bg-navy text-orange">
                  <Icon name={g.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-6 text-4xl uppercase text-navy sm:text-5xl">{g.title}</h2>
                <p className="mt-4 max-w-2xl text-lg text-slate">{g.summary}</p>
              </div>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {g.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 py-3.5 font-medium text-ink">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Have a Requirement or Upcoming Solicitation?"
        text="Send us the statement of work, specifications, or RFQ. We will review the requirement and respond with a quote or a capability response."
      />
    </>
  );
}
