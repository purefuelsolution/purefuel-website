import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact PURE FUEL SOLUTION, LLC for government RFQs, subcontracting opportunities, equipment procurement, generator services, and fuel services. Email admin@purefuelsolution.com.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact, coverage } = site;
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Contact Our Team"
        intro="Send us an RFQ, a requirement, or a question. Our team will review your inquiry and respond by email."
        image="/images/generator-enclosure"
        imageAlt="Enclosed standby generator (representative image)"
      />

      <section id="inquiry" className="py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-4">
            <div className="plate plate-rivets rounded-sm p-6 text-white sm:p-7">
              <p className="font-display text-2xl font-semibold uppercase">{site.legalName}</p>
              <p className="text-sm text-white/65">{site.tagline}</p>
              <ul className="mt-6 space-y-4 text-[0.95rem]">
                <li className="flex gap-3">
                  <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/55">Email</p>
                    <a href={`mailto:${contact.email}`} className="font-medium hover:text-orange">
                      {contact.email}
                    </a>
                  </div>
                </li>
                {contact.phone ? (
                  <li className="flex gap-3">
                    <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/55">Phone</p>
                      <a href={`tel:${contact.phone.tel}`} className="font-medium hover:text-orange">
                        {contact.phone.display}
                      </a>
                    </div>
                  </li>
                ) : null}
                {contact.address ? (
                  <li className="flex gap-3">
                    <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/55">Address</p>
                      <address className="not-italic">
                        {contact.address.street}
                        <br />
                        {contact.address.city}, {contact.address.state} {contact.address.zip}
                      </address>
                    </div>
                  </li>
                ) : null}
                <li className="flex gap-3">
                  <Icon name="flag" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/55">Service Coverage</p>
                    <p className="font-medium">{coverage.government}</p>
                  </div>
                </li>
                {contact.hours ? (
                  <li className="flex gap-3">
                    <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/55">Hours</p>
                      <p className="font-medium">{contact.hours}</p>
                    </div>
                  </li>
                ) : null}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 font-mono text-xs">
                <div className="bg-navy-950/60 p-3">
                  <p className="uppercase tracking-[0.16em] text-orange">CAGE</p>
                  <p className="mt-1 text-sm">{site.identifiers.cage}</p>
                </div>
                <div className="bg-navy-950/60 p-3">
                  <p className="uppercase tracking-[0.16em] text-orange">UEI</p>
                  <p className="mt-1 text-sm">{site.identifiers.uei}</p>
                </div>
              </div>
            </div>
            <a href={site.capabilityStatement.href} className="btn btn-outline-dark w-full" download>
              <Icon name="download" className="h-4 w-4" />
              Download Capability Statement
            </a>
          </aside>

          <div className="lg:col-span-8">
            <div className="border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(16,32,51,0.5)] sm:p-9">
              <h2 className="text-3xl uppercase text-navy sm:text-4xl">Send an Inquiry</h2>
              <p className="mt-2 text-slate">Fields marked with * are required.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
