import Link from "next/link";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMetadata({
  title: "Procurement & Supply",
  description:
    "Government equipment procurement and supply: generators, HVAC and PTAC systems, industrial and facility equipment, replacement parts, and electrical and mechanical components for federal, state, and local agencies.",
  path: "/procurement-supply",
});

const categories: { icon: IconName; title: string; text: string }[] = [
  { icon: "generator", title: "Generator Equipment", text: "Diesel and natural gas generator sets, ATS, enclosures, and accessories." },
  { icon: "building", title: "HVAC & PTAC Systems", text: "Packaged terminal air conditioners, HVAC units, and related components." },
  { icon: "gear", title: "Industrial Equipment", text: "Pumps, fuel handling equipment, and specialized industrial machinery." },
  { icon: "tag", title: "Replacement Parts", text: "OEM and equivalent parts sourced to make, model, and part number." },
  { icon: "crate", title: "Facility Equipment", text: "Equipment that supports building operations, maintenance, and readiness." },
  { icon: "layers", title: "Electrical & Mechanical Components", text: "Switchgear components, controls, valves, piping, and fittings." },
  { icon: "shield", title: "Specialized Government Requirements", text: "Brand-name-or-equal and salient-characteristic requirements sourced to specification." },
];

const strengths: { icon: IconName; title: string; text: string }[] = [
  { icon: "handshake", title: "Manufacturer & Distributor Coordination", text: "Quotes, availability, and lead times obtained from manufacturers and authorized distributors." },
  { icon: "ruler", title: "Technical Specification Review", text: "Each line item checked against the solicitation's specifications and salient characteristics before quoting." },
  { icon: "search", title: "Product Sourcing", text: "Compliant options identified and documented, including brand-name-or-equal alternatives where permitted." },
  { icon: "truck", title: "Delivery Coordination", text: "Freight, delivery windows, and site receiving requirements coordinated with the end user." },
  { icon: "file", title: "Government Documentation", text: "Quotes, product data, warranties, and delivery documentation prepared for the contract file." },
  { icon: "tag", title: "Packaging & Marking Coordination", text: "Packaging and marking coordinated with suppliers when required by the contract." },
];

const steps = [
  { n: "01", t: "Receive Requirement", d: "RFQ, specifications, quantities, and delivery location." },
  { n: "02", t: "Review & Source", d: "Specification review and supplier quotes with lead times." },
  { n: "03", t: "Quote", d: "Itemized, compliant quote with documented delivery schedule." },
  { n: "04", t: "Order & Track", d: "Purchase orders placed and production/shipping monitored." },
  { n: "05", t: "Deliver & Document", d: "Delivery coordinated and documentation provided for acceptance." },
];

export default function ProcurementPage() {
  return (
    <>
      <PageHero
        kicker="Procurement & Supply"
        title="Government Equipment Procurement & Supply Solutions"
        intro="We coordinate the sourcing and delivery of equipment for federal, state, and local agencies — matching each requirement to qualified manufacturers and distributors and managing it through delivery."
        image="/images/fuel-tanker"
        imageAlt="Fuel transport tanker with U.S. flag (representative image)"
      >
        <Link href="/contact?type=equipment-procurement#inquiry" className="btn btn-primary">
          Request an Equipment Quote
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            kicker="What We Supply"
            title="Equipment Categories"
            intro="Pure Fuel Solution is not a manufacturer. We source from manufacturers and authorized distributors and manage the procurement on your behalf."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <div key={c.title} className={`reveal border border-line bg-white p-6 ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}>
                <span className="flex h-11 w-11 items-center justify-center bg-navy text-orange">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl uppercase text-navy">{c.title}</h3>
                <p className="mt-2 text-[0.95rem] text-slate">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-bg-light border-y border-line bg-mist py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:sticky lg:top-36 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Photo
                src="/images/standby-generator"
                alt="Packaged standby generator set (representative image)"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading kicker="How We Support Procurement" title="Sourcing Managed to Specification" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {strengths.map((s) => (
                <div key={s.title} className="reveal border-t-[3px] border-orange bg-white p-6">
                  <Icon name={s.icon} className="h-6 w-6 text-orange-700" />
                  <h3 className="mt-4 text-xl uppercase text-navy">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-slate">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate">
              Packaging, marking, and other contract-specific requirements are coordinated with suppliers and confirmed
              during quoting for each order.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading kicker="Process" title="From RFQ to Delivery" />
          <ol className="mt-12 grid gap-5 md:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="reveal relative border-l-[3px] border-navy bg-mist p-6 md:border-l-0 md:border-t-[3px]">
                <span className="font-mono text-sm text-orange-700">{s.n}</span>
                <h3 className="mt-2 text-xl uppercase text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-slate">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/contact?type=equipment-procurement#inquiry" className="btn btn-dark">
              Submit an Equipment Requirement
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
            <a href={`mailto:${site.contact.email}`} className="link-arrow">
              {site.contact.email}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
