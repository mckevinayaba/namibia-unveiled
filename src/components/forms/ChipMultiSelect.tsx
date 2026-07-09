export function ChipMultiSelect({
  label,
  options,
  value,
  onChange,
  error,
}: {
  label: string;
  options: readonly string[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: { message?: string };
}) {
  function toggle(option: string) {
    onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option]);
  }

  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value.includes(option);
          return (
            <button
              type="button"
              key={option}
              onClick={() => toggle(option)}
              aria-pressed={active}
              className={`rounded-full border px-3 py-1.5 text-[12px] transition ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background hover:border-foreground/50"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error ? <p className="mt-1.5 text-[12px] text-destructive">{error.message}</p> : null}
    </div>
  );
}
