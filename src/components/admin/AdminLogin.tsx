import { useState } from "react";
import { Mail } from "lucide-react";

import { supabase } from "@/lib/supabase";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const { error: signInError } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/admin` },
    });

    setSending(false);

    if (signInError) {
      if (import.meta.env.DEV) {
        console.error("[admin] signInWithOtp failed:", signInError);
      }
      setError("Something went wrong sending your link. Please try again in a moment.");
      return;
    }

    setSent(true);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--night)] px-6 text-[color:var(--bone)]">
      <div className="w-full max-w-sm">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
          Founder access
        </p>
        <h1 className="mt-4 text-center font-display text-3xl leading-tight">
          Beyond The Loop Namibia
        </h1>
        <p className="mt-3 text-center text-[14px] leading-relaxed text-white/60">
          Sign in with your staff email to review enquiries.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--gold)]/20 text-[color:var(--gold-soft)]">
                <Mail className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="font-display text-xl">Check your email</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                  We sent a sign-in link to <span className="text-white/85">{email}</span>. Open it
                  on this device to continue.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                  Staff email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@beyondtheloop.na"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/40 focus:outline-none"
                />
              </div>
              {error ? <p className="text-[12px] text-destructive">{error}</p> : null}
              <button
                type="submit"
                disabled={sending}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-[color:var(--bone)] px-6 py-3 text-sm font-medium text-[color:var(--night)] hover:bg-white disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send magic link"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
