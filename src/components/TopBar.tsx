import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="glass-bone fixed inset-x-0 top-0 z-40 border-b border-border/60">
      <div className="container-wide flex h-14 items-center justify-between md:h-16">
        <Link to="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-[color:var(--clay)]"
          />
          <span className="font-display text-[15px] leading-none tracking-tight md:text-base">
            Beyond The Loop
            <span className="ml-1 align-middle text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Namibia
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link to="/discover" className="text-sm text-foreground/80 hover:text-foreground">Discover</Link>
          <Link to="/routes" className="text-sm text-foreground/80 hover:text-foreground">Routes</Link>
          <Link to="/book" className="text-sm text-foreground/80 hover:text-foreground">Book</Link>
          <Link to="/dark-frontier" className="text-sm text-foreground/80 hover:text-foreground">Dark Frontier</Link>
          <Link to="/guide" className="text-sm text-foreground/80 hover:text-foreground">Guide</Link>
          <Link
            to="/partner"
            className="rounded-full border border-foreground/20 px-4 py-1.5 text-xs font-medium tracking-wide hover:bg-foreground hover:text-background"
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
