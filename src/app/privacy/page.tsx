import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-max py-32">
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <div className="prose prose-slate mt-8 max-w-3xl space-y-4 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString("en-IN")}</p>
          <p>
            {SITE.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This
            policy explains how we collect, use, and protect your personal information when you
            visit our website or use our services.
          </p>
          <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
          <p>
            We may collect your name, email address, phone number, and any information you
            voluntarily provide through our contact forms.
          </p>
          <h2 className="text-xl font-bold text-slate-900">How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, provide services, improve our
            website, and send relevant communications with your consent.
          </p>
          <h2 className="text-xl font-bold text-slate-900">Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
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
