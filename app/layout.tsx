// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./styles/_globals.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainFooter from "./components/mainFooter/MainFooter";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfarazkabakery.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
    template: "%s | Alfarazka Bakery",
  },
  description:
    "Alfarazka Bakery adalah produsen roti unyil rumahan di Ciputat, Tangerang Selatan. Roti lembut mulai Rp 1.000/pcs, cocok untuk pengajian, arisan, ulang tahun, dan acara kantor.",
  keywords: [
    "Alfarazka Bakery",
    "roti unyil Ciputat",
    "roti unyil seribuan",
    "roti unyil Tangerang Selatan",
    "snack pengajian Ciputat",
    "roti rumahan",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Alfarazka Bakery",
    title: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
    description:
      "Roti unyil seribuan, roti meises, dan pizza mini yang lembut dan fresh dari dapur rumahan di Ciputat. Cocok untuk pengajian, arisan, ulang tahun, dan acara kantor.",
    images: [
      {
        url: "/images/og-alfarazka-bakery.png", // kalau ada OG khusus 1200x630, ganti ke sana
        alt: "Logo Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/og-alfarazka-bakery.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/og-alfarazka-bakery.png",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {GA_ID && (
          <>
            {/* Google tag (gtag.js) */}
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