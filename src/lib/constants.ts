export const COMPANY = {
  name: "Web Fast Technology",
  tagline: "Boost Online Reach For Your Brand",
  shortDescription:
    "Web Fast Technology is one of the best digital marketing companies in Delhi NCR, providing result-driven digital solutions for startups, businesses, institutions, and brands across India.",
  aboutParagraphs: [
    "Web Fast Technology is one of the best digital marketing companies in Delhi NCR, providing result-driven digital solutions for startups, businesses, institutions, and brands across India. Established in 2021 with the name AR Sales India, the company later expanded its vision and transformed into Web Fast Technology to offer complete IT, web development, and online marketing services under one roof.",
    "We specialize in website designing, website development, SEO services, social media marketing, PPC advertising, mobile app development, e-commerce solutions, graphic designing, and branding services. With a dedicated team of experienced professionals, we help businesses build a strong digital presence and generate high-quality leads online.",
    "As an ISO Certified Company with 383+ successful projects completed, Web Fast Technology has become a trusted choice for businesses looking for affordable and professional digital services in Delhi NCR. Whether you need a business website, e-commerce store, SEO optimization, or social media marketing, we provide customized solutions according to your business goals and budget.",
    "Our mission is to empower businesses with affordable and effective digital marketing solutions that increase visibility, improve customer engagement, and drive long-term growth. We focus on user-friendly website designs, creative strategies, and performance-based marketing to deliver measurable results.",
    "If you are searching for the best website designing company in Delhi, affordable website designing price packages, or a reliable digital marketing agency near you, Web Fast Technology is your trusted partner for digital success.",
  ],
  about:
    "Web Fast Technology is one of the best digital marketing companies in Delhi NCR, providing result-driven digital solutions for startups, businesses, institutions, and brands across India.",
  mission:
    "Our mission is to empower businesses with affordable and effective digital marketing solutions that increase visibility, improve customer engagement, and drive long-term growth.",
  vision:
    "Our vision is to become a global leader in providing the best and unique web design and marketing services to improve our client's productivity and business strength.",
  email: "contact@webfasttech.com",
  website: "https://www.webfasttech.com",
  phones: ["+91 9899900920", "+91 7065332416", "+91 7065332418"],
  address:
    "Plot No-41-A, AT KH No-11, 13, Near Holy Cross School, Raghubir Enclave, Shiv Nagar, Najafgarh, New Delhi-110043",
  branches: ["Dwarka Mor (Delhi)", "Varanasi (U.P)"],
  iso: "INQ/DL-46114/0624",
  gstin: "07DGXPR3284R1ZZ",
  udyam: "UDYAM-DL-10-0042643",
  established: 2021,
} as const;

export const HOSTING_OFFER_URL = "https://www.hostg.xyz/SHEqu";

export const SITE = {
  name: COMPANY.name,
  tagline: COMPANY.tagline,
  description: COMPANY.shortDescription,
  url: process.env.NEXT_PUBLIC_SITE_URL || COMPANY.website,
  email: COMPANY.email,
  phone: COMPANY.phones[0],
  whatsapp: "919899900920",
  address: COMPANY.address,
} as const;

export type NavLink =
  | { readonly label: string; readonly href: string; readonly hasDropdown?: false }
  | { readonly label: string; readonly href: string; readonly hasDropdown: true };

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

/** Google Business / search reviews — "All reviews" CTA */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=web+fast+technology&oq=web+fast+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgoIBBAAGAoYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINjcwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FNbjMteVFXUmtUcHhnbi1SaDM4UE1jNWRuUVRLZG1QcDRMUzQ5R0g0UDhpTHdXcjBkMzJzNTRzRF9oTVZKZHNSeVFWWF84Z3FQQ1ZhMnExZmNBTHZKTGRLR3hZT1Y0d0pxSUJtN2J4dnhTd1dEVm04ZEtxZmg0EhdqeFlWYXJPekFiaWVzZU1QMzlqQjhRMBoiQUpLTEZtTDBxQ19VcUplLTc3dFVrMmc4T2FybEV6OGhpdxIEODA1MRoBMyoAMAA4AUAAGAAgz_PA1gtKAhAC";

export const GET_QUOTE_URL = "/get-quote";

export const SERVICE_MENU = {
  web: [
    { label: "Website Development", href: "/services/web-development" },
    { label: "E-Commerce Development", href: "/services/ecommerce" },
    { label: "WordPress Development", href: "/services/wordpress-development" },
    { label: "Custom Web Apps", href: "/services/custom-web-apps" },
    { label: "HRMS Software", href: "/services/hrms" },
    { label: "School Website", href: "/services/school-website" },
    { label: "Hospital Website", href: "/services/hospital-website" },
    { label: "Real Estate Website", href: "/services/real-estate-website" },
  ],
  marketing: [
    { label: "SEO", href: "/services/seo" },
    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    { label: "PPC Advertising", href: "/services/ppc" },
    { label: "Content Marketing", href: "/services/content-marketing" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "E-Commerce Marketing", href: "/services/ecommerce-marketing" },
  ],
  other: [
    { label: "App Development", href: "/services/app-development" },
    { label: "Hosting Services", href: "/services/hosting" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Branding", href: "/services/branding" },
    { label: "Graphic Designing", href: "/services/graphic-designing" },
    { label: "Software Development", href: "/services/software-development" },
  ],
} as const;

export const SOCIAL = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
] as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi! I'd like to discuss a project with Web Fast Technology."
)}`;

export const PHONE_URL = `tel:${COMPANY.phones[0].replace(/\s/g, "")}`;

export const STATS = [
  { value: 2021, suffix: "", label: "Established" },
  { value: 383, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "/5", label: "Google Rating" },
] as const;

export const CLIENTS = [
  "Tamanna Aviation",
  "Dilli Darbar",
  "Wingzz Up",
  "Vedacare Herbal Power",
  "A Biz Chancellor",
  "Shark In",
  "Kocktail Kraft",
  "Sheaf",
  "Digi Psum",
  "MCX Call Tips",
  "TVQ",
  "Miraki Glaze",
  "Cred Cash",
  "Look's Ayurveda",
  "EIFT",
  "IPC – Indian Pest Control",
] as const;
