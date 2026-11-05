import type { Metadata } from "next";
import {
  Inter,
  Roboto,
  Lora,
  Outfit,
  Playfair_Display,
  Roboto_Condensed,
  Oswald,
  Manrope,
} from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://castletradinggroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "PT Castle Trading Group | Premium Coconut Charcoal Briquettes",
    template: "%s | PT Castle Trading Group",
  },
  description:
    "Leading Indonesian manufacturer and exporter of 100% premium eco-friendly coconut shell charcoal briquettes for shisha, hookah, and barbecue. 500MT monthly capacity, worldwide delivery.",
  keywords: [
    "coconut charcoal briquettes",
    "shisha charcoal",
    "hookah charcoal briquettes",
    "coconut shell charcoal manufacturer",
    "charcoal exporter Indonesia",
    "PT Castle Trading Group",
    "BBQ coconut briquettes",
    "Semarang charcoal factory",
    "eco-friendly briquettes",
  ],
  authors: [{ name: "PT Castle Trading Group" }],
  creator: "PT Castle Trading Group",
  publisher: "PT Castle Trading Group",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "PT Castle Trading Group",
    title: "PT Castle Trading Group | Premium Coconut Charcoal Briquettes",
    description:
      "Leading Indonesian manufacturer and exporter of 100% premium eco-friendly coconut shell charcoal briquettes for shisha, hookah, and barbecue.",
    images: [
      {
        url: "/images/cards/card-01.jpg",
        width: 1200,
        height: 630,
        alt: "PT Castle Trading Group - Premium Coconut Charcoal Briquettes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Castle Trading Group | Premium Coconut Charcoal Briquettes",
    description:
      "Leading Indonesian manufacturer and exporter of 100% premium eco-friendly coconut shell charcoal briquettes for shisha, hookah, and barbecue.",
    images: ["/images/cards/card-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Castle Trading Group",
    legalName: "PT Castle Trading Group",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description:
      "Premier manufacturer and global exporter of high-grade, 100% sustainable coconut shell charcoal briquettes based in Semarang, Indonesia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ngrowo, Karangjati, Bergas",
      addressLocality: "Semarang Regency",
      addressRegion: "Central Java",
      postalCode: "50552",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-857-3592-5977",
      contactType: "sales",
      email: "Castlegroup0101@gmail.com",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Indonesian"],
    },
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PT Castle Trading Group",
    url: baseUrl,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={clsx(
          inter.variable,
          roboto.variable,
          lora.variable,
          outfit.variable,
          playfair.variable,
          robotoCondensed.variable,
          oswald.variable,
          manrope.variable,
          "antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
