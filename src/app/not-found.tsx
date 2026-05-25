import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">404</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary" href="/">
            Back to Home
          </Button>
          <Button variant="outline" href="/#contact">
            Contact Us
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Browse our{" "}
          <Link href="/#services" className="font-medium text-blue-600 hover:underline">
            services
          </Link>{" "}
          or{" "}
          <Link href="/services/seo" className="font-medium text-blue-600 hover:underline">
            SEO solutions
          </Link>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
