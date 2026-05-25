"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SERVICE_MENU, WHATSAPP_URL, GET_QUOTE_URL } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "transition-all duration-300",
          scrolled ? "glass shadow-md shadow-slate-900/5 py-3" : "border-b border-slate-100 bg-white py-4 sm:py-5"
        )}
      >
        <nav className="container-max flex min-h-[60px] items-center justify-between gap-3 px-4 sm:min-h-[72px] sm:gap-4 sm:px-6 lg:min-h-[88px] lg:px-8">
          <BrandLogo variant="navbar" className="min-w-0 shrink-0 lg:flex-none" />

          <ul className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) =>
              link.hasDropdown === true ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-blue"
                    aria-expanded={megaOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        megaOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full z-50 mt-2 w-[680px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
                      >
                        <div className="grid grid-cols-3 gap-6">
                          <MegaColumn title="Web Services" items={SERVICE_MENU.web} />
                          <MegaColumn
                            title="Marketing Services"
                            items={SERVICE_MENU.marketing}
                          />
                          <MegaColumn title="Other Services" items={SERVICE_MENU.other} />
                        </div>
                        <div className="mt-4 border-t border-slate-100 pt-4 text-center">
                          <Link
                            href="/#services"
                            className="text-sm font-semibold text-brand-blue hover:text-brand-red"
                          >
                            View all services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden items-center gap-2 xl:flex">
            <Button variant="outline" size="sm" href={GET_QUOTE_URL}>
              Get Quote
            </Button>
            <Button variant="primary" size="sm" href={GET_QUOTE_URL}>
              <Calendar className="h-4 w-4" />
              Book Consultation
            </Button>
            <Button variant="whatsapp" size="sm" href={WHATSAPP_URL} external>
              <WhatsAppIcon className="h-4 w-4" />
            </Button>
          </div>

          <button
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl xl:hidden"
            >
              <div className="flex h-full flex-col overflow-y-auto p-6 pt-6">
                <div className="mb-6 flex items-center justify-between">
                  <BrandLogo variant="default" showText={false} />
                  <button onClick={() => setMobileOpen(false)} aria-label="Close">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) =>
                    link.hasDropdown === true ? (
                      <li key={link.label}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform",
                              servicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {[
                                ...SERVICE_MENU.web,
                                ...SERVICE_MENU.marketing,
                                ...SERVICE_MENU.other,
                              ].map((item) => (
                                <Link
                                  key={item.href + item.label}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-brand-blue"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-auto space-y-3 pt-8">
                  <Button variant="primary" href={GET_QUOTE_URL} className="w-full">
                    Get Quote
                  </Button>
                  <Button variant="secondary" href={GET_QUOTE_URL} className="w-full">
                    Book Consultation
                  </Button>
                  <Button variant="whatsapp" href={WHATSAPP_URL} external className="w-full">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MegaColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-red">
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block rounded-lg px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-blue"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
