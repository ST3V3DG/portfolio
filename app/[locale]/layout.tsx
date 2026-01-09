import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

  const { locale } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    author: t("author"),
    openGraph: {
      type: "website",
      locale: locale,
      siteName: t("title"),
      url: baseUrl,
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: `${baseUrl}/images/twitter-image.jpg`,
          width: 1280,
          height: 800,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      // creator: "@stevediego",
      images: [
        {
          url: `${baseUrl}/images/opengraph-image.jpg`,
          width: 1280,
          height: 800,
          alt: t("title"),
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        nocache: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
      otherBots: true,
      crawlDelay: 10,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const t = await getTranslations({ locale });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

  const addressString = t("Contact.address");
  const addressParts = addressString.split(", ");
  const cityRegionParts = addressParts[0].split("-");

  const region = cityRegionParts[0];
  const locality = cityRegionParts[1];
  const countryName = addressParts[1];
  const countryCode =
    countryName === "Cameroon" || countryName === "Cameroun"
      ? "CM"
      : countryName;

  const authorRole1Parts = t("Testimonials.item1.authorRole").split(", ");
  const review1Author: {
    "@type": string;
    name: string;
    jobTitle: string;
    worksFor?: { "@type": string; name: string };
  } = {
    "@type": "Person",
    name: t("Testimonials.item1.authorName"),
    jobTitle: authorRole1Parts[0],
  };
  if (authorRole1Parts[1]) {
    review1Author.worksFor = {
      "@type": "Organization",
      name: authorRole1Parts[1],
    };
  }

  const authorRole2Parts = t("Testimonials.item2.authorRole").split(", ");
  const review2Author: {
    "@type": string;
    name: string;
    jobTitle: string;
    worksFor?: { "@type": string; name: string };
  } = {
    "@type": "Person",
    name: t("Testimonials.item2.authorName"),
    jobTitle: authorRole2Parts[0],
  };
  if (authorRole2Parts[1]) {
    review2Author.worksFor = {
      "@type": "Organization",
      name: authorRole2Parts[1],
    };
  }

  const JSONLD = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        url: `${baseUrl}/${locale}`,
        name: t("Metadata.title"),
        description: t("Metadata.description"),
        publisher: {
          "@id": `${baseUrl}/${locale}`,
        },
        inLanguage: locale,
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/${locale}`,
        name: t("Metadata.author"),
        url: `${baseUrl}/${locale}`,
        image: `${baseUrl}/images/i.png`,
        jobTitle: "Web Developer",
        description: t("Metadata.description"),
        address: {
          "@type": "PostalAddress",
          addressLocality: locality,
          addressRegion: region,
          addressCountry: countryCode,
        },
        email: t("Contact.email"),
        telephone: t("Contact.phone1"),
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development Services",
            description: t("FAQ.item1.answer"),
          },
        },
        review: [
          {
            "@type": "Review",
            reviewBody: t("Testimonials.item1.quote"),
            author: review1Author,
          },
          {
            "@type": "Review",
            reviewBody: t("Testimonials.item2.quote"),
            author: review2Author,
          },
        ],
      },
    ],
  };

  return (
    <html className="dark scroll-smooth" lang={locale} suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="YIqmFaOlEo5Ks76j-xH2p2aFMdA-DY1onnGt2OV3GQE"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/images/favicon-196.png"
        />
        <link rel="apple-touch-icon" href="/images/apple-icon-180.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        />
      </head>
      <body className="font-archivo antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <SpeedInsights />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
