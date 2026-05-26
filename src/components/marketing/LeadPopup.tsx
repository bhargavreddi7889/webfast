"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Phone,
  ArrowRight,
  CheckCircle2,
  Flame,
  Star,
  Lock,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { COMPANY, GET_QUOTE_URL } from "@/lib/constants";
import Link from "next/link";

const STORAGE_KEY = "webfast-lead-popup-dismissed";
const POPUP_DELAY_MS = 2500;

const services = [
  "SEO Services",
  "Social Media Marketing",
  "Google Ads",
  "Website Development",
  "Branding Solutions",
];

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = window.setTimeout(() => setOpen(true), POPUP_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          service: "Free Digital Marketing Consultation (Popup)",
          message: "Lead captured from homepage promotional popup.",
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "Failed to send. Please try again or contact us directly."
        );
      }
      setStatus("success");
      setTimeout(dismiss, 2200);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close popup overlay"
            className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-sm"
            onClick={dismiss}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="fixed inset-x-0 bottom-0 z-[101] flex max-h-[min(92dvh,900px)] w-full flex-col pb-[env(safe-area-inset-bottom)] sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-h-[min(90vh,900px)] sm:w-[calc(100%-2rem)] sm:max-w-4xl sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            <div className="relative flex max-h-[inherit] flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl shadow-slate-900/40 sm:rounded-3xl">
              <button
                type="button"
                onClick={dismiss}
                aria-label="Close"
                className="touch-target absolute right-2 top-2 z-20 rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white sm:right-4 sm:top-4"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid min-h-0 flex-1 overflow-y-auto overscroll-contain lg:grid-cols-2 lg:overflow-hidden">
                {/* Left — offer copy */}
                <div className="border-b border-slate-100 bg-white p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <h2
                    id="lead-popup-title"
                    className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
                  >
                    Want More{" "}
                    <span className="text-[#1a73e8]">Leads &amp; Sales</span> for Your
                    Business?
                  </h2>
                  <p className="mt-3 text-sm font-semibold text-slate-700 sm:text-base">
                    <span className="text-[#1a73e8]">{COMPANY.name}</span> Helps You With:
                  </p>

                  <ul className="mt-5 space-y-3">
                    {services.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-700 sm:text-base">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a73e8]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/80 px-3 py-2.5 text-xs font-semibold text-slate-800 sm:text-sm">
                      <Flame className="h-4 w-4 shrink-0 text-orange-500" />
                      Trusted by 383+ Clients
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/80 px-3 py-2.5 text-xs font-semibold text-slate-800 sm:text-sm">
                      <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
                      5/5 Client Satisfaction
                    </div>
                  </div>

                  <p className="mt-6 text-sm font-bold text-[#0f2744] sm:text-base">
                    Claim Your <span className="text-[#1a73e8]">FREE</span> Digital Marketing
                    Consultation Now!
                  </p>
                </div>

                {/* Right — form */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] via-[#1a3a6e] to-[#0f2744] p-6 text-white sm:p-8">
                  <div className="pointer-events-none absolute -right-8 -top-8 opacity-20">
                    <Rocket className="h-40 w-40" />
                  </div>
                  <div className="pointer-events-none absolute bottom-4 right-4 opacity-15">
                    <TrendingUp className="h-24 w-24" />
                  </div>

                  <span className="inline-block rounded-full bg-[#1a73e8] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Limited Time Offer
                  </span>
                  <p className="mt-4 text-lg font-bold sm:text-xl">
                    Get Up to{" "}
                    <span className="text-3xl text-amber-400 sm:text-4xl">20% OFF</span>
                    <br />
                    on Our Services
                  </p>

                  {status === "success" ? (
                    <div className="mt-8 rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
                      <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
                      <p className="mt-3 font-semibold">Thank you! We&apos;ll call you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="relative mt-6 space-y-3">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Enter Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border-0 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none ring-2 ring-transparent focus:ring-amber-400"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="Enter Your Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl border-0 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none ring-2 ring-transparent focus:ring-amber-400"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-4 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300 disabled:opacity-70"
                      >
                        {status === "loading" ? "Sending…" : "Get Free Consultation"}
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </button>
                      {status === "error" && (
                        <p className="text-center text-xs text-red-300">
                          {errorMessage || "Something went wrong."}{" "}
                          <Link href={GET_QUOTE_URL} className="underline" onClick={dismiss}>
                            Contact us
                          </Link>
                        </p>
                      )}
                    </form>
                  )}

                  <p className="relative mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-300">
                    <Lock className="h-3.5 w-3.5" />
                    We respect your privacy. No spam!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
