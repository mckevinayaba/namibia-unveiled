import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Moon, Route as RouteIcon, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

import hero from "@/assets/hero-desert-night.jpg";
import darkFrontier from "@/assets/dark-frontier.jpg";
import { experiences } from "@/data/experiences";
import { routes } from "@/data/routes";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beyond The Loop · Namibia beyond the standard trail" },
      {
        name: "description",
        content:
          "Discover, plan, book and safely experience Namibia beyond the standard tourism loop — dark skies, desert silence, community, and self-drive confidence.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="relative min-h-[92vh] w-full md:min-h-[88vh]">
          <motion.img
            src={hero}
            alt="Traveller alone on a red dune at twilight in the Namib desert"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,22,28,0.55)_0%,rgba(20,22,28,0.15)_35%,rgba(20,22,28,0.85)_100%)]" />
          {/* Subtle grain */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          <div className="container-wide relative z-10 flex min-h-[92vh] flex-col justify-end pb-20 pt-24 text-[color:var(--bone)] md:min-h-[88vh] md:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[10px] font-medium uppercase tracking-[0.32em] text-[color:var(--gold-soft)]"
            >
              Namibia · 22°S 17°E
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-3xl font-display text-[2.6rem] font-light leading-[0.98] tracking-tight md:text-[5.5rem]"
            >
              The country you thought you'd already seen.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-base"
            >
              A travel intelligence platform for hidden Namibia. Routes the guidebooks don't map.
              Nights under skies that still remember silence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/dark-frontier"
                className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--bone)] px-6 py-3 text-sm font-medium text-[color:var(--night)] transition hover:bg-white"
              >
                Enter the Dark Frontier
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/routes"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Plan a self-drive
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="container-wide grid grid-cols-2 gap-8 border-b border-border py-12 md:grid-cols-4 md:gap-10 md:py-16">
        {[
          { Icon: Moon, k: "Dark skies", v: "Bortle 1 access" },
          { Icon: RouteIcon, k: "Routes", v: "Curated & routed" },
          { Icon: ShieldCheck, k: "Safety", v: "Local ground team" },
          { Icon: Users, k: "Community", v: "Conservancy-led" },
        ].map(({ Icon, k, v }) => (
          <div key={k} className="flex items-start gap-3">
            <Icon className="h-5 w-5 text-[color:var(--clay)]" strokeWidth={1.5} />
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {k}
              </p>
              <p className="mt-1 text-sm text-foreground">{v}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Dark Frontier feature */}
      <section className="container-wide grid gap-10 py-20 md:grid-cols-12 md:gap-16 md:py-32">
        <div className="md:col-span-5">
          <p className="eyebrow">Dark Frontier</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
            The sky,
            <br />
            <span className="text-muted-foreground">remembered.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground md:text-base">
            Astronomy nights, silent desert evenings, cultural sky stories, and routes planned
            around the moon. Designed for travellers who came looking for something quieter than a
            bucket list.
          </p>
          <Link
            to="/dark-frontier"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Explore Dark Frontier
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="md:col-span-7">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={darkFrontier}
              alt="Milky Way arching over the NamibRand reserve"
              className="aspect-[4/3] w-full object-cover md:aspect-[16/11]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
              <div className="glass-night rounded-2xl border border-white/10 px-4 py-3 text-white">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                  NamibRand · International Dark Sky Reserve
                </p>
                <p className="mt-1 font-display text-lg">Africa's first, since 2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured experiences */}
      <section className="container-wide pb-20 md:pb-32">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">A curated shelf</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Quiet, considered.</h2>
          </div>
          <Link
            to="/discover"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline"
          >
            View all
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((x) => (
            <ExperienceCard key={x.slug} experience={x} />
          ))}
        </div>
      </section>

      {/* Routes teaser */}
      <section className="bg-[color:var(--night)] py-20 text-[color:var(--bone)] md:py-32">
        <div className="container-wide">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[color:var(--gold-soft)]">
                Self-drive routes
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
                Routes that respect the road.
              </h2>
            </div>
            <Link to="/routes" className="hidden text-sm text-white/70 hover:text-white md:inline">
              All routes →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {routes.map((r) => (
              <Link
                key={r.slug}
                to="/routes/$slug"
                params={{ slug: r.slug }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/60">
                    <span>
                      {r.days} · {r.distance}
                    </span>
                    <span>{r.difficulty}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl">{r.title}</h3>
                  <p className="mt-2 text-[13px] text-white/70">{r.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner strip */}
      <section className="container-wide grid items-center gap-6 py-20 md:grid-cols-[2fr_1fr] md:py-28">
        <div>
          <p className="eyebrow">For operators, lodges & conservancies</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-5xl">
            Bring your quieter corner of Namibia onto a platform built for it.
          </h2>
        </div>
        <div className="md:justify-self-end">
          <Link
            to="/partner"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Partner with us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
