import type { ReactNode } from "react";

import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <TopBar />
      <main className="pb-28 pt-24 md:pb-16 md:pt-28">{children}</main>
      <BottomNav />
    </div>
  );
}
