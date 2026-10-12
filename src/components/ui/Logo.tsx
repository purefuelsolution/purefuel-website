import Link from "next/link";
import { site } from "@/config/site";

/** Official PURE FUEL SOLUTION logo lockup (supplied artwork, unmodified). */
export function Logo({ className = "h-10 w-auto", asLink = true }: { className?: string; asLink?: boolean }) {
  const img = (
    <img
      src="/brand/pfs-logo-full.png"
      alt={`${site.legalName} — ${site.logoTagline}`}
      width={1200}
      height={198}
      className={className}
    />
  );
  if (!asLink) return img;
  return (
    <Link href="/" aria-label={`${site.shortName} — Home`} className="inline-flex shrink-0 items-center">
      {img}
    </Link>
  );
}
