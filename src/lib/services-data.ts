import type { LucideIcon } from "lucide-react";
import { SERVICES_CATALOG } from "@/lib/services-catalog";

export type ServiceSlug =
  | "web-development"
  | "ecommerce"
  | "wordpress-development"
  | "custom-web-apps"
  | "hrms"
  | "school-website"
  | "hospital-website"
  | "real-estate-website"
  | "seo"
  | "social-media-marketing"
  | "ppc"
  | "content-marketing"
  | "local-seo"
  | "ecommerce-marketing"
  | "app-development"
  | "hosting"
  | "ui-ux-design"
  | "branding"
  | "graphic-designing"
  | "software-development";

export type ServiceCategory = "web" | "marketing" | "other";

export interface ServiceDetail {
  slug: ServiceSlug;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  icon: LucideIcon;
  overview: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Record<ServiceSlug, ServiceDetail> = SERVICES_CATALOG;

export const HOME_SERVICES = (
  [
    "web-development",
    "seo",
    "social-media-marketing",
    "ecommerce",
    "app-development",
    "hosting",
    "hrms",
    "branding",
    "ppc",
  ] as const
).map((slug) => {
  const s = SERVICES[slug];
  return {
    slug,
    title: s.title,
    description: s.shortDescription,
    icon: s.icon,
  };
});

export function getServiceSlugs(): ServiceSlug[] {
  return Object.keys(SERVICES) as ServiceSlug[];
}

export const SERVICE_CATEGORIES: {
  key: ServiceCategory;
  label: string;
}[] = [
  { key: "web", label: "Web Services" },
  { key: "marketing", label: "Marketing Services" },
  { key: "other", label: "Other Services" },
];
