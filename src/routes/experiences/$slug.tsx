import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/sections/PageHeader";
import { experiences } from "@/data/experiences";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const experience = experiences.find((e) => e.slug === params.slug);
    if (!experience) throw notFound();
    return experience;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · Beyond The Loop Namibia` },
          { name: "description", content: loaderData.blurb },
        ]
      : [],
  }),
  component: ExperienceDetailPage,
});

/**
 * Minimal detail page — the full experience-detail structure (overview,
 * highlights, good-to-know) is prepared in src/types/experiences.ts
 * (ExperienceDetail) ahead of a deeper implementation.
 */
function ExperienceDetailPage() {
  const experience = Route.useLoaderData();

  return (
    <div className="pb-8">
      <PageHeader eyebrow={experience.tag} title={experience.title} intro={experience.blurb} />

      <div className="container-wide mt-8 overflow-hidden rounded-3xl border border-border">
        <img
          src={experience.image}
          alt={experience.title}
          className="h-80 w-full object-cover md:h-[28rem]"
          loading="lazy"
        />
      </div>

      <div className="container-wide mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6">
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Region</p>
            <p className="mt-1 font-display text-lg">{experience.region}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Duration
            </p>
            <p className="mt-1 font-display text-lg">{experience.duration}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Price</p>
            <p className="mt-1 font-display text-lg">{experience.price}</p>
          </div>
        </div>
        <Link
          to="/book"
          search={{ interest: experience.title }}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Enquire <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
