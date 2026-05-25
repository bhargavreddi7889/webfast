"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/clients-data";

export function Clients({
  showHeader = true,
  showViewAllLink = true,
}: {
  showHeader?: boolean;
  showViewAllLink?: boolean;
}) {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1a73e8]/30 to-transparent" />
      </div>

      <div className="container-max relative px-4 sm:px-6 lg:px-8">
        {showHeader && (
        <div className="mb-10 px-4 text-center sm:mb-14 sm:px-0">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-[#1a73e8]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#1a73e8]"
          >
            Trusted Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Our{" "}
            <span className="gradient-text">Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
          >
            Brands across aviation, healthcare, finance, hospitality, and more trust us with
            their digital growth.
          </motion.p>
        </div>
        )}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {CLIENT_LOGOS.map((client, i) => (
            <motion.div
              key={client.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative"
            >
              <div className="flex min-h-[100px] items-center justify-center rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1a73e8]/25 hover:shadow-xl hover:shadow-blue-500/10 sm:min-h-[140px] sm:rounded-2xl sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 scale-x-0 rounded-t-2xl bg-gradient-to-r from-[#1a73e8] to-[#22c55e] transition-transform duration-300 group-hover:scale-x-100" />
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={200}
                  height={100}
                  className="max-h-14 w-full max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-110 sm:max-h-20"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAllLink && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#1a73e8] transition-colors hover:text-[#1557b0]"
            >
              View all clients
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="mt-2 block text-sm text-slate-500">.... and many more</span>
          </motion.p>
        )}
      </div>
    </section>
  );
}
