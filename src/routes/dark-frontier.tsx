import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Moon, Telescope, Compass } from "lucide-react";

import darkFrontier from "@/assets/dark-frontier.jpg";
import { darkFrontierProducts } from "@/data/products";
import { DarkFrontierProductCard } from "@/components/cards/DarkFrontierProductCard";

export const Route = createFileRoute("/dark-frontier")({
  head: () => ({
    meta: [
      { title: "Dark Frontier · Beyond The Loop Namibia" },
      {
        name: "description",
        content:
          "Namibia's dark skies, desert silence, astrophotography and cultural sky stories — a curated collection from Beyond The Loop.",
      },
      { property: "og:title", content: "Dark Frontier · Namibia's night sky, considered." },
      { property: "og:image", content: darkFrontier },
    ],
  }),
  component: DarkFrontier,
});

function DarkFrontier() {
  return (
    <div className="bg-[color:var(--night)] text-[color:var(--bone)]">
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={darkFrontier}
          alt="Milky Way arching over the NamibRand reserve"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(20,22,28,0.65)_60%,rgba(20,22,28,0.95)_100%)]" />
        <div className="container-wide relative z-10 flex min-h-[92vh] flex-col justify-end pb-20 pt-24 md:pb-32">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[color:var(--gold-soft)]">
            NamibRand · 25°S 16°E
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[2.8rem] font-light leading-[0.98] md:text-[6.5rem]">
            Dark Frontier.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-lg">
            Namibia holds some of the darkest skies on Earth. A collection of astronomy nights,
            silent desert evenings, and cultural sky stories — planned around the moon.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-wide grid gap-8 border-b border-white/10 py-16 md:grid-cols-3 md:py-24">
        {[
          {
            Icon: Moon,
            t: "Bortle 1 nights",
            b: "Nights inside Africa's first International Dark Sky Reserve — the NamibRand, certified since 2012.",
          },
          {
            Icon: Telescope,
            t: "Guided astronomy",
            b: "Astrophotography sessions led by working astro-guides, with professional optics available on request.",
          },
          {
            Icon: Compass,
            t: "Sky stories",
            b: "Damara, Himba and San sky mythologies, shared by community-approved storytellers on their terms.",
          },
        ].map(({ Icon, t, b }) => (
          <div key={t}>
            <Icon className="h-6 w-6 text-[color:var(--gold)]" strokeWidth={1.4} />
            <h3 className="mt-4 font-display text-2xl">{t}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/70">{b}</p>
          </div>
        ))}
      </section>

      {/* Collection */}
      <section className="container-wide py-16 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
              The collection
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">Six ways into the dark.</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {darkFrontierProducts.map((product) => (
            <DarkFrontierProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Plan by the moon */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container-wide grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
              Plan by the moon
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
              The darkest weeks
              <br /> are the quiet ones.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-[15px] leading-relaxed text-white/75 md:text-base">
              The best astronomy nights in Namibia fall in the week around a new moon, and in the
              dry months from <em>May through October</em> — when humidity is low, the air is still,
              and the horizon stays clear well into the night.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-white/60">
              When you enquire we align dates with the moon phase for your travel window, and share
              the exact darkest evenings for your trip.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide flex flex-col items-start justify-between gap-6 border-t border-white/10 py-14 md:flex-row md:items-center">
        <p className="font-display text-2xl md:text-3xl">Ready to plan a Dark Frontier trip?</p>
        <Link
          to="/book"
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-[color:var(--night)] hover:opacity-90"
        >
          Request an itinerary <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
