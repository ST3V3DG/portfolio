import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Steve.D | Portfolio",
  description: "Steve.D | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark scroll-smooth" lang="en" suppressHydrationWarning>
        <body
          className={`font-archivo antialiased`}
        >
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
    </html>
  );
}
