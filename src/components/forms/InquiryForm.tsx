"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { inquiryKindLabels } from "@/lib/site";
import type { InquiryKind } from "@/types";

const kinds = Object.entries(inquiryKindLabels) as [InquiryKind, string][];

const fieldClass =
  "mt-2 w-full border border-sage/40 bg-linen px-3 py-2.5 text-sm text-clay outline-none transition duration-200 placeholder:text-ash/45 focus:border-gold focus:bg-white";

export function InquiryForm() {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          organization: data.get("organization") || undefined,
          kind: data.get("kind"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error ?? "提交失敗，請稍後再試。");
      }

      form.reset();
      setStatus("ok");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "提交失敗，請稍後再試。",
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
      aria-describedby={
        status === "ok" || status === "error" ? `${formId}-status` : undefined
      }
    >
      <Field label="姓名" name="name" autoComplete="name" required formId={formId} />
      <Field
        label="電郵"
        name="email"
        type="email"
        autoComplete="email"
        required
        formId={formId}
      />
      <Field
        label="機構／教會（選填）"
        name="organization"
        autoComplete="organization"
        formId={formId}
      />
      <div>
        <label htmlFor={`${formId}-kind`} className="block text-sm text-pine">
          諮詢類型
        </label>
        <select
          id={`${formId}-kind`}
          name="kind"
          required
          defaultValue="series_book"
          className={fieldClass}
        >
          {kinds.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${formId}-message`} className="block text-sm text-pine">
          想告訴我們的事
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          className={`${fieldClass} min-h-[8rem] resize-y`}
          placeholder="例如：想試做刺繡／毛巾／遮袋、人數、用途、交貨時間…"
        />
      </div>
      <Button type="submit" variant="primary" disabled={status === "loading"}>
        {status === "loading" ? "送出中…" : "送出諮詢"}
      </Button>
      <div id={`${formId}-status`} aria-live="polite" className="min-h-[1.25rem]">
        {status === "ok" ? (
          <p className="text-sm text-moss">已收到。我們會盡快以電郵回覆你。</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-800" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  formId,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  formId: string;
}) {
  const id = `${formId}-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-pine">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  );
}
