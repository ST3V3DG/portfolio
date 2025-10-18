import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.badtz-ui.com",
				port: "",
				pathname: "/images/components/**",
				search: "",
			},
			{
				protocol: "https",
				hostname: "deifkwefumgah.cloudfront.net",
				port: "",
				pathname: "/shadcnblocks/block/logos/company/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
