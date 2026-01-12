import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

  // handle locale
  const localesURLs: Partial<Record<typeof routing.locales[number], string>> = {};

  for (const locale of routing.locales) {
    localesURLs[locale] = `${baseUrl}/${locale}/`;
  }

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "daily",
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          ...localesURLs,
        },
      },
    },
  ];
}
