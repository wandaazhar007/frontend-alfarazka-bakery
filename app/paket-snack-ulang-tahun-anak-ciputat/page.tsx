// app/paket-snack-ulang-tahun-anak-ciputat/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faSchool,
  faMosque,
  faChildren,
  faGift,
  faClock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./PaketSnackUlangTahunAnakCiputatPage.module.scss";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FaqPaketUltah from "../components/faqPaketUltah/FaqPaketUltah";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../services/siteSettingsService";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://alfarazkabakery.com";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchPublicSiteSettings();
  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;

  return {
    title: `Paket Snack Ulang Tahun Anak Ciputat — Traktiran Sekolah & TPA | ${businessName}`,
    description: `Butuh snack ulang tahun anak di Ciputat? ${businessName} sediakan paket roti unyil seribuan untuk traktiran sekolah, TPA, dan pesta ulang tahun anak di rumah.`,
    keywords: [
      "paket snack ulang tahun anak ciputat",
      "snack ulang tahun sekolah ciputat",
      "roti unyil ulang tahun anak",
      "traktiran sekolah ciputat",
      "snack box ulang tahun anak",
      businessName,
    ],
    alternates: {
      canonical: "/paket-snack-ulang-tahun-anak-ciputat",
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${siteUrl}/paket-snack-ulang-tahun-anak-ciputat`,
      siteName: businessName,
      title: `Paket Snack Ulang Tahun Anak di Ciputat — Roti Unyil Seribuan | ${businessName}`,
      description:
        "Paket snack ulang tahun anak yang praktis dan ramah di kantong. Cocok untuk traktiran sekolah, TPA, dan pesta ulang tahun di rumah area Ciputat.",
    },
    twitter: {
      card: "summary_large_image",
      title: `Paket Snack Ulang Tahun Anak Ciputat — Traktiran Sekolah & TPA | ${businessName}`,
      description: `Ide paket snack ulang tahun anak lengkap dengan contoh jumlah roti per anak dan opsi dekorasi box dari ${businessName} Ciputat.`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const PaketSnackUlangTahunAnakCiputatPage = async () => {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;
  const whatsappNumber =
    settings.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber;

  const whatsappLink = buildWhatsAppUrl(
    whatsappNumber,
    `Assalamualaikum, saya mau tanya paket snack ulang tahun anak ${businessName} di Ciputat.`
  );

  return (
    <main className={styles.page}>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Produk & Paket", href: "/produk" },
            {
              label: "Paket snack ulang tahun anak",
              href: "/paket-snack-ulang-tahun-anak-ciputat",
            },
          ]}
        />
      </div>

      <section
        className={`section ${styles.heroSection}`}
        aria-labelledby="ulang-tahun-anak-hero-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>Paket Snack Ulang Tahun Anak</p>
              <h1
                id="ulang-tahun-anak-hero-heading"
                className={styles.heroTitle}
              >
                Roti Unyil Seribuan{" "}
                <span>Untuk Traktiran Sekolah & TPA di Ciputat</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Biar momen ulang tahun si kecil lebih berkesan tanpa repot,
                serahkan urusan snack ke {businessName}. Roti unyil lembut,
                varian rasa banyak, dan bisa disesuaikan dengan jumlah teman
                sekolah, TPA, atau lingkungan rumah.
              </p>

              <div className={styles.heroBadges}>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faSchool} />
                  <span>Traktiran sekolah & TK</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faMosque} />
                  <span>Cocok untuk TPA / TPQ</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faChildren} />
                  <span>Roti unyil ramah anak</span>
                </span>
              </div>

              <div className={styles.heroActions}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Konsultasi paket ulang tahun via WhatsApp
                </a>

                <Link href="/produk" className={styles.secondaryLink}>
                  Lihat produk & paket lengkap
                </Link>
              </div>

              <p className={styles.heroMicrocopy}>
                *Bisa request tulisan nama anak, jumlah kotak, dan varian rasa
                sesuai selera si kecil.
              </p>
            </div>

            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageInner}>
                <Image
                  src="/images/roti-unyil-2.jpg"
                  alt={`Snack ulang tahun anak berupa roti unyil dari ${businessName} Ciputat`}
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

      <section
        className={`section ${styles.packagesSection}`}
        aria-labelledby="ulang-tahun-anak-packages-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Ide Paket Ulang Tahun Anak</p>
            <h2
              id="ulang-tahun-anak-packages-heading"
              className={styles.sectionTitle}
            >
              Pilihan Paket Snack untuk Pesta & Traktiran
            </h2>
            <p className={styles.sectionSubtitle}>
              Berikut beberapa contoh paket snack ulang tahun yang sering
              dipesan orang tua. Semua masih bisa disesuaikan dengan jumlah
              anak, budget, dan kebutuhan acara.
            </p>
          </header>

          <div className={styles.packagesGrid}>
            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faSchool} />
              </div>
              <h3>Paket Traktiran Sekolah</h3>
              <p className={styles.packagePrice}>Mulai ± Rp10.000 / anak</p>
              <p className={styles.packageMeta}>Contoh isi per anak:</p>
              <ul className={styles.packageList}>
                <li>2–3 pcs roti unyil aneka rasa</li>
                <li>Box kecil rapi & mudah dibawa pulang</li>
                <li>Cocok untuk TK, SD kelas awal, dan PAUD</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faMosque} />
              </div>
              <h3>Paket Ulang Tahun di TPA</h3>
              <p className={styles.packagePrice}>Mulai ± Rp9.000 / anak</p>
              <p className={styles.packageMeta}>Contoh isi per anak:</p>
              <ul className={styles.packageList}>
                <li>2 pcs roti unyil (manis & gurih)</li>
                <li>Bisa ditambah 1 pcs roti meises</li>
                <li>Pas untuk santri TPA / TPQ selepas mengaji</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faCakeCandles} />
              </div>
              <h3>Paket Pesta di Rumah</h3>
              <p className={styles.packagePrice}>Mulai ± Rp12.000 / anak</p>
              <p className={styles.packageMeta}>Contoh isi per anak:</p>
              <ul className={styles.packageList}>
                <li>3 pcs roti unyil (campur manis & gurih)</li>
                <li>Opsional: tambahan 1 slice mini pizza</li>
                <li>Cocok untuk pesta kecil di rumah</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <h3>Paket Sesuai Budget Ortu</h3>
              <p className={styles.packagePrice}>Menyesuaikan budget</p>
              <p className={styles.packageMeta}>Mulai dari seribuan per pcs</p>
              <ul className={styles.packageList}>
                <li>Tentukan budget per anak atau total</li>
                <li>Kami bantu atur kombinasi roti & isi box</li>
                <li>Supaya tetap seru tanpa memberatkan orang tua</li>
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
              Tanya paket & hitung kebutuhan anak
            </a>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.portionSection}`}
        aria-labelledby="ulang-tahun-anak-portion-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>
              Contoh Jumlah Roti per Anak
            </p>
            <h2
              id="ulang-tahun-anak-portion-heading"
              className={styles.sectionTitle}
            >
              Biar Cukup untuk Semua Teman, Tidak Mubazir
            </h2>
            <p className={styles.sectionSubtitle}>
              Kadang ortu bingung, “Harus isi berapa roti per kotak?” Berikut
              gambaran sederhana yang bisa dijadikan patokan awal.
            </p>
          </header>

          <div className={styles.portionGrid}>
            <div className={styles.portionCard}>
              <h3>Untuk Anak TK / PAUD</h3>
              <p className={styles.portionHighlight}>2–3 pcs roti unyil</p>
              <ul>
                <li>1 pcs rasa manis (cokelat / meises)</li>
                <li>1 pcs rasa gurih (sosis / keju)</li>
                <li>Opsional: 1 pcs tambahan sesuai favorit anak</li>
              </ul>
            </div>

            <div className={styles.portionCard}>
              <h3>Untuk Anak SD</h3>
              <p className={styles.portionHighlight}>3–4 pcs roti unyil</p>
              <ul>
                <li>Campur manis dan gurih agar tidak bosan</li>
                <li>Cocok untuk anak yang lebih aktif & mudah lapar</li>
                <li>Bisa ditambah mini pizza sebagai bonus</li>
              </ul>
            </div>

            <div className={styles.portionCard}>
              <h3>Untuk TPA / TPQ</h3>
              <p className={styles.portionHighlight}>2 pcs roti unyil</p>
              <ul>
                <li>Pas untuk snack setelah mengaji</li>
                <li>Tidak terlalu banyak, tetap nyaman di perut</li>
                <li>Bisa dipaketkan dengan minuman dari panitia</li>
              </ul>
            </div>

            <div className={styles.portionInfoCard}>
              <FontAwesomeIcon icon={faClock} />
              <div>
                <strong>Waktu acara juga berpengaruh.</strong>
                <p>
                  Kalau acara pagi setelah sarapan, snack tidak perlu terlalu
                  banyak. Kalau sore mendekati jam makan, ortu biasanya
                  memilih isi yang sedikit lebih mengenyangkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.decorSection}`}
        aria-labelledby="ulang-tahun-anak-decor-heading"
      >
        <div className="container">
          <div className={styles.decorInner}>
            <div className={styles.decorText}>
              <p className={styles.sectionKicker}>Bonus Dekorasi</p>
              <h2
                id="ulang-tahun-anak-decor-heading"
                className={styles.sectionTitle}
              >
                Box Rapi, Bisa Tambah Sentuhan Ulang Tahun
              </h2>
              <p className={styles.sectionSubtitle}>
                Snack yang enak jadi makin spesial kalau dikemas rapi dan ada
                sentuhan ulang tahun anak. Beberapa hal yang bisa kamu request:
              </p>
              <ul className={styles.decorList}>
                <li>
                  <FontAwesomeIcon icon={faGift} />
                  <div>
                    <strong>Stiker nama anak & ucapan.</strong>
                    <p>
                      Bisa ditambahkan tulisan “Barakallahu fi umrik” atau
                      ucapan ulang tahun lainnya.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChildren} />
                  <div>
                    <strong>Dominasi warna sesuai tema.</strong>
                    <p>
                      Misalnya nuansa pink, biru, atau warna tertentu yang
                      disukai anak.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCakeCandles} />
                  <div>
                    <strong>Box mudah dibawa anak.</strong>
                    <p>
                      Ukuran box disesuaikan supaya mudah dibawa pulang oleh
                      anak-anak tanpa jatuh.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.decorImageWrapper}>
              <div className={styles.decorImage}>
                <Image
                  src="/images/roti-unyil-7.jpg"
                  alt={`Snack box ulang tahun anak ${businessName} yang dikemas rapi`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqPaketUltah whatsappLink={whatsappLink} />
    </main>
  );
};

export default PaketSnackUlangTahunAnakCiputatPage;