export const COMPANY = {
  name: "Web Fast Technology",
  tagline: "Boost Online Reach For Your Brand",
  shortDescription:
    "Web Fast Technology is a leading IT solutions provider dedicated to empowering businesses through cutting-edge technology and innovative digital solutions. Established in 2021, the company helps businesses improve efficiency, productivity, and online visibility.",
  about:
    "Web Fast Technology is a leading IT solutions provider dedicated to empowering businesses through cutting-edge technology and unparalleled expertise. Established in 2021, the company has been delivering innovative IT solutions that help businesses thrive in the digital landscape.",
  mission:
    "Our mission is to empower our clients to use the internet to its full potential by providing affordable, effective, custom design and marketing solutions.",
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
  { label: "Clients", href: "/clients" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

/** Get Quote & Book Consultation both use this route */
export const GET_QUOTE_URL = "/get-quote";

export const SERVICE_MENU = {
  web: [
    { label: "Website Development", href: "/services/web-development" },
    { label: "E-Commerce Development", href: "/services/ecommerce" },
    { label: "WordPress Development", href: "/services/web-development" },
    { label: "Custom Web Apps", href: "/services/app-development" },
  ],
  marketing: [
    { label: "SEO", href: "/services/seo" },
    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    { label: "PPC Advertising", href: "/services/ppc" },
    { label: "Content Marketing", href: "/services/content-marketing" },
  ],
  other: [
    { label: "App Development", href: "/services/app-development" },
    { label: "Hosting Services", href: "/services/hosting" },
    { label: "UI/UX Design", href: "/services/branding" },
    { label: "Branding", href: "/services/branding" },
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
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "/5", label: "Google Rating" },
] as const;

export const CLIENTS = [
  "Tamanna Aviation",
  "Dilli Darbar",
  "Wingzz Up",
  "Vedacare",
  "A Biz Chancellor",
  "Kocktail Kraft",
  "Shark In",
  "Digipsum",
  "Sheaf",
  "TVQ",
  "Miraki Glaze",
  "Cred Cash",
  "Look's Ayurveda",
  "EIFT",
  "Indian Pest Control",
] as const;
