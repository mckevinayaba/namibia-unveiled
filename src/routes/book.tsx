import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CalendarCheck, Users, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book · Beyond The Loop Namibia" },
      { name: "description", content: "Request a considered itinerary — dates, travellers, and the kind of trip you're picturing." },
    ],
  }),
  component: Book,
});

function Book() {
  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="Book"
        title="Tell us what quiet looks like to you."
        intro="Share a few details and our Windhoek team responds within one working day with a considered draft — never a template."
      />

      <div className="container-wide mt-12 grid gap-10 md:grid-cols-12">
        <form className="md:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
            <div className="grid gap-5">
              <Field label="Your name" placeholder="Full name" />
              <Field label="Email" type="email" placeholder="you@domain.com" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Arrive" type="date" />
                <Field label="Depart" type="date" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Travellers" type="number" placeholder="2" />
                <Field label="Budget (N$ pp)" placeholder="35,000+" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  What kind of trip?
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Dark skies", "Self-drive", "Culture", "Wildlife", "Photography", "Slow luxury"].map((t) => (
                    <button
                      type="button"
                      key={t}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-[12px] hover:border-foreground/50"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Notes</label>
                <textarea
                  rows={4}
                  placeholder="Anything we should know — pace, mobility, dietary, dream nights."
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Request an itinerary
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                No card required. A specialist replies within one working day.
              </p>
            </div>
          </div>
        </form>

        <aside className="md:col-span-5">
          <div className="rounded-3xl border border-border bg-[color:var(--sand)] p-6 md:p-8">
            <p className="eyebrow">How it works</p>
            <ul className="mt-6 space-y-6">
              {[
                { Icon: Sparkles, t: "Draft in a day", b: "A first itinerary with routes, camps and rough pricing — human, not templated." },
                { Icon: Users, t: "One point of contact", b: "You speak to the same specialist from first call to the drive home." },
                { Icon: CalendarCheck, t: "Confirm when ready", b: "We hold provisional bookings for 72 hours while you decide." },
                { Icon: ShieldCheck, t: "Safety, quietly built in", b: "Sat comms, route files, and a 24/7 Windhoek line on the road." },
              ].map(({ Icon, t, b }) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[color:var(--clay)]">
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="font-display text-lg leading-tight">{t}</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
