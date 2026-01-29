import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
	const t = await getTranslations({ locale: "en", namespace: "Metadata" });
	return {
		name: "Steve.D",
		short_name: "Steve.D",
		description: t("description"),
		start_url: `/`,
		display: "standalone",
		background_color: "#000",
		theme_color: "#000",
		icons: [
			{
				src: "/images/manifest-icon-192.maskable.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/images/manifest-icon-512.maskable.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
