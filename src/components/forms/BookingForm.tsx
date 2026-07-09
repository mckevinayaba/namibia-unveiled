import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import type { BookingEnquiry } from "@/types/bookings";
import { submitBookingEnquiry } from "@/lib/submissions";
import { TextField } from "@/components/forms/TextField";
import { TextAreaField } from "@/components/forms/TextAreaField";
import { ChipMultiSelect } from "@/components/forms/ChipMultiSelect";
import { FormConfirmation } from "@/components/forms/FormConfirmation";

const tripTypeOptions = [
  "Dark skies",
  "Self-drive",
  "Culture",
  "Wildlife",
  "Photography",
  "Slow luxury",
] as const;

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email"),
  arriveDate: z.string().min(1, "Choose an arrival date"),
  departDate: z.string().min(1, "Choose a departure date"),
  travellers: z.coerce.number().int().min(1, "At least one traveller"),
  budget: z.string().trim().min(1, "Enter a budget"),
  tripTypes: z.array(z.string()).min(1, "Pick at least one trip type"),
  notes: z.string().trim(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm({ initialInterest }: { initialInterest?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      arriveDate: "",
      departDate: "",
      travellers: 2,
      budget: "",
      tripTypes: [],
      notes: initialInterest ? `Interested in: ${initialInterest}` : "",
    },
  });

  async function onSubmit(values: BookingFormValues) {
    const enquiry: BookingEnquiry = values;
    setSubmitError(null);
    try {
      await submitBookingEnquiry(enquiry);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
        <FormConfirmation
          title="Your request has been received."
          message="A specialist on our Windhoek team will respond within one working day with a considered draft itinerary."
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
        <div className="grid gap-5">
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
          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="Arrive"
              type="date"
              registration={register("arriveDate")}
              error={errors.arriveDate}
            />
            <TextField
              label="Depart"
              type="date"
              registration={register("departDate")}
              error={errors.departDate}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="Travellers"
              type="number"
              min={1}
              registration={register("travellers")}
              error={errors.travellers}
            />
            <TextField
              label="Budget (N$ pp)"
              placeholder="35,000+"
              registration={register("budget")}
              error={errors.budget}
            />
          </div>
          <Controller
            control={control}
            name="tripTypes"
            render={({ field }) => (
              <ChipMultiSelect
                label="What kind of trip?"
                options={tripTypeOptions}
                value={field.value}
                onChange={field.onChange}
                error={errors.tripTypes}
              />
            )}
          />
          <TextAreaField
            label="Notes"
            placeholder="Anything we should know — pace, mobility, dietary, dream nights."
            registration={register("notes")}
            error={errors.notes}
          />
          {submitError ? (
            <p className="text-center text-[12px] text-destructive">{submitError}</p>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Request an itinerary"}
          </button>
          <p className="text-center text-[11px] text-muted-foreground">
            No card required. A specialist replies within one working day.
          </p>
        </div>
      </div>
    </form>
  );
}
