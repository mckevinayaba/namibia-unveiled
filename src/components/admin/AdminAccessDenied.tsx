import { ShieldOff } from "lucide-react";

import { supabase } from "@/lib/supabase";

export function AdminAccessDenied({ email }: { email: string | undefined }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--night)] px-6 text-[color:var(--bone)]">
      <div className="w-full max-w-sm text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white/70">
          <ShieldOff className="h-5 w-5" strokeWidth={1.7} />
        </span>
        <h1 className="mt-6 font-display text-2xl">This account isn't approved yet.</h1>
        <p className="mt-3 text-[14px] leading-relaxed text-white/60">
          {email ? <>{email} is</> : "This account is"} not on the Beyond The Loop staff list. Ask a
          founder to add you, or sign in with a different account.
        </p>
        <button
          onClick={() => supabase.auth.signOut()}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
