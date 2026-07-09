import { Link } from "@tanstack/react-router";
import { Compass, Map, CalendarCheck, BookOpen, User } from "lucide-react";

const items = [
  { to: "/discover", label: "Discover", Icon: Compass },
  { to: "/routes", label: "Routes", Icon: Map },
  { to: "/book", label: "Book", Icon: CalendarCheck },
  { to: "/guide", label: "Guide", Icon: BookOpen },
  { to: "/profile", label: "Profile", Icon: User },
] as const;

export function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 pb-[max(env(safe-area-inset-bottom),0.5rem)] md:pb-3"
    >
      <div className="container-app">
        <div className="glass-night flex items-center justify-between gap-1 rounded-full border border-white/10 px-2 py-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          {items.map(({ to, label, Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: false }}
              className="group relative flex flex-1 flex-col items-center gap-1 rounded-full px-2 py-2 text-[10px] font-medium tracking-wide text-white/60 transition data-[status=active]:text-[color:var(--gold)]"
            >
              <Icon className="h-[18px] w-[18px] transition group-data-[status=active]:scale-110" strokeWidth={1.6} />
              <span className="uppercase tracking-[0.14em]">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
