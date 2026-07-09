import { supabase } from "@/lib/supabase";
import type {
  BookingEnquiryRow,
  PartnerApplicationRow,
  RouteRequestRow,
  SubmissionCounts,
  SubmissionStatus,
  SubmissionTable,
} from "@/types/admin";

function logDevError(context: string, error: unknown) {
  if (import.meta.env.DEV) {
    console.error(`[admin] ${context} failed:`, error);
  }
}

/**
 * Checks whether the signed-in user has an active row in staff_users.
 * Relies on the "users can read own staff row" policy, which only ever
 * exposes the caller's own row — never the full staff list.
 */
export async function checkActiveStaff(): Promise<boolean> {
  const { data: sessionData } = await supabase.auth.getSession();
  const email = sessionData.session?.user.email;
  if (!email) return false;

  const { data, error } = await supabase
    .from("staff_users")
    .select("active")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    logDevError("checkActiveStaff", error);
    return false;
  }

  return data?.active === true;
}

export async function getSubmissionCounts(): Promise<SubmissionCounts> {
  const [bookings, routes, partners, total] = await Promise.all([
    supabase
      .from("booking_enquiries")
      .select("id", { count: "exact", head: true })
      .eq("status", "new"),
    supabase
      .from("route_requests")
      .select("id", { count: "exact", head: true })
      .eq("status", "new"),
    supabase
      .from("partner_applications")
      .select("id", { count: "exact", head: true })
      .eq("status", "new"),
    Promise.all([
      supabase.from("booking_enquiries").select("id", { count: "exact", head: true }),
      supabase.from("route_requests").select("id", { count: "exact", head: true }),
      supabase.from("partner_applications").select("id", { count: "exact", head: true }),
    ]),
  ]);

  for (const result of [bookings, routes, partners, ...total]) {
    if (result.error) logDevError("getSubmissionCounts", result.error);
  }

  const totalCount = total.reduce((sum, r) => sum + (r.count ?? 0), 0);

  return {
    newBookingEnquiries: bookings.count ?? 0,
    newRouteRequests: routes.count ?? 0,
    newPartnerApplications: partners.count ?? 0,
    total: totalCount,
  };
}

export async function listBookingEnquiries(): Promise<BookingEnquiryRow[]> {
  const { data, error } = await supabase
    .from("booking_enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    logDevError("listBookingEnquiries", error);
    return [];
  }

  return data ?? [];
}

export async function listRouteRequests(): Promise<RouteRequestRow[]> {
  const { data, error } = await supabase
    .from("route_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    logDevError("listRouteRequests", error);
    return [];
  }

  return data ?? [];
}

export async function listPartnerApplications(): Promise<PartnerApplicationRow[]> {
  const { data, error } = await supabase
    .from("partner_applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    logDevError("listPartnerApplications", error);
    return [];
  }

  return data ?? [];
}

export async function updateSubmission(
  table: SubmissionTable,
  id: string,
  updates: { status: SubmissionStatus; internal_notes: string },
): Promise<boolean> {
  const { error } = await supabase.from(table).update(updates).eq("id", id);

  if (error) {
    logDevError("updateSubmission", error);
    return false;
  }

  return true;
}
