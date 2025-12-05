import type { Metadata } from "next";
import Hero from "./components/hero/Hero";
import WhyAlfarazka from "./components/why/WhyAlfarazka";

export const metadata: Metadata = {
  title: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat | Nyemil Sehat, Teman Ngopi",
  description:
    "Alfarazka Bakery menghadirkan roti unyil seribuan, roti meises, dan pizza mini fresh dari dapur rumahan di Ciputat. Cocok untuk pengajian, arisan, ulang tahun, rapat kantor, dan nyemil harian.",
  openGraph: {
    title: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
    description:
      "Roti unyil seribuan, roti meises, dan pizza mini yang lembut dan fresh, cocok untuk berbagai acara dan nyemil keluarga di Ciputat dan Tangerang Selatan.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyAlfarazka />
      {/* Nanti di bawah sini kita tambahkan section keunggulan, produk, cara pesan singkat, dsb */}
    </>
  );
}