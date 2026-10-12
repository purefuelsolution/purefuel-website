"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { FILE_ACCEPT } from "@/lib/forms/schema";
import { Icon } from "@/components/ui/Icon";

type BaseProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: ReactNode;
  className?: string;
};

function Label({ id, label, required }: { id: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={id} className="field-label">
      {label}
      {required ? (
        <span className="ml-0.5 text-orange-700" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="ml-1.5 text-xs font-normal text-slate">(optional)</span>
      )}
    </label>
  );
}

function Feedback({ id, error, hint }: { id: string; error?: string; hint?: ReactNode }) {
  return (
    <>
      {hint && !error ? (
        <p id={`${id}-hint`} className="field-hint">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </>
  );
}

function describedBy(id: string, error?: string, hint?: ReactNode) {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}

export function TextField({
  type = "text",
  autoComplete,
  maxLength,
  defaultValue,
  ...p
}: BaseProps & { type?: "text" | "email" | "tel" | "date"; autoComplete?: string; maxLength?: number; defaultValue?: string }) {
  return (
    <div className={p.className}>
      <Label id={p.id} label={p.label} required={p.required} />
      <input
        id={p.id}
        name={p.name}
        type={type}
        required={p.required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        defaultValue={defaultValue}
        aria-invalid={p.error ? true : undefined}
        aria-describedby={describedBy(p.id, p.error, p.hint)}
        className="field-input"
      />
      <Feedback id={p.id} error={p.error} hint={p.hint} />
    </div>
  );
}

export function TextArea({ maxLength, rows = 5, ...p }: BaseProps & { maxLength?: number; rows?: number }) {
  return (
    <div className={p.className}>
      <Label id={p.id} label={p.label} required={p.required} />
      <textarea
        id={p.id}
        name={p.name}
        required={p.required}
        maxLength={maxLength}
        rows={rows}
        aria-invalid={p.error ? true : undefined}
        aria-describedby={describedBy(p.id, p.error, p.hint)}
        className="field-input"
      />
      <Feedback id={p.id} error={p.error} hint={p.hint} />
    </div>
  );
}

export function SelectField({
  options,
  value,
  onChange,
  placeholder = "Select…",
  ...p
}: BaseProps & {
  options: readonly { value: string; label: string }[];
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className={p.className}>
      <Label id={p.id} label={p.label} required={p.required} />
      <select
        id={p.id}
        name={p.name}
        required={p.required}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        aria-invalid={p.error ? true : undefined}
        aria-describedby={describedBy(p.id, p.error, p.hint)}
        className="field-input"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <Feedback id={p.id} error={p.error} hint={p.hint} />
    </div>
  );
}

export function FileField(p: BaseProps) {
  const [fileName, setFileName] = useState<string>("");
  return (
    <div className={p.className}>
      <Label id={p.id} label={p.label} required={p.required} />
      <label
        htmlFor={p.id}
        className={`flex cursor-pointer items-center gap-3 border border-dashed bg-mist px-4 py-4 text-sm transition hover:border-navy ${
          p.error ? "border-[#b42318]" : "border-[#b9c3ce]"
        }`}
      >
        <Icon name="upload" className="h-5 w-5 shrink-0 text-orange-700" />
        <span className="min-w-0 flex-1 truncate text-slate">
          {fileName ? <span className="font-medium text-navy">{fileName}</span> : "Choose a PDF, DOC, or DOCX file (max 4 MB)"}
        </span>
        <span className="shrink-0 font-semibold text-navy underline decoration-orange underline-offset-4">Browse</span>
      </label>
      <input
        id={p.id}
        name={p.name}
        type="file"
        accept={FILE_ACCEPT}
        className="sr-only"
        aria-invalid={p.error ? true : undefined}
        aria-describedby={describedBy(p.id, p.error, p.hint)}
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
      />
      <Feedback id={p.id} error={p.error} hint={p.hint} />
    </div>
  );
}

export function ConsentField({ id, error }: { id: string; error?: string }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          name="consent"
          type="checkbox"
          value="yes"
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-[#102033]"
        />
        <label htmlFor={id} className="text-sm text-slate">
          I agree that Pure Fuel Solution may use the information I submit to respond to this request, as described in
          the{" "}
          <Link href="/privacy-policy" className="font-semibold text-navy underline decoration-orange underline-offset-2">
            Privacy Policy
          </Link>
          . Do not submit classified, CUI, or export-controlled information through this form.
        </label>
      </div>
      {error ? (
        <p id={`${id}-error`} className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Off-screen field for bots; humans never see or fill it. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
