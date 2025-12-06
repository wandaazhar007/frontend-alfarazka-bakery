// app/cara-pemesanan/page.tsx
import type { Metadata } from "next";
import HeroCaraPemesanan from "../components/heroCaraPemesanan/HeroCaraPemesanan";
import LangkahPesan from "../components/langkahPesan/LangkahPesan";
import PreOrderSection from "../components/preOrderSection/PreOrderSection";

export const metadata: Metadata = {
  title: "Cara Pemesanan Roti Unyil & Snack Box — Alfarazka Bakery Ciputat",
  description:
    "Panduan lengkap cara pemesanan roti unyil seribuan, roti meises, dan paket snack box dari Alfarazka Bakery di Ciputat. Cocok untuk pengajian, arisan, ulang tahun anak, dan rapat kantor.",
  keywords: [
    "cara pemesanan roti unyil",
    "pre order roti seribuan",
    "snack box pengajian ciputat",
    "roti rumahan ciputat",
    "Alfarazka Bakery",
    "pemesanan roti untuk acara",
  ],
  alternates: {
    canonical: "/cara-pemesanan",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/cara-pemesanan",
    siteName: "Alfarazka Bakery",
    title: "Cara Pemesanan Roti & Paket Snack — Alfarazka Bakery",
    description:
      "Langkah mudah pesan roti unyil, roti meises, dan paket snack box dari Alfarazka Bakery. Mulai dari chat WhatsApp, pilih tanggal & varian, hingga pengantaran.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Pemesanan Roti Unyil & Snack Box — Alfarazka Bakery",
    description:
      "Panduan singkat pre-order roti dan paket snack Alfarazka Bakery untuk pengajian, arisan, ulang tahun, dan rapat kantor.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const CaraPemesananPage = () => {
  return (
    <>
      <HeroCaraPemesanan />
      <LangkahPesan />
      <PreOrderSection />
    </>
  );
};

export default CaraPemesananPage;