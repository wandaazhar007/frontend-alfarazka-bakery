// app/paket-snack-rapat-kantor-ciputat/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuildingColumns,
  faChalkboardTeacher,
  faMoneyBillWave,
  faReceipt,
  faTruck,
  faClock,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./PaketSnackRapatKantorCiputatPage.module.scss";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FaqRapatKantor from "../components/faqRapatKantor/FaqRapatKantor";

export const metadata: Metadata = {
  title:
    "Paket Snack Rapat Kantor Ciputat — Untuk Meeting, Guru, & Instansi | Alfarazka Bakery",
  description:
    "Cari paket snack rapat kantor di Ciputat? Alfarazka Bakery menyediakan roti unyil seribuan untuk meeting kantor, instansi, guru, dan lembaga dengan opsi pembayaran transfer, nota, dan pengantaran tepat waktu.",
  keywords: [
    "paket snack rapat kantor ciputat",
    "snack rapat kantor ciputat",
    "snack meeting kantor",
    "snack rapat guru",
    "snack instansi ciputat",
    "roti unyil rapat kantor",
    "Alfarazka Bakery",
  ],
  alternates: {
    canonical: "/paket-snack-rapat-kantor-ciputat",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/paket-snack-rapat-kantor-ciputat",
    siteName: "Alfarazka Bakery",
    title:
      "Paket Snack Rapat Kantor Ciputat — Roti Unyil Seribuan untuk Meeting | Alfarazka Bakery",
    description:
      "Paket snack rapat kantor yang rapi dan profesional dengan opsi pembayaran transfer, nota, dan pengantaran area Ciputat. Cocok untuk meeting kantor, guru, dan instansi.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Paket Snack Rapat Kantor Ciputat — Untuk Kantor & Instansi | Alfarazka Bakery",
    description:
      "Paket snack rapat kantor dengan roti unyil seribuan, pengantaran tepat waktu, dan opsi pembayaran transfer. Praktis untuk meeting, rapat guru, dan instansi di Ciputat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whatsappLink =
  "https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20mau%20tanya%20paket%20snack%20rapat%20kantor%20Alfarazka%20Bakery%20di%20Ciputat.";

const PaketSnackRapatKantorCiputatPage = () => {
  return (
    <main className={styles.page}>
      {/* BREADCRUMB */}
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Produk & Paket", href: "/produk" },
            { label: "Paket snack rapat kantor", href: "/paket-snack-rapat-kantor-ciputat" },
          ]}
        />
      </div>
      {/* HERO */}
      <section
        className={`section ${styles.heroSection}`}
        aria-labelledby="rapat-kantor-hero-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            {/* LEFT */}
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>Paket Snack Rapat Kantor</p>
              <h1
                id="rapat-kantor-hero-heading"
                className={styles.heroTitle}
              >
                Snack Rapat Kantor yang{" "}
                <span>Rapi, Tepat Waktu, dan Profesional</span> di Ciputat
              </h1>
              <p className={styles.heroSubtitle}>
                Alfarazka Bakery menyiapkan snack rapat berbasis roti unyil
                seribuan yang cocok untuk meeting kantor, rapat guru, hingga
                kegiatan instansi. Kemasan rapi, rasa bersahabat, dan stok
                bisa disesuaikan jumlah peserta.
              </p>

              <div className={styles.heroBadges}>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span>Untuk kantor & perusahaan</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                  <span>Rapat guru & komite</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faBuildingColumns} />
                  <span>Instansi & lembaga</span>
                </span>
              </div>

              <div className={styles.heroActions}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Konsultasi paket rapat via WhatsApp
                </a>

                <Link href="/produk" className={styles.secondaryLink}>
                  Lihat produk & paket lengkap
                </Link>
              </div>

              <p className={styles.heroMicrocopy}>
                *Bisa dibuatkan kombinasi manis & gurih dengan jumlah yang
                konsisten per box sesuai kebutuhan meeting.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageInner}>
                <Image
                  src="/images/roti-unyil-3.jpg"
                  alt="Snack rapat kantor berupa roti unyil dari Alfarazka Bakery Ciputat"
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

      {/* PAKET RAPAT & MEETING */}
      <section
        className={`section ${styles.packagesSection}`}
        aria-labelledby="rapat-kantor-packages-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Pilihan Paket Rapat</p>
            <h2
              id="rapat-kantor-packages-heading"
              className={styles.sectionTitle}
            >
              Paket Snack untuk Meeting Kantor & Instansi
            </h2>
            <p className={styles.sectionSubtitle}>
              Berikut contoh paket yang sering dipesan untuk rapat internal,
              workshop, maupun pertemuan formal. Semua tetap fleksibel dan
              bisa disesuaikan dengan kebutuhan lembaga Anda.
            </p>
          </header>

          <div className={styles.packagesGrid}>
            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3>Paket Rapat Internal Kantor</h3>
              <p className={styles.packagePrice}>Mulai ± Rp12.000 / pax</p>
              <p className={styles.packageMeta}>Contoh isi per orang:</p>
              <ul className={styles.packageList}>
                <li>3 pcs roti unyil (campur manis & gurih)</li>
                <li>Cocok untuk meeting 60–90 menit</li>
                <li>Bisa dikemas per box atau nampan</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faBuildingColumns} />
              </div>
              <h3>Paket Instansi & Lembaga</h3>
              <p className={styles.packagePrice}>Mulai ± Rp15.000 / pax</p>
              <p className={styles.packageMeta}>Contoh isi per orang:</p>
              <ul className={styles.packageList}>
                <li>3–4 pcs roti unyil pilihan</li>
                <li>Opsional: tambahan roti meises / pizza mini</li>
                <li>Cocok untuk tamu undangan & pejabat</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </div>
              <h3>Paket Rapat Guru & Komite</h3>
              <p className={styles.packagePrice}>Mulai ± Rp10.000 / pax</p>
              <p className={styles.packageMeta}>Contoh isi per orang:</p>
              <ul className={styles.packageList}>
                <li>2–3 pcs roti unyil lembut</li>
                <li>Varian rasa bisa disesuaikan</li>
                <li>Pas untuk rapat koordinasi atau evaluasi</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <h3>Paket Sesuai Anggaran</h3>
              <p className={styles.packagePrice}>Menyesuaikan budget</p>
              <p className={styles.packageMeta}>
                Dibuat berdasarkan kebutuhan lembaga Anda
              </p>
              <ul className={styles.packageList}>
                <li>Tentukan budget per pax atau total</li>
                <li>Kami bantu hitungkan jumlah dan isi snack</li>
                <li>Cocok untuk kegiatan rutin bulanan</li>
              </ul>
            </article>
          </div>

          <div className={styles.packagesCtaRow}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
            >
              Diskusikan paket & kebutuhan rapat
            </a>
          </div>
        </div>
      </section>

      {/* PEMBAYARAN & ADMINISTRASI */}
      <section
        className={`section ${styles.paymentSection}`}
        aria-labelledby="rapat-kantor-payment-heading"
      >
        <div className="container">
          <div className={styles.paymentInner}>
            <div className={styles.paymentText}>
              <p className={styles.sectionKicker}>Pembayaran & Administrasi</p>
              <h2
                id="rapat-kantor-payment-heading"
                className={styles.sectionTitle}
              >
                Pembayaran Transfer, Nota Jelas, dan Rekap yang Rapi
              </h2>
              <p className={styles.sectionSubtitle}>
                Kami paham kebutuhan kantor & instansi yang butuh data
                pembayaran jelas. Karena itu seluruh proses bisa dibuat
                lebih tertib dan terdokumentasi.
              </p>

              <ul className={styles.paymentList}>
                <li>
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  <div>
                    <strong>Pembayaran via transfer bank.</strong>
                    <p>
                      Bisa menggunakan transfer sebelum atau sesudah acara
                      (sesuai kesepakatan). Detail rekening akan dikirim
                      setelah order fix.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faReceipt} />
                  <div>
                    <strong>Nota / bukti pembayaran tertulis.</strong>
                    <p>
                      Kami bisa menyiapkan nota sederhana untuk keperluan
                      laporan internal atau pengajuan keuangan.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} />
                  <div>
                    <strong>Konfirmasi H-1 dan estimasi jam antar.</strong>
                    <p>
                      Sebelum produksi, kami akan konfirmasi ulang jumlah,
                      lokasi, dan waktu estimasi pengantaran agar tidak
                      miss komunikasi.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.paymentImageWrapper}>
              <div className={styles.paymentImage}>
                <Image
                  src="/images/roti-unyil-8.jpg"
                  alt="Snack rapat kantor Alfarazka Bakery dengan kemasan rapi"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PENGANTARAN & KETEPATAN WAKTU */}
      <section
        className={`section ${styles.deliverySection}`}
        aria-labelledby="rapat-kantor-delivery-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>
              Pengantaran & Ketepatan Waktu
            </p>
            <h2
              id="rapat-kantor-delivery-heading"
              className={styles.sectionTitle}
            >
              Diantar Tepat Waktu, Disiapkan Fresh Sesuai Jadwal Rapat
            </h2>
            <p className={styles.sectionSubtitle}>
              Untuk rapat, waktu itu krusial. Kami berusaha mengirim snack
              sebelum acara dimulai, dengan jarak waktu yang cukup agar
              panitia bisa menata di ruangan.
            </p>
          </header>

          <div className={styles.deliveryGrid}>
            <div className={styles.deliveryCard}>
              <FontAwesomeIcon icon={faTruck} />
              <h3>Area Pengantaran</h3>
              <p>
                Pengantaran fokus di sekitar Ciputat dan area terdekat.
                Untuk lokasi yang sedikit lebih jauh, bisa didiskusikan
                dulu soal jarak dan biaya tambahan.
              </p>
            </div>

            <div className={styles.deliveryCard}>
              <FontAwesomeIcon icon={faClock} />
              <h3>Jam Drop Off Fleksibel</h3>
              <p>
                Umumnya snack kami antar 30–60 menit sebelum rapat dimulai,
                sehingga panitia punya waktu menata dan memastikan ruangan
                rapi sebelum tamu datang.
              </p>
            </div>

            <div className={styles.deliveryCard}>
              <FontAwesomeIcon icon={faBriefcase} />
              <h3>Packaging Rapi & Profesional</h3>
              <p>
                Box atau nampan bisa disesuaikan gaya acaranya: lebih santai
                untuk internal, atau lebih rapi untuk tamu resmi dan pejabat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ RAPAT KANTOR */}
      <FaqRapatKantor whatsappLink={whatsappLink} />
    </main>
  );
};

export default PaketSnackRapatKantorCiputatPage;