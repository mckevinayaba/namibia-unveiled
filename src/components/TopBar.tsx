import { Link } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";

import logoInk from "@/assets/btl-logo-ink.png.asset.json";

const navItems = [
  { to: "/discover", label: "Discover" },
  { to: "/routes", label: "Routes" },
  { to: "/book", label: "Book" },
  { to: "/dark-frontier", label: "Dark Frontier" },
  { to: "/guide", label: "Guide" },
] as const;

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,border-color,box-shadow] duration-500 ${
        scrolled
          ? "glass-bone border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-wide flex h-24 items-center justify-between md:h-28">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Beyond The Loop Namibia — home"
          className="flex items-center transition-opacity hover:opacity-85"
        >
          <img
            src={logoInk.url}
            alt="Beyond The Loop Namibia"
            className="h-16 w-auto md:h-20"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex md:items-center">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: false }}
                  className="group relative inline-flex py-2 text-[13px] font-medium tracking-[0.02em] text-foreground/70 transition-colors hover:text-foreground data-[status=active]:text-foreground"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-0.5 left-1/2 h-px w-4 -translate-x-1/2 origin-center scale-x-0 bg-[color:var(--clay)] transition-transform duration-500 group-hover:scale-x-100 group-data-[status=active]:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground md:inline-flex"
          >
            <Search className="h-[17px] w-[17px]" strokeWidth={1.6} />
          </button>
          <Link
            to="/partner"
            className="hidden items-center rounded-full border border-foreground/15 px-5 py-2 text-[12px] font-medium tracking-[0.08em] uppercase text-foreground/85 transition hover:border-foreground hover:bg-foreground hover:text-background md:inline-flex"
          >
            Partner with us
          </Link>

          <button
            type="button"
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/80 transition hover:border-foreground hover:text-foreground md:hidden"
          >
            <Menu className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </header>
  );
}
