import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { guideChapters } from "@/data/guide";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "The Guide · Beyond The Loop Namibia" },
      {
        name: "description",
        content: "A slow, honest field guide to travelling Namibia beyond the standard loop.",
      },
    ],
  }),
  component: Guide,
});

function Guide() {
  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="The Guide"
        title="A field guide, slowly written."
        intro="No lists of ten things. Just the small country-specific knowledge that makes the difference between a trip and a memory."
      />

      <div className="container-wide mt-14 grid gap-4">
        {guideChapters.map((c) => (
          <article
            key={c.n}
            className="group grid gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-12 md:p-10"
          >
            <div className="md:col-span-3">
              <p className="font-display text-4xl text-[color:var(--clay)] md:text-6xl">{c.n}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-2xl leading-tight md:text-3xl">{c.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
