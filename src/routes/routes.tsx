import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { routes } from "@/lib/mock-data";
import { ArrowUpRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/routes")({
  head: () => ({
    meta: [
      { title: "Routes · Beyond The Loop Namibia" },
      { name: "description", content: "Curated self-drive routes across Namibia — routed for silence, safety, and the country's quieter corners." },
    ],
  }),
  component: RoutesPage,
});

function RoutesPage() {
  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="Routes"
        title="Self-drive, routed with intent."
        intro="Each route is scouted, distanced honestly, and shaped around the slow corners — dark skies, community stops, and unhurried mornings."
      />

      <div className="container-wide mt-12 grid gap-8">
        {routes.map((r, i) => (
          <article
            key={r.slug}
            className="group grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-12"
          >
            <div className={`relative md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
              <img src={r.image} alt={r.title} className="h-72 w-full object-cover md:h-full" loading="lazy" />
            </div>
            <div className="flex flex-col justify-between gap-6 p-6 md:col-span-6 md:p-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {r.days} days · {r.distanceKm.toLocaleString()} km · {r.difficulty}
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{r.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{r.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {r.regions.map((reg) => (
                    <li key={reg} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-[12px]">
                      <MapPin className="h-3 w-3 text-[color:var(--clay)]" />
                      {reg}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-5">
                <p className="text-[12px] text-muted-foreground">Includes route file, fuel plan, and daylight windows.</p>
                <button className="group inline-flex items-center gap-1.5 text-sm font-medium">
                  Open route
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
