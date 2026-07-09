import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import type { RouteRequest } from "@/types/bookings";
import { submitRouteRequest } from "@/lib/submissions";
import { TextField } from "@/components/forms/TextField";
import { TextAreaField } from "@/components/forms/TextAreaField";
import { ChipMultiSelect } from "@/components/forms/ChipMultiSelect";
import { PillSelect } from "@/components/forms/PillSelect";
import { FormConfirmation } from "@/components/forms/FormConfirmation";

const travelStyleOptions = ["Self-drive", "Guided", "Mixed"] as const;
const selfDriveOrGuidedOptions = ["Self-drive", "Guided"] as const;
const vehicleTypeOptions = [
  "Sedan",
  "SUV (2x4)",
  "SUV (4x4)",
  "Camper / 4x4 with rooftop tent",
  "Not sure yet",
] as const;
const budgetRangeOptions = [
  "N$25,000–40,000 pp",
  "N$40,000–65,000 pp",
  "N$65,000–100,000 pp",
  "N$100,000+ pp",
] as const;
const interestAreaOptions = [
  "Dark skies",
  "Wildlife",
  "Culture & community",
  "Photography",
  "Hiking",
  "Coastal & desert",
  "Canyons",
] as const;
const seasonOptions = [
  "Dry season (May–Oct)",
  "Green season (Dec–Mar)",
  "Shoulder months",
  "Not sure yet",
] as const;
const remoteRoadComfortOptions = [
  "New to it — keep it easy",
  "Some experience",
  "Very comfortable",
] as const;
const regionOptions = [
  "Kalahari",
  "Fish River Canyon",
  "NamibRand",
  "Sossusvlei",
  "Damaraland",
  "Kaokoland",
  "Skeleton Coast",
  "Etosha",
  "Waterberg",
  "Erongo",
] as const;

const routeRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  email: z.string().trim().email("Enter a valid email"),
  days: z.coerce.number().int().min(1, "At least one day"),
  travelStyle: z.enum(travelStyleOptions, { message: "Choose a travel style" }),
  selfDriveOrGuided: z.enum(selfDriveOrGuidedOptions, { message: "Choose one" }),
  vehicleType: z.enum(vehicleTypeOptions, { message: "Choose a vehicle type" }),
  budgetRange: z.enum(budgetRangeOptions, { message: "Choose a budget range" }),
  interestAreas: z.array(z.string()).min(1, "Pick at least one interest"),
  season: z.string().min(1, "Choose a season"),
  remoteRoadComfort: z.enum(remoteRoadComfortOptions, { message: "Choose one" }),
  preferredRegions: z.array(z.string()).min(1, "Pick at least one region"),
  notes: z.string().trim(),
  routeOfInterest: z.string().trim().optional(),
});

type RouteRequestFormValues = z.infer<typeof routeRequestSchema>;

export function RouteRequestForm({ initialRoute }: { initialRoute?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RouteRequestFormValues>({
    resolver: zodResolver(routeRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      days: 10,
      travelStyle: undefined,
      selfDriveOrGuided: undefined,
      vehicleType: undefined,
      budgetRange: undefined,
      interestAreas: [],
      season: "",
      remoteRoadComfort: undefined,
      preferredRegions: [],
      notes: "",
      routeOfInterest: initialRoute ?? "",
    },
  });

  async function onSubmit(values: RouteRequestFormValues) {
    const request: RouteRequest = values;
    await submitRouteRequest(request);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
        <FormConfirmation
          title="Your route request has been received."
          message="A specialist will shape a route around what you've told us and respond within one working day."
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
        {initialRoute ? (
          <p className="mb-6 rounded-2xl border border-border bg-[color:var(--sand)] px-4 py-3 text-[13px]">
            Requesting a route based on: <span className="font-medium">{initialRoute}</span>
          </p>
        ) : null}
        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="Your name"
              placeholder="Full name"
              registration={register("name")}
              error={errors.name}
            />
            <TextField
              label="Email"
              type="email"
              placeholder="you@domain.com"
              registration={register("email")}
              error={errors.email}
            />
          </div>
          <TextField
            label="Number of days"
            type="number"
            min={1}
            registration={register("days")}
            error={errors.days}
          />

          <Controller
            control={control}
            name="travelStyle"
            render={({ field }) => (
              <PillSelect
                label="Travel style"
                options={travelStyleOptions}
                value={field.value ?? ""}
                onChange={field.onChange}
                error={errors.travelStyle}
              />
            )}
          />
          <Controller
            control={control}
            name="selfDriveOrGuided"
            render={({ field }) => (
              <PillSelect
                label="Self-drive or guided"
                options={selfDriveOrGuidedOptions}
                value={field.value ?? ""}
                onChange={field.onChange}
                error={errors.selfDriveOrGuided}
              />
            )}
          />
          <Controller
            control={control}
            name="vehicleType"
            render={({ field }) => (
              <PillSelect
                label="Vehicle type"
                options={vehicleTypeOptions}
                value={field.value ?? ""}
                onChange={field.onChange}
                error={errors.vehicleType}
              />
            )}
          />
          <Controller
            control={control}
            name="budgetRange"
            render={({ field }) => (
              <PillSelect
                label="Budget range"
                options={budgetRangeOptions}
                value={field.value ?? ""}
                onChange={field.onChange}
                error={errors.budgetRange}
              />
            )}
          />
          <Controller
            control={control}
            name="interestAreas"
            render={({ field }) => (
              <ChipMultiSelect
                label="Interest areas"
                options={interestAreaOptions}
                value={field.value}
                onChange={field.onChange}
                error={errors.interestAreas}
              />
            )}
          />
          <Controller
            control={control}
            name="season"
            render={({ field }) => (
              <PillSelect
                label="Season of travel"
                options={seasonOptions}
                value={field.value}
                onChange={field.onChange}
                error={errors.season}
              />
            )}
          />
          <Controller
            control={control}
            name="remoteRoadComfort"
            render={({ field }) => (
              <PillSelect
                label="Comfort with remote roads"
                options={remoteRoadComfortOptions}
                value={field.value ?? ""}
                onChange={field.onChange}
                error={errors.remoteRoadComfort}
              />
            )}
          />
          <Controller
            control={control}
            name="preferredRegions"
            render={({ field }) => (
              <ChipMultiSelect
                label="Preferred regions"
                options={regionOptions}
                value={field.value}
                onChange={field.onChange}
                error={errors.preferredRegions}
              />
            )}
          />
          <TextAreaField
            label="Notes"
            placeholder="Anything else that will help us shape the route."
            registration={register("notes")}
            error={errors.notes}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Request this route"}
          </button>
        </div>
      </div>
    </form>
  );
}
