/**
 * Shared form definitions and validation — used by the browser (inline errors)
 * and re-run on the server (authoritative). Keep this file free of
 * browser-only or server-only APIs.
 */

export type FormKind = "contact" | "vendor" | "teaming";

export const inquiryCategories = [
  { value: "government-rfq", label: "Government RFQ" },
  { value: "subcontracting", label: "Subcontracting Opportunity" },
  { value: "equipment-procurement", label: "Equipment Procurement" },
  { value: "generator-services", label: "Generator Services" },
  { value: "fuel-services", label: "Fuel Services" },
  { value: "general", label: "General Inquiry" },
] as const;

export type FieldRule = {
  name: string;
  label: string;
  required?: boolean;
  max?: number;
  min?: number;
  type?: "email" | "phone" | "text" | "enum" | "checkbox" | "date";
  options?: readonly string[];
};

export const MAX_FILE_BYTES = 4 * 1024 * 1024; // 4 MB (Vercel request body limit is ~4.5 MB)
export const ALLOWED_FILE_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;
export const FILE_ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

/** Name of the optional file field on each form (null = no upload). */
export const fileFieldFor: Record<FormKind, { name: string; label: string } | null> = {
  contact: { name: "attachment", label: "Attachment (RFQ, SOW, or specifications)" },
  vendor: { name: "capabilityStatement", label: "Capability statement" },
  teaming: { name: "attachment", label: "Solicitation or requirement documents" },
};

export const formRules: Record<FormKind, FieldRule[]> = {
  contact: [
    { name: "name", label: "Full name", required: true, max: 100 },
    { name: "organization", label: "Agency or organization", max: 150 },
    { name: "email", label: "Email", required: true, type: "email", max: 160 },
    { name: "phone", label: "Phone", type: "phone", max: 40 },
    {
      name: "category",
      label: "Inquiry type",
      required: true,
      type: "enum",
      options: inquiryCategories.map((c) => c.value),
    },
    { name: "solicitation", label: "Solicitation / RFQ number", max: 100 },
    { name: "message", label: "Message", required: true, min: 10, max: 5000 },
    { name: "consent", label: "Privacy consent", required: true, type: "checkbox" },
  ],
  vendor: [
    { name: "companyName", label: "Company name", required: true, max: 150 },
    { name: "contactPerson", label: "Contact person", required: true, max: 100 },
    { name: "email", label: "Email", required: true, type: "email", max: 160 },
    { name: "phone", label: "Phone", required: true, type: "phone", max: 40 },
    { name: "state", label: "State", required: true, max: 60 },
    { name: "serviceArea", label: "Service area", required: true, max: 300 },
    { name: "trade", label: "Trade or specialty", required: true, max: 200 },
    { name: "license", label: "Contractor license information", max: 300 },
    { name: "insurance", label: "Insurance information", max: 600 },
    { name: "uei", label: "UEI / CAGE (if registered)", max: 60 },
    { name: "comments", label: "Additional comments", max: 3000 },
    { name: "consent", label: "Privacy consent", required: true, type: "checkbox" },
  ],
  teaming: [
    { name: "primeCompany", label: "Prime contractor company", required: true, max: 150 },
    { name: "contactName", label: "Contact name", required: true, max: 100 },
    { name: "email", label: "Email", required: true, type: "email", max: 160 },
    { name: "phone", label: "Phone", type: "phone", max: 40 },
    { name: "agency", label: "Contracting agency", max: 150 },
    { name: "opportunity", label: "Opportunity title", required: true, max: 200 },
    { name: "solicitation", label: "Solicitation number", max: 100 },
    { name: "dueDate", label: "Response due date", type: "date", max: 20 },
    { name: "role", label: "Requested scope for Pure Fuel Solution", required: true, min: 10, max: 4000 },
    { name: "consent", label: "Privacy consent", required: true, type: "checkbox" },
  ],
};

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
const PHONE_RE = /^[0-9+().\-\s xextEXT]{7,40}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export type FieldErrors = Record<string, string>;

export function validateFields(kind: FormKind, data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  for (const rule of formRules[kind]) {
    const raw = data[rule.name] ?? "";
    const value = raw.trim();

    if (rule.type === "checkbox") {
      if (rule.required && value !== "yes") errors[rule.name] = "Please confirm to continue.";
      continue;
    }
    if (!value) {
      if (rule.required) errors[rule.name] = `${rule.label} is required.`;
      continue;
    }
    if (rule.max && value.length > rule.max) {
      errors[rule.name] = `${rule.label} must be ${rule.max} characters or fewer.`;
      continue;
    }
    if (rule.min && value.length < rule.min) {
      errors[rule.name] = `${rule.label} must be at least ${rule.min} characters.`;
      continue;
    }
    if (rule.type === "email" && !EMAIL_RE.test(value)) errors[rule.name] = "Enter a valid email address.";
    if (rule.type === "phone" && !PHONE_RE.test(value)) errors[rule.name] = "Enter a valid phone number.";
    if (rule.type === "date" && !DATE_RE.test(value)) errors[rule.name] = "Enter a valid date.";
    if (rule.type === "enum" && rule.options && !rule.options.includes(value)) {
      errors[rule.name] = `Select a valid ${rule.label.toLowerCase()}.`;
    }
  }
  return errors;
}

export function fileExtension(filename: string): string {
  const i = filename.lastIndexOf(".");
  return i >= 0 ? filename.slice(i).toLowerCase() : "";
}

/** Client-side file pre-check (the server re-checks size, extension, and file signature). */
export function checkFileBasic(file: { name: string; size: number }): string | null {
  if (file.size === 0) return "The selected file is empty.";
  if (file.size > MAX_FILE_BYTES) return "File must be 4 MB or smaller.";
  const ext = fileExtension(file.name);
  if (!(ALLOWED_FILE_EXTENSIONS as readonly string[]).includes(ext)) return "Upload a PDF, DOC, or DOCX file.";
  return null;
}

export const formTitles: Record<FormKind, string> = {
  contact: "Website Inquiry",
  vendor: "Vendor / Subcontractor Registration",
  teaming: "Prime Contractor Teaming Request",
};

/** Human-readable value for the notification email. */
export function displayValue(kind: FormKind, name: string, value: string): string {
  if (kind === "contact" && name === "category") {
    return inquiryCategories.find((c) => c.value === value)?.label ?? value;
  }
  return value;
}

/** Email subject line for each form. */
export function buildSubject(kind: FormKind, data: Record<string, string>): string {
  const subjects: Record<FormKind, string> = {
    contact: `${displayValue(kind, "category", data.category ?? "")} — ${data.organization || data.name || ""}`,
    vendor: `Vendor Registration — ${data.companyName ?? ""} (${data.trade ?? ""})`,
    teaming: `Teaming Request — ${data.primeCompany ?? ""}: ${data.opportunity ?? ""}`,
  };
  return `[Website] ${subjects[kind]}`.replace(/[\r\n]+/g, " ").slice(0, 200);
}

export function makeReference(kind: FormKind): string {
  const prefix = { contact: "INQ", vendor: "VEN", teaming: "TEM" }[kind];
  const d = new Date();
  const date = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${prefix}-${date}-${rand}`;
}
