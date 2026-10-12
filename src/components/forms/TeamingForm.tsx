"use client";

import { useFormSubmit } from "./useFormSubmit";
import { ConsentField, FileField, Honeypot, TextArea, TextField } from "./fields";
import { FormMessage, FormSuccess, SubmitButton } from "./FormStatus";

export function TeamingForm() {
  const { status, errors, message, reference, onSubmit, reset } = useFormSubmit("teaming");
  const id = (n: string) => `teaming-${n}`;

  if (status === "success") {
    return (
      <FormSuccess
        reference={reference}
        onReset={reset}
        text="Thank you. Our contracts team will review the opportunity and respond regarding teaming."
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id={id("prime")} name="primeCompany" label="Prime contractor company" required autoComplete="organization" maxLength={150} error={errors.primeCompany} />
        <TextField id={id("contact")} name="contactName" label="Contact name" required autoComplete="name" maxLength={100} error={errors.contactName} />
        <TextField id={id("email")} name="email" type="email" label="Email" required autoComplete="email" maxLength={160} error={errors.email} />
        <TextField id={id("phone")} name="phone" type="tel" label="Phone" autoComplete="tel" maxLength={40} error={errors.phone} />
        <TextField id={id("opportunity")} name="opportunity" label="Opportunity title" required maxLength={200} error={errors.opportunity} />
        <TextField id={id("agency")} name="agency" label="Contracting agency" maxLength={150} error={errors.agency} />
        <TextField id={id("solicitation")} name="solicitation" label="Solicitation number" maxLength={100} error={errors.solicitation} />
        <TextField id={id("due")} name="dueDate" type="date" label="Response due date" error={errors.dueDate} />
      </div>
      <TextArea
        id={id("role")}
        name="role"
        label="Requested scope for Pure Fuel Solution"
        required
        rows={5}
        maxLength={4000}
        error={errors.role}
        hint="Describe the work share, set-aside, place of performance, and any key dates."
      />
      <FileField id={id("attachment")} name="attachment" label="Solicitation or requirement documents" error={errors.attachment} />
      <ConsentField id={id("consent")} error={errors.consent} />
      <FormMessage message={status === "error" ? message : ""} />
      <SubmitButton submitting={status === "submitting"} label="Submit Teaming Request" />
    </form>
  );
}
