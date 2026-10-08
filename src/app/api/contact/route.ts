import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Name, phone, and message are required." },
      { status: 400 },
    );
  }

  const payload = {
    name,
    phone,
    email: email || "Not provided",
    message,
    _subject: `Care inquiry from ${name}`,
    _template: "table",
    _captcha: "false",
  };

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = (await response.json().catch(() => ({}))) as {
    success?: string | boolean;
    message?: string;
    error?: string;
  };

  if (!response.ok) {
    return NextResponse.json(
      {
        error:
          result.message ||
          result.error ||
          "Could not send your inquiry. Please call us instead.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      typeof result.message === "string"
        ? result.message
        : "Inquiry sent. We'll follow up soon.",
  });
}
