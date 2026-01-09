// app/kontak-kami/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import HeroKontakKami from "../components/heroKontakKami/HeroKontakKami";
import ContactCard from "../components/contactCard/ContactCard";
import JamOperasional from "../components/jamOperasional/JamOperasional";
import LokasiAreaPengantaran from "../components/lokasiAreaPengantaran/LokasiAreaPengantaran";
import FaqKontakKami from "../components/faqKontakKami/FaqKontakKami";
import CtaKontakKami from "../components/ctaKontakKami/CtaKontakKami";

export const metadata: Metadata = {
  title: "Kontak Alfarazka Bakery Ciputat — WhatsApp, Lokasi & Area Pengantaran",
  description:
    "Hubungi Alfarazka Bakery di Ciputat untuk pemesanan roti unyil seribuan dan paket snack box pengajian, arisan, ulang tahun anak, serta rapat kantor. Tersedia kontak WhatsApp, jam operasional, dan informasi area pengantaran.",
  keywords: [
    "kontak Alfarazka Bakery",
    "kontak toko roti Ciputat",
    "WhatsApp roti unyil Ciputat",
    "pemesanan snack box pengajian",
    "pemesanan roti unyil seribuan",
    "alamat roti rumahan Ciputat",
  ],
  alternates: {
    canonical: "/kontak-kami",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/kontak-kami",
    siteName: "Alfarazka Bakery",
    title:
      "Kontak Alfarazka Bakery Ciputat — Pemesanan Roti Unyil & Snack Box",
    description:
      "Halaman kontak resmi Alfarazka Bakery di Ciputat. Temukan nomor WhatsApp, jam operasional, dan area pengantaran untuk pemesanan roti unyil dan paket snack box.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kontak Alfarazka Bakery Ciputat — Pemesanan Roti Unyil & Snack Box",
    description:
      "Ingin pesan roti unyil atau paket snack pengajian, arisan, ulang tahun anak, dan rapat kantor? Hubungi Alfarazka Bakery lewat WhatsApp atau lihat area pengantaran di halaman kontak ini.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Bakery"],
  "@id": "https://alfarazkabakery.com/#business",
  name: "Alfarazka Bakery",
  image: "https://alfarazkabakery.com/images/roti-unyil-1.jpg",
  url: "https://alfarazkabakery.com",
  telephone: "+62-821-9422-8282",
  description:
    "Alfarazka Bakery adalah toko roti rumahan di Ciputat yang menyediakan roti unyil seribuan, roti meises, pizza mini, dan paket snack box untuk pengajian, arisan, ulang tahun anak, serta rapat kantor.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciputat",
    addressRegion: "Banten",
    addressCountry: "ID",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Ciputat, Tangerang Selatan dan sekitarnya",
    },
  ],
  sameAs: [
    "https://www.instagram.com/alfarazkabakery",
    "https://wa.me/6282194228282",
    "https://maps.app.goo.gl/dMbWuud6ZD9DSqap6",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+62-821-9422-8282",
      areaServed: "ID",
      availableLanguage: ["id"],
    },
  ],
};

const KontakKamiPage = () => {
  return (
    <>
      {/* JSON-LD LocalBusiness untuk halaman kontak */}
      <Script id="alfarazka-localbusiness-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLdLocalBusiness)}
      </Script>

      <main className="main-content">
        {/* BREADCRUMB */}
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Beranda", href: "/" },
              { label: "Kontak Kami", href: "/kontak-kami" },
            ]}
          />
        </div>
        <HeroKontakKami />
        <ContactCard />
        <JamOperasional />
        <LokasiAreaPengantaran />
        <FaqKontakKami />
        <CtaKontakKami />
      </main>
    </>
  );
};

export default KontakKamiPage;