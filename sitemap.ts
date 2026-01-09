import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
	const rules: MetadataRoute.Sitemap = [];
	for (const locale of routing.locales) {
		rules.push({
			url: `${baseUrl}/${locale}`,
			changeFrequency: "weekly",
			lastModified: new Date().toISOString(),
			priority: 1,
		});
	}

	return rules;
}
