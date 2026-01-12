import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const locales: `/${(typeof routing.locales)[number]}`[] = [];
  for (const locale of routing.locales) {
    locales.push(`/${locale}`);
  }

  return {
    rules: {
      userAgent: "*",
      allow: ["/", ...locales],
      disallow: "",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
