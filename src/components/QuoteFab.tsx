import Link from "next/link";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

/** Persistent "Request a Quote" button for small screens (desktop uses the sticky header CTA). */
export function QuoteFab() {
  return (
    <Link
      href={site.quoteHref}
      className="btn btn-primary fixed bottom-4 right-4 z-40 shadow-[0_10px_30px_-8px_rgba(10,21,34,0.55)] sm:hidden"
    >
      <Icon name="clipboard" className="h-5 w-5" />
      Request a Quote
    </Link>
  );
}
