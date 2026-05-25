"use client";

import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { COMPANY, WHATSAPP_URL, SOCIAL } from "@/lib/constants";

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            label="Contact Us"
            title="Let's Start Your Project"
            description="Reach out for a free consultation. We typically respond within 2 hours."
          />
        )}

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-brand-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-semibold text-slate-900 hover:text-brand-blue"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-brand-red">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Phone</p>
                  <ul className="space-y-1">
                    {COMPANY.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="block font-semibold text-slate-900 hover:text-brand-blue"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-[#25D366]">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#25D366] hover:underline"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-brand-orange">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Address</p>
                  <p className="font-semibold text-slate-900">{COMPANY.address}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Branches: {COMPANY.branches.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="text-sm text-slate-600">
                  <p>GSTIN: {COMPANY.gstin}</p>
                  <p className="mt-1">UDYAM: {COMPANY.udyam}</p>
                  <p className="mt-1">ISO: {COMPANY.iso}</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="mb-3 text-sm font-medium text-slate-500">Follow Us</p>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-blue hover:text-white"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-slate-900">Send us a message</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
            <iframe
              title="Web Fast Technology Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8!2d77.0!3d28.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTmFqYWZnYXJoLCBEZWxoaQ!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] h-auto min-h-[220px] w-full sm:aspect-auto sm:min-h-[350px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
