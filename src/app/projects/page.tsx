import Link from "next/link";
import { site } from "@/config/site";
import { publishedProjects } from "@/config/projects";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/ui/Icon";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects completed and in progress by PURE FUEL SOLUTION, LLC, including U.S. Navy fuel tank replacement and municipal fuel polishing and tank refurbishment work.",
  path: "/projects",
});

export default function ProjectsPage() {
  const customerTypes = Array.from(new Set(publishedProjects.map((p) => p.customerType)));

  return (
    <>
      <PageHero
        kicker="Projects"
        title="Project References"
        intro="Fuel infrastructure, fuel quality, and emergency power work for federal and municipal customers."
        image="/images/fuel-storage-tanks"
        imageAlt="Aboveground fuel storage tanks (representative image)"
      />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="Portfolio"
              title="Selected Projects"
              intro="Generator, fuel system, and fuel quality projects for federal and municipal customers. Reference contacts are available to contracting officers on request."
            />
            <div className="flex flex-wrap gap-2">
              {customerTypes.map((t) => (
                <span key={t} className="border border-navy px-3 py-1 font-mono text-xs uppercase tracking-wider text-navy">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publishedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-5 border border-line bg-mist p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <Icon name="clipboard" className="mt-1 h-6 w-6 shrink-0 text-orange-700" />
              <div>
                <p className="font-display text-2xl font-semibold uppercase text-navy">Need references for an evaluation?</p>
                <p className="mt-1 text-slate">
                  Contracting officers may request reference contacts for evaluation purposes.
                </p>
              </div>
            </div>
            <Link href="/contact?type=government-rfq#inquiry" className="btn btn-dark shrink-0">
              Request References
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Add Your Project to Our Record"
        text={`${site.shortName} is ready to support your next generator, fuel system, or equipment procurement requirement.`}
      />
    </>
  );
}
