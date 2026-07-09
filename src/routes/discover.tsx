import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experiences } from "@/data/experiences";
import { Search, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover · Beyond The Loop Namibia" },
      {
        name: "description",
        content:
          "Curated experiences beyond the standard Namibia loop — dark skies, culture, silence and quiet stays.",
      },
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
        {experiences
          .concat(experiences)
          .slice(0, 9)
          .map((x, i) => (
            <ExperienceCard key={x.slug + i} experience={x} />
          ))}
      </section>
    </div>
  );
}
