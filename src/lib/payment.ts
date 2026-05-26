import { SITE } from "@/lib/constants";

/** UPI QR image uploaded to /public */
export const PAYMENT_QR_SRC = "/QR%20code.jpeg";

export type PaymentNotifyEvent = "paid_clicked" | "verification_submitted";

export interface PaymentNotifyPayload {
  event: PaymentNotifyEvent;
  packageName: string;
  packageId: string;
  priceInr: number;
  name?: string;
  phone?: string;
  email?: string;
  utr?: string;
}

export function buildOwnerWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildPaidClickedWhatsAppMessage(data: PaymentNotifyPayload): string {
  return [
    `*Payment update — ${SITE.name}*`,
    "",
    `Customer tapped *I Have Paid*`,
    `Plan: ${data.packageName}`,
    `Amount: ₹${data.priceInr.toLocaleString("en-IN")}`,
    "",
    "Waiting for UTR / verification details.",
  ].join("\n");
}

export function buildVerificationWhatsAppMessage(data: PaymentNotifyPayload): string {
  return [
    `*New Payment Received — ${SITE.name}*`,
    "",
    `Name: ${data.name || "—"}`,
    `Phone: ${data.phone || "—"}`,
    `Plan: ${data.packageName}`,
    `Amount: ₹${data.priceInr.toLocaleString("en-IN")}`,
    `UTR: ${data.utr || "—"}`,
    data.email ? `Email: ${data.email}` : "",
    "",
    "Screenshot attached in owner email (if uploaded).",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildPaidClickedEmailHtml(data: PaymentNotifyPayload): string {
  return `
    <h2>Customer marked payment as done</h2>
    <p>A visitor clicked <strong>I Have Paid</strong> on your website.</p>
    <p><strong>Plan:</strong> ${escapeHtml(data.packageName)}</p>
    <p><strong>Amount:</strong> ₹${data.priceInr.toLocaleString("en-IN")}</p>
    <p><strong>Package ID:</strong> ${escapeHtml(data.packageId)}</p>
    <p style="color:#64748b">They may submit UTR and payment proof shortly.</p>
  `;
}

export function buildVerificationEmailHtml(data: PaymentNotifyPayload): string {
  return `
    <h2>New Payment Received</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name || "—")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || "—")}</p>
    ${data.email ? `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>` : ""}
    <p><strong>Plan:</strong> ${escapeHtml(data.packageName)}</p>
    <p><strong>Amount:</strong> ₹${data.priceInr.toLocaleString("en-IN")}</p>
    <p><strong>UTR:</strong> ${escapeHtml(data.utr || "—")}</p>
    <p><strong>Screenshot:</strong> See attachment (if provided).</p>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
