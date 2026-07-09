import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowUpRight,
  MapPin,
  Clock,
  Gauge,
  Sun,
  Compass,
  Fuel,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { PageHeader } from "@/components/sections/PageHeader";
import { routes } from "@/data/routes";
import type { Route as RouteType, SuggestedStop, PartnerPlaceholder } from "@/types/routes";


export const Route = createFileRoute("/routes/$slug")({
  loader: ({ params }) => {
    const route = routes.find((r) => r.slug === params.slug);
    if (!route) throw notFound();
    return route;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · Beyond The Loop Namibia` },
          { name: "description", content: loaderData.summary },
        ]
      : [],
  }),
  component: RouteDetailPage,
});

function RouteDetailPage() {
  const route = Route.useLoaderData() as RouteType;

  return (
    <div className="pb-8">
      <PageHeader eyebrow={`Routes · ${route.region}`} title={route.title} intro={route.summary} />

      <div className="container-wide mt-8 overflow-hidden rounded-3xl border border-border">
        <img
          src={route.image}
          alt={route.title}
          className="h-80 w-full object-cover md:h-[28rem]"
          loading="lazy"
        />
      </div>

      <div className="container-wide mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FactCard Icon={Clock} label="Duration" value={route.days} />
        <FactCard Icon={MapPin} label="Distance" value={route.distance} />
        <FactCard Icon={Gauge} label="Difficulty" value={route.difficulty} />
        <FactCard Icon={Sun} label="Best season" value={route.bestSeason} />
      </div>

      <div className="container-wide mt-12 grid gap-8 md:grid-cols-12">
        <section className="md:col-span-7">
          <div className="grid gap-6">
            <InfoBlock Icon={Compass} title="Driving rhythm" body={route.drivingRhythm} />
            <InfoBlock Icon={Fuel} title="Fuel & rest notes" body={route.fuelAndRestNotes} />
            <InfoBlock Icon={ShieldCheck} title="Safety notes" body={route.safetyNotes} />
          </div>

          <div className="mt-10">
            <p className="eyebrow">Experience highlights</p>
            <ul className="mt-4 grid gap-3">
              {route.highlights.map((h: string) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-[14px]"
                >
                  <Sparkles
                    className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--clay)]"
                    strokeWidth={1.7}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="eyebrow">Suggested stops</p>
            <ol className="mt-4 grid gap-3">
              {route.suggestedStops.map((stop: SuggestedStop, i: number) => (
                <li
                  key={stop.name}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4"
                >
                  <span className="font-display text-xl text-[color:var(--clay)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium">{stop.name}</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">{stop.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <aside className="md:col-span-5">
          <div className="rounded-3xl border border-border bg-[color:var(--sand)] p-6 md:p-8">
            <p className="eyebrow">Regions on this route</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {route.regions.map((reg: string) => (
                <li
                  key={reg}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-[12px]"
                >
                  <MapPin className="h-3 w-3 text-[color:var(--clay)]" />
                  {reg}
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-8">Partners on this route</p>
            <div className="mt-4 grid gap-3">
              {route.partnerPlaceholders.map((p: PartnerPlaceholder, i: number) => (
                <div
                  key={i}
                  className="rounded-2xl border border-dashed border-border bg-background/60 p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.type}
                  </p>
                  <p className="mt-1 text-[13px] text-muted-foreground">{p.note}</p>
                </div>
              ))}
            </div>

            <Link
              to="/routes/request"
              search={{ route: route.title }}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Request this route
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FactCard({ Icon, label, value }: { Icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Icon className="h-4 w-4 text-[color:var(--clay)]" strokeWidth={1.6} />
      <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-lg leading-snug">{value}</p>
    </div>
  );
}

function InfoBlock({ Icon, title, body }: { Icon: typeof Clock; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-[color:var(--clay)]" strokeWidth={1.6} />
        <p className="font-display text-lg">{title}</p>
      </div>
      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
