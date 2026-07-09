export type SubmissionStatus = "new" | "reviewing" | "contacted" | "converted" | "archived";

export const submissionStatuses: SubmissionStatus[] = [
  "new",
  "reviewing",
  "contacted",
  "converted",
  "archived",
];

export type StaffUser = {
  id: string;
  email: string;
  name: string | null;
  active: boolean;
  created_at: string;
};

export type BookingEnquiryRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  arrive_date: string;
  depart_date: string;
  travellers: number;
  budget: string;
  trip_types: string[];
  notes: string | null;
  source_page: string | null;
  status: SubmissionStatus;
  internal_notes: string | null;
};

export type RouteRequestRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  days: number;
  travel_style: string;
  self_drive_or_guided: string;
  vehicle_type: string;
  budget_range: string;
  interest_areas: string[];
  season: string;
  remote_road_comfort: string;
  preferred_regions: string[];
  notes: string | null;
  route_of_interest: string | null;
  source_page: string | null;
  status: SubmissionStatus;
  internal_notes: string | null;
};

export type PartnerApplicationRow = {
  id: string;
  created_at: string;
  operation_name: string;
  region: string;
  contact_name: string;
  email: string;
  message: string;
  partner_type: string | null;
  website: string | null;
  phone: string | null;
  source_page: string | null;
  status: SubmissionStatus;
  internal_notes: string | null;
};

export type SubmissionTable = "booking_enquiries" | "route_requests" | "partner_applications";

export type SubmissionCounts = {
  newBookingEnquiries: number;
  newRouteRequests: number;
  newPartnerApplications: number;
  total: number;
};
