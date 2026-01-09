import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}
export default async function manifest({
	params,
}: {
	params: { locale: string };
}): Promise<MetadataRoute.Manifest> {
	const { locale } = await params;
	const t = await getTranslations({ locale: locale, namespace: "Metadata" });
	return {
		name: "Steve.D",
		short_name: "Steve.D",
		description: t("description"),
		start_url: `/${locale}/`,
		display: "standalone",
		background_color: "#000",
		theme_color: "#000",
		icons: [
			{
				src: "public/images/manifest-icon-192.maskable.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "public/images/manifest-icon-192.maskable.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "public/images/manifest-icon-512.maskable.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "public/images/manifest-icon-512.maskable.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
