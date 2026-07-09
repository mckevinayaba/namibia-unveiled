import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import type { PartnerApplication } from "@/types/partners";
import { submitPartnerApplication } from "@/lib/submissions";
import { TextField } from "@/components/forms/TextField";
import { TextAreaField } from "@/components/forms/TextAreaField";
import { FormConfirmation } from "@/components/forms/FormConfirmation";

const partnerSchema = z.object({
  operationName: z.string().trim().min(2, "Enter your operation's name"),
  region: z.string().trim().min(2, "Enter a region"),
  name: z.string().trim().min(2, "Enter your name"),
  email: z.string().trim().email("Enter a valid email"),
  message: z.string().trim().min(10, "Tell us a little more — at least a sentence or two"),
});

type PartnerFormValues = z.infer<typeof partnerSchema>;

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: { operationName: "", region: "", name: "", email: "", message: "" },
  });

  async function onSubmit(values: PartnerFormValues) {
    const application: PartnerApplication = values;
    setSubmitError(null);
    try {
      await submitPartnerApplication(application);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-[color:var(--sand)] p-6 md:p-8">
        <FormConfirmation
          title="Your application has been received."
          message="We read every application personally. Expect a reply within one working week."
        />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-border bg-[color:var(--sand)] p-6 md:p-8"
    >
      <p className="eyebrow">Apply</p>
      <p className="mt-2 font-display text-2xl">A short introduction.</p>
      <p className="mt-2 text-[13px] text-muted-foreground">
        We read every application personally. Expect a reply within one working week.
      </p>
      <div className="mt-6 grid gap-4">
        <TextField
          label="Operation name"
          placeholder="Lodge, conservancy or guide name"
          registration={register("operationName")}
          error={errors.operationName}
        />
        <TextField
          label="Region"
          placeholder="e.g. Damaraland, Kaokoland"
          registration={register("region")}
          error={errors.region}
        />
        <TextField label="Your name" registration={register("name")} error={errors.name} />
        <TextField
          label="Email"
          type="email"
          registration={register("email")}
          error={errors.email}
        />
        <TextAreaField
          label="Tell us, briefly"
          placeholder="Who you are, what you offer, and why it belongs off the loop."
          registration={register("message")}
          error={errors.message}
        />
        {submitError ? (
          <p className="text-center text-[12px] text-destructive">{submitError}</p>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Submit application"}
        </button>
      </div>
    </form>
  );
}
