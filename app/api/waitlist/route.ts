import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const email = String(record.email ?? "")
    .trim()
    .toLowerCase();

  if (!emailPattern.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
  }

  // Placeholder intake: do not persist. Wire to an ESP or CRM before launch.
  return NextResponse.json({
    ok: true,
    message: "Thanks — we’ll be in touch when early access opens.",
  });
}
