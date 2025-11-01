import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Steve .D |  Portfolio",
	description:
		"Amazing website creator using modern technologies for best perforfance, UI/UX, ranking and rate conversion.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="dark scroll-smooth" lang="en">
			<body className={`${poppins.className} antialiased`} suppressHydrationWarning>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
