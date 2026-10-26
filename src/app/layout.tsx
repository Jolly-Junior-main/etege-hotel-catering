import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { MainLayout } from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://etege-hotel.pages.dev"),
  title: "Etege Hotel & Catering | Premier Event Catering & Banquets in Addis Ababa",
  description: "Experience authentic Ethiopian hospitality, royal wedding banquets, chafing buffets, and premier event catering for celebrations in Addis Ababa, Ethiopia.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  keywords: [
    "Etege Hotel",
    "Etege Catering",
    "Catering Addis Ababa",
    "Wedding catering Ethiopia",
    "Corporate catering Addis Ababa",
    "Ethiopian feast Kitfo catering",
    "እቴጌ ሆቴል እና ኬተሪንግ"
  ],
  openGraph: {
    title: "Etege Hotel & Catering — Premier Catering & Event Services",
    description: "Authentic Ethiopian banquets, royal wedding catering, corporate dining, and celebration buffets in Addis Ababa.",
    url: "https://etege-hotel.pages.dev",
    siteName: "Etege Hotel & Catering",
    images: [
      {
        url: "https://etege-hotel.pages.dev/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "Etege Hotel & Catering Official Logo & Brand",
      },
      {
        url: "https://etege-hotel.pages.dev/images/logo-circle.png",
        width: 512,
        height: 512,
        alt: "Etege Hotel & Catering Circular Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etege Hotel & Catering — Premier Catering & Event Services",
    description: "Authentic Ethiopian banquets, royal wedding catering, corporate dining, and celebration buffets in Addis Ababa.",
    images: ["https://etege-hotel.pages.dev/images/og-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Etege Hotel & Catering",
    "alternateName": "እቴጌ ሆቴል እና ኬተሪንግ",
    "description": "Premier catering services, wedding banquets, and authentic Ethiopian celebrations in Addis Ababa.",
    "image": "https://etege-hotel.pages.dev/images/og-share.png",
    "logo": "https://etege-hotel.pages.dev/images/logo-circle.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arada Sub City, Kebele 01 (Near Mekonenoch Kebeb / Ras Desta Hospital)",
      "addressLocality": "Addis Ababa",
      "addressRegion": "Addis Ababa",
      "addressCountry": "ET"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.0476932,
      "longitude": 38.7413392
    },
    "telephone": "+251912011701",
    "priceRange": "$$",
    "hasMenu": "https://etege-hotel.pages.dev/catering/"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-charcoal bg-ivory">
        <LanguageProvider>
          <MainLayout>{children}</MainLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
