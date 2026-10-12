"use client";

import { useEffect, useState } from "react";
import { inquiryCategories } from "@/lib/forms/schema";
import { useFormSubmit } from "./useFormSubmit";
import { ConsentField, FileField, Honeypot, SelectField, TextArea, TextField } from "./fields";
import { FormMessage, FormSuccess, SubmitButton } from "./FormStatus";

type ContactFormProps = {
  /** Pre-selected inquiry type, e.g. "government-rfq" */
  defaultCategory?: string;
  /** Unique prefix when more than one form is on a page */
  idPrefix?: string;
  submitLabel?: string;
};

export function ContactForm({ defaultCategory = "", idPrefix = "contact", submitLabel = "Send Inquiry" }: ContactFormProps) {
  const { status, errors, message, reference, onSubmit, reset } = useFormSubmit("contact");
  const [category, setCategory] = useState<string>(defaultCategory);

  // Allow links such as /contact?type=government-rfq to pre-select the inquiry type.
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type && inquiryCategories.some((c) => c.value === type)) setCategory(type);
  }, []);

  if (status === "success") {
    return (
      <FormSuccess
        reference={reference}
        onReset={reset}
        text="Thank you for contacting Pure Fuel Solution. Our team will review your inquiry and respond by email."
      />
    );
  }

  const id = (n: string) => `${idPrefix}-${n}`;
  const isRfq = category === "government-rfq";

  return (
    <form noValidate onSubmit={onSubmit} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id={id("name")} name="name" label="Full name" required autoComplete="name" maxLength={100} error={errors.name} />
        <TextField id={id("organization")} name="organization" label="Agency or organization" autoComplete="organization" maxLength={150} error={errors.organization} />
        <TextField id={id("email")} name="email" type="email" label="Email" required autoComplete="email" maxLength={160} error={errors.email} />
        <TextField id={id("phone")} name="phone" type="tel" label="Phone" autoComplete="tel" maxLength={40} error={errors.phone} />
        <SelectField
          id={id("category")}
          name="category"
          label="Inquiry type"
          required
          options={inquiryCategories}
          value={category}
          onChange={setCategory}
          error={errors.category}
        />
        <TextField
          id={id("solicitation")}
          name="solicitation"
          label={isRfq ? "Solicitation / RFQ number" : "Solicitation / reference number"}
          maxLength={100}
          error={errors.solicitation}
          hint={isRfq ? "e.g. the SAM.gov notice ID or agency RFQ number" : undefined}
        />
      </div>
      <TextArea
        id={id("message")}
        name="message"
        label={isRfq ? "Requirement summary" : "Message"}
        required
        maxLength={5000}
        rows={6}
        error={errors.message}
        hint={isRfq ? "Include scope, location, quantities, and the response due date." : undefined}
      />
      <FileField id={id("attachment")} name="attachment" label="Attachment (RFQ, SOW, or specifications)" error={errors.attachment} />
      <ConsentField id={id("consent")} error={errors.consent} />
      <FormMessage message={status === "error" ? message : ""} />
      <SubmitButton submitting={status === "submitting"} label={submitLabel} />
    </form>
  );
}
