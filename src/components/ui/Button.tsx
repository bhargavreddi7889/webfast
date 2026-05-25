import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp"
  | "cta"
  | "inverse";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#1a73e8] to-[#22c55e] text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:brightness-105 border border-transparent",
  cta:
    "bg-gradient-to-r from-[#e65100] to-[#dc2626] text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:brightness-105 border border-transparent",
  secondary:
    "bg-slate-800 text-white shadow-md hover:bg-slate-900 border border-slate-700",
  outline:
    "border-2 border-[#1a73e8] bg-white text-[#1a73e8] shadow-sm hover:bg-blue-50 hover:border-[#1557b0] hover:text-[#1557b0]",
  inverse:
    "border-2 border-white bg-white/10 text-white shadow-sm backdrop-blur-sm hover:bg-white/20 hover:border-white",
  ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:brightness-110 border border-[#1da851]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  external?: boolean;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  external,
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm font-semibold",
    md: "px-6 py-3 text-sm font-semibold",
    lg: "px-8 py-3.5 text-base font-bold",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8] focus-visible:ring-offset-2 disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
