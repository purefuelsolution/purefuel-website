import { site } from "@/config/site";

/** Organization structured data (schema.org) for search engines. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}/brand/pfs-logo-full.png`,
    email: site.contact.email,
    description:
      "Government contracting and infrastructure services company specializing in generator systems, fuel infrastructure, equipment procurement, and facility support.",
    areaServed: { "@type": "Country", name: "United States" },
    identifier: [
      { "@type": "PropertyValue", propertyID: "CAGE", value: site.identifiers.cage },
      { "@type": "PropertyValue", propertyID: "UEI", value: site.identifiers.uei },
    ],
    ...(site.contact.phone ? { telephone: site.contact.phone.tel } : {}),
    ...(site.contact.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.contact.address.street,
            addressLocality: site.contact.address.city,
            addressRegion: site.contact.address.state,
            postalCode: site.contact.address.zip,
            addressCountry: "US",
          },
        }
      : {}),
    knowsAbout: [
      "Emergency generator systems",
      "Automatic transfer switches",
      "Aboveground fuel storage tanks",
      "Fuel polishing",
      "Government equipment procurement",
      "Facility maintenance",
    ],
  };
  return (
    <script
      type="application/ld+json"
      // Static, server-generated content from site config — not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
