# Go-Live Checklist

## Setup (see README)
- [ ] Upload to GitHub
- [ ] Import into Vercel → Deploy (no settings)
- [ ] Send a test form → click **Activate Form** in the FormSubmit email at admin@purefuelsolution.com
- [ ] Connect purefuelsolution.com in Vercel → Settings → Domains

## Content to confirm (all in `src/config/`)
- [ ] **NAICS codes** (`naics.ts`): 8 candidate codes are marked "Pending verification." Check each against SAM.gov, set `verified: true`, remove any you don't hold, then set `showUnverified = false`.
- [ ] **Projects** (`projects.ts`): confirm you're cleared to name each customer. Mangonia Park and Davie show no status badge until you set `status: "completed"`.
- [ ] **Navy project:** shows "In Performance." Change it to `"completed"` when the contract closes.
- [ ] **Subcontracted vs. direct** (`capabilities.ts`): switch any service you perform yourselves to `direct`.
- [ ] **SAM.gov expiration date** (`site.ts`): currently July 28, 2027.
- [ ] **Phone / address** (`site.ts`): optional, hidden until filled in.
- [ ] **Capability statement:** replace the draft PDF with your final version (same filename), then set `isDraft: false` in `site.ts`.
- [ ] **Photos:** swap in higher-quality originals if you have them (current files show color banding), using the same filenames.

## Launch-day test
- [ ] Each form arrives at admin@purefuelsolution.com (Contact, RFQ on the Government Contracting page, Vendor Registration, Teaming)
- [ ] Capability statement downloads
- [ ] Site looks right on a phone
