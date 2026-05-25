import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  variant?: "default" | "footer" | "navbar";
  href?: string;
}

export function BrandLogo({
  className,
  imageClassName,
  showText = false,
  variant = "default",
  href = "/",
}: BrandLogoProps) {
  const sizeClasses =
    variant === "footer"
      ? "h-14 w-auto max-w-[220px] sm:h-16"
      : variant === "navbar"
        ? "h-11 w-auto max-w-[min(100%,220px)] sm:h-14 sm:max-w-[280px] md:h-[4.25rem] lg:h-[4.75rem] lg:max-w-[320px]"
        : "h-12 w-auto max-w-[200px] sm:h-14";

  return (
    <Link
      href={href}
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <Image
        src="/logo.png"
        alt={`${SITE.name} logo`}
        width={320}
        height={96}
        className={cn("object-contain object-left", sizeClasses, imageClassName)}
        priority
      />
      {showText && variant !== "footer" && (
        <div className="hidden min-w-0 xl:block">
          <span className="block truncate text-base font-bold tracking-tight text-slate-900">
            {SITE.name}
          </span>
          <span className="block truncate text-[10px] font-medium uppercase tracking-wider text-[#e65100]">
            {SITE.tagline}
          </span>
        </div>
      )}
    </Link>
  );
}
