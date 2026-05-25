"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL, GET_QUOTE_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section className="section-padding">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a73e8] via-slate-800 to-[#22c55e] px-5 py-10 text-center sm:rounded-3xl sm:px-10 sm:py-14 lg:px-12 lg:py-16"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-blue-100 sm:mt-4 sm:text-lg">
              Book a free consultation or request a custom quote — our team will craft a
              strategy tailored to your goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <Button
                variant="secondary"
                size="lg"
                href={GET_QUOTE_URL}
                className="w-full !bg-white !text-[#1a73e8] hover:!bg-blue-50 sm:w-auto"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="inverse"
                size="lg"
                href={GET_QUOTE_URL}
                className="w-full sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Book Consultation
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href={WHATSAPP_URL}
                external
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
