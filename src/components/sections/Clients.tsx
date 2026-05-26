"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/clients-data";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

function ClientLogoCard({
  name,
  logo,
  className = "w-[200px] sm:w-[220px]",
}: {
  name: string;
  logo: string;
  className?: string;
}) {
  return (
    <div
      className={`group flex h-[120px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-6 py-5 shadow-md shadow-slate-200/50 transition-all duration-300 hover:border-[#1a73e8]/30 hover:shadow-xl hover:shadow-blue-500/15 sm:h-[140px] ${className}`}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={180}
        height={80}
        className="max-h-16 w-full max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20"
      />
    </div>
  );
}

export function Clients({
  showHeader = true,
  showViewAllLink = true,
  layout = "marquee",
}: {
  showHeader?: boolean;
  showViewAllLink?: boolean;
  layout?: "marquee" | "grid";
}) {
  const track = (
    <>
      {CLIENT_LOGOS.map((client) => (
        <ClientLogoCard key={client.slug} name={client.name} logo={client.logo} />
      ))}
    </>
  );

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1a73e8]/30 to-transparent" />
      </div>

      <div className="container-max relative">
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
              Our <span className="gradient-text">Clients</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
            >
              Brands across aviation, hospitality, finance, healthcare, and more trust us
              with their digital growth.
            </motion.p>
          </div>
        )}

        {layout === "marquee" ? (
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent sm:w-20" />
            <InfiniteMarquee duration={55} className="py-2">
              {track}
            </InfiniteMarquee>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {CLIENT_LOGOS.map((client, i) => (
              <motion.div
                key={client.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <ClientLogoCard
                  name={client.name}
                  logo={client.logo}
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        )}

        {showViewAllLink && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#1a73e8] transition-colors hover:text-[#1557b0]"
            >
              View all clients
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="mt-2 block text-sm italic text-slate-500">.... and many more</span>
          </motion.p>
        )}
      </div>
    </section>
  );
}
