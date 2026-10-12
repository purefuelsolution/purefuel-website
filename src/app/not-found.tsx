import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="grid-bg bg-navy py-28 text-white">
      <div className="container-x max-w-2xl text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-orange">ERROR 404</p>
        <h1 className="mt-4 text-5xl uppercase sm:text-6xl">Page Not Found</h1>
        <p className="mt-4 text-lg text-white/75">The page you requested does not exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Return Home
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-outline-light">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
