import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="glass-bone fixed inset-x-0 top-0 z-40 border-b border-border/60">
      <div className="container-wide flex h-14 items-center justify-between md:h-16">
        <Link to="/" className="flex items-center gap-2">
          <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-[color:var(--clay)]" />
          <span className="font-display text-[15px] leading-none tracking-tight md:text-base">
            Beyond The Loop
            <span className="ml-1 align-middle text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Namibia
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link
            to="/discover"
            activeOptions={{ exact: false }}
            className="group relative text-sm text-foreground/80 transition hover:text-foreground data-[status=active]:text-foreground"
          >
            Discover
            <NavUnderline />
          </Link>
          <Link
            to="/routes"
            activeOptions={{ exact: false }}
            className="group relative text-sm text-foreground/80 transition hover:text-foreground data-[status=active]:text-foreground"
          >
            Routes
            <NavUnderline />
          </Link>
          <Link
            to="/book"
            activeOptions={{ exact: false }}
            className="group relative text-sm text-foreground/80 transition hover:text-foreground data-[status=active]:text-foreground"
          >
            Book
            <NavUnderline />
          </Link>
          <Link
            to="/dark-frontier"
            activeOptions={{ exact: false }}
            className="group relative text-sm text-foreground/80 transition hover:text-foreground data-[status=active]:text-foreground"
          >
            Dark Frontier
            <NavUnderline />
          </Link>
          <Link
            to="/guide"
            activeOptions={{ exact: false }}
            className="group relative text-sm text-foreground/80 transition hover:text-foreground data-[status=active]:text-foreground"
          >
            Guide
            <NavUnderline />
          </Link>
          <Link
            to="/partner"
            className="rounded-full border border-foreground/20 px-4 py-1.5 text-xs font-medium tracking-wide transition hover:bg-foreground hover:text-background"
          >
            Partner with us
          </Link>
        </div>

        <button
          aria-label="Search"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/70 hover:text-foreground md:hidden"
        >
          <Search className="h-4 w-4" strokeWidth={1.7} />
        </button>
      </div>
    </header>
  );
}

function NavUnderline() {
  return (
    <span
      aria-hidden
      className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--clay)] transition-transform duration-300 group-data-[status=active]:scale-x-100"
    />
  );
}
