import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { RouteCard } from "@/components/cards/RouteCard";
import { routes } from "@/data/routes";

export const Route = createFileRoute("/routes/")({
  head: () => ({
    meta: [
      { title: "Routes · Beyond The Loop Namibia" },
      {
        name: "description",
        content:
          "Curated self-drive routes across Namibia — routed for silence, safety, and the country's quieter corners.",
      },
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
          <RouteCard key={r.slug} route={r} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
