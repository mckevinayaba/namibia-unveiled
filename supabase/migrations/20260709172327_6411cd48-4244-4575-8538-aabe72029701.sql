create extension if not exists pgcrypto;

do $$
begin
  create type submission_status as enum ('new','reviewing','contacted','converted','archived');
exception when duplicate_object then null;
end $$;

create table if not exists public.booking_enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  arrive_date date not null,
  depart_date date not null,
  travellers integer not null check (travellers > 0),
  budget text not null,
  trip_types text[] not null default '{}',
  notes text,
  source_page text default 'book',
  status submission_status not null default 'new',
  internal_notes text
);

create table if not exists public.route_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  days integer not null check (days > 0),
  travel_style text not null,
  self_drive_or_guided text not null,
  vehicle_type text not null,
  budget_range text not null,
  interest_areas text[] not null default '{}',
  season text not null,
  remote_road_comfort text not null,
  preferred_regions text[] not null default '{}',
  notes text,
  route_of_interest text,
  source_page text default 'routes_request',
  status submission_status not null default 'new',
  internal_notes text
);

create table if not exists public.partner_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  operation_name text not null,
  region text not null,
  contact_name text not null,
  email text not null,
  message text not null,
  partner_type text,
  website text,
  phone text,
  source_page text default 'partner',
  status submission_status not null default 'new',
  internal_notes text
);

grant insert on public.booking_enquiries to anon;
grant insert on public.route_requests to anon;
grant insert on public.partner_applications to anon;

grant select, insert, update, delete on public.booking_enquiries to authenticated;
grant select, insert, update, delete on public.route_requests to authenticated;
grant select, insert, update, delete on public.partner_applications to authenticated;

grant all on public.booking_enquiries to service_role;
grant all on public.route_requests to service_role;
grant all on public.partner_applications to service_role;

alter table public.booking_enquiries enable row level security;
alter table public.route_requests enable row level security;
alter table public.partner_applications enable row level security;

create policy "public can submit booking enquiries" on public.booking_enquiries for insert to anon with check (true);
create policy "public can submit route requests" on public.route_requests for insert to anon with check (true);
create policy "public can submit partner applications" on public.partner_applications for insert to anon with check (true);

create policy "authenticated users can manage booking enquiries" on public.booking_enquiries for all to authenticated using (true) with check (true);
create policy "authenticated users can manage route requests" on public.route_requests for all to authenticated using (true) with check (true);
create policy "authenticated users can manage partner applications" on public.partner_applications for all to authenticated using (true) with check (true);