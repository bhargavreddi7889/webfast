import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { COMPANY, PHONE_URL } from "@/lib/constants";

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
        <Link
          href={COMPANY.website}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-slate-300 transition-colors hover:text-white lg:inline"
        >
          {COMPANY.website.replace("https://", "")}
        </Link>
      </div>
    </div>
  </>
  );
}
