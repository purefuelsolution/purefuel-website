import Script from "next/script";
import { site } from "@/config/site";

/**
 * Google Analytics 4. Renders nothing unless googleAnalyticsId is set in src/config/site.ts.
 * IP anonymization is on by default in GA4.
 */
export function Analytics() {
  const id = site.googleAnalyticsId;
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
