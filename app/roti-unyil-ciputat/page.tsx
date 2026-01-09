// app/roti-unyil-ciputat/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBreadSlice,
  faMugHot,
  faStar,
  faCircleCheck,
  faClock,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./RotiUnyilCiputatPage.module.scss";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import RotiUnyilFaqSection from "./RotiUnyilFaqSection";
import FaqRotiUnyilCiputat from "../components/faqRotiUnyilCiputat/faqRotiUnyilCiputat";


export const metadata: Metadata = {
  title: "Roti Unyil Ciputat — Roti Seribuan Enak & Fresh | Alfarazka Bakery",
  description:
    "Cari roti unyil enak di Ciputat? Alfarazka Bakery siap dengan roti unyil seribuan yang lembut, fresh, dan cocok untuk pengajian, arisan, ulang tahun, dan snack harian.",
  keywords: [
    "roti unyil ciputat",
    "roti unyil enak di ciputat",
    "roti seribuan ciputat",
    "snack box ciputat",
    "roti rumahan ciputat",
    "Alfarazka Bakery",
  ],
  alternates: {
    canonical: "/roti-unyil-ciputat",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/roti-unyil-ciputat",
    siteName: "Alfarazka Bakery",
    title: "Roti Unyil Enak di Ciputat — Alfarazka Bakery",
    description:
      "Roti unyil rumahan seribuan di Ciputat, lembut dan fresh setiap hari. Pas untuk pengajian, arisan, ulang tahun anak, dan snack harian keluarga.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roti Unyil Ciputat — Seribuan, Lembut, dan Fresh",
    description:
      "Roti unyil seribuan di Ciputat dari Alfarazka Bakery. Cocok untuk acara dan nyemil harian, pesan mudah lewat WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whatsappLink =
  "https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20mau%20pesan%20roti%20unyil%20Alfarazka%20Bakery%20untuk%20Ciputat.";

const RotiUnyilCiputatPage = () => {
  return (
    <>
      <main className={styles.page}>
        {/* BREADCRUMB */}
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Beranda", href: "/" },
              { label: "Produk & Paket", href: "/produk" },
              { label: "Roti Unyil Ciputat", href: "/roti-unyil-ciputat" },
            ]}
          />
        </div>
        {/* HERO */}
        <section
          className={`section ${styles.heroSection}`}
          aria-labelledby="roti-unyil-hero-heading"
        >
          <div className="container">
            <div className={styles.heroInner}>
              {/* LEFT TEXT */}
              <div className={styles.heroContent}>
                <p className={styles.heroKicker}>
                  Roti Unyil Seribuan di Ciputat
                </p>
                <h1
                  id="roti-unyil-hero-heading"
                  className={styles.heroTitle}
                >
                  Roti Unyil Lembut, <span>Teman Ngopi di Ciputat</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  Alfarazka Bakery menghadirkan roti unyil rumahan yang lembut,
                  fresh, dan manis-gurih seimbang. Mulai seribuan per pcs, pas
                  untuk pengajian, arisan, ulang tahun anak, sampai snack harian
                  keluarga di Ciputat dan Tangerang Selatan.
                </p>

                <div className={styles.heroBadges}>
                  <span className={styles.badge}>
                    <FontAwesomeIcon icon={faBreadSlice} />
                    <span>Mulai Rp1.000 / pcs</span>
                  </span>
                  <span className={styles.badge}>
                    <FontAwesomeIcon icon={faClock} />
                    <span>Pre-order H-1, selalu fresh</span>
                  </span>
                  <span className={styles.badge}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span>Cocok untuk acara & snack box</span>
                  </span>
                </div>

                <div className={styles.heroActions}>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryButton}
                    aria-label="Pesan roti unyil Alfarazka Bakery via WhatsApp"
                  >
                    <FontAwesomeIcon icon={faMugHot} />
                    <span>Pesan Roti Unyil Sekarang</span>
                  </a>

                  <Link href="/produk" className={styles.secondaryLink}>
                    Lihat daftar produk & paket
                  </Link>
                </div>

                <p className={styles.heroMicrocopy}>
                  *Disarankan pre-order minimal H-1. Untuk pesanan ratusan pcs,
                  sebaiknya booking beberapa hari sebelumnya.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className={styles.heroImageWrapper}>
                <div className={styles.heroImageInner}>
                  <Image
                    src="/images/roti-unyil-1.jpg"
                    alt="Roti unyil lembut Alfarazka Bakery untuk acara di Ciputat"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className={styles.heroImage}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section
          className={`section ${styles.featuresSection}`}
          aria-labelledby="roti-unyil-features-heading"
        >
          <div className="container">
            <header className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>Kenapa Roti Unyil Kami?</p>
              <h2
                id="roti-unyil-features-heading"
                className={styles.sectionTitle}
              >
                Roti Unyil Rumahan, Seribuan Tapi Serius di Rasa
              </h2>
              <p className={styles.sectionSubtitle}>
                Bukan roti produksi massal. Setiap loyang roti unyil dibuat di
                dapur rumahan Ciputat dengan adonan lembut, bahan yang layak
                untuk keluarga, dan rasa yang konsisten.
              </p>
            </header>

            <div className={styles.featuresGrid}>
              <article className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FontAwesomeIcon icon={faBreadSlice} />
                </div>
                <h3>Seribuan, Ramah di Kantong</h3>
                <p>
                  Mulai dari Rp1.000 per pcs, kamu bisa isi snack box tanpa
                  bikin kantong jebol. Cocok untuk acara skala kecil sampai
                  besar.
                </p>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <h3>Fresh by Order</h3>
                <p>
                  Roti dibuat berdasarkan pesanan, bukan stok lama. Pre-order
                  H-1 supaya adonan bisa disiapkan dan dioven di hari H.
                </p>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FontAwesomeIcon icon={faMugHot} />
                </div>
                <h3>Manis & Gurih Seimbang</h3>
                <p>
                  Pilihan varian rasa manis, gurih, dan keju yang disukai
                  anak-anak sampai orang tua. Enak jadi teman teh atau kopi.
                </p>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <h3>Cocok untuk Berbagai Acara</h3>
                <p>
                  Dari pengajian, arisan, ulang tahun anak, hingga rapat kantor
                  – tinggal sesuaikan paket dan jumlah roti sesuai kebutuhan.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* VARIAN RASA */}
        <section
          className={`section ${styles.variantsSection}`}
          aria-labelledby="roti-unyil-variants-heading"
        >
          <div className="container">
            <header className={styles.sectionHeaderCentered}>
              <p className={styles.sectionKicker}>Varian Roti Unyil</p>
              <h2
                id="roti-unyil-variants-heading"
                className={styles.sectionTitle}
              >
                Banyak Varian, Tinggal Pilih Favorit Keluarga
              </h2>
              <p className={styles.sectionSubtitleCentered}>
                Kamu bisa mix beberapa varian sekaligus dalam satu pesanan.
                Sesuaikan dengan selera tamu dan keluarga.
              </p>
            </header>

            <div className={styles.variantsGrid}>
              <article className={styles.variantCard}>
                <div className={styles.variantImage}>
                  <Image
                    src="/images/roti-unyil-2.jpg"
                    alt="Roti unyil manis isi cokelat dan meises"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3>Manis Favorit Anak</h3>
                <p>
                  Cokelat, meises, keju manis, dan selai – cocok untuk bekal
                  sekolah atau goodie bag ulang tahun.
                </p>
                <p className={styles.variantPrice}>Mulai Rp1.000 / pcs</p>
              </article>

              <article className={styles.variantCard}>
                <div className={styles.variantImage}>
                  <Image
                    src="/images/roti-unyil-3.jpg"
                    alt="Roti unyil gurih isi sosis dan keju"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3>Gurih & Mengenyangkan</h3>
                <p>
                  Sosis, smoked beef, keju, dan varian gurih lainnya. Pas untuk
                  rapat kantor dan acara komunitas.
                </p>
                <p className={styles.variantPrice}>Mulai Rp1.500 / pcs</p>
              </article>

              <article className={styles.variantCard}>
                <div className={styles.variantImage}>
                  <Image
                    src="/images/roti-unyil-4.jpg"
                    alt="Roti unyil campur manis dan gurih di nampan"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3>Mix Manis & Gurih</h3>
                <p>
                  Kombinasi manis dan gurih dalam satu paket. Praktis untuk
                  snack box pengajian dan arisan ibu-ibu.
                </p>
                <p className={styles.variantPrice}>Bisa custom kombinasi</p>
              </article>

              <article className={styles.variantCard}>
                <div className={styles.variantImage}>
                  <Image
                    src="/images/roti-unyil-5.jpg"
                    alt="Pizza mini dan roti meises dari Alfarazka Bakery"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3>Pelengkap: Pizza Mini & Meises</h3>
                <p>
                  Tambahan pizza mini dan roti meises untuk tamu spesial atau
                  paket premium acara tertentu.
                </p>
                <p className={styles.variantPrice}>Mulai Rp3.000 / pcs</p>
              </article>
            </div>

            <div className={styles.variantsCtaRow}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                Konsultasi varian & jumlah via WhatsApp
              </a>
              <Link href="/produk" className={styles.secondaryLink}>
                Lihat paket snack acara lengkap
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONI SINGKAT */}
        <section
          className={`section ${styles.testimoniSection}`}
          aria-labelledby="roti-unyil-testimoni-heading"
        >
          <div className="container">
            <header className={styles.sectionHeaderCentered}>
              <p className={styles.sectionKicker}>Cerita Pelanggan</p>
              <h2
                id="roti-unyil-testimoni-heading"
                className={styles.sectionTitle}
              >
                Roti Unyil yang Sering Dipesan Ulang
              </h2>
              <p className={styles.sectionSubtitleCentered}>
                Beberapa testimoni dari pelanggan sekitar Ciputat dan Tangerang
                Selatan yang sudah pesan untuk acara mereka.
              </p>
            </header>

            <div className={styles.testimoniScroller}>
              <div className={styles.testimoniTrack}>
                <article className={styles.testimoniCard}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={styles.testimoniIcon}
                  />
                  <p>
                    &quot;Roti unyilnya lembut banget, anak-anak di pengajian
                    suka semua. Habis duluan sebelum acara selesai.&quot;
                  </p>
                  <span className={styles.testimoniMeta}>
                    Bu Lina – Pengajian RT, Ciputat
                  </span>
                </article>

                <article className={styles.testimoniCard}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={styles.testimoniIcon}
                  />
                  <p>
                    &quot;Pesan untuk ulang tahun anak, bisa mix rasa sesuai
                    request. Praktis, tinggal bagi ke goodie bag.&quot;
                  </p>
                  <span className={styles.testimoniMeta}>
                    Mbak Dewi – Ulang Tahun Anak, Tangsel
                  </span>
                </article>

                <article className={styles.testimoniCard}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={styles.testimoniIcon}
                  />
                  <p>
                    &quot;Cocok untuk rapat kantor, rasanya enak dan tidak
                    terlalu manis. Harga juga masih masuk budget kantor.&quot;
                  </p>
                  <span className={styles.testimoniMeta}>
                    Pak Arif – Rapat Kantor, Jakarta Selatan
                  </span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ MINI */}
        <FaqRotiUnyilCiputat whatsappLink={whatsappLink} />
      </main>
    </>
  );
};

export default RotiUnyilCiputatPage;