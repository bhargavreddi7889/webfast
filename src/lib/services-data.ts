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
  type LucideIcon,
} from "lucide-react";

export type ServiceSlug =
  | "seo"
  | "ppc"
  | "social-media-marketing"
  | "web-development"
  | "app-development"
  | "hosting"
  | "branding"
  | "ecommerce"
  | "content-marketing";

export interface ServiceDetail {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  overview: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const HOME_SERVICES = [
  {
    slug: "seo" as const,
    title: "SEO",
    description:
      "Rank higher on Google with data-driven SEO strategies that drive organic traffic and qualified leads.",
    icon: Search,
  },
  {
    slug: "ppc" as const,
    title: "PPC Advertising",
    description:
      "Maximize ROI with targeted Google & Meta ads managed by certified performance marketers.",
    icon: MousePointerClick,
  },
  {
    slug: "social-media-marketing" as const,
    title: "Social Media Marketing",
    description:
      "Build engaged communities and convert followers into customers across all major platforms.",
    icon: Share2,
  },
  {
    slug: "web-development" as const,
    title: "Website Development",
    description:
      "Fast, responsive, conversion-optimized websites built with modern frameworks and best practices.",
    icon: Globe,
  },
  {
    slug: "app-development" as const,
    title: "App Development",
    description:
      "Native and cross-platform mobile apps designed for performance, scale, and user delight.",
    icon: Smartphone,
  },
  {
    slug: "hosting" as const,
    title: "Hosting Services",
    description:
      "Secure, blazing-fast hosting with 99.9% uptime, SSL, backups, and 24/7 expert support.",
    icon: Server,
  },
  {
    slug: "branding" as const,
    title: "Branding",
    description:
      "Craft memorable brand identities — logos, guidelines, and visuals that stand out.",
    icon: Palette,
  },
  {
    slug: "ecommerce" as const,
    title: "E-Commerce Solutions",
    description:
      "Launch and scale online stores with seamless checkout, inventory, and payment integrations.",
    icon: ShoppingCart,
  },
  {
    slug: "content-marketing" as const,
    title: "Content Marketing",
    description:
      "Strategic content that educates, engages, and converts — blogs, videos, and copy that ranks.",
    icon: FileText,
  },
];

export const SERVICES: Record<ServiceSlug, ServiceDetail> = {
  seo: {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDescription: "Dominate search results and grow organic traffic sustainably.",
    icon: Search,
    overview:
      "Our SEO services combine technical audits, keyword research, on-page optimization, and authority-building link strategies to help your business rank on page one — and stay there.",
    benefits: [
      "Increased organic traffic & visibility",
      "Higher-quality leads at lower cost",
      "Long-term compounding ROI",
      "Technical & local SEO expertise",
      "Monthly transparent reporting",
    ],
    process: [
      { step: "Audit", description: "Comprehensive site & competitor analysis" },
      { step: "Strategy", description: "Keyword mapping & content roadmap" },
      { step: "Optimize", description: "On-page, technical & local SEO fixes" },
      { step: "Build", description: "Content creation & link acquisition" },
      { step: "Grow", description: "Monitor rankings & scale winners" },
    ],
    faqs: [
      {
        question: "How long until I see SEO results?",
        answer:
          "Most clients see measurable improvements within 3–6 months. SEO is a long-term investment that compounds over time.",
      },
      {
        question: "Do you guarantee #1 rankings?",
        answer:
          "No ethical agency guarantees specific rankings. We guarantee best-practice strategies, transparency, and measurable growth.",
      },
    ],
  },
  ppc: {
    slug: "ppc",
    title: "PPC Advertising",
    shortDescription: "Instant visibility with campaigns optimized for conversions.",
    icon: MousePointerClick,
    overview:
      "From Google Ads to Meta and LinkedIn campaigns, we design, launch, and optimize paid media that delivers measurable ROI from day one.",
    benefits: [
      "Immediate traffic & lead generation",
      "Precise audience targeting",
      "A/B tested ad creatives & landing pages",
      "Conversion tracking & attribution",
      "Continuous bid & budget optimization",
    ],
    process: [
      { step: "Research", description: "Audience, keyword & competitor analysis" },
      { step: "Setup", description: "Account structure, tracking & pixels" },
      { step: "Launch", description: "Campaigns, ads & landing pages live" },
      { step: "Optimize", description: "Daily bid, copy & audience refinements" },
      { step: "Scale", description: "Double down on winning campaigns" },
    ],
    faqs: [
      {
        question: "What is a good starting ad budget?",
        answer:
          "We typically recommend ₹30,000–₹50,000/month minimum for meaningful data and optimization on Google or Meta.",
      },
      {
        question: "Which platforms do you manage?",
        answer: "Google Ads, Meta (Facebook/Instagram), LinkedIn, YouTube, and display networks.",
      },
    ],
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription: "Grow your brand presence and engagement across social platforms.",
    icon: Share2,
    overview:
      "We create scroll-stopping content, manage communities, and run paid social campaigns that turn followers into loyal customers.",
    benefits: [
      "Consistent brand voice across channels",
      "Engaging content calendars & creatives",
      "Community management & reputation",
      "Influencer & UGC collaborations",
      "Paid social amplification",
    ],
    process: [
      { step: "Discover", description: "Brand audit & audience research" },
      { step: "Plan", description: "Content strategy & channel selection" },
      { step: "Create", description: "Design, copy & video production" },
      { step: "Publish", description: "Scheduling & community engagement" },
      { step: "Analyze", description: "Performance reports & iteration" },
    ],
    faqs: [
      {
        question: "Which platforms should my business be on?",
        answer:
          "It depends on your audience. B2B thrives on LinkedIn; D2C on Instagram & Meta; youth brands on TikTok/Reels.",
      },
      {
        question: "Do you handle paid social too?",
        answer: "Yes — organic and paid social are integrated for maximum impact.",
      },
    ],
  },
  "web-development": {
    slug: "web-development",
    title: "Website Development",
    shortDescription: "Premium websites that load fast and convert visitors.",
    icon: Globe,
    overview:
      "We build modern, SEO-friendly websites using Next.js, WordPress, and custom stacks — designed for speed, accessibility, and conversions.",
    benefits: [
      "Mobile-first responsive design",
      "Core Web Vitals optimized",
      "CMS & easy content management",
      "SEO-ready architecture",
      "Secure hosting & maintenance",
    ],
    process: [
      { step: "Discovery", description: "Goals, sitemap & wireframes" },
      { step: "Design", description: "UI/UX mockups & approval" },
      { step: "Develop", description: "Clean code & integrations" },
      { step: "Test", description: "QA, speed & cross-browser checks" },
      { step: "Launch", description: "Deploy, train & support" },
    ],
    faqs: [
      {
        question: "How long does a website take?",
        answer: "Typical business sites take 4–8 weeks; complex e-commerce may take 10–16 weeks.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes — we offer monthly maintenance, updates, and security packages.",
      },
    ],
  },
  "app-development": {
    slug: "app-development",
    title: "App Development",
    shortDescription: "Mobile apps that users love and businesses rely on.",
    icon: Smartphone,
    overview:
      "From MVP to enterprise apps, we deliver iOS, Android, and cross-platform solutions with intuitive UX and robust backends.",
    benefits: [
      "Native & React Native / Flutter",
      "Scalable cloud architecture",
      "App Store optimization",
      "Push notifications & analytics",
      "Post-launch support & updates",
    ],
    process: [
      { step: "Ideate", description: "Requirements & user flows" },
      { step: "Prototype", description: "Interactive UI prototypes" },
      { step: "Build", description: "Agile sprints & demos" },
      { step: "Test", description: "Beta testing & bug fixes" },
      { step: "Ship", description: "Store submission & launch" },
    ],
    faqs: [
      {
        question: "Native or cross-platform?",
        answer:
          "Cross-platform saves cost for MVPs; native is best for performance-heavy or platform-specific features.",
      },
      {
        question: "Do you handle backend APIs?",
        answer: "Yes — full-stack development including APIs, databases, and admin panels.",
      },
    ],
  },
  hosting: {
    slug: "hosting",
    title: "Hosting Services",
    shortDescription: "Reliable, secure hosting with expert management.",
    icon: Server,
    overview:
      "Enterprise-grade hosting with SSL, CDN, automated backups, and 24/7 monitoring — so your site stays fast and online.",
    benefits: [
      "99.9% uptime SLA",
      "Free SSL & CDN included",
      "Daily automated backups",
      "DDoS protection & firewall",
      "24/7 technical support",
    ],
    process: [
      { step: "Assess", description: "Traffic & resource requirements" },
      { step: "Migrate", description: "Zero-downtime migration" },
      { step: "Secure", description: "SSL, firewall & hardening" },
      { step: "Monitor", description: "24/7 uptime monitoring" },
      { step: "Support", description: "Ongoing maintenance & scaling" },
    ],
    faqs: [
      {
        question: "Can you migrate my existing site?",
        answer: "Yes — we handle full migration with minimal downtime and DNS guidance.",
      },
      {
        question: "Is email hosting included?",
        answer: "Business email setup is available as an add-on with Google Workspace or Zoho.",
      },
    ],
  },
  branding: {
    slug: "branding",
    title: "Branding & UI/UX Design",
    shortDescription: "Visual identities and experiences that captivate.",
    icon: Palette,
    overview:
      "We craft cohesive brand systems — logos, color palettes, typography, and UI/UX — that communicate trust and premium quality.",
    benefits: [
      "Memorable logo & visual identity",
      "Brand guidelines document",
      "Marketing collateral design",
      "User-centered UI/UX design",
      "Consistent cross-channel branding",
    ],
    process: [
      { step: "Research", description: "Market & audience insights" },
      { step: "Concept", description: "Mood boards & logo concepts" },
      { step: "Refine", description: "Iterations & final identity" },
      { step: "Document", description: "Brand guidelines delivery" },
      { step: "Apply", description: "Templates & asset rollout" },
    ],
    faqs: [
      {
        question: "How many logo concepts do I get?",
        answer: "Our standard package includes 3 unique concepts with 2 rounds of revisions.",
      },
      {
        question: "Do you design websites too?",
        answer: "Yes — branding and web design are seamlessly integrated in our projects.",
      },
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    shortDescription: "Online stores built to sell more and scale faster.",
    icon: ShoppingCart,
    overview:
      "Shopify, WooCommerce, or custom storefronts — we build e-commerce experiences with optimized checkout, payments, and inventory management.",
    benefits: [
      "Conversion-optimized product pages",
      "Payment gateway integration",
      "Inventory & order management",
      "Abandoned cart recovery",
      "Analytics & growth tools",
    ],
    process: [
      { step: "Plan", description: "Catalog, payments & shipping setup" },
      { step: "Design", description: "Store UX & product templates" },
      { step: "Build", description: "Platform setup & integrations" },
      { step: "Test", description: "Checkout & payment QA" },
      { step: "Launch", description: "Go-live & marketing setup" },
    ],
    faqs: [
      {
        question: "Shopify or custom?",
        answer:
          "Shopify is ideal for quick launches; custom builds offer more flexibility for unique business models.",
      },
      {
        question: "Do you handle product photography?",
        answer: "We partner with studios or can guide DIY product shoot best practices.",
      },
    ],
  },
  "content-marketing": {
    slug: "content-marketing",
    title: "Content Marketing",
    shortDescription: "Content that ranks, resonates, and converts.",
    icon: FileText,
    overview:
      "Strategic blogs, videos, email campaigns, and copywriting that positions your brand as an authority and nurtures leads through the funnel.",
    benefits: [
      "SEO-optimized blog content",
      "Video scripts & production",
      "Email nurture sequences",
      "Lead magnets & ebooks",
      "Content performance analytics",
    ],
    process: [
      { step: "Strategy", description: "Topics, personas & funnel mapping" },
      { step: "Create", description: "Writing, design & production" },
      { step: "Distribute", description: "Publish across channels" },
      { step: "Promote", description: "Social & email amplification" },
      { step: "Measure", description: "Traffic, engagement & leads" },
    ],
    faqs: [
      {
        question: "How often should we publish?",
        answer: "We recommend 2–4 quality pieces per month for most B2B brands; more for competitive niches.",
      },
      {
        question: "Do you write in our brand voice?",
        answer: "Yes — we develop a tone-of-voice guide and all content aligns with your brand.",
      },
    ],
  },
};

export function getServiceSlugs(): ServiceSlug[] {
  return Object.keys(SERVICES) as ServiceSlug[];
}
