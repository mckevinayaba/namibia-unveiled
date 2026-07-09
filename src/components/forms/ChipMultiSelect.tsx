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
      <label className="block text-[10.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value.includes(option);
          return (
            <button
              type="button"
              key={option}
              onClick={() => toggle(option)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-[12.5px] tracking-[0.01em] transition-all duration-200 ${
                active
                  ? "border-foreground bg-foreground text-background shadow-[0_6px_20px_-8px_rgba(20,22,28,0.35)]"
                  : "border-border/80 bg-background/60 text-foreground/75 hover:border-foreground/40 hover:text-foreground"
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
