import type { BookingEnquiry, RouteRequest } from "@/types/bookings";
import type { PartnerApplication } from "@/types/partners";
import { supabase } from "@/lib/supabase";

type SubmitResult = { success: true; id: string };

const GENERIC_ERROR_MESSAGE =
  "Something went wrong sending your request. Please try again in a moment.";

function handleSubmissionError(error: unknown, context: string): never {
  if (import.meta.env.DEV) {
    console.error(`[submissions] ${context} failed:`, error);
  }
  throw new Error(GENERIC_ERROR_MESSAGE);
}

export async function submitBookingEnquiry(enquiry: BookingEnquiry): Promise<SubmitResult> {
  const { data, error } = await supabase
    .from("booking_enquiries")
    .insert({
      name: enquiry.name,
      email: enquiry.email,
      arrive_date: enquiry.arriveDate,
      depart_date: enquiry.departDate,
      travellers: enquiry.travellers,
      budget: enquiry.budget,
      trip_types: enquiry.tripTypes,
      notes: enquiry.notes,
      source_page: "book",
    })
    .select("id")
    .single();

  if (error || !data) {
    handleSubmissionError(error, "submitBookingEnquiry");
  }

  return { success: true, id: data.id };
}

export async function submitRouteRequest(request: RouteRequest): Promise<SubmitResult> {
  const { data, error } = await supabase
    .from("route_requests")
    .insert({
      name: request.name,
      email: request.email,
      days: request.days,
      travel_style: request.travelStyle,
      self_drive_or_guided: request.selfDriveOrGuided,
      vehicle_type: request.vehicleType,
      budget_range: request.budgetRange,
      interest_areas: request.interestAreas,
      season: request.season,
      remote_road_comfort: request.remoteRoadComfort,
      preferred_regions: request.preferredRegions,
      notes: request.notes,
      route_of_interest: request.routeOfInterest,
      source_page: "routes_request",
    })
    .select("id")
    .single();

  if (error || !data) {
    handleSubmissionError(error, "submitRouteRequest");
  }

  return { success: true, id: data.id };
}

export async function submitPartnerApplication(
  application: PartnerApplication,
): Promise<SubmitResult> {
  const { data, error } = await supabase
    .from("partner_applications")
    .insert({
      operation_name: application.operationName,
      region: application.region,
      contact_name: application.name,
      email: application.email,
      message: application.message,
      source_page: "partner",
    })
    .select("id")
    .single();

  if (error || !data) {
    handleSubmissionError(error, "submitPartnerApplication");
  }

  return { success: true, id: data.id };
}
