"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle, Loader2, Upload } from "lucide-react";
import { formatInr, type PricingPackage } from "@/lib/pricing-data";
import { PAYMENT_QR_SRC } from "@/lib/payment";

type Step = "qr" | "form" | "success";

interface PaymentFlowModalProps {
  pkg: PricingPackage | null;
  open: boolean;
  onClose: () => void;
}

function openWhatsApp(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function PaymentFlowModal({ pkg, open, onClose }: PaymentFlowModalProps) {
  const [step, setStep] = useState<Step>("qr");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep("qr");
        setName("");
        setPhone("");
        setEmail("");
        setUtr("");
        setScreenshot(null);
        setError("");
        setLoading(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!pkg) return null;

  function handleHavePaid() {
    setError("");
    setStep("form");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !utr.trim()) {
      setError("Please enter your name, phone, and UTR / transaction ID.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("packageId", pkg!.id);
      formData.append("packageName", pkg!.name);
      formData.append("priceInr", String(pkg!.priceInr));
      formData.append("name", name.trim());
      formData.append("phone", phone.trim());
      if (email.trim()) formData.append("email", email.trim());
      formData.append("utr", utr.trim());
      if (screenshot) formData.append("screenshot", screenshot);

      const res = await fetch("/api/payment/notify", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Could not submit payment details.");
      }

      if (data.whatsappUrl) {
        openWhatsApp(data.whatsappUrl);
      }

      setStep("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/70 p-4 backdrop-blur-sm sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="touch-target absolute right-3 top-3 z-10 rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 sm:right-4 sm:top-4"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a6e] px-6 pb-5 pt-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                {step === "qr" ? "Step 1 · Pay" : step === "form" ? "Step 2 · Verify" : "Done"}
              </p>
              <h2 className="mt-1 pr-8 text-xl font-bold leading-snug">{pkg.name}</h2>
              <p className="mt-2 text-2xl font-black text-amber-400">
                {formatInr(pkg.priceInr)}
              </p>
            </div>

            <div className="p-6">
              {step === "qr" && (
                <>
                  <p className="mb-4 text-center text-sm text-slate-600">
                    Scan the QR code below and pay the exact amount. Then tap{" "}
                    <strong>I Have Paid</strong>.
                  </p>
                  <div className="mx-auto flex justify-center">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-inner">
                      <Image
                        src={PAYMENT_QR_SRC}
                        alt="UPI payment QR code"
                        width={240}
                        height={240}
                        className="h-56 w-56 object-contain sm:h-60 sm:w-60"
                        priority
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs text-slate-500">
                    PhonePe · Google Pay · Paytm · Any UPI app
                  </p>

                  {error && (
                    <p className="mt-4 text-center text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="button"
                    onClick={handleHavePaid}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] py-4 text-base font-bold text-white shadow-lg transition hover:brightness-105"
                  >
                    <CheckCircle className="h-5 w-5" />
                    I Have Paid
                  </button>
                </>
              )}

              {step === "form" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-slate-600">
                    Submit your payment details so we can verify and start your project.
                  </p>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      UTR / Transaction ID *
                    </label>
                    <input
                      required
                      value={utr}
                      onChange={(e) => setUtr(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                      placeholder="12-digit UTR from your UPI app"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">
                      Payment screenshot (recommended)
                    </label>
                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-6 transition hover:border-[#1a73e8]/40 hover:bg-blue-50/50">
                      <Upload className="mb-2 h-8 w-8 text-slate-400" />
                      <span className="text-sm font-medium text-slate-600">
                        {screenshot ? screenshot.name : "Upload screenshot"}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          setScreenshot(e.target.files?.[0] ?? null)
                        }
                      />
                    </label>
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1a73e8] to-[#1557b0] py-4 text-base font-bold text-white shadow-lg disabled:opacity-60"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      "Submit Payment Details"
                    )}
                  </button>
                </form>
              )}

              {step === "success" && (
                <div className="py-4 text-center">
                  <CheckCircle className="mx-auto h-16 w-16 text-[#22c55e]" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Thank you!</h3>
                  <p className="mt-2 text-slate-600">
                    We received your payment details. Our team will verify and contact you
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-8 rounded-xl bg-[#1a73e8] px-8 py-3 font-semibold text-white"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
