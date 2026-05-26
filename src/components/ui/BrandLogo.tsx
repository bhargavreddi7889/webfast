import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  variant?: "default" | "footer" | "navbar" | "hero";
  href?: string;
  /** When false, renders logo without a link (e.g. inside forms) */
  linked?: boolean;
}

export function BrandLogo({
  className,
  imageClassName,
  showText = false,
  variant = "default",
  href = "/",
  linked = true,
}: BrandLogoProps) {
  const sizeClasses =
    variant === "footer"
      ? "h-16 w-auto max-w-[280px] sm:h-20 sm:max-w-[320px]"
      : variant === "navbar"
        ? "h-11 w-auto max-w-[min(100%,200px)] sm:h-[4.5rem] sm:max-w-[300px] md:h-[5rem] md:max-w-[360px] lg:h-20 lg:max-w-[420px] xl:h-24 xl:max-w-[460px]"
        : variant === "hero"
          ? "h-16 w-auto max-w-full sm:h-20 md:h-24 lg:max-w-[420px]"
          : "h-14 w-auto max-w-[240px] sm:h-16";

  const image = (
    <Image
      src="/logo.png"
      alt={`${SITE.name} logo`}
      width={480}
      height={144}
      className={cn("object-contain object-left", sizeClasses, imageClassName)}
      priority={variant === "navbar" || variant === "hero"}
    />
  );

  const textBlock =
    showText && variant !== "footer" ? (
      <div className="hidden min-w-0 xl:block">
        <span className="block truncate text-base font-bold tracking-tight text-slate-900">
          {SITE.name}
        </span>
        <span className="block truncate text-[10px] font-medium uppercase tracking-wider text-[#e65100]">
          {SITE.tagline}
        </span>
      </div>
    ) : null;

  if (!linked) {
    return (
      <div className={cn("flex shrink-0 items-center", className)}>
        {image}
        {textBlock}
      </div>
    );
  }

  return (
    <Link href={href} className={cn("group flex shrink-0 items-center", className)}>
      {image}
      {textBlock}
    </Link>
  );
}
