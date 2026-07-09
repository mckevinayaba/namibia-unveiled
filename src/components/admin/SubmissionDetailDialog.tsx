import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submissionStatuses, type SubmissionStatus } from "@/types/admin";

export type DetailField = { label: string; value: string };

export function SubmissionDetailDialog({
  open,
  onOpenChange,
  title,
  createdAt,
  fields,
  status,
  internalNotes,
  onSave,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  createdAt: string;
  fields: DetailField[];
  status: SubmissionStatus;
  internalNotes: string;
  onSave: (status: SubmissionStatus, internalNotes: string) => Promise<boolean>;
}) {
  const [draftStatus, setDraftStatus] = useState(status);
  const [draftNotes, setDraftNotes] = useState(internalNotes);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setDraftStatus(status);
      setDraftNotes(internalNotes);
      setSaveError(null);
    }
  }, [open, status, internalNotes]);

  async function handleSave() {
    setSaving(true);
    setSaveError(null);
    const success = await onSave(draftStatus, draftNotes);
    setSaving(false);
    if (!success) {
      setSaveError("Couldn't save your changes. Please try again.");
      return;
    }
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto rounded-3xl border-border sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Received{" "}
            {new Date(createdAt).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3">
          {fields.map((f) => (
            <div
              key={f.label}
              className="grid grid-cols-3 gap-3 border-b border-border pb-3 text-[13px]"
            >
              <p className="text-muted-foreground">{f.label}</p>
              <p className="col-span-2 break-words">{f.value || "—"}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid gap-4">
          <div>
            <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Status
            </label>
            <Select
              value={draftStatus}
              onValueChange={(v) => setDraftStatus(v as SubmissionStatus)}
            >
              <SelectTrigger className="mt-2 rounded-2xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {submissionStatuses.map((s) => (
                  <SelectItem key={s} value={s} className="capitalize">
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Internal notes
            </label>
            <Textarea
              value={draftNotes}
              onChange={(e) => setDraftNotes(e.target.value)}
              rows={4}
              placeholder="Notes for the team — not visible to the traveller."
              className="mt-2 rounded-2xl"
            />
          </div>

          {saveError ? <p className="text-[12px] text-destructive">{saveError}</p> : null}

          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
