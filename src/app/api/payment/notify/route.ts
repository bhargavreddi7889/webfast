import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { sendOwnerEmail } from "@/lib/email";
import {
  buildOwnerWhatsAppUrl,
  buildVerificationEmailHtml,
  buildVerificationWhatsAppMessage,
} from "@/lib/payment";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const packageName = String(formData.get("packageName") || "").trim();
    const packageId = String(formData.get("packageId") || "").trim();
    const priceInr = Number(formData.get("priceInr") || 0);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const utr = String(formData.get("utr") || "").trim();
    const screenshot = formData.get("screenshot");

    if (!packageName || !packageId || !priceInr) {
      return NextResponse.json({ error: "Invalid package details." }, { status: 400 });
    }

    if (!name || !phone || !utr) {
      return NextResponse.json(
        { error: "Name, phone, and UTR are required." },
        { status: 400 }
      );
    }

    const payload = {
      event: "verification_submitted" as const,
      packageName,
      packageId,
      priceInr,
      name,
      phone,
      email,
      utr,
    };

    const whatsappUrl = buildOwnerWhatsAppUrl(buildVerificationWhatsAppMessage(payload));

    const attachments: { filename: string; content: Buffer }[] = [];
    if (screenshot instanceof File && screenshot.size > 0) {
      const buffer = Buffer.from(await screenshot.arrayBuffer());
      const ext = screenshot.name.split(".").pop() || "jpg";
      attachments.push({
        filename: `payment-proof-${packageId}.${ext}`,
        content: buffer,
      });
    }

    const result = await sendOwnerEmail({
      subject: `[${SITE.name}] New Payment Received — ${packageName}`,
      html: buildVerificationEmailHtml(payload),
      replyTo: email && email.includes("@") ? email : undefined,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 503 });
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      whatsappUrl,
    });
  } catch (error) {
    console.error("Payment notify error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us on WhatsApp." },
      { status: 500 }
    );
  }
}
