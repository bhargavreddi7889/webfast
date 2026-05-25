"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  service?: string;
  variant?: "default" | "hero";
  submitLabel?: string;
}

const inputBase =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

export function ContactForm({
  service,
  variant = "default",
  submitLabel,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const isHero = variant === "hero";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service") || service || "General Inquiry",
          message: data.get("message"),
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          typeof result.error === "string"
            ? result.error
            : "Failed to send message."
        );
      }

      setStatus("success");
      setFeedback("Thank you! We'll get back to you within 24 hours.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call or WhatsApp us directly."
      );
    }
  }

  const labelClass = cn(
    "mb-1.5 block text-sm font-semibold",
    isHero ? "text-slate-900" : "text-slate-700"
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        className={cn(
          "grid gap-4",
          isHero ? "grid-cols-1 sm:grid-cols-2" : "sm:grid-cols-2"
        )}
      >
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder={isHero ? "Enter Your First Name" : "Your Name"}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="company"
            name="company"
            required={isHero}
            placeholder="Enter Your Company Name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter Your Email Address"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-brand-red">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter Your Number"
            className={inputBase}
          />
        </div>
        {!service && !isHero && (
          <div className="sm:col-span-2">
            <label htmlFor="service" className={labelClass}>
              Service
            </label>
            <select id="service" name="service" className={inputBase} defaultValue="">
              <option value="" disabled>
                Select Service
              </option>
              <option value="SEO">SEO</option>
              <option value="PPC">PPC Advertising</option>
              <option value="Social Media">Social Media Marketing</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Branding">Branding</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message {!isHero && <span className="text-brand-red">*</span>}
        </label>
        <textarea
          id="message"
          name="message"
          required={!isHero}
          rows={isHero ? 3 : 4}
          placeholder={isHero ? "Type Here!" : "Tell us about your project..."}
          className={cn(inputBase, "resize-none")}
        />
      </div>
      {service && <input type="hidden" name="service" value={service} />}
      <Button
        type="submit"
        variant={isHero ? "cta" : "primary"}
        className={cn("w-full", !isHero && "sm:w-auto")}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {submitLabel ?? (isHero ? "Book a Free Audit" : "Send Message")}
      </Button>
      {feedback && (
        <p
          className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
