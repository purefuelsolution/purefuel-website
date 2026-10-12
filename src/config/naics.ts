/**
 * NAICS CODES — shown on the Government Contracting page.
 * Keep this list matched to the NAICS codes in your SAM.gov registration.
 * Mark your primary code with `primary: true`.
 */

export type NaicsCode = {
  code: string;
  title: string;
  category: "Generator & Power" | "Fuel Systems" | "Procurement & Supply" | "Facility Services";
  primary?: boolean;
};

export const naicsCodes: NaicsCode[] = [
  {
    code: "811310",
    title:
      "Commercial and Industrial Machinery and Equipment (except Automotive and Electronic) Repair and Maintenance",
    category: "Generator & Power",
  },
  {
    code: "238210",
    title: "Electrical Contractors and Other Wiring Installation Contractors",
    category: "Generator & Power",
  },
  {
    code: "238220",
    title: "Plumbing, Heating, and Air-Conditioning Contractors",
    category: "Fuel Systems",
  },
  {
    code: "238990",
    title: "All Other Specialty Trade Contractors",
    category: "Fuel Systems",
  },
  {
    code: "423610",
    title:
      "Electrical Apparatus and Equipment, Wiring Supplies, and Related Equipment Merchant Wholesalers",
    category: "Procurement & Supply",
  },
  {
    code: "423730",
    title:
      "Warm Air Heating and Air-Conditioning Equipment and Supplies Merchant Wholesalers",
    category: "Procurement & Supply",
  },
  {
    code: "423830",
    title: "Industrial Machinery and Equipment Merchant Wholesalers",
    category: "Procurement & Supply",
  },
  {
    code: "561210",
    title: "Facilities Support Services",
    category: "Facility Services",
  },
];
