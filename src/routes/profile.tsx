import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { Bookmark, MapPinned, Bell, CreditCard, LifeBuoy, ChevronRight, LogIn } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile · Beyond The Loop Namibia" },
      {
        name: "description",
        content: "Your saved routes, itineraries and account for Beyond The Loop Namibia.",
      },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="Profile"
        title="Your traveller."
        intro="Sign in to save routes, sync itineraries and access offline route files on the road."
      />

      <div className="container-wide mt-10 grid gap-8 md:grid-cols-12">
        <section className="md:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-border bg-[color:var(--night)] p-6 text-[color:var(--bone)] md:p-8">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/10 font-display text-xl">
                BT
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Guest traveller
                </p>
                <p className="truncate font-display text-2xl">Welcome back.</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70">
              Create an account to hold provisional bookings for 72 hours, sync your route files,
              and access on-trip support.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--bone)] px-5 py-2.5 text-sm font-medium text-[color:var(--night)]">
              <LogIn className="h-4 w-4" /> Sign in
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { k: "Saved", v: 4 },
              { k: "Routes", v: 2 },
              { k: "Trips", v: 0 },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card p-4 text-center">
                <p className="font-display text-2xl">{s.v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="md:col-span-7">
          <ul className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {[
              {
                Icon: Bookmark,
                t: "Saved experiences",
                s: "Dark Frontier, Damaraland walks and more",
              },
              { Icon: MapPinned, t: "My routes", s: "2 route files ready to download" },
              { Icon: Bell, t: "Notifications", s: "Trip updates, moon calendar, price watches" },
              { Icon: CreditCard, t: "Payments", s: "Cards, invoices and provisional holds" },
              { Icon: LifeBuoy, t: "On-trip support", s: "24/7 Windhoek line + sat coverage" },
            ].map(({ Icon, t, s }) => (
              <li key={t}>
                <button className="flex w-full items-center gap-4 p-5 text-left hover:bg-secondary/60">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-foreground/80">
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{t}</span>
                    <span className="mt-0.5 block truncate text-[12px] text-muted-foreground">
                      {s}
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-3xl border border-border bg-[color:var(--sand)] p-6">
            <p className="eyebrow">Operators & lodges</p>
            <p className="mt-2 font-display text-2xl leading-snug">Run experiences in Namibia?</p>
            <Link
              to="/partner"
              className="mt-4 inline-flex text-sm font-medium underline underline-offset-4"
            >
              Apply to become a partner →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
