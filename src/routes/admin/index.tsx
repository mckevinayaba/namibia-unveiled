import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { supabase } from "@/lib/supabase";
import { checkActiveStaff } from "@/lib/admin";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminAccessDenied } from "@/components/admin/AdminAccessDenied";
import { AdminDashboard, type AdminTab } from "@/components/admin/AdminDashboard";

const searchSchema = z.object({
  tab: z.enum(["bookings", "routes", "partners"]).catch("bookings"),
});

export const Route = createFileRoute("/admin/")({
  ssr: false,
  validateSearch: searchSchema,
  head: () => ({
    meta: [{ title: "Founder Operations · Beyond The Loop Namibia" }],
  }),
  component: AdminPage,
});

type AuthState =
  | { status: "loading" }
  | { status: "signed-out" }
  | { status: "not-staff"; email: string | undefined }
  | { status: "staff"; email: string | undefined };

function AdminPage() {
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [auth, setAuth] = useState<AuthState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function evaluate(email: string | undefined) {
      if (!email) {
        if (!cancelled) setAuth({ status: "signed-out" });
        return;
      }
      const isStaff = await checkActiveStaff();
      if (cancelled) return;
      setAuth(isStaff ? { status: "staff", email } : { status: "not-staff", email });
    }

    supabase.auth.getSession().then(({ data }) => {
      evaluate(data.session?.user.email);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      evaluate(session?.user.email);
    });

    return () => {
      cancelled = true;
      listener.subscription.unsubscribe();
    };
  }, []);

  if (auth.status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[color:var(--night)] text-white/60">
        <p className="text-[13px]">Loading…</p>
      </div>
    );
  }

  if (auth.status === "signed-out") {
    return <AdminLogin />;
  }

  if (auth.status === "not-staff") {
    return <AdminAccessDenied email={auth.email} />;
  }

  return (
    <AdminDashboard
      tab={tab as AdminTab}
      onTabChange={(next) => navigate({ search: { tab: next } })}
      staffEmail={auth.email}
    />
  );
}
