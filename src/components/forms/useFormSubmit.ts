"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/config/site";
import {
  buildSubject,
  checkFileBasic,
  displayValue,
  fileFieldFor,
  formRules,
  formTitles,
  makeReference,
  validateFields,
  type FieldErrors,
  type FormKind,
} from "@/lib/forms/schema";

type Status = "idle" | "submitting" | "success" | "error";

/** FormSubmit endpoint — free, no API key. See `forms` in src/config/site.ts. */
const ENDPOINT = `https://formsubmit.co/ajax/${site.forms.deliverTo}`;
const FALLBACK = `Please try again or email ${site.contact.email} directly.`;

export function useFormSubmit(kind: FormKind) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState<string>("");
  const [reference, setReference] = useState<string>("");
  const startedAt = useRef<number>(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formEl = event.currentTarget;
      const formData = new FormData(formEl);

      const values: Record<string, string> = {};
      for (const rule of formRules[kind]) {
        const v = formData.get(rule.name);
        values[rule.name] = typeof v === "string" ? v.trim() : "";
      }
      const nextErrors = validateFields(kind, values);

      const fileField = fileFieldFor[kind];
      let file: File | null = null;
      if (fileField) {
        const f = formData.get(fileField.name);
        if (f && typeof f !== "string" && f.size > 0) {
          const err = checkFileBasic(f);
          if (err) nextErrors[fileField.name] = err;
          else file = f;
        }
      }

      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) {
        setStatus("error");
        setMessage("Please correct the highlighted fields.");
        formEl.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
        return;
      }

      const ref = makeReference(kind);

      // Bot filtering: hidden honeypot filled, or form completed in under 3 seconds.
      const honeypot = String(formData.get("_honey") ?? "");
      if (honeypot || Date.now() - startedAt.current < 3000) {
        setReference(ref);
        setStatus("success");
        return;
      }

      // Build the email: readable labels become the rows of the email table.
      const payload = new FormData();
      payload.append("_subject", buildSubject(kind, values));
      payload.append("_template", "table");
      payload.append("_captcha", "false");
      payload.append("_replyto", values.email);
      payload.append("Form", formTitles[kind]);
      payload.append("Reference", ref);
      for (const rule of formRules[kind]) {
        if (rule.name === "consent") continue;
        const v = values[rule.name];
        if (v) payload.append(rule.label, displayValue(kind, rule.name, v));
      }
      payload.append("Privacy consent", "Yes");
      if (file) payload.append("attachment", file, file.name);

      setStatus("submitting");
      setMessage("");
      try {
        const res = await fetch(ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: payload });
        const body = (await res.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
        if (res.ok && body && String(body.success) === "true") {
          setReference(ref);
          setStatus("success");
          formEl.reset();
          return;
        }
        setMessage(body?.message ? `${body.message} ${FALLBACK}` : `We could not send your submission. ${FALLBACK}`);
        setStatus("error");
      } catch {
        setMessage(`Network error. ${FALLBACK}`);
        setStatus("error");
      }
    },
    [kind],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setErrors({});
    setMessage("");
    setReference("");
    startedAt.current = Date.now();
  }, []);

  return { status, errors, message, reference, onSubmit, reset };
}
