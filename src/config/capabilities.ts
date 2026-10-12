/**
 * ==========================================================================
 *  CAPABILITIES
 * ==========================================================================
 *  `delivery` describes HOW each service is delivered. Keep this accurate —
 *  it is how the website distinguishes work Pure Fuel Solution performs
 *  directly from work performed by qualified subcontractors.
 *
 *   "direct"         → performed by Pure Fuel Solution personnel
 *   "subcontracted"  → field work performed by qualified, licensed
 *                      subcontractors under Pure Fuel Solution's contract
 *                      management and site supervision
 *
 *  If Pure Fuel Solution self-performs a service listed as "subcontracted"
 *  (for example, fuel polishing), change it to "direct".
 * ==========================================================================
 */

import type { IconName } from "@/components/ui/Icon";

export type Delivery = "direct" | "subcontracted";

export type CapabilityItem = { label: string; delivery: Delivery };

export type CapabilityGroup = {
  id: string;
  title: string;
  shortTitle: string;
  icon: IconName;
  image: string;
  imageAlt: string;
  summary: string;
  items: CapabilityItem[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "generator-systems",
    title: "Generator Systems & Emergency Power",
    shortTitle: "Generator Systems",
    icon: "generator",
    image: "/images/generator-engine",
    imageAlt: "Large industrial diesel generator set (representative image)",
    summary:
      "Supply, replacement, and lifecycle support for standby and prime power systems serving mission-critical facilities.",
    items: [
      { label: "Generator supply and replacement", delivery: "direct" },
      { label: "Diesel and natural gas generators", delivery: "direct" },
      { label: "Automatic Transfer Switches (ATS)", delivery: "direct" },
      { label: "Generator installation coordination", delivery: "direct" },
      { label: "Generator maintenance and inspections", delivery: "subcontracted" },
      { label: "Load bank testing", delivery: "subcontracted" },
      { label: "Temporary and rental power systems", delivery: "subcontracted" },
      { label: "Emergency generator support", delivery: "subcontracted" },
    ],
  },
  {
    id: "fuel-infrastructure",
    title: "Fuel Infrastructure & Storage Tanks",
    shortTitle: "Fuel Infrastructure",
    icon: "tank",
    image: "/images/fuel-storage-tanks",
    imageAlt: "Aboveground fuel storage tanks with dispensers (representative image)",
    summary:
      "Aboveground storage, day tanks, piping, and transfer systems that keep emergency power and fleet operations supplied.",
    items: [
      { label: "Aboveground storage tanks", delivery: "direct" },
      { label: "Diesel fuel storage systems", delivery: "direct" },
      { label: "Fuel tank refurbishment", delivery: "subcontracted" },
      { label: "Fuel piping systems", delivery: "subcontracted" },
      { label: "Day tanks", delivery: "direct" },
      { label: "Fuel transfer systems", delivery: "subcontracted" },
      { label: "Tank inspections", delivery: "subcontracted" },
      { label: "Fuel system maintenance", delivery: "subcontracted" },
    ],
  },
  {
    id: "fuel-quality",
    title: "Fuel Quality Services",
    shortTitle: "Fuel Polishing & Maintenance",
    icon: "droplet",
    image: "/images/diesel-fuel-tank",
    imageAlt: "Diesel fuel tank marking (representative image)",
    summary:
      "Programs that keep stored diesel clean, dry, and ready — so generators start and run when the mission depends on them.",
    items: [
      { label: "Fuel polishing", delivery: "subcontracted" },
      { label: "Diesel fuel filtration", delivery: "subcontracted" },
      { label: "Water and contamination removal", delivery: "subcontracted" },
      { label: "Fuel sampling", delivery: "subcontracted" },
      { label: "Fuel quality maintenance", delivery: "subcontracted" },
      { label: "Preventive maintenance programs", delivery: "direct" },
    ],
  },
  {
    id: "equipment-procurement",
    title: "Equipment Procurement & Supply",
    shortTitle: "Equipment Procurement",
    icon: "crate",
    image: "/images/fuel-tanker",
    imageAlt: "Fuel transport tanker with U.S. flag (representative image)",
    summary:
      "Specification-driven sourcing of generators, HVAC/PTAC units, facility equipment, and specialized parts for public agencies.",
    items: [
      { label: "Industrial equipment sourcing", delivery: "direct" },
      { label: "Generator procurement", delivery: "direct" },
      { label: "HVAC and PTAC equipment supply", delivery: "direct" },
      { label: "Facility equipment", delivery: "direct" },
      { label: "Specialized industrial parts", delivery: "direct" },
      { label: "Vendor and manufacturer coordination", delivery: "direct" },
      { label: "Government equipment delivery and logistics", delivery: "direct" },
    ],
  },
  {
    id: "facility-services",
    title: "Facility & Specialized Services",
    shortTitle: "Facility Maintenance & Support",
    icon: "building",
    image: "/images/generator-enclosure",
    imageAlt: "Enclosed standby generator beside a commercial building (representative image)",
    summary:
      "Managed facility support and specialized project execution, coordinated under a single point of accountability.",
    items: [
      { label: "Commercial facility maintenance", delivery: "subcontracted" },
      { label: "Industrial equipment support", delivery: "subcontracted" },
      { label: "Mechanical and electrical subcontractor coordination", delivery: "direct" },
      { label: "Specialized installation and repair projects", delivery: "subcontracted" },
      { label: "Project management and quality oversight", delivery: "direct" },
    ],
  },
];

/** Homepage service cards (brief section 4) */
export const homeServices: {
  title: string;
  icon: IconName;
  href: string;
  text: string;
}[] = [
  {
    title: "Generator Systems & Emergency Power",
    icon: "generator",
    href: "/capabilities#generator-systems",
    text: "Generator and ATS supply, replacement, installation coordination, inspections, and load bank testing.",
  },
  {
    title: "Fuel Infrastructure & Storage Tanks",
    icon: "tank",
    href: "/capabilities#fuel-infrastructure",
    text: "Aboveground storage, day tanks, piping, transfer systems, refurbishment, and tank inspections.",
  },
  {
    title: "Fuel Polishing & Maintenance",
    icon: "droplet",
    href: "/capabilities#fuel-quality",
    text: "Fuel polishing, filtration, water removal, sampling, and preventive fuel quality programs.",
  },
  {
    title: "Equipment Procurement & Supply",
    icon: "crate",
    href: "/procurement-supply",
    text: "Specification-driven sourcing and delivery of generators, HVAC/PTAC, facility equipment, and parts.",
  },
  {
    title: "Facility Maintenance & Support",
    icon: "building",
    href: "/capabilities#facility-services",
    text: "Managed facility and industrial equipment support through vetted mechanical and electrical trades.",
  },
  {
    title: "Specialized Government Contracting",
    icon: "shield",
    href: "/government-contracting",
    text: "Contract administration, compliance documentation, and single-point accountability for agencies and primes.",
  },
];

/** What Pure Fuel Solution personnel perform directly */
export const directRoles = [
  "Contract administration and compliance documentation",
  "Project management and scheduling",
  "Equipment sourcing, procurement, and vendor management",
  "Subcontractor selection, coordination, and oversight",
  "Site supervision and quality assurance oversight",
  "Government reporting, submittals, and closeout",
];

/** What qualified subcontractors perform under PFS management */
export const subcontractedRoles = [
  "Licensed electrical and mechanical installation",
  "Generator maintenance, inspection, and load bank testing",
  "Tank refurbishment, coatings, and fuel piping work",
  "Fuel polishing, filtration, and laboratory sampling",
  "Specialty trade work required by the statement of work",
];
