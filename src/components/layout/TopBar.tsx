import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { COMPANY, PHONE_URL, SOCIAL } from "@/lib/constants";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.19h.05C11.91 9.14 13.72 8 16.4 8 21.16 8 22 11.13 22 15.2V24h-4v-7.8c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.12V24h-4V8z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zM17.5 6.6a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2a3.2 3.2 0 0 0 0-6.4z"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.5h3.05V9.41c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.33l-.53 3.5h-2.8V24C19.61 23.1 24 18.1 24 12.07z"
      />
    </svg>
  );
}

export function TopBar() {
  return (
  <>
    {/* Mobile: compact strip */}
    <div className="border-b border-slate-800 bg-slate-950 px-4 py-2 text-xs text-white sm:hidden">
      <div className="flex items-center justify-between gap-2">
        <a
          href={PHONE_URL}
          className="flex min-w-0 items-center gap-1.5 truncate font-medium hover:text-[#e65100]"
        >
          <Phone className="h-3.5 w-3.5 shrink-0 text-[#dc2626]" />
          <span className="truncate">{COMPANY.phones[0]}</span>
        </a>
        <a
          href={`mailto:${COMPANY.email}`}
          className="touch-target shrink-0 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white"
          aria-label={`Email ${COMPANY.email}`}
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden border-b border-slate-800 bg-slate-950 text-sm text-white sm:block">
      <div className="container-max flex items-center justify-between py-3">
        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          <a
            href={PHONE_URL}
            className="flex items-center gap-2 transition-colors hover:text-[#e65100]"
          >
            <Phone className="h-4 w-4 text-[#dc2626]" />
            {COMPANY.phones[0]}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-2 transition-colors hover:text-[#e65100]"
          >
            <Mail className="h-4 w-4 text-[#dc2626]" />
            <span className="hidden md:inline">{COMPANY.email}</span>
            <span className="md:hidden">Email</span>
          </a>
        </div>
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href={COMPANY.website}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap font-medium text-slate-300 transition-colors hover:text-white"
          >
            {COMPANY.website.replace("https://", "")}
          </Link>
          <div className="ml-1 flex items-center gap-2 border-l border-slate-700/80 pl-5">
            {SOCIAL.filter((s) =>
              ["LinkedIn", "Instagram", "Facebook"].includes(s.label)
            ).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="touch-target rounded-md text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {social.icon === "linkedin" ? (
                  <LinkedInIcon className="h-4 w-4" />
                ) : social.icon === "instagram" ? (
                  <InstagramIcon className="h-4 w-4" />
                ) : (
                  <FacebookIcon className="h-4 w-4" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
