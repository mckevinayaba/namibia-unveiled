import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <header
      className={`container-wide fade-up pt-8 md:pt-14 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="mt-3 max-w-3xl font-display text-[2.4rem] leading-[1.02] tracking-tight text-foreground md:text-6xl">
        {title}
      </h1>
      {intro ? (
        <p className={`mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base ${align === "center" ? "mx-auto" : ""}`}>
          {intro}
        </p>
      ) : null}
      <div className="hairline mt-8" />
    </header>
  );
}
