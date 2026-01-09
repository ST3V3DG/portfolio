import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.vecteezy.com",
			},
			{
				protocol: "https",
				hostname: "deifkwefumgah.cloudfront.net",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
	reactCompiler: true,
};

export default withNextIntl(nextConfig);
