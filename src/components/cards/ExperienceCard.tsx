import { Link } from "@tanstack/react-router";

import type { Experience } from "@/types/experiences";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link
      to="/experiences/$slug"
      params={{ slug: experience.slug }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[0_30px_80px_-40px_rgba(20,22,28,0.35)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[color:var(--night)]/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
          {experience.tag}
        </span>
      </div>
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {experience.region}
        </p>
        <h3 className="mt-1 font-display text-lg leading-snug">{experience.title}</h3>
        <p className="mt-2 line-clamp-2 text-[13px] text-muted-foreground">{experience.blurb}</p>
        <div className="mt-4 flex items-center justify-between text-[12px]">
          <span className="text-muted-foreground">{experience.duration}</span>
          <span className="font-medium">{experience.price}</span>
        </div>
      </div>
    </Link>
  );
}
