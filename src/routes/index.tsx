import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, MoonStar, Route as RouteIcon, ShieldCheck } from "lucide-react";

import hero from "@/assets/hero-desert-night.jpg";
import darkFrontier from "@/assets/dark-frontier.jpg";
import { experiences, routes } from "@/lib/mock-data";

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
          <img
            src={hero}
            alt="Traveller alone on a red dune at twilight in the Namib desert"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,22,28,0.55)_0%,rgba(20,22,28,0.15)_35%,rgba(20,22,28,0.85)_100%)]" />
          <div className="container-wide relative z-10 flex min-h-[92vh] flex-col justify-end pb-16 pt-24 text-[color:var(--bone)] md:min-h-[88vh] md:pb-24">
            <div className="fade-up max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[color:var(--gold-soft)]">
                Namibia · Beyond the loop
              </p>
              <h1 className="mt-4 font-display text-[2.6rem] font-light leading-[0.98] tracking-tight md:text-7xl">
                The country you thought you'd already seen.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-base">
                A travel intelligence platform for hidden Namibia. Discover the routes
                the guidebooks don't map. Sleep under skies that still remember silence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="container-wide grid grid-cols-2 gap-6 border-b border-border py-10 md:grid-cols-4 md:py-14">
        {[
          { Icon: MoonStar, k: "Dark skies", v: "Bortle 1 access" },
          { Icon: RouteIcon, k: "Routes", v: "Curated & routed" },
          { Icon: ShieldCheck, k: "Safety", v: "Local ground team" },
          { Icon: Star, k: "Community", v: "Fair, conservancy-led" },
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

      {/* Signature: Dark Frontier */}
      <section className="container-wide grid gap-8 py-16 md:grid-cols-12 md:gap-14 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow">Signature line · 01</p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Dark Frontier.
            <br />
            <span className="text-muted-foreground">The sky, remembered.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            Our first collection. Astronomy camps, silent desert nights, cultural
            sky stories, and routes routed by the moon. Designed for travellers
            who came looking for something quieter than a bucket list.
          </p>
          <Link
            to="/dark-frontier"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Explore Dark Frontier
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="md:col-span-7">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={darkFrontier}
              alt="Milky Way arching over quiver trees at NamibRand"
              className="aspect-[4/3] w-full object-cover md:aspect-[16/11]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
              <div className="glass-night rounded-2xl border border-white/10 px-4 py-3 text-white">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">NamibRand · Bortle 1</p>
                <p className="mt-1 font-display text-lg">Dark Sky Reserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured experiences */}
      <section className="container-wide pb-16 md:pb-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Now on the platform</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Quiet, considered stays.</h2>
          </div>
          <Link to="/discover" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
            View all
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((x) => (
            <article
              key={x.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[0_30px_80px_-40px_rgba(20,22,28,0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={x.image}
                  alt={x.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[color:var(--night)]/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                  {x.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{x.region}</p>
                <h3 className="mt-1 font-display text-lg leading-snug">{x.title}</h3>
                <p className="mt-2 line-clamp-2 text-[13px] text-muted-foreground">{x.blurb}</p>
                <div className="mt-4 flex items-center justify-between text-[12px]">
                  <span className="text-muted-foreground">{x.duration}</span>
                  <span className="font-medium">{x.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Routes teaser */}
      <section className="bg-[color:var(--night)] py-16 text-[color:var(--bone)] md:py-28">
        <div className="container-wide">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[color:var(--gold-soft)]">
                Self-drive routes
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
                Routes that respect the road.
              </h2>
            </div>
            <Link to="/routes" className="hidden text-sm text-white/70 hover:text-white md:inline">
              All routes →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {routes.map((r) => (
              <Link
                key={r.slug}
                to="/routes"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={r.image} alt={r.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/60">
                    <span>{r.days} days · {r.distanceKm.toLocaleString()} km</span>
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
      <section className="container-wide grid items-center gap-6 py-16 md:grid-cols-[2fr_1fr] md:py-24">
        <div>
          <p className="eyebrow">For operators, lodges & conservancies</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-5xl">
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

function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--sand)]">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">Beyond The Loop</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            A travel intelligence platform for hidden Namibia. Windhoek · Swakopmund · anywhere the road quiets down.
          </p>
        </div>
        <div>
          <p className="eyebrow">Platform</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/discover" className="hover:text-foreground text-muted-foreground">Discover</Link></li>
            <li><Link to="/routes" className="hover:text-foreground text-muted-foreground">Routes</Link></li>
            <li><Link to="/book" className="hover:text-foreground text-muted-foreground">Book</Link></li>
            <li><Link to="/guide" className="hover:text-foreground text-muted-foreground">Guide</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/dark-frontier" className="hover:text-foreground text-muted-foreground">Dark Frontier</Link></li>
            <li><Link to="/partner" className="hover:text-foreground text-muted-foreground">Partner with us</Link></li>
            <li><Link to="/profile" className="hover:text-foreground text-muted-foreground">Account</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Beyond The Loop Namibia</p>
          <p>Made in Namibia · for the traveller who came for the quiet.</p>
        </div>
      </div>
    </footer>
  );
}
