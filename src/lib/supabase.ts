/**
 * Placeholder — Supabase is not yet connected.
 *
 * This file exists so submission and data-fetching code can be written
 * against a stable import path ahead of time. When credentials exist,
 * install `@supabase/supabase-js`, replace the body of `getSupabaseClient`
 * with a real `createClient(url, anonKey)` call, and nothing else in the
 * app should need to change.
 */

export function getSupabaseClient(): never {
  throw new Error("Supabase is not yet configured. See src/lib/supabase.ts for setup notes.");
}
