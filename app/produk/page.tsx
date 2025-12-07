// app/produk/page.tsx
import type { Metadata } from "next";
import ProductHeroSection from "../components/productHero/ProductHeroSection";

export const metadata: Metadata = {
  title: "Produk Roti Unyil & Paket Snack — Alfarazka Bakery Ciputat",
  description:
    "Lihat katalog roti unyil seribuan, roti meises, dan pizza mini dari Alfarazka Bakery di Ciputat. Cocok untuk pengajian, arisan, ulang tahun anak, dan rapat kantor dengan harga mulai Rp1.000/pcs.",
  keywords: [
    "produk roti unyil",
    "roti seribuan ciputat",
    "snack box pengajian",
    "roti rumahan ciputat",
    "Alfarazka Bakery",
    "paket snack acara",
  ],
  alternates: {
    canonical: "/produk",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/produk",
    siteName: "Alfarazka Bakery",
    title: "Produk Roti Unyil & Paket Snack — Alfarazka Bakery",
    description:
      "Roti unyil seribuan, roti meises, dan pizza mini yang fresh dari dapur rumahan Alfarazka Bakery di Ciputat. Tersedia juga paket snack untuk pengajian, arisan, ulang tahun, dan rapat kantor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Produk Roti Unyil & Paket Snack — Alfarazka Bakery",
    description:
      "Katalog roti unyil dan paket snack box Alfarazka Bakery. Mulai Rp1.000/pcs, cocok untuk berbagai acara keluarga dan kantor.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ProdukPage = () => {
  return (
    <main className="main-content">
      {/* SECTION 1: HERO PRODUK */}
      <ProductHeroSection />

      {/* SECTION 2: FILTER BAR (nanti) */}
      {/* <ProductFilterSection /> */}

      {/* SECTION 3: DAFTAR PRODUK (nanti, pakai REST API) */}
      {/* <ProductListSection /> */}

      {/* SECTION 4: PAKET SNACK ACARA (nanti) */}
      {/* <ProductPackagesSection /> */}

      {/* SECTION 5: FAQ MINI / INFO PENTING (nanti) */}
      {/* <ProductFaqMiniSection /> */}
    </main>
  );
};

export default ProdukPage;