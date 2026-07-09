import { Link } from "@tanstack/react-router";

const logo = { url: "/btl-logo-ink.png" };

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--night)] text-[color:var(--bone)]">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo.url}
            alt="Beyond The Loop Namibia"
            className="h-24 w-auto md:h-28"
            loading="lazy"
          />
          <p className="mt-4 max-w-sm text-sm text-white/60">
            A travel intelligence platform for hidden Namibia. Windhoek · Swakopmund · anywhere the
            road quiets down.
          </p>
        </div>
        <div>
          <p className="eyebrow">Platform</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/discover" className="text-white/60 hover:text-white">
                Discover
              </Link>
            </li>
            <li>
              <Link to="/routes" className="text-white/60 hover:text-white">
                Routes
              </Link>
            </li>
            <li>
              <Link to="/book" className="text-white/60 hover:text-white">
                Book
              </Link>
            </li>
            <li>
              <Link to="/guide" className="text-white/60 hover:text-white">
                Guide
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/dark-frontier" className="text-white/60 hover:text-white">
                Dark Frontier
              </Link>
            </li>
            <li>
              <Link to="/partner" className="text-white/60 hover:text-white">
                Partner with us
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-white/60 hover:text-white">
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-5 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Beyond The Loop Namibia</p>
          <p>Made in Namibia · for the traveller who came for the quiet.</p>
        </div>
      </div>
    </footer>
  );
}
