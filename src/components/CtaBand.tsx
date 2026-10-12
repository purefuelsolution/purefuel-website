import Link from "next/link";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Looking for a Reliable Government Contracting Partner?",
  text = "Contact our team to discuss an upcoming requirement, request a quote, or receive our capability statement.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-orange text-navy">
      <div
        className="absolute inset-y-0 right-0 hidden w-1/3 bg-[repeating-linear-gradient(135deg,rgba(16,32,51,0.07)_0_14px,transparent_14px_28px)] lg:block"
        aria-hidden="true"
      />
      <div className="container-x relative flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-4xl uppercase sm:text-5xl">{title}</h2>
          <p className="mt-3 text-lg text-navy/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-dark">
            Contact Our Team
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
          <a href={site.capabilityStatement.href} className="btn btn-outline-dark" download>
            <Icon name="download" className="h-4 w-4" />
            Capability Statement
          </a>
        </div>
      </div>
    </section>
  );
}
