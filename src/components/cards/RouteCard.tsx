import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { Route } from "@/types/routes";

export function RouteCard({ route, reverse = false }: { route: Route; reverse?: boolean }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-12">
      <div className={`relative md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        <img
          src={route.image}
          alt={route.title}
          className="h-72 w-full object-cover md:h-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between gap-6 p-6 md:col-span-6 md:p-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {route.days} · {route.distance} · {route.difficulty}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{route.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{route.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {route.regions.map((reg) => (
              <li
                key={reg}
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-[12px]"
              >
                <MapPin className="h-3 w-3 text-[color:var(--clay)]" />
                {reg}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-5">
          <p className="text-[12px] text-muted-foreground">
            Includes route file, fuel plan, and daylight windows.
          </p>
          <Link
            to="/routes/$slug"
            params={{ slug: route.slug }}
            className="group inline-flex items-center gap-1.5 text-sm font-medium"
          >
            Open route
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
