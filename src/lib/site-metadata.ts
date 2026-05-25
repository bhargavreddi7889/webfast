import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

/** Absolute logo URL for favicons, Open Graph, Twitter, manifest, and schema.org */
export const SITE_LOGO_PATH = "/logo.png";
export const SITE_LOGO_URL = new URL(SITE_LOGO_PATH, SITE.url).toString();

export const siteOpenGraphImages = [
  {
    url: SITE_LOGO_PATH,
    alt: `${SITE.name} — ${SITE.tagline}`,
  },
];

export const siteIcons: Metadata["icons"] = {
  icon: [{ url: SITE_LOGO_PATH, type: "image/png", sizes: "any" }],
  shortcut: SITE_LOGO_PATH,
  apple: SITE_LOGO_PATH,
};

/** Merge page metadata with site-wide logo / social defaults */
export function withSiteBranding(
  metadata: Metadata,
  options?: { path?: string }
): Metadata {
  const pageUrl = options?.path
    ? new URL(options.path, SITE.url).toString()
    : undefined;

  return {
    ...metadata,
    metadataBase: new URL(SITE.url),
    openGraph: {
      siteName: SITE.name,
      locale: "en_IN",
      type: "website",
      images: siteOpenGraphImages,
      ...metadata.openGraph,
      ...(pageUrl && { url: pageUrl }),
    },
    twitter: {
      card: "summary_large_image",
      images: [SITE_LOGO_PATH],
      ...metadata.twitter,
    },
    icons: metadata.icons ?? siteIcons,
  };
}
