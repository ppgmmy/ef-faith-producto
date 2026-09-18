import type { InquiryKind, InquiryPayload } from "@/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const kinds: InquiryKind[] = [
  "series_book",
  "custom_gift",
  "church",
  "workshop",
  "other",
];

function isInquiryKind(value: unknown): value is InquiryKind {
  return typeof value === "string" && kinds.includes(value as InquiryKind);
}

export function parseInquiryPayload(input: unknown): {
  data?: InquiryPayload;
  error?: string;
} {
  if (!input || typeof input !== "object") {
    return { error: "無效的請求內容。" };
  }

  const body = input as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const organization =
    typeof body.organization === "string" ? body.organization.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const kind = body.kind;

  if (!name) return { error: "請填寫姓名。" };
  if (!email || !emailPattern.test(email)) return { error: "請填寫有效電郵。" };
  if (!isInquiryKind(kind)) return { error: "請選擇諮詢類型。" };
  if (!message || message.length < 8) {
    return { error: "請稍為多寫幾句，方便我們了解需要。" };
  }

  return {
    data: {
      name,
      email,
      organization: organization || undefined,
      kind,
      message,
    },
  };
}
