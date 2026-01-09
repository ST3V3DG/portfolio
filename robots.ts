import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
	const locales = [];
	for (const locale of routing.locales) {
		locales.push(`/${locale}`);
	}
	return {
		rules: {
			userAgent: "*",
			allow: locales,
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
