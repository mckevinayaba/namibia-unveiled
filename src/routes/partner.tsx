import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { Check } from "lucide-react";
import camp from "@/assets/stay-camp.jpg";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner with us · Beyond The Loop Namibia" },
      {
        name: "description",
        content:
          "Bring your lodge, conservancy or experience onto a Namibian travel platform designed for quality over volume.",
      },
    ],
  }),
  component: Partner,
});

function Partner() {
  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="Partner with us"
        title="Built for the operators doing it quietly right."
        intro="Beyond The Loop is a curated platform. We work with a small number of lodges, conservancies and specialist guides across Namibia — chosen for craft, not for volume."
      />

      <div className="container-wide mt-12 grid gap-10 md:grid-cols-12">
        <section className="md:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={camp}
              alt="Namibian desert camp at blue hour"
              className="h-72 w-full object-cover md:h-96"
              loading="lazy"
            />
          </div>

          <div className="mt-8 grid gap-4">
            {[
              {
                t: "Curated distribution",
                b: "You share a platform with a small number of aligned partners — never a marketplace race to the bottom.",
              },
              {
                t: "Fair, transparent economics",
                b: "Flat commercial terms. Direct payment rails. Community partners are paid first, not last.",
              },
              {
                t: "Editorial storytelling",
                b: "In-house photography, writing and route mapping — you get the story you deserve.",
              },
              {
                t: "Admin, not overhead",
                b: "Booking flows, guest comms and reporting handled through one dashboard, on your schedule.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]/20 text-[color:var(--clay)]">
                  <Check className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-display text-lg">{x.t}</p>
                  <p className="mt-1 text-[14px] text-muted-foreground">{x.b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="md:col-span-5">
          <PartnerForm />
        </aside>
      </div>
    </div>
  );
}
