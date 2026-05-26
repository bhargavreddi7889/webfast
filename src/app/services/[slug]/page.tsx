import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { ServicePageContent } from "@/components/services/ServicePageContent";
import {
  SERVICES,
  getServiceSlugs,
  type ServiceSlug,
} from "@/lib/services-data";
import { SITE } from "@/lib/constants";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { withSiteBranding } from "@/lib/site-metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug as ServiceSlug];
  if (!service) return { title: "Service Not Found" };

  const title = `${service.title} | ${SITE.name}`;
  const description = service.shortDescription;

  return withSiteBranding(
    {
      title,
      description,
      alternates: {
        canonical: `${SITE.url}/services/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE.url}/services/${slug}`,
        type: "website",
      },
      twitter: {
        title,
        description,
      },
    },
    { path: `/services/${slug}` }
  );
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES[slug as ServiceSlug];

  if (!service) notFound();

  const url = `${SITE.url}/services/${slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service.title, service.overview, url)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faqs)),
        }}
      />
      <SiteHeader />
      <main>
        <ServicePageContent slug={service.slug} />
      </main>
      <Footer />
    </>
  );
}
