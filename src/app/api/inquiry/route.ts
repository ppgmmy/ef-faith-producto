import { NextResponse } from "next/server";
import { parseInquiryPayload } from "@/lib/inquiry";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "無法解析請求。" }, { status: 400 });
  }

  const parsed = parseInquiryPayload(json);
  if (parsed.error || !parsed.data) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  console.info("[inquiry]", {
    at: new Date().toISOString(),
    ...parsed.data,
  });

  return NextResponse.json({ ok: true, message: "已收到諮詢。" });
}
