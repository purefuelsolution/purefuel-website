/**
 * ==========================================================================
 *  SITE CONFIGURATION — PURE FUEL SOLUTION, LLC
 * ==========================================================================
 *  This is the single place to update company information that appears
 *  across the website (header, footer, contact page, structured data,
 *  government contractor profile, capability statement link).
 *
 *  Rules for editors:
 *   • Only publish information that has been verified.
 *   • Leave optional fields as `null` until confirmed — the site hides them.
 * ==========================================================================
 */

export type NavItem = { label: string; href: string };

export const site = {
  /** Legal name exactly as registered in SAM.gov */
  legalName: "PURE FUEL SOLUTION, LLC",
  /** Shorter display name used in running text */
  shortName: "Pure Fuel Solution",
  tagline: "Government Contracting & Infrastructure Services",
  logoTagline: "Fuel Purity for Peak Efficiency",
  entityType: "Limited Liability Company (LLC)",

  /** Public website address (used for search engines and link previews) */
  url: "https://www.purefuelsolution.com",

  identifiers: {
    uei: "D6XSN3ESNPS4",
    cage: "20UN0",
    samStatus: "Active",
    /** Verify in SAM.gov before each publish. Displayed on the Government Contracting page. */
    samExpiration: "July 28, 2027",
    samRegistrationUrl: "https://sam.gov/",
  },

  contact: {
    email: "admin@purefuelsolution.com",
    /**
     * Business phone — leave null until a verified public number is chosen.
     * Example: { display: "(555) 555-0100", tel: "+15555550100" }
     */
    phone: null as null | { display: string; tel: string },
    /**
     * Mailing / physical address — leave null until approved for publication.
     * Example: { street: "...", city: "...", state: "FL", zip: "....." }
     */
    address: null as null | { street: string; city: string; state: string; zip: string },
    hours: null as null | string,
  },

  coverage: {
    government: "Nationwide Government Contracting",
  },

  /** Capability statement (PDF in /public/documents). Replace the file to update. */
  capabilityStatement: {
    href: "/documents/pure-fuel-solution-capability-statement.pdf",
    /** Set to false once the final, approved capability statement replaces the draft. */
    isDraft: true,
  },

  leadership: [
    { name: "Stanlir Alce", title: "Chief Executive Officer / Project Manager" },
    { name: "Wilmane Fortullien", title: "Contract Manager" },
    { name: "Rose Louis", title: "Chief Administrator" },
  ],

  /**
   * FORMS — no account, API key, or Vercel setting required.
   * Submissions are delivered by FormSubmit (formsubmit.co, free).
   * The very first submission sends a one-time "Activate Form" email to this
   * address. Click the button in that email once; every form works after that.
   */
  forms: {
    deliverTo: "admin@purefuelsolution.com",
  },

  /** Google Analytics 4 ID, e.g. "G-ABC123XYZ". Leave null for no analytics. */
  googleAnalyticsId: null as null | string,

  social: {
    linkedin: null as null | string,
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Government Contracting", href: "/government-contracting" },
    { label: "Projects", href: "/projects" },
    { label: "Procurement & Supply", href: "/procurement-supply" },
    { label: "Partner With Us", href: "/partner-with-us" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  /** Where the persistent "Request a Quote" button points */
  quoteHref: "/contact?type=government-rfq#inquiry",
} as const;

export type Site = typeof site;
