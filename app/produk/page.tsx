import type { Metadata } from "next";
import ProductHeroSection from "../components/productHero/ProductHeroSection";
import ProductsClientSection from "./ProductsClientSection";
import SnackPackagesSection from "../components/snackPackages/SnackPackagesSection";
import ProdukFaqMini from "../components/faqMini/ProdukFaqMini";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "Produk & Paket Roti Unyil – Alfarazka Bakery Ciputat",
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
      {/* BREADCRUMB */}
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Produk & Paket", href: "/produk" },
          ]}
        />
      </div>
      <ProductHeroSection />
      {/* SECTION 2 & 3: Filter + Daftar Produk (nanti terhubung REST API) */}
      <ProductsClientSection />
      <SnackPackagesSection />
      <ProdukFaqMini />
    </main>
  );
};

export default ProdukPage;