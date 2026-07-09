import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { experiences } from "@/lib/mock-data";
import { Search, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover · Beyond The Loop Namibia" },
      { name: "description", content: "Curated experiences beyond the standard Namibia loop — dark skies, culture, silence and quiet stays." },
    ],
  }),
  component: Discover,
});

const filters = ["All", "Dark Frontier", "Community", "Culture", "Stay", "Self-drive"];

function Discover() {
  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="Discover"
        title="Namibia, unhurried."
        intro="A curated shelf of experiences from operators, conservancies and communities that work quietly across the country."
      />

      <div className="container-wide mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search regions, tags, moods…"
            className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <div className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 md:mx-0 md:overflow-visible">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[12px] transition ${
                i === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-foreground hover:border-foreground/50"
              }`}
            >
              {f}
            </button>
          ))}
          <button className="hidden shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[12px] md:inline-flex">
            <SlidersHorizontal className="h-3.5 w-3.5" /> More
          </button>
        </div>
      </div>

      <section className="container-wide mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.concat(experiences).slice(0, 9).map((x, i) => (
          <article key={x.slug + i} className="group overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src={x.image} alt={x.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
              <span className="absolute left-3 top-3 rounded-full bg-[color:var(--night)]/75 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                {x.tag}
              </span>
            </div>
            <div className="p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{x.region}</p>
              <h3 className="mt-1 font-display text-xl leading-snug">{x.title}</h3>
              <p className="mt-2 line-clamp-2 text-[13px] text-muted-foreground">{x.blurb}</p>
              <div className="mt-4 flex items-center justify-between text-[12px]">
                <span className="text-muted-foreground">{x.duration}</span>
                <span className="font-medium">{x.price}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
