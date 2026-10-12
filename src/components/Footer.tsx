import Link from "next/link";
import { site } from "@/config/site";
import { capabilityGroups } from "@/config/capabilities";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grid-bg bg-navy-950 text-white/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="inline-block rounded-sm bg-white px-4 py-3">
            <Logo className="h-9 w-auto" />
          </div>
          <p className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-white">
            {site.legalName}
          </p>
          <p className="text-sm text-white/70">{site.tagline}</p>
          <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.8rem]">
            <div className="flex gap-2">
              <dt className="text-orange">UEI</dt>
              <dd>{site.identifiers.uei}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-orange">CAGE</dt>
              <dd>{site.identifiers.cage}</dd>
            </div>
          </dl>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-white hover:text-orange"
          >
            <Icon name="mail" className="h-4 w-4" />
            {site.contact.email}
          </a>
          {site.contact.phone ? (
            <a
              href={`tel:${site.contact.phone.tel}`}
              className="mt-2 flex items-center gap-2 text-sm text-white hover:text-orange"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.contact.phone.display}
            </a>
          ) : null}
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-orange">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-orange">Capabilities</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {capabilityGroups.map((g) => (
              <li key={g.id}>
                <Link href={`/capabilities#${g.id}`} className="hover:text-white">
                  {g.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-orange">Coverage</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>{site.coverage.government}</li>
            <li>Federal, state, and local agencies</li>
            <li>Prime contractors and commercial facilities</li>
          </ul>
          <a href={site.capabilityStatement.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange" download>
            <Icon name="download" className="h-4 w-4" />
            Capability Statement
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="max-w-xl md:text-right">
            Photography is representative of the industries we serve and does not depict specific
            Pure Fuel Solution projects unless noted. Certain services are performed by qualified
            subcontractors under Pure Fuel Solution management.
          </p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
