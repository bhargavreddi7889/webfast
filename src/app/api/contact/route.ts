import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { sendOwnerEmail } from "@/lib/email";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    if (!name?.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email?.trim() && !phone?.trim()) {
      return NextResponse.json(
        { error: "Phone or email is required." },
        { status: 400 }
      );
    }

    const contactEmail =
      (typeof email === "string" && email.trim()) ||
      (phone ? `lead+${String(phone).replace(/\D/g, "")}@webfasttech.com` : "");

    const messageText =
      (typeof message === "string" && message.trim()) ||
      "No message provided.";

    const safe = {
      name: escapeHtml(String(name).trim()),
      company: escapeHtml(String(company || "Not provided")),
      email: escapeHtml(contactEmail),
      phone: escapeHtml(String(phone || "Not provided")),
      service: escapeHtml(String(service || "General Inquiry")),
      message: escapeHtml(messageText),
    };

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safe.name}</p>
      <p><strong>Company:</strong> ${safe.company}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Phone:</strong> ${safe.phone}</p>
      <p><strong>Service:</strong> ${safe.service}</p>
      <p><strong>Message:</strong></p>
      <p>${safe.message}</p>
    `;

    const result = await sendOwnerEmail({
      subject: `[${SITE.name}] New inquiry from ${String(name).trim()} — ${service || "General"}`,
      html: emailHtml,
      replyTo: contactEmail.includes("@") ? contactEmail : undefined,
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 503 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
