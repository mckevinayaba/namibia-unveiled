import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageHeader } from "@/components/sections/PageHeader";
import { BookingForm } from "@/components/forms/BookingForm";
import { CalendarCheck, Users, PenLine, ShieldCheck } from "lucide-react";

const searchSchema = z.object({
  interest: z.string().optional(),
});

export const Route = createFileRoute("/book")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book · Beyond The Loop Namibia" },
      {
        name: "description",
        content:
          "Request a considered itinerary — dates, travellers, and the kind of trip you're picturing.",
      },
    ],
  }),
  component: Book,
});

function Book() {
  const { interest } = Route.useSearch();

  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="Book"
        title="Tell us what quiet looks like to you."
        intro="Share a few details and our Windhoek team responds within one working day with a considered draft — never a template."
      />

      <div className="container-wide mt-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <BookingForm initialInterest={interest} />
        </div>

        <aside className="md:col-span-5">
          <div className="rounded-3xl border border-border bg-[color:var(--sand)] p-6 md:p-8">
            <p className="eyebrow">How it works</p>
            <ul className="mt-6 space-y-6">
              {[
                {
                  Icon: PenLine,
                  t: "Draft in a day",
                  b: "A first itinerary with routes, camps and rough pricing — human, not templated.",
                },
                {
                  Icon: Users,
                  t: "One point of contact",
                  b: "You speak to the same specialist from first call to the drive home.",
                },
                {
                  Icon: CalendarCheck,
                  t: "Confirm when ready",
                  b: "We hold provisional bookings for 72 hours while you decide.",
                },
                {
                  Icon: ShieldCheck,
                  t: "Safety, quietly built in",
                  b: "Sat comms, route files, and a 24/7 Windhoek line on the road.",
                },
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
