/**
 * ==========================================================================
 *  PROJECTS (shown on the Projects page and homepage)
 * ==========================================================================
 *  To add a project: copy one object below, fill in the fields, and set
 *  `published: true` once the details are verified AND you have
 *  authorization to publish the customer name.
 *
 *  Field rules
 *   • status       → "completed" ONLY when the work is verified complete.
 *                    Use "in-performance" for active contracts.
 *                    Use null when not yet confirmed (no badge is shown).
 *   • period       → verified period of performance only; otherwise null.
 *   • photos       → ONLY genuine project photos taken by/for Pure Fuel
 *                    Solution. Never use stock photography here.
 *                    Put files in /public/projects/ and list paths, e.g.
 *                    ["/projects/davie-tank-after.webp"].
 *   • Never add testimonials, endorsements, or quotes from government
 *     personnel. Government employees generally may not endorse vendors.
 * ==========================================================================
 */

export type ProjectStatus = "completed" | "in-performance" | null;

export type Project = {
  id: string;
  published: boolean;
  /** Displayed agency/customer name */
  customer: string;
  customerType: "Federal" | "State" | "Municipal" | "Commercial";
  title: string;
  location: string | null;
  scope: string;
  description: string;
  period: string | null;
  status: ProjectStatus;
  /** Tags shown on the card */
  disciplines: string[];
  photos: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "navy-nmci-fuel-tank",
    published: true,
    customer: "U.S. Navy",
    customerType: "Federal",
    title: "NMCI Emergency Generator Fuel Tank Replacement",
    location: null,
    scope: "Fuel tank replacement project supporting U.S. Navy infrastructure.",
    description:
      "Replacement of an emergency generator fuel tank supporting U.S. Navy facility operations.",
    period: null,
    status: null,
    disciplines: ["Fuel Infrastructure", "Emergency Power", "Federal"],
    photos: [],
  },
  {
    id: "mangonia-park-fuel-polishing",
    published: true,
    customer: "Town of Mangonia Park",
    customerType: "Municipal",
    title: "Fuel Polishing and Fuel Tank Maintenance",
    location: null,
    scope: "Fuel polishing and fuel tank maintenance.",
    description:
      "Fuel polishing and tank maintenance services to protect stored fuel quality and support reliable operation of municipal equipment.",
    period: null,
    status: null,
    disciplines: ["Fuel Quality", "Tank Maintenance", "Municipal"],
    photos: [],
  },
  {
    id: "davie-tank-refurbishment",
    published: true,
    customer: "Town of Davie",
    customerType: "Municipal",
    title: "Fuel Tank Refurbishment and Painting",
    location: null,
    scope: "Fuel tank refurbishment and painting.",
    description:
      "Refurbishment and repainting of a municipal fuel storage tank to extend service life and protect the tank from corrosion.",
    period: null,
    status: null,
    disciplines: ["Fuel Infrastructure", "Coatings", "Municipal"],
    photos: [],
  },
];

export const publishedProjects = projects.filter((p) => p.published);

export const statusLabel: Record<Exclude<ProjectStatus, null>, string> = {
  completed: "Completed",
  "in-performance": "In Performance",
};
