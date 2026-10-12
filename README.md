# PURE FUEL SOLUTION, LLC — Website

Next.js + Tailwind website. **No settings, API keys, or environment variables are needed.**

---

## Put it online (about 10 minutes)

### 1. Upload to GitHub
1. Go to github.com → **New repository** → name it `purefuel-website` → **Create repository**.
2. Click **uploading an existing file**.
3. Unzip this folder on your computer, open the `purefuel` folder, select **everything inside it**, and drag it onto the GitHub page.
   (Upload the contents so `package.json` sits at the top level of the repository, not inside a subfolder.)
4. Click **Commit changes**.

### 2. Deploy on Vercel
1. Go to vercel.com → **Add New… → Project**.
2. Pick the `purefuel-website` repository → **Import**.
3. Leave every setting as it is → **Deploy**.

That's it. Vercel gives you a live link (like `purefuel-website.vercel.app`).

### 3. Turn on the forms (one click, one time)
1. On the live site, open **Contact** and send yourself a test message.
2. A message from **FormSubmit** titled "Activate Form" arrives at **admin@purefuelsolution.com**. Click **Activate Form**.
3. Done. Every form on the site (Contact, RFQ, Vendor Registration, Teaming) now emails admin@purefuelsolution.com, with any uploaded file attached. Hitting **Reply** answers the person who submitted it.

### 4. Connect your domain
Vercel → your project → **Settings → Domains** → add `purefuelsolution.com` and `www.purefuelsolution.com`. Vercel shows the DNS records to enter at your domain registrar (replace the old Framer records). HTTPS is automatic.

---

## Making changes later

Edit files directly on GitHub (click the file → pencil icon → **Commit changes**). Vercel redeploys automatically within a minute.

| To change… | Edit this file |
|---|---|
| Email, phone, address, leadership, SAM details, Google Analytics | `src/config/site.ts` |
| Projects (add, edit, hide) | `src/config/projects.ts` |
| NAICS codes | `src/config/naics.ts` |
| Capability lists | `src/config/capabilities.ts` |
| Capability statement PDF | replace `public/documents/pure-fuel-solution-capability-statement.pdf` (same filename) |
| Photos | replace files in `public/images/` (same filenames) |

- **Phone or address:** they're hidden until you fill them in at `contact.phone` / `contact.address` in `site.ts`.
- **Add a project:** copy one block in `projects.ts`, change the text, keep `published: true`. Set `published: false` to hide one.
- **Google Analytics (optional):** paste your ID (e.g. `"G-ABC123XYZ"`) into `googleAnalyticsId` in `site.ts`.

---

## Technical notes

- Next.js 15, React 19, Tailwind CSS v4, TypeScript. Vercel detects everything automatically.
- Forms are sent directly from the browser to FormSubmit (free, no account). The forms check every field and only accept PDF/DOC/DOCX uploads up to 4 MB. A hidden spam trap and a minimum fill time block bots.
- Build safety: type and lint checks never block a deployment (`next.config.mjs`).
- `/past-performance` automatically redirects to `/projects`.
- Search engines: each page has its own title and description. A sitemap (`/sitemap.xml`), `robots.txt`, link-preview image and business structured data (CAGE/UEI) are included.
- Security headers (HTTPS-only, no framing, no MIME sniffing) are set in `next.config.mjs`.
- Run locally (optional): `npm install` then `npm run dev` → http://localhost:3000
