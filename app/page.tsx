//app/page.tsx

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
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "./services/siteSettingsService";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://alfarazkabakery.com";

const ogImagePath = "/images/og-alfarazka-bakery.png";

const FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: "Berapa minimal order roti unyil?",
    answer:
      "Untuk pemesanan harian bisa mulai dari 20–25 pcs. Untuk kebutuhan acara seperti pengajian, arisan, atau rapat, biasanya pelanggan memesan mulai 50, 100, hingga 200 pcs sesuai jumlah tamu.",
  },
  {
    question: "Kapan sebaiknya saya melakukan pre-order?",
    answer:
      "Disarankan H-1 untuk jumlah standar. Jika kamu membutuhkan ratusan pcs atau ada beberapa jenis acara dalam satu hari, sebaiknya menghubungi beberapa hari sebelumnya agar jadwal produksi bisa kami atur dengan nyaman.",
  },
  {
    question: "Apakah bisa mix varian dalam satu pesanan?",
    answer:
      "Bisa. Kamu bisa mix beberapa varian roti unyil, roti meises, dan pizza mini dalam satu pesanan. Tinggal sampaikan kombinasi rasa yang diinginkan saat chat WhatsApp.",
  },
  {
    question: "Area mana saja yang bisa dilayani pengantaran?",
    answer:
      "Kami melayani area sekitar Ciputat dan Tangerang Selatan, seperti Alun-alun Pamulang, UIN Jakarta, Gintung, BSD, Cilandak, Legoso, dan sekitarnya. Titik temu dan ongkir bisa disesuaikan saat diskusi di WhatsApp.",
  },
  {
    question: "Metode pembayaran yang tersedia apa saja?",
    answer:
      "Pembayaran dapat dilakukan via transfer bank atau e-wallet sesuai kesepakatan. Untuk pesanan tertentu bisa diminta DP, dan pelunasan dilakukan saat pesanan selesai atau sebelum pengantaran.",
  },
];

function buildKeywords(businessName: string) {
  return [
    businessName,
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
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;
  const addressLabel =
    settings.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel;

  const title = `${businessName} – Roti Unyil Rumahan di Ciputat | Nyemil Sehat, Teman Ngopi`;

  const description = `${businessName} menghadirkan roti unyil seribuan, roti meises, dan pizza mini fresh dari dapur rumahan di ${addressLabel}. Cocok untuk pengajian, arisan, ulang tahun, rapat kantor, dan nyemil harian.`;

  return {
    title,
    description,
    keywords: buildKeywords(businessName),
    alternates: {
      canonical: `${siteUrl}/`,
    },
    openGraph: {
      type: "website",
      siteName: businessName,
      locale: "id_ID",
      url: `${siteUrl}/`,
      title,
      description,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: `${businessName} – Roti Unyil Rumahan di Ciputat`,
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
}

function buildHomeWebPageJsonLd(params: {
  title: string;
  description: string;
  whatsappUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#home`,
    name: params.title,
    url: `${siteUrl}/`,
    description: params.description,
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
        target: [params.whatsappUrl],
      },
      {
        "@type": "ContactAction",
        name: "Tanya Harga & Ketersediaan",
        target: [params.whatsappUrl],
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

export default async function HomePage() {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;
  const addressLabel =
    settings.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel;
  const whatsappNumber =
    settings.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber;

  const title = `${businessName} – Roti Unyil Rumahan di Ciputat | Nyemil Sehat, Teman Ngopi`;
  const description = `${businessName} menghadirkan roti unyil seribuan, roti meises, dan pizza mini fresh dari dapur rumahan di ${addressLabel}. Cocok untuk pengajian, arisan, ulang tahun, rapat kantor, dan nyemil harian.`;

  const whatsappUrl = buildWhatsAppUrl(whatsappNumber);

  const homeJsonLd = buildHomeWebPageJsonLd({
    title,
    description,
    whatsappUrl,
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd();
  const faqJsonLd = buildFaqJsonLd();

  return (
    <main>
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