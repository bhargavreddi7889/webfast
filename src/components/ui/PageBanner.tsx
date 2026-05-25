interface PageBannerProps {
  label?: string;
  title: string;
  description?: string;
}

export function PageBanner({ label, title, description }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0f2744] to-slate-900 pt-28 pb-12 sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1a73e8]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#22c55e]/15 blur-3xl" />
      </div>
      <div className="container-max relative px-4 text-center sm:px-6 lg:px-8">
        {label && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#22c55e]">
            {label}
          </p>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300 sm:mt-4 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
