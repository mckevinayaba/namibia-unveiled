import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { PageHeader } from "@/components/sections/PageHeader";
import { RouteRequestForm } from "@/components/forms/RouteRequestForm";

const searchSchema = z.object({
  route: z.string().optional(),
});

export const Route = createFileRoute("/routes/request")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Request a route · Beyond The Loop Namibia" },
      {
        name: "description",
        content:
          "Tell us how you like to travel and we'll shape a self-drive or guided route around it.",
      },
    ],
  }),
  component: RouteRequestPage,
});

function RouteRequestPage() {
  const { route } = Route.useSearch();

  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="Request a route"
        title="Tell us how you like to travel."
        intro="A few details and our team shapes a route around your pace, budget and comfort with remote roads."
      />

      <div className="container-wide mt-12 max-w-3xl">
        <RouteRequestForm initialRoute={route} />
      </div>
    </div>
  );
}
