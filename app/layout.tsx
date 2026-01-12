// app/layout.tsx
// app/page.tsx
/*
Author: Wanda Azhar
Location: Michigan, USA
Contact: wandaazhar@gmail.com
Description: Alfarazka Bakery is a professionally designed website for a home-based bakery, created to showcase premium handcrafted baked goods with a modern, clean, and user-friendly interface. Built with responsive layouts and best practices, it reflects the brand’s quality, reliability, and professionalism.
*/
import type { Metadata } from "next";
import Script from "next/script";
import "./styles/_globals.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainFooter from "./components/mainFooter/MainFooter";

const siteName = "Alfarazka Bakery";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://alfarazkabakery.com";

const ogImagePath = "/images/og-alfarazka-bakery.png"; // /public/images
const appleTouchIconPath = "/images/icon-logo-alfarazka-bakery.png"; // /public/images (256x256)

const defaultDescription =
  "Alfarazka Bakery adalah produsen roti unyil rumahan di Ciputat, Tangerang Selatan. Roti lembut mulai Rp 1.000/pcs, cocok untuk pengajian, arisan, ulang tahun, dan acara kantor.";

const keywords: string[] = [
  "Alfarazka Bakery",
  "roti unyil Ciputat",
  "roti unyil seribuan",
  "roti unyil Tangerang Selatan",
  "snack box Ciputat",
  "snack pengajian Ciputat",
  "snack arisan Ciputat",
  "snack ulang tahun Ciputat",
  "kue rumahan Ciputat",
  "roti rumahan",
  "catering snack Tangerang Selatan",
];

const whatsappPhone = "+6285179753356";
const googleMapsUrl = "https://maps.app.goo.gl/dMbWuud6ZD9DSqap6";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "id_ID",
    url: siteUrl,
    title: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
    description:
      "Roti unyil seribuan, roti meises, dan pizza mini yang lembut dan fresh dari dapur rumahan di Ciputat. Cocok untuk pengajian, arisan, ulang tahun, dan acara kantor.",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
    description: defaultDescription,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },

  // favicon & icons (konsisten dan aman)
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      // optional PNG icon untuk beberapa platform
      { url: appleTouchIconPath, type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: appleTouchIconPath, type: "image/png" }],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    // kalau mau lebih spesifik: "Bakery"
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: siteUrl,
    telephone: whatsappPhone,
    image: `${siteUrl}${ogImagePath}`,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Dewi Sartika No.25 RT 003/004",
      addressLocality: "Kota Tangerang Selatan",
      addressRegion: "Banten",
      postalCode: "15411",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Ciputat" },
      { "@type": "AdministrativeArea", name: "Tangerang Selatan" },
      { "@type": "AdministrativeArea", name: "Banten" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: whatsappPhone,
        contactType: "customer service",
        availableLanguage: ["id"],
      },
    ],
    sameAs: [googleMapsUrl],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="id">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>

      <body>
        {/* Sitewide JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <div className="app-shell">
          <Navbar />
          <main className="main-content">{children}</main>
          <MainFooter />
          <Footer />
        </div>
      </body>
    </html>
  );
}