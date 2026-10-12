import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How PURE FUEL SOLUTION, LLC collects, uses, and protects information submitted through this website.",
  path: "/privacy-policy",
});

const EFFECTIVE_DATE = "October 12, 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x max-w-3xl">
        <p className="kicker">Legal</p>
        <h1 className="mt-4 text-5xl uppercase text-navy sm:text-6xl">Privacy Policy</h1>
        <p className="mt-3 font-mono text-sm text-slate">Effective {EFFECTIVE_DATE}</p>

        <div className="prose-legal mt-8">
          <p>
            This Privacy Policy explains how {site.legalName} (&ldquo;Pure Fuel Solution,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) collects, uses, and protects information submitted through this website.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information you choose to provide through our forms, which may include:</p>
          <ul>
            <li>Name, organization, email address, and phone number</li>
            <li>Inquiry details, solicitation numbers, and messages</li>
            <li>Company information such as trade, service area, license, and insurance details</li>
            <li>Documents you upload, such as RFQs, statements of work, or capability statements</li>
          </ul>
          <p>
            If website analytics are enabled, we may also collect standard usage information (such as pages visited,
            browser type, and approximate location derived from IP address) through Google Analytics.
          </p>

          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to inquiries, requests for quotes, and teaming requests</li>
            <li>To evaluate vendors and subcontractors for current and future projects</li>
            <li>To prepare quotes, proposals, and contract documentation</li>
            <li>To maintain the security and performance of this website</li>
          </ul>
          <p>We do not sell personal information.</p>

          <h2>How Information Is Shared</h2>
          <p>
            Form submissions are delivered to our team by email through FormSubmit (formsubmit.co), a third-party form
            delivery service. We may
            share information with subcontractors, suppliers, or prime contractors when needed to respond to your
            request, and we may disclose information when required by law or contract.
          </p>

          <h2>Uploaded Files</h2>
          <p>
            Uploads are limited to PDF, DOC, and DOCX files up to 4 MB. Files are checked for type and size and are
            delivered to our team as email attachments through our form delivery service; they are not stored on this
            website&apos;s servers. Do not submit
            classified information, Controlled Unclassified Information (CUI), export-controlled data, or financial
            account numbers through this website.
          </p>

          <h2>Data Security</h2>
          <p>
            This website is served over encrypted HTTPS connections. We use reasonable administrative and technical
            safeguards to protect information; however, no method of transmission over the internet is completely
            secure.
          </p>

          <h2>Retention</h2>
          <p>
            We retain submitted information for as long as needed to respond to your request, evaluate business
            relationships, and meet legal, contractual, and recordkeeping obligations.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may ask us to update or delete information you submitted by emailing{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. You can limit analytics collection by
            using browser privacy settings or the Google Analytics opt-out browser add-on.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>This website is intended for businesses and government organizations and is not directed to children.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this policy from time to time. The effective date above reflects the latest version.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy may be sent to <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
