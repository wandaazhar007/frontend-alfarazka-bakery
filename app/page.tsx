// app/page.tsx
/*
Author: Wanda Azhar
Location: Michigan, USA
Contact: wandaazhar@gmail.com
Description: Alfarazka Bakery is a professionally designed website for a home-based bakery, created to showcase premium handcrafted baked goods with a modern, clean, and user-friendly interface. Built with responsive layouts and best practices, it reflects the brand’s quality, reliability, and professionalism.
*/

import type { Metadata } from "next";
import Script from "next/script";
import Hero from "./components/hero/Hero";
import WhyAlfarazka from "./components/why/WhyAlfarazka";
import ProductsSection from "./components/products/ProductsSection";
import OrderSection from "./components/order/OrderSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import FaqSection from "./components/faq/FaqSection";
import ServiceAreaSection from "./components/service-area/ServiceAreaSection";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfarazkabakery.com";

export const metadata: Metadata = {
  title:
    "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat | Nyemil Sehat, Teman Ngopi",
  description:
    "Alfarazka Bakery menghadirkan roti unyil seribuan, roti meises, dan pizza mini fresh dari dapur rumahan di Ciputat. Cocok untuk pengajian, arisan, ulang tahun, rapat kantor, dan nyemil harian.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
    description:
      "Roti unyil seribuan, roti meises, dan pizza mini yang lembut dan fresh, cocok untuk berbagai acara dan nyemil keluarga di Ciputat dan Tangerang Selatan.",
    url: siteUrl,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": `${siteUrl}/#bakery`,
  name: "Alfarazka Bakery",
  url: siteUrl,
  image: `${siteUrl}/images/og-alfarazka-bakery.png`,
  logo: `${siteUrl}/images/icon-logo-alfarazka-bakery.png`,
  description:
    "Produsen roti unyil rumahan di Ciputat, Tangerang Selatan. Menyediakan roti unyil seribuan, roti meises, dan pizza mini untuk pengajian, arisan, ulang tahun, rapat kantor, dan nyemil harian.",
  telephone: "+62-851-7975-3356",
  priceRange: "Rp1.000 - Rp3.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Dewi Sartika No. 25 RT 003/004, Gg. Masjid Arryadh",
    addressLocality: "Ciputat",
    addressRegion: "Tangerang Selatan",
    postalCode: "15411",
    addressCountry: "ID",
  },
  areaServed: [
    "Ciputat",
    "Tangerang Selatan",
    "Pamulang",
    "BSD",
    "Cilandak",
    "Legoso",
  ],
  servesCuisine: ["Bakery", "Roti unyil", "Snack box"],
  sameAs: [
    "https://www.instagram.com/alfarazkabakery",
    "https://shopee.co.id/alfarazkabakery",
  ],
};

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-json-home"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WhyAlfarazka />
      <ProductsSection />
      <OrderSection />
      <TestimonialsSection />
      <FaqSection />
      <ServiceAreaSection />
    </>
  );
}