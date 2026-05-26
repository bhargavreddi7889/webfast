"use client";

import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  /** Animation duration in seconds — higher = slower */
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function InfiniteMarquee({
  children,
  duration = 45,
  className,
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        pauseOnHover && "[&:hover_.marquee-track]:animation-play-state-paused]",
        className
      )}
    >
      <div
        className="marquee-track flex w-max gap-6"
        style={{
          animation: `marquee-scroll ${duration}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
