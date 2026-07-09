import type { SubmissionStatus } from "@/types/admin";

export type SubmissionListItem = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  status: SubmissionStatus;
  summary: string;
};

const statusStyles: Record<SubmissionStatus, string> = {
  new: "bg-[color:var(--gold)]/20 text-[color:var(--clay)]",
  reviewing: "bg-secondary text-foreground",
  contacted: "bg-[color:var(--clay)]/15 text-[color:var(--clay)]",
  converted: "bg-[color:var(--night)] text-[color:var(--bone)]",
  archived: "bg-muted text-muted-foreground",
};

export function StatusBadge({ status }: { status: SubmissionStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export function SubmissionList<T>({
  rows,
  toListItem,
  emptyLabel,
  onOpen,
}: {
  rows: T[];
  toListItem: (row: T) => SubmissionListItem;
  emptyLabel: string;
  onOpen: (row: T) => void;
}) {
  if (rows.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center text-[13px] text-muted-foreground">
        {emptyLabel}
      </div>
    );
  }

  return (
    <ul className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
      {rows.map((row) => {
        const item = toListItem(row);
        return (
          <li key={item.id}>
            <button
              onClick={() => onOpen(row)}
              className="flex w-full flex-col gap-2 p-5 text-left hover:bg-secondary/50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate font-medium">{item.name}</p>
                  <StatusBadge status={item.status} />
                </div>
                <p className="mt-1 truncate text-[13px] text-muted-foreground">{item.email}</p>
                <p className="mt-1 truncate text-[13px] text-muted-foreground">{item.summary}</p>
              </div>
              <p className="shrink-0 text-[12px] text-muted-foreground">
                {new Date(item.createdAt).toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
