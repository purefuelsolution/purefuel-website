import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteFab } from "@/components/QuoteFab";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} | Government Contracting & Infrastructure Services`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "PURE FUEL SOLUTION, LLC supports federal, state, and local agencies with generator systems, fuel infrastructure, fuel polishing, equipment procurement, and specialized government contracting. CAGE 20UN0 · UEI D6XSN3ESNPS4.",
  applicationName: site.shortName,
  keywords: [
    "government contractor",
    "generator systems",
    "emergency power",
    "fuel tank replacement",
    "aboveground storage tanks",
    "fuel polishing",
    "equipment procurement",
    "federal contracting",
    "CAGE 20UN0",
    "nationwide government contractor",
  ],
  openGraph: {
    type: "website",
    siteName: site.legalName,
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.legalName }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/brand/icon-512.png", type: "image/png", sizes: "512x512" }],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#102033",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-orange focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <QuoteFab />
        <OrganizationJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
