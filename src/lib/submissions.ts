import type { BookingEnquiry, RouteRequest } from "@/types/bookings";
import type { PartnerApplication } from "@/types/partners";

/**
 * Placeholder submission layer. Each function mocks a network round trip
 * and resolves successfully — nothing is persisted or sent anywhere yet.
 * When Supabase is connected (see src/lib/supabase.ts), swap the body of
 * each function for a real insert against the corresponding table; the
 * call sites (forms) will not need to change.
 */

const MOCK_LATENCY_MS = 700;

function mockDelay() {
  return new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));
}

export async function submitBookingEnquiry(enquiry: BookingEnquiry): Promise<{ success: true }> {
  await mockDelay();
  console.info("[placeholder] booking enquiry received", enquiry);
  return { success: true };
}

export async function submitPartnerApplication(
  application: PartnerApplication,
): Promise<{ success: true }> {
  await mockDelay();
  console.info("[placeholder] partner application received", application);
  return { success: true };
}

export async function submitRouteRequest(request: RouteRequest): Promise<{ success: true }> {
  await mockDelay();
  console.info("[placeholder] route request received", request);
  return { success: true };
}
