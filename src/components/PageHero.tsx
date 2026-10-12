import type { ReactNode } from "react";
import { Photo } from "@/components/ui/Photo";

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

/** Interior page header: navy band with representative photograph. */
export function PageHero({ kicker, title, intro, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Photo
        src={image}
        alt={imageAlt}
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,#0a1522_0%,rgba(16,32,51,0.94)_38%,rgba(16,32,51,0.55)_100%)]" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <p className="kicker kicker-light hero-in">{kicker}</p>
        <h1 className="hero-in-2 mt-5 max-w-4xl text-[2.3rem] uppercase xs:text-[2.6rem] sm:text-6xl lg:text-[4.25rem]">{title}</h1>
        {intro ? <div className="hero-in-3 mt-6 max-w-2xl text-lg text-white/80">{intro}</div> : null}
        {children ? <div className="hero-in-3 mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
      <div className="h-1.5 bg-[linear-gradient(90deg,var(--color-orange)_0%,var(--color-orange)_22%,transparent_22%)]" aria-hidden="true" />
    </section>
  );
}
