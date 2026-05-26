import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${SITE.name}`,
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-max py-32">
        <h1 className="text-4xl font-bold text-slate-900">Terms & Conditions</h1>
        <div className="prose prose-slate mt-8 max-w-3xl space-y-4 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString("en-IN")}</p>
          <p>
            By accessing and using the {SITE.name} website, you agree to be bound by these Terms
            and Conditions. Please read them carefully.
          </p>
          <h2 className="text-xl font-bold text-slate-900">Services</h2>
          <p>
            All services are provided subject to separate agreements. Quotes and proposals are
            valid for 30 days unless otherwise stated.
          </p>
          <h2 className="text-xl font-bold text-slate-900">Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, and logos, is the property of{" "}
            {SITE.name} and protected by applicable copyright laws.
          </p>
          <h2 className="text-xl font-bold text-slate-900">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href={`mailto:${SITE.email}`} className="text-blue-600 hover:underline">
              {SITE.email}
            </a>
            .
          </p>
          <Link href="/" className="inline-block text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
