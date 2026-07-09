import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MoonStar, Telescope, Sparkles } from "lucide-react";

import darkFrontier from "@/assets/dark-frontier.jpg";
import camp from "@/assets/stay-camp.jpg";
import rock from "@/assets/discover-rock.jpg";
import himba from "@/assets/culture-himba.jpg";

export const Route = createFileRoute("/dark-frontier")({
  head: () => ({
    meta: [
      { title: "Dark Frontier · Beyond The Loop Namibia" },
      {
        name: "description",
        content:
          "Namibia's dark skies, desert silence, astrophotography and cultural sky stories — the first signature line from Beyond The Loop.",
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
        <div className="container-wide relative z-10 flex min-h-[92vh] flex-col justify-end pb-16 pt-24 md:pb-28">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[color:var(--gold-soft)]">
            Signature line · 01
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[2.8rem] font-light leading-[0.98] md:text-[6.5rem]">
            Dark Frontier.
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-lg">
            Namibia holds some of the darkest skies on Earth. This is our first
            collection — astronomy camps, silent desert nights, cultural sky
            stories, and routes routed by the moon.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-wide grid gap-8 border-b border-white/10 py-16 md:grid-cols-3 md:py-24">
        {[
          { Icon: MoonStar, t: "Bortle 1 nights", b: "Sleep inside Africa's first International Dark Sky Reserve. No horizon light, no compromise." },
          { Icon: Telescope, t: "Guided astronomy", b: "Astrophotography workshops led by working astro-guides, with pro-grade optics on site." },
          { Icon: Sparkles, t: "Sky stories", b: "Damara, Himba and San sky mythologies, shared quietly by community-approved storytellers." },
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
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Four ways into the dark.</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { img: darkFrontier, tag: "3 nights", t: "NamibRand Astro Camp", b: "Bortle 1 skies, pro optics, and long, uninterrupted evenings under the arc of the galaxy." },
            { img: camp, tag: "4 nights", t: "Sossus Canvas Retreat", b: "A quiet camp at the edge of the dune sea. Sunrise on the red giants, ink-black nights." },
            { img: rock, tag: "2 nights", t: "Damara Sky Stories", b: "Rock engravings walked at first light, followed by an evening of Damara sky mythology." },
            { img: himba, tag: "Add-on", t: "Kunene Night Circle", b: "A private evening with a Himba community — stars, fire, and stories agreed in advance." },
          ].map((x) => (
            <article key={x.t} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={x.img} alt={x.t} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                  {x.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{x.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/70">{x.b}</p>
                <button className="mt-5 inline-flex items-center gap-1.5 text-sm text-white">
                  Enquire <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Moon calendar strip */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container-wide grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
              Plan by the moon
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              The darkest weeks, at a glance.
            </h2>
            <p className="mt-4 text-[14px] text-white/70">
              Our windows are shaped around new-moon phases and low-humidity months.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {[
                { m: "May", w: "12–18" },
                { m: "Jun", w: "10–16" },
                { m: "Jul", w: "09–15" },
                { m: "Aug", w: "07–13" },
                { m: "Sep", w: "05–11" },
                { m: "Oct", w: "04–10" },
              ].map((x) => (
                <div key={x.m} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">{x.m}</p>
                  <p className="mt-2 font-display text-2xl">{x.w}</p>
                  <p className="mt-1 text-[11px] text-white/50">New-moon window</p>
                </div>
              ))}
            </div>
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
