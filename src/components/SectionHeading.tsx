import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export function SectionHeading({ kicker, title, intro, tone = "light", align = "left", as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  const dark = tone === "dark";
  return (
    <div className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`kicker ${dark ? "kicker-light" : ""}`}>{kicker}</p>
      <Tag className={`mt-4 text-4xl uppercase sm:text-5xl ${dark ? "text-white" : "text-navy"}`}>{title}</Tag>
      {intro ? (
        <div className={`mt-5 text-lg ${dark ? "text-white/75" : "text-slate"}`}>{intro}</div>
      ) : null}
    </div>
  );
}
