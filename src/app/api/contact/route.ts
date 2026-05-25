import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const messageText =
      (typeof message === "string" && message.trim()) ||
      "No message provided (lead / audit form submission).";

    const safe = {
      name: escapeHtml(String(name)),
      company: escapeHtml(String(company || "Not provided")),
      email: escapeHtml(String(email)),
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

    if (!resend || !process.env.CONTACT_EMAIL_TO) {
      console.log("Contact form submission (Resend not configured):", body);
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please call or WhatsApp us directly.",
        },
        { status: 503 }
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: String(email),
      subject: `[${SITE.name}] New inquiry from ${name} — ${service || "General"}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
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
