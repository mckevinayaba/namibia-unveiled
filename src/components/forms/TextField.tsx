import type { UseFormRegisterReturn } from "react-hook-form";

export function TextField({
  label,
  error,
  registration,
  ...props
}: {
  label: string;
  error?: { message?: string };
  registration: UseFormRegisterReturn;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        {...registration}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
      />
      {error ? <p className="mt-1.5 text-[12px] text-destructive">{error.message}</p> : null}
    </div>
  );
}
