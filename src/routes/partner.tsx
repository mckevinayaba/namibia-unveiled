import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check } from "lucide-react";
import camp from "@/assets/stay-camp.jpg";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner with us · Beyond The Loop Namibia" },
      { name: "description", content: "Bring your lodge, conservancy or experience onto a Namibian travel platform designed for quality over volume." },
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
            <img src={camp} alt="Namibian desert camp at blue hour" className="h-72 w-full object-cover md:h-96" loading="lazy" />
          </div>

          <div className="mt-8 grid gap-4">
            {[
              { t: "Curated distribution", b: "You share a platform with a small number of aligned partners — never a marketplace race to the bottom." },
              { t: "Fair, transparent economics", b: "Flat commercial terms. Direct payment rails. Community partners are paid first, not last." },
              { t: "Editorial storytelling", b: "In-house photography, writing and route mapping — you get the story you deserve." },
              { t: "Admin, not overhead", b: "Booking flows, guest comms and reporting handled through one dashboard, on your schedule." },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
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
          <form className="rounded-3xl border border-border bg-[color:var(--sand)] p-6 md:p-8">
            <p className="eyebrow">Apply</p>
            <p className="mt-2 font-display text-2xl">A short introduction.</p>
            <p className="mt-2 text-[13px] text-muted-foreground">
              We read every application personally. Expect a reply within one working week.
            </p>
            <div className="mt-6 grid gap-4">
              <Field label="Operation name" placeholder="Lodge, conservancy or guide name" />
              <Field label="Region" placeholder="e.g. Damaraland, Kaokoland" />
              <Field label="Your name" />
              <Field label="Email" type="email" />
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Tell us, briefly</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
                  placeholder="Who you are, what you offer, and why it belongs off the loop."
                />
              </div>
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Submit application
              </button>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
