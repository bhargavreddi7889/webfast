import {
  Search,
  MousePointerClick,
  Share2,
  Globe,
  Smartphone,
  Server,
  Palette,
  ShoppingCart,
  FileText,
  Users,
  Code2,
  GraduationCap,
  HeartPulse,
  Building2,
  MapPin,
  PenTool,
  Layers,
  type LucideIcon,
} from "lucide-react";
import type { ServiceDetail, ServiceSlug } from "@/lib/services-data";

const PROCESS = [
  { step: "Discovery", description: "Understand goals, audience & requirements" },
  { step: "Strategy", description: "Plan structure, tech stack & timeline" },
  { step: "Design", description: "UI/UX, branding & user flows" },
  { step: "Build", description: "Development, integrations & QA" },
  { step: "Launch", description: "Go-live, training & ongoing support" },
] as const;

const FAQS = [
  {
    question: "How long does the project take?",
    answer:
      "Timelines depend on scope — most projects take 2–8 weeks. We share a clear schedule after the discovery call.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer maintenance, updates, and dedicated support packages so your solution keeps performing.",
  },
  {
    question: "Can you customize the solution for my business?",
    answer:
      "Absolutely. Every project is tailored to your industry, goals, and budget.",
  },
];

function svc(
  slug: ServiceSlug,
  title: string,
  category: ServiceDetail["category"],
  icon: LucideIcon,
  shortDescription: string,
  overview: string,
  extraBenefits: string[] = []
): ServiceDetail {
  return {
    slug,
    title,
    category,
    icon,
    shortDescription,
    overview,
    benefits: [
      "Expert team based in Delhi NCR",
      "Mobile-friendly & performance-optimized",
      "Transparent communication & reporting",
      "Affordable solutions for all business sizes",
      "ISO certified — 383+ projects delivered",
      ...extraBenefits,
    ],
    process: [...PROCESS],
    faqs: [...FAQS],
  };
}

export const SERVICES_CATALOG: Record<ServiceSlug, ServiceDetail> = {
  "web-development": svc(
    "web-development",
    "Website Development",
    "web",
    Globe,
    "Professional, SEO-optimized websites for startups, businesses & brands.",
    "Web Fast Technology provides professional website development services for startups, businesses, educational institutes, healthcare companies, and e-commerce brands. We develop fast, secure, mobile-friendly, and SEO-optimized websites that help businesses grow online. Our expert developers create custom websites with modern designs, easy navigation, and advanced functionality according to your business requirements. We specialize in business websites, portfolio websites, corporate websites, dynamic websites, and custom web applications that improve user experience and generate quality leads."
  ),
  ecommerce: svc(
    "ecommerce",
    "E-Commerce Development",
    "web",
    ShoppingCart,
    "Powerful online stores with secure payments and scalable growth.",
    "We build powerful e-commerce websites that help businesses sell products online with ease. Our e-commerce development services include secure payment gateway integration, product management systems, order tracking, shopping cart setup, and mobile-friendly designs. Whether you need a Shopify store, WooCommerce website, or custom e-commerce platform, Web Fast Technology delivers scalable and user-friendly online shopping solutions that increase sales and customer engagement."
  ),
  "wordpress-development": svc(
    "wordpress-development",
    "WordPress Development",
    "web",
    Layers,
    "Affordable, SEO-friendly WordPress sites with custom themes & plugins.",
    "Web Fast Technology offers affordable and professional WordPress website development services for businesses of all sizes. We create responsive, SEO-friendly, and easy-to-manage WordPress websites with custom themes, plugins, and advanced functionality. Our WordPress solutions are ideal for startups, blogs, schools, businesses, hospitals, and e-commerce stores looking for a cost-effective and professional online presence."
  ),
  "custom-web-apps": svc(
    "custom-web-apps",
    "Custom Web Apps",
    "web",
    Code2,
    "Tailored web applications for CRM, booking, dashboards & automation.",
    "We develop custom web applications tailored to your business processes and operational requirements. From CRM systems and booking portals to management dashboards and automation tools, our web applications are secure, scalable, and performance-driven. Our team focuses on user experience, automation, and efficiency to help businesses streamline operations and improve productivity."
  ),
  hrms: svc(
    "hrms",
    "HRMS Software Development",
    "web",
    Users,
    "Cloud HRMS for attendance, payroll, leave & recruitment.",
    "Web Fast Technology provides advanced HRMS (Human Resource Management System) software solutions for companies and organizations. Our HRMS systems help manage employee attendance, payroll, leave management, recruitment, performance tracking, and employee records from a single dashboard. We develop cloud-based HRMS software that simplifies HR operations, improves workforce management, and enhances productivity for businesses of all sizes."
  ),
  "school-website": svc(
    "school-website",
    "School Website Development",
    "web",
    GraduationCap,
    "Modern school & college websites with admissions, portals & galleries.",
    "We design and develop professional school and college websites with modern layouts and user-friendly features. Our school website solutions include online admission forms, student login portals, fee management integration, event galleries, notice boards, and mobile-friendly designs. Web Fast Technology helps educational institutions build a strong digital presence with secure and easy-to-manage websites."
  ),
  "hospital-website": svc(
    "hospital-website",
    "Hospital Website Development",
    "web",
    HeartPulse,
    "Healthcare websites with appointments, doctor profiles & patient portals.",
    "Our hospital and healthcare website development services are designed to improve patient communication and online visibility. We create responsive healthcare websites with appointment booking systems, doctor profiles, emergency contact integration, and patient information portals. We ensure secure, professional, and SEO-friendly medical websites that build trust and improve patient engagement."
  ),
  "real-estate-website": svc(
    "real-estate-website",
    "Real Estate Website Development",
    "web",
    Building2,
    "Property listing sites with maps, inquiries & lead generation.",
    "We develop professional real estate websites with advanced property listing features, location maps, inquiry forms, virtual tours, and lead generation tools. Our websites help builders, property dealers, and real estate agencies attract buyers and generate high-quality leads online."
  ),
  seo: svc(
    "seo",
    "SEO (Search Engine Optimization)",
    "marketing",
    Search,
    "Rank higher on Google with data-driven SEO strategies.",
    "Web Fast Technology offers result-driven SEO services to improve your website ranking on Google and increase organic traffic. Our SEO experts use advanced keyword research, on-page optimization, technical SEO, content marketing, and link-building strategies to help businesses achieve long-term online growth. We are recognized as one of the best SEO companies in Delhi NCR for delivering measurable results and improving online visibility."
  ),
  "social-media-marketing": svc(
    "social-media-marketing",
    "Social Media Marketing",
    "marketing",
    Share2,
    "Build brand awareness with creative content & targeted campaigns.",
    "Our social media marketing services help businesses build strong brand awareness and engage with their audience on platforms like Facebook, Instagram, LinkedIn, and YouTube. We create creative content, targeted ad campaigns, reels, graphics, and promotional strategies that increase followers, engagement, website traffic, and sales."
  ),
  ppc: svc(
    "ppc",
    "PPC Advertising",
    "marketing",
    MousePointerClick,
    "Google & Meta ads that deliver instant traffic and quality leads.",
    "Web Fast Technology provides Google Ads and PPC advertising services that generate instant traffic and quality leads for your business. Our PPC experts create highly targeted campaigns that maximize ROI while reducing advertising costs. We manage Google Ads, Facebook Ads, YouTube Ads, and remarketing campaigns for startups, local businesses, and enterprises."
  ),
  "content-marketing": svc(
    "content-marketing",
    "Content Marketing",
    "marketing",
    FileText,
    "SEO blogs, website copy & content that converts.",
    "Our content marketing services help businesses attract and engage customers through high-quality blogs, website content, SEO articles, social media content, and promotional copywriting. We create SEO-friendly content that improves Google rankings, builds trust, and increases customer conversions."
  ),
  "local-seo": svc(
    "local-seo",
    "Local SEO Services",
    "marketing",
    MapPin,
    "Rank in local search & Google Maps across Delhi NCR.",
    "We help businesses rank higher in local search results through Google My Business optimization, local citations, map SEO, and local keyword targeting. Our local SEO services are perfect for businesses looking to attract customers in Delhi NCR and nearby locations."
  ),
  "ecommerce-marketing": svc(
    "ecommerce-marketing",
    "E-Commerce Marketing",
    "marketing",
    ShoppingCart,
    "Grow online store sales with SEO, ads & marketplace optimization.",
    "Our e-commerce marketing services help online stores increase product visibility, traffic, and sales through SEO, social media marketing, paid advertising, and marketplace optimization. We work with Amazon, Flipkart, Shopify, and independent e-commerce businesses to improve online growth and conversions."
  ),
  "app-development": svc(
    "app-development",
    "App Development",
    "other",
    Smartphone,
    "Android, iOS & cross-platform apps built for scale.",
    "Web Fast Technology develops high-performance Android, iOS, and cross-platform mobile applications for businesses and startups. Our app development services focus on user-friendly interfaces, security, speed, and scalability. We create business apps, e-commerce apps, service booking apps, educational apps, and custom mobile applications tailored to client needs."
  ),
  hosting: svc(
    "hosting",
    "Hosting Services",
    "other",
    Server,
    "Secure, fast hosting with uptime, backups & 24/7 support.",
    "We provide reliable web hosting services with high uptime, security, backups, malware protection, and technical support. Our hosting solutions are designed for websites, e-commerce stores, web applications, and business portals. We offer affordable hosting packages with fast performance and complete server management support."
  ),
  "ui-ux-design": svc(
    "ui-ux-design",
    "UI/UX Design",
    "other",
    PenTool,
    "Beautiful interfaces that improve engagement & conversions.",
    "Our UI/UX design services focus on creating visually appealing and user-friendly digital experiences. We design responsive website interfaces, mobile app layouts, dashboards, and landing pages that improve engagement and user satisfaction. Our creative designs help businesses build trust and improve customer interaction."
  ),
  branding: svc(
    "branding",
    "Branding Services",
    "other",
    Palette,
    "Logo, brand strategy & creatives that build credibility.",
    "Web Fast Technology offers professional branding services to help businesses create a strong identity in the market. Our branding solutions include logo design, social media creatives, brand strategy, business profile design, brochure design, and promotional materials. We help businesses build a memorable brand image that attracts customers and increases credibility."
  ),
  "graphic-designing": svc(
    "graphic-designing",
    "Graphic Designing",
    "other",
    Palette,
    "Logos, social posts, brochures & marketing creatives.",
    "We provide creative graphic designing services for businesses, startups, and brands. Our services include logo design, social media posts, banners, brochures, flyers, business cards, and marketing creatives that strengthen your brand presence online and offline."
  ),
  "software-development": svc(
    "software-development",
    "Software Development",
    "other",
    Code2,
    "CRM, ERP, HRMS, billing & custom business software.",
    "Web Fast Technology develops custom software solutions for businesses, schools, hospitals, and organizations. We create CRM software, ERP systems, HRMS software, billing software, attendance systems, and business automation tools that improve operational efficiency and management."
  ),
};
