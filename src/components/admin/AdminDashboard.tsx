import { useCallback, useEffect, useState } from "react";
import { LogOut, CalendarCheck, Route as RouteIcon, Handshake, Inbox } from "lucide-react";

import { supabase } from "@/lib/supabase";
import {
  getSubmissionCounts,
  listBookingEnquiries,
  listPartnerApplications,
  listRouteRequests,
  updateSubmission,
} from "@/lib/admin";
import type {
  BookingEnquiryRow,
  PartnerApplicationRow,
  RouteRequestRow,
  SubmissionCounts,
  SubmissionStatus,
} from "@/types/admin";
import { SubmissionList } from "@/components/admin/SubmissionList";
import {
  SubmissionDetailDialog,
  type DetailField,
} from "@/components/admin/SubmissionDetailDialog";

export type AdminTab = "bookings" | "routes" | "partners";

const tabs: { id: AdminTab; label: string }[] = [
  { id: "bookings", label: "Booking Enquiries" },
  { id: "routes", label: "Route Requests" },
  { id: "partners", label: "Partner Applications" },
];

export function AdminDashboard({
  tab,
  onTabChange,
  staffEmail,
}: {
  tab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  staffEmail: string | undefined;
}) {
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState<SubmissionCounts | null>(null);
  const [bookings, setBookings] = useState<BookingEnquiryRow[]>([]);
  const [routes, setRoutes] = useState<RouteRequestRow[]>([]);
  const [partners, setPartners] = useState<PartnerApplicationRow[]>([]);

  const [openBooking, setOpenBooking] = useState<BookingEnquiryRow | null>(null);
  const [openRoute, setOpenRoute] = useState<RouteRequestRow | null>(null);
  const [openPartner, setOpenPartner] = useState<PartnerApplicationRow | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    const [c, b, r, p] = await Promise.all([
      getSubmissionCounts(),
      listBookingEnquiries(),
      listRouteRequests(),
      listPartnerApplications(),
    ]);
    setCounts(c);
    setBookings(b);
    setRoutes(r);
    setPartners(p);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  async function saveBooking(status: SubmissionStatus, notes: string) {
    if (!openBooking) return false;
    const ok = await updateSubmission("booking_enquiries", openBooking.id, {
      status,
      internal_notes: notes,
    });
    if (ok) await refresh();
    return ok;
  }

  async function saveRoute(status: SubmissionStatus, notes: string) {
    if (!openRoute) return false;
    const ok = await updateSubmission("route_requests", openRoute.id, {
      status,
      internal_notes: notes,
    });
    if (ok) await refresh();
    return ok;
  }

  async function savePartner(status: SubmissionStatus, notes: string) {
    if (!openPartner) return false;
    const ok = await updateSubmission("partner_applications", openPartner.id, {
      status,
      internal_notes: notes,
    });
    if (ok) await refresh();
    return ok;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-[color:var(--sand)]">
        <div className="container-wide flex h-16 items-center justify-between">
          <div>
            <p className="eyebrow">Beyond The Loop</p>
            <p className="font-display text-lg leading-none">Founder Operations</p>
          </div>
          <div className="flex items-center gap-4">
            {staffEmail ? (
              <p className="hidden text-[12px] text-muted-foreground sm:block">{staffEmail}</p>
            ) : null}
            <button
              onClick={() => supabase.auth.signOut()}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[12px] font-medium hover:bg-secondary"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="container-wide py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            Icon={CalendarCheck}
            label="New booking enquiries"
            value={counts?.newBookingEnquiries}
          />
          <StatCard Icon={RouteIcon} label="New route requests" value={counts?.newRouteRequests} />
          <StatCard
            Icon={Handshake}
            label="New partner applications"
            value={counts?.newPartnerApplications}
          />
          <StatCard Icon={Inbox} label="Total submissions" value={counts?.total} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => onTabChange(t.id)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${
                tab === t.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:border-foreground/50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {loading && !counts ? (
            <p className="py-10 text-center text-[13px] text-muted-foreground">Loading…</p>
          ) : (
            <>
              {tab === "bookings" ? (
                <SubmissionList
                  rows={bookings}
                  emptyLabel="No booking enquiries yet."
                  onOpen={setOpenBooking}
                  toListItem={(row) => ({
                    id: row.id,
                    name: row.name,
                    email: row.email,
                    createdAt: row.created_at,
                    status: row.status,
                    summary: row.trip_types.join(", ") || "No trip type given",
                  })}
                />
              ) : null}
              {tab === "routes" ? (
                <SubmissionList
                  rows={routes}
                  emptyLabel="No route requests yet."
                  onOpen={setOpenRoute}
                  toListItem={(row) => ({
                    id: row.id,
                    name: row.name,
                    email: row.email,
                    createdAt: row.created_at,
                    status: row.status,
                    summary: row.route_of_interest || `${row.days} days · ${row.travel_style}`,
                  })}
                />
              ) : null}
              {tab === "partners" ? (
                <SubmissionList
                  rows={partners}
                  emptyLabel="No partner applications yet."
                  onOpen={setOpenPartner}
                  toListItem={(row) => ({
                    id: row.id,
                    name: row.contact_name,
                    email: row.email,
                    createdAt: row.created_at,
                    status: row.status,
                    summary: `${row.operation_name} · ${row.region}`,
                  })}
                />
              ) : null}
            </>
          )}
        </div>
      </main>

      {openBooking ? (
        <SubmissionDetailDialog
          open
          onOpenChange={(o) => !o && setOpenBooking(null)}
          title={openBooking.name}
          createdAt={openBooking.created_at}
          status={openBooking.status}
          internalNotes={openBooking.internal_notes ?? ""}
          onSave={saveBooking}
          fields={bookingFields(openBooking)}
        />
      ) : null}

      {openRoute ? (
        <SubmissionDetailDialog
          open
          onOpenChange={(o) => !o && setOpenRoute(null)}
          title={openRoute.name}
          createdAt={openRoute.created_at}
          status={openRoute.status}
          internalNotes={openRoute.internal_notes ?? ""}
          onSave={saveRoute}
          fields={routeFields(openRoute)}
        />
      ) : null}

      {openPartner ? (
        <SubmissionDetailDialog
          open
          onOpenChange={(o) => !o && setOpenPartner(null)}
          title={openPartner.operation_name}
          createdAt={openPartner.created_at}
          status={openPartner.status}
          internalNotes={openPartner.internal_notes ?? ""}
          onSave={savePartner}
          fields={partnerFields(openPartner)}
        />
      ) : null}
    </div>
  );
}

function StatCard({
  Icon,
  label,
  value,
}: {
  Icon: typeof Inbox;
  label: string;
  value: number | undefined;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Icon className="h-4 w-4 text-[color:var(--clay)]" strokeWidth={1.6} />
      <p className="mt-4 font-display text-3xl">{value ?? "–"}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
    </div>
  );
}

function bookingFields(row: BookingEnquiryRow): DetailField[] {
  return [
    { label: "Name", value: row.name },
    { label: "Email", value: row.email },
    { label: "Arrive", value: row.arrive_date },
    { label: "Depart", value: row.depart_date },
    { label: "Travellers", value: String(row.travellers) },
    { label: "Budget", value: row.budget },
    { label: "Trip types", value: row.trip_types.join(", ") },
    { label: "Notes", value: row.notes ?? "" },
    { label: "Source page", value: row.source_page ?? "" },
  ];
}

function routeFields(row: RouteRequestRow): DetailField[] {
  return [
    { label: "Name", value: row.name },
    { label: "Email", value: row.email },
    { label: "Days", value: String(row.days) },
    { label: "Travel style", value: row.travel_style },
    { label: "Self-drive or guided", value: row.self_drive_or_guided },
    { label: "Vehicle type", value: row.vehicle_type },
    { label: "Budget range", value: row.budget_range },
    { label: "Interest areas", value: row.interest_areas.join(", ") },
    { label: "Season", value: row.season },
    { label: "Remote road comfort", value: row.remote_road_comfort },
    { label: "Preferred regions", value: row.preferred_regions.join(", ") },
    { label: "Route of interest", value: row.route_of_interest ?? "" },
    { label: "Notes", value: row.notes ?? "" },
    { label: "Source page", value: row.source_page ?? "" },
  ];
}

function partnerFields(row: PartnerApplicationRow): DetailField[] {
  return [
    { label: "Operation name", value: row.operation_name },
    { label: "Region", value: row.region },
    { label: "Contact name", value: row.contact_name },
    { label: "Email", value: row.email },
    { label: "Message", value: row.message },
    { label: "Partner type", value: row.partner_type ?? "" },
    { label: "Website", value: row.website ?? "" },
    { label: "Phone", value: row.phone ?? "" },
    { label: "Source page", value: row.source_page ?? "" },
  ];
}
