// app/page.tsx
/*
Author: Wanda Azhar
Location: Michigan, USA
Contact: wandaazhar@gmail.com
Description: Alfarazka Bakery is a professionally designed website for a home-based bakery, created to showcase premium handcrafted baked goods with a modern, clean, and user-friendly interface. Built with responsive layouts and best practices, it reflects the brand’s quality, reliability, and professionalism.
*/

import type { Metadata } from "next";
import Hero from "./components/hero/Hero";
import WhyAlfarazka from "./components/why/WhyAlfarazka";
import ProductsSection from "./components/products/ProductsSection";
import OrderSection from "./components/order/OrderSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import FaqSection from "./components/faq/FaqSection";
import ServiceAreaSection from "./components/service-area/ServiceAreaSection";

const siteName = "Alfarazka Bakery";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://alfarazkabakery.com";

const ogImagePath = "/images/og-alfarazka-bakery.png"; // ideal: 1200x630

const title =
  "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat | Nyemil Sehat, Teman Ngopi";

const description =
  "Alfarazka Bakery menghadirkan roti unyil seribuan, roti meises, dan pizza mini fresh dari dapur rumahan di Ciputat. Cocok untuk pengajian, arisan, ulang tahun, rapat kantor, dan nyemil harian.";

const keywords: string[] = [
  "Alfarazka Bakery",
  "roti unyil Ciputat",
  "roti unyil seribuan",
  "roti unyil Tangerang Selatan",
  "snack box Ciputat",
  "snack pengajian Ciputat",
  "snack arisan Ciputat",
  "snack ulang tahun Ciputat",
  "pizza mini Ciputat",
  "roti meises Ciputat",
];

// ✅ Edit ini agar sama persis dengan FAQ yang tampil di halaman
const FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: "Minimal order berapa?",
    answer:
      "Minimal order bisa berbeda tergantung jenis produk dan kebutuhan acara. Silakan chat WhatsApp untuk info minimal order dan rekomendasi jumlah sesuai jumlah tamu.",
  },
  {
    question: "Bisa untuk acara pengajian, arisan, atau rapat kantor?",
    answer:
      "Bisa. Roti unyil dan snack kami cocok untuk pengajian, arisan, ulang tahun, rapat kantor, dan kebutuhan nyemil harian.",
  },
  {
    question: "Area pengantaran/pickup di mana?",
    answer:
      "Kami melayani area Ciputat dan Tangerang Selatan. Untuk area sekitar (mis. Pamulang, BSD, Cilandak), silakan konfirmasi via WhatsApp.",
  },
  {
    question: "Cara pesan bagaimana?",
    answer:
      "Pesan via WhatsApp. Kamu bisa tanya menu, harga, varian, ketersediaan, serta jadwal ambil/antar.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "id_ID",
    url: `${siteUrl}/`,
    title,
    description,
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
    title,
    description,
    images: [ogImagePath],
  },
};

function buildHomeWebPageJsonLd() {
  const whatsappUrl = "https://wa.me/6285179753356";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#home`,
    name: title,
    url: `${siteUrl}/`,
    description,
    isPartOf: { "@id": `${siteUrl}/#localbusiness` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}${ogImagePath}`,
      width: 1200,
      height: 630,
    },
    potentialAction: [
      {
        "@type": "OrderAction",
        name: "Pesan via WhatsApp",
        target: [whatsappUrl],
      },
      {
        "@type": "ContactAction",
        name: "Tanya Harga & Ketersediaan",
        target: [whatsappUrl],
      },
    ],
  };
}

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
    ],
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function HomePage() {
  const homeJsonLd = buildHomeWebPageJsonLd();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd();
  const faqJsonLd = buildFaqJsonLd();

  return (
    <main>
      {/* Page JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />
      <WhyAlfarazka />
      <ProductsSection />
      <OrderSection />
      <TestimonialsSection />
      <FaqSection />
      <ServiceAreaSection />
    </main>
  );
}