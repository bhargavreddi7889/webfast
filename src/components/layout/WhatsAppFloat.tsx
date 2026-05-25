"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6 sm:gap-3">
      <motion.a
        href={PHONE_URL}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-blue-500/30 sm:h-14 sm:w-14"
      >
        <Phone className="h-6 w-6" />
      </motion.a>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 sm:h-14 sm:w-14"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
