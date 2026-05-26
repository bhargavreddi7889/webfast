import { Resend } from "resend";
import { SITE } from "@/lib/constants";

const DEFAULT_FROM = `${SITE.name} <onboarding@resend.dev>`;

export function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL_TO?.trim();
  const from = normalizeFromEmail(process.env.RESEND_FROM_EMAIL);

  return {
    apiKey,
    to,
    from,
    isConfigured: Boolean(apiKey && to),
  };
}

/** Unquoted .env values like `Name <email@x.com>` often break at the space. */
function normalizeFromEmail(raw?: string): string {
  let value = raw?.trim();
  if (!value) return DEFAULT_FROM;

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1).trim();
  }

  const angle = value.match(/<([^>]+)>/);
  const emailPart = (angle ? angle[1] : value).trim();
  if (!emailPart.includes("@")) return DEFAULT_FROM;

  return value;
}

let resendClient: Resend | null = null;

export function getResendClient(): Resend | null {
  const { apiKey, isConfigured } = getResendConfig();
  if (!isConfigured || !apiKey) return null;
  if (!resendClient) resendClient = new Resend(apiKey);
  return resendClient;
}

export type SendOwnerEmailInput = {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
};

export async function sendOwnerEmail(input: SendOwnerEmailInput) {
  const { to, from, isConfigured } = getResendConfig();
  const client = getResendClient();

  if (!isConfigured || !client || !to) {
    return {
      ok: false as const,
      error:
        "Email service is not configured. Add RESEND_API_KEY and CONTACT_EMAIL_TO to .env.local, then restart the dev server.",
    };
  }

  const { data, error } = await client.emails.send({
    from,
    to,
    replyTo: input.replyTo,
    subject: input.subject,
    html: input.html,
    attachments: input.attachments,
  });

  if (error) {
    console.error("Resend send error:", error);
    return {
      ok: false as const,
      error: error.message || "Failed to send email. Check Resend dashboard and sender domain.",
    };
  }

  return { ok: true as const, id: data?.id };
}
