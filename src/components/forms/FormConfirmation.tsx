import { Check } from "lucide-react";

export function FormConfirmation({ title, message }: { title: string; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-14 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--gold)]/20 text-[color:var(--clay)]">
        <Check className="h-6 w-6" strokeWidth={2} />
      </span>
      <div>
        <p className="font-display text-2xl">{title}</p>
        <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
