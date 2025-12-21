import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/providers/smooth-scroll";

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
      <SmoothScroll>
        <body
          className={`font-archivo antialiased`}
        >
          {children}
        </body>
      </SmoothScroll>
    </html>
  );
}
