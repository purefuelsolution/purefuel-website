import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { VendorForm } from "@/components/forms/VendorForm";
import { TeamingForm } from "@/components/forms/TeamingForm";

export const metadata = pageMetadata({
  title: "Partner With Us",
  description:
    "Subcontractors, manufacturers, distributors, and prime contractors: register with PURE FUEL SOLUTION, LLC or request a teaming partner for government generator, fuel system, and facility projects.",
  path: "/partner-with-us",
});

const partnerTypes: { icon: IconName; title: string; text: string }[] = [
  { icon: "hardhat", title: "Subcontractors", text: "Licensed electrical, mechanical, generator service, tank, coatings, and fuel quality specialists." },
  { icon: "gear", title: "Manufacturers", text: "Generator, ATS, tank, HVAC/PTAC, and industrial equipment manufacturers." },
  { icon: "truck", title: "Distributors", text: "Authorized distributors who can support government quoting, lead times, and delivery." },
  { icon: "handshake", title: "Prime Contractors", text: "Primes seeking a teaming partner for generator, fuel system, or procurement scopes." },
];

const expectations = [
  "Active licenses and insurance appropriate to the trade and location",
  "Safe work practices and compliance with facility access requirements",
  "Accurate, timely pricing and realistic lead times",
  "Documentation to support government submittals and closeout",
  "Clear communication with our project team",
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        kicker="Partner With Us"
        title="Build Opportunities With Pure Fuel Solution"
        intro="We regularly seek qualified companies to support government and commercial projects. Register your company, or bring us a teaming opportunity."
        image="/images/standby-generator"
        imageAlt="Packaged standby generator (representative image)"
      >
        <a href="#vendor-registration" className="btn btn-primary">
          Vendor Registration
          <Icon name="arrowRight" className="h-4 w-4" />
        </a>
        <a href="#teaming" className="btn btn-outline-light">
          Prime Contractor Teaming
        </a>
      </PageHero>

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            kicker="Who We Work With"
            title="Partners That Strengthen Our Delivery"
            intro="Our projects are executed through qualified subcontractors and specialized vendors. Strong partners are central to how we deliver."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((p) => (
              <div key={p.title} className="reveal border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center bg-navy text-orange">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl uppercase text-navy">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] text-slate">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vendor-registration" className="grid-bg-light border-y border-line bg-mist py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              kicker="Form 01"
              title="Vendor & Subcontractor Registration"
              intro="Tell us about your company, trade, and service area. We contact registered vendors when a project matches their capabilities."
            />
            <div className="mt-8 border-l-[3px] border-orange bg-white p-6">
              <p className="font-display text-xl font-semibold uppercase text-navy">What we look for</p>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-slate">
                {expectations.map((e) => (
                  <li key={e} className="flex gap-2.5">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-sm text-slate">
              Registration does not guarantee work or create a contractual relationship.
            </p>
          </div>
          <div className="border border-line bg-white p-6 sm:p-9 lg:col-span-8">
            <VendorForm />
          </div>
        </div>
      </section>

      <section id="teaming" className="py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              kicker="Form 02"
              title="Prime Contractor Teaming Request"
              intro="Pursuing a federal, state, or local opportunity that includes generator, fuel system, equipment procurement, or facility support scope? Share the details and our contracts team will respond."
            />
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line font-mono text-xs">
              <div className="bg-white p-4">
                <p className="uppercase tracking-[0.16em] text-orange-700">CAGE</p>
                <p className="mt-1 text-base text-navy">20UN0</p>
              </div>
              <div className="bg-white p-4">
                <p className="uppercase tracking-[0.16em] text-orange-700">UEI</p>
                <p className="mt-1 text-base text-navy">D6XSN3ESNPS4</p>
              </div>
            </div>
          </div>
          <div className="border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(16,32,51,0.5)] sm:p-9 lg:col-span-8">
            <TeamingForm />
          </div>
        </div>
      </section>
    </>
  );
}
