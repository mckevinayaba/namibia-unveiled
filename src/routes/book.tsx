import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { CalendarCheck, Users, PenLine, ShieldCheck } from "lucide-react";

import { BookingForm } from "@/components/forms/BookingForm";
import { Footer } from "@/components/sections/Footer";

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
          "Request a considered Namibia itinerary — dates, travellers, and the kind of trip you're picturing. A specialist responds within one working day.",
      },
    ],
  }),
  component: Book,
});

const steps = [
  {
    Icon: PenLine,
    t: "Draft in a day",
    b: "A first itinerary with routes, camps and rough pricing — written by a specialist, never templated.",
  },
  {
    Icon: Users,
    t: "One point of contact",
    b: "You speak with the same person from the first call through to the drive home.",
  },
  {
    Icon: CalendarCheck,
    t: "Confirm when ready",
    b: "We hold provisional bookings for seventy-two hours while you decide.",
  },
  {
    Icon: ShieldCheck,
    t: "Safety, quietly built in",
    b: "Sat comms, printed route files, and a 24/7 Windhoek line for the road.",
  },
];

function Book() {
  const { interest } = Route.useSearch();

  return (
    <div className="relative isolate overflow-hidden">
      {/* Atmospheric background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 82% 0%, color-mix(in oklab, var(--sand-2) 55%, transparent) 0%, transparent 65%)," +
            "radial-gradient(50% 40% at 8% 12%, color-mix(in oklab, var(--sand) 70%, transparent) 0%, transparent 70%)," +
            "linear-gradient(to bottom, var(--bone) 0%, color-mix(in oklab, var(--sand) 40%, var(--bone)) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* HERO */}
      <section className="container-wide pt-14 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7 md:pt-6">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-[color:var(--clay)]" />
              <p className="text-[10.5px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
                Book · Private consultation
              </p>
            </div>
            <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.02] tracking-tight text-foreground md:text-[4.6rem]">
              Tell us what quiet
              <br className="hidden md:block" /> looks like to you.
            </h1>
            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-muted-foreground md:text-[17px]">
              Share a few details — dates, travellers, the kind of trip you're picturing. A
              specialist in Windhoek replies within one working day with a considered first draft.
              Never a template.
            </p>

            {/* Trust strip */}
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-y border-border/70 py-6">
              {[
                { k: "Reply", v: "≤ 24h" },
                { k: "Card required", v: "No" },
                { k: "Hold", v: "72h" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {item.k}
                  </dt>
                  <dd className="mt-2 font-display text-2xl text-foreground">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Aside preview on desktop */}
          <div className="hidden md:col-span-5 md:block md:pt-2">
            <figure className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[36px] bg-[color:var(--sand-2)]/40 blur-2xl"
              />
              <blockquote className="rounded-[28px] border border-border/70 bg-[color:var(--bone)]/70 p-8 backdrop-blur-sm md:p-10">
                <p className="font-display text-[22px] leading-[1.35] text-foreground md:text-[26px]">
                  "They read what we <em className="not-italic text-[color:var(--clay)]">didn't</em>{" "}
                  write in the form — and built the trip around it."
                </p>
                <figcaption className="mt-6 flex items-center gap-3 text-[12px] tracking-wide text-muted-foreground">
                  <span className="h-px w-6 bg-[color:var(--clay)]" />
                  A traveller · Damaraland, September
                </figcaption>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="container-wide mt-16 md:mt-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <BookingForm initialInterest={interest} />
          </div>

          <aside className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                How it works
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-[2.4rem]">
                A quiet, considered process.
              </h2>

              <ol className="mt-10">
                {steps.map((s, i) => {
                  const Icon = s.Icon;
                  return (
                    <li
                      key={s.t}
                      className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-t border-border/70 py-6 last:border-b"
                    >
                      <span className="font-display text-[13px] tracking-[0.18em] text-[color:var(--clay)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-start gap-3">
                        <Icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--clay)]"
                          strokeWidth={1.6}
                        />
                        <p className="font-display text-[19px] leading-tight text-foreground">
                          {s.t}
                        </p>
                      </div>
                      <span aria-hidden />
                      <p className="mt-1 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                        {s.b}
                      </p>
                    </li>
                  );
                })}
              </ol>

              <p className="mt-10 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
                Working alongside operators, lodges and conservancies across Damaraland, NamibRand,
                the Kaokoveld and beyond.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <div className="h-24 md:h-32" />
      <Footer />
    </div>
  );
}
