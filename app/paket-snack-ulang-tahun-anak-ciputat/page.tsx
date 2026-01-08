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
  faQuestionCircle,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./PaketSnackUlangTahunAnakCiputatPage.module.scss";

export const metadata: Metadata = {
  title:
    "Paket Snack Ulang Tahun Anak Ciputat — Traktiran Sekolah & TPA | Alfarazka Bakery",
  description:
    "Butuh snack ulang tahun anak di Ciputat? Alfarazka Bakery sediakan paket roti unyil seribuan untuk traktiran sekolah, TPA, dan pesta ulang tahun anak di rumah.",
  keywords: [
    "paket snack ulang tahun anak ciputat",
    "snack ulang tahun sekolah ciputat",
    "roti unyil ulang tahun anak",
    "traktiran sekolah ciputat",
    "snack box ulang tahun anak",
    "Alfarazka Bakery",
  ],
  alternates: {
    canonical: "/paket-snack-ulang-tahun-anak-ciputat",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/paket-snack-ulang-tahun-anak-ciputat",
    siteName: "Alfarazka Bakery",
    title:
      "Paket Snack Ulang Tahun Anak di Ciputat — Roti Unyil Seribuan | Alfarazka Bakery",
    description:
      "Paket snack ulang tahun anak yang praktis dan ramah di kantong. Cocok untuk traktiran sekolah, TPA, dan pesta ulang tahun di rumah area Ciputat.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Paket Snack Ulang Tahun Anak Ciputat — Traktiran Sekolah & TPA | Alfarazka Bakery",
    description:
      "Ide paket snack ulang tahun anak lengkap dengan contoh jumlah roti per anak dan opsi dekorasi box dari Alfarazka Bakery Ciputat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whatsappLink =
  "https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20mau%20tanya%20paket%20snack%20ulang%20tahun%20anak%20Alfarazka%20Bakery%20di%20Ciputat.";

const PaketSnackUlangTahunAnakCiputatPage = () => {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section
        className={`section ${styles.heroSection}`}
        aria-labelledby="ulang-tahun-anak-hero-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            {/* LEFT */}
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
                serahkan urusan snack ke Alfarazka Bakery. Roti unyil lembut,
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

            {/* RIGHT IMAGE */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageInner}>
                <Image
                  src="/images/roti-unyil-2.jpg"
                  alt="Snack ulang tahun anak berupa roti unyil dari Alfarazka Bakery Ciputat"
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

      {/* IDE PAKET ULANG TAHUN */}
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

      {/* CONTOH JUMLAH ROTI PER ANAK */}
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

      {/* BONUS DEKORASI & PERSONLASI BOX */}
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
                  alt="Snack box ulang tahun anak Alfarazka Bakery yang dikemas rapi"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ORANG TUA */}
      <section
        className={`section ${styles.faqSection}`}
        aria-labelledby="ulang-tahun-anak-faq-heading"
      >
        <div className="container">
          <div className={styles.faqInner}>
            <div className={styles.faqIntro}>
              <p className={styles.sectionKicker}>FAQ Orang Tua</p>
              <h2
                id="ulang-tahun-anak-faq-heading"
                className={styles.sectionTitle}
              >
                Pertanyaan yang Sering Diajukan Ortu
              </h2>
              <p className={styles.sectionSubtitle}>
                Tenang, kamu tidak sendirian. Banyak orang tua yang bertanya
                hal-hal berikut sebelum memesan paket snack ulang tahun anak.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                Chat admin untuk tanya detail
              </a>
            </div>

            <div className={styles.faqList}>
              <article className={styles.faqItem}>
                <div className={styles.faqIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <div>
                  <h3>Minimal order berapa kotak?</h3>
                  <p>
                    Umumnya kami sarankan mulai dari 20 kotak, tapi tetap
                    fleksibel. Untuk jumlah di bawah itu, bisa didiskusikan
                    dulu lewat WhatsApp.
                  </p>
                </div>
              </article>

              <article className={styles.faqItem}>
                <div className={styles.faqIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <div>
                  <h3>Apakah bisa campur beberapa varian roti?</h3>
                  <p>
                    Bisa. Justru kami sarankan isi mix manis dan gurih supaya
                    anak-anak tidak bosan. Kamu bisa request rasa favorit
                    anak.
                  </p>
                </div>
              </article>

              <article className={styles.faqItem}>
                <div className={styles.faqIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <div>
                  <h3>Pesan berapa hari sebelum acara?</h3>
                  <p>
                    Minimal H-1, tapi kalau jumlahnya banyak (puluhan sampai
                    ratusan kotak), lebih baik booking beberapa hari sebelumnya
                    supaya slot aman.
                  </p>
                </div>
              </article>

              <article className={styles.faqItem}>
                <div className={styles.faqIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <div>
                  <h3>Apakah bisa antar ke sekolah / lokasi acara?</h3>
                  <p>
                    Untuk area sekitar Ciputat tertentu, insyaAllah bisa
                    diantarkan dengan biaya tambahan. Detailnya bisa dibahas
                    lewat chat supaya jelas jarak dan waktunya.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaketSnackUlangTahunAnakCiputatPage;