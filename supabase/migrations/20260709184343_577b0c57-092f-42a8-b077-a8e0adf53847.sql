create table if not exists public.staff_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.staff_users enable row level security;

grant select on public.staff_users to authenticated;

create policy "users can read own staff row"
on public.staff_users
for select
to authenticated
using (email = auth.jwt() ->> 'email');

create or replace function public.is_active_staff()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.staff_users su
    where su.email = auth.jwt() ->> 'email'
    and su.active = true
  );
$$;

grant execute on function public.is_active_staff() to authenticated;

drop policy if exists "authenticated users can manage booking enquiries" on public.booking_enquiries;
drop policy if exists "authenticated users can manage route requests" on public.route_requests;
drop policy if exists "authenticated users can manage partner applications" on public.partner_applications;

create policy "staff can view booking enquiries"
on public.booking_enquiries
for select
to authenticated
using (is_active_staff());

create policy "staff can update booking enquiries"
on public.booking_enquiries
for update
to authenticated
using (is_active_staff())
with check (is_active_staff());

create policy "staff can view route requests"
on public.route_requests
for select
to authenticated
using (is_active_staff());

create policy "staff can update route requests"
on public.route_requests
for update
to authenticated
using (is_active_staff())
with check (is_active_staff());

create policy "staff can view partner applications"
on public.partner_applications
for select
to authenticated
using (is_active_staff());

create policy "staff can update partner applications"
on public.partner_applications
for update
to authenticated
using (is_active_staff())
with check (is_active_staff());

revoke insert, delete on public.booking_enquiries from authenticated;
revoke insert, delete on public.route_requests from authenticated;
revoke insert, delete on public.partner_applications from authenticated;

insert into public.staff_users (email) values ('mckevin.ayaba@gmail.com')
on conflict (email) do nothing;