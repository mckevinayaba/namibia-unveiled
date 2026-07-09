import type { UseFormRegisterReturn } from "react-hook-form";

export function TextAreaField({
  label,
  error,
  registration,
  rows = 4,
  ...props
}: {
  label: string;
  error?: { message?: string };
  registration: UseFormRegisterReturn;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label className="block text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <textarea
        rows={rows}
        {...props}
        {...registration}
        className="mt-2.5 w-full resize-none rounded-xl border border-border/80 bg-background/60 px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-[border,box-shadow,background] duration-200 focus:border-foreground/70 focus:bg-background focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/25"
      />
      {error ? <p className="mt-1.5 text-[12px] text-destructive">{error.message}</p> : null}
    </div>
  );
}
