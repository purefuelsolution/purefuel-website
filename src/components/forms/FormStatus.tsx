"use client";

import { Icon } from "@/components/ui/Icon";

export function FormSuccess({ reference, onReset, text }: { reference: string; onReset: () => void; text: string }) {
  return (
    <div role="status" className="border border-line bg-white p-8 text-center sm:p-10">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange text-navy">
        <Icon name="check" className="h-7 w-7" strokeWidth={2.2} />
      </span>
      <h3 className="mt-5 text-3xl uppercase text-navy">Submission Received</h3>
      <p className="mx-auto mt-3 max-w-md text-slate">{text}</p>
      {reference ? (
        <p className="mt-4 font-mono text-sm text-navy">
          Reference: <span className="font-medium">{reference}</span>
        </p>
      ) : null}
      <button type="button" onClick={onReset} className="btn btn-outline-dark mt-6">
        Submit another
      </button>
    </div>
  );
}

export function FormMessage({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div role="alert" className="flex items-start gap-3 border-l-4 border-[#b42318] bg-[#fef3f2] px-4 py-3 text-sm text-[#7a271a]">
      {message}
    </div>
  );
}

export function SubmitButton({ submitting, label }: { submitting: boolean; label: string }) {
  return (
    <button type="submit" disabled={submitting} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
      {submitting ? "Sending…" : label}
      {!submitting ? <Icon name="arrowRight" className="h-4 w-4" /> : null}
    </button>
  );
}
