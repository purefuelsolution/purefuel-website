"use client";

import { useFormSubmit } from "./useFormSubmit";
import { ConsentField, FileField, Honeypot, TextArea, TextField } from "./fields";
import { FormMessage, FormSuccess, SubmitButton } from "./FormStatus";

export function VendorForm() {
  const { status, errors, message, reference, onSubmit, reset } = useFormSubmit("vendor");
  const id = (n: string) => `vendor-${n}`;

  if (status === "success") {
    return (
      <FormSuccess
        reference={reference}
        onReset={reset}
        text="Thank you for registering. Your information has been added for review, and we will contact you when a project matches your capabilities."
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id={id("company")} name="companyName" label="Company name" required autoComplete="organization" maxLength={150} error={errors.companyName} />
        <TextField id={id("contact")} name="contactPerson" label="Contact person" required autoComplete="name" maxLength={100} error={errors.contactPerson} />
        <TextField id={id("email")} name="email" type="email" label="Email" required autoComplete="email" maxLength={160} error={errors.email} />
        <TextField id={id("phone")} name="phone" type="tel" label="Phone" required autoComplete="tel" maxLength={40} error={errors.phone} />
        <TextField id={id("state")} name="state" label="State" required autoComplete="address-level1" maxLength={60} error={errors.state} />
        <TextField
          id={id("area")}
          name="serviceArea"
          label="Service area"
          required
          maxLength={300}
          error={errors.serviceArea}
          hint="Counties, metro areas, states, or nationwide"
        />
        <TextField
          id={id("trade")}
          name="trade"
          label="Trade or specialty"
          required
          maxLength={200}
          error={errors.trade}
          hint="e.g. electrical, generator service, tank coatings, fuel polishing"
        />
        <TextField id={id("uei")} name="uei" label="UEI / CAGE (if registered)" maxLength={60} error={errors.uei} />
      </div>
      <TextArea
        id={id("license")}
        name="license"
        label="Contractor license information"
        rows={2}
        maxLength={300}
        error={errors.license}
        hint="License type, number, and issuing state, if applicable"
      />
      <TextArea
        id={id("insurance")}
        name="insurance"
        label="Insurance information"
        rows={3}
        maxLength={600}
        error={errors.insurance}
        hint="Carrier and coverage limits (general liability, auto, workers' compensation). Do not upload policy numbers."
      />
      <FileField id={id("capability")} name="capabilityStatement" label="Capability statement" error={errors.capabilityStatement} />
      <TextArea id={id("comments")} name="comments" label="Additional comments" rows={4} maxLength={3000} error={errors.comments} />
      <ConsentField id={id("consent")} error={errors.consent} />
      <FormMessage message={status === "error" ? message : ""} />
      <SubmitButton submitting={status === "submitting"} label="Submit Registration" />
    </form>
  );
}
