// app/snack-box-pengajian-ciputat/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMosque,
  faBoxOpen,
  faUsers,
  faMoneyBillWave,
  faListCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SnackBoxPengajianCiputatPage.module.scss";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title:
    "Snack Box Pengajian Ciputat — Roti Unyil Seribuan untuk Majelis Taklim",
  description:
    "Butuh snack box pengajian di Ciputat? Alfarazka Bakery sediakan paket roti unyil seribuan yang hemat, rapi, dan cocok untuk pengajian, kajian, dan majelis taklim.",
  keywords: [
    "snack box pengajian ciputat",
    "snack pengajian ciputat",
    "snack box kajian ciputat",
    "roti unyil untuk pengajian",
    "paket snack pengajian tangsel",
    "Alfarazka Bakery",
  ],
  alternates: {
    canonical: "/snack-box-pengajian-ciputat",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/snack-box-pengajian-ciputat",
    siteName: "Alfarazka Bakery",
    title: "Snack Box Pengajian di Ciputat — Alfarazka Bakery",
    description:
      "Paket snack box pengajian yang rapi, hemat, dan insyaAllah berkah. Roti unyil seribuan untuk pengajian, kajian, dan majelis taklim di Ciputat.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Snack Box Pengajian Ciputat — Roti Unyil Seribuan untuk Majelis Taklim",
    description:
      "Paket snack box pengajian dari Alfarazka Bakery di Ciputat. Roti unyil lembut, fresh, dan ramah di kantong untuk jamaah.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whatsappLink =
  "https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20mau%20tanya%20paket%20snack%20box%20pengajian%20Alfarazka%20Bakery%20di%20Ciputat.";

const SnackBoxPengajianCiputatPage = () => {
  return (
    <main className={styles.page}>
      {/* BREADCRUMB */}
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Produk & Paket", href: "/produk" },
            { label: "Snack Box Pengajian Ciputat", href: "/snack-box-pengajian-ciputat" },
          ]}
        />
      </div>
      {/* HERO */}
      <section
        className={`section ${styles.heroSection}`}
        aria-labelledby="snack-box-pengajian-hero-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            {/* LEFT */}
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>Snack Box Pengajian Ciputat</p>
              <h1
                id="snack-box-pengajian-hero-heading"
                className={styles.heroTitle}
              >
                Snack Box Rapi & Hemat{" "}
                <span>Untuk Pengajian & Majelis Taklim</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Alfarazka Bakery menyiapkan paket snack box pengajian berisi roti
                unyil seribuan yang lembut, manis–gurih seimbang, dan ditata
                rapi untuk jamaah. Cocok untuk pengajian rutin, kajian akbar,
                dan majelis taklim ibu-ibu di Ciputat.
              </p>

              <div className={styles.heroBadges}>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faMosque} />
                  <span>Cocok untuk pengajian & kajian</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faUsers} />
                  <span>Mulai 25–30 jamaah</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  <span>Mulai seribuan per pcs</span>
                </span>
              </div>

              <div className={styles.heroActions}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Tanya paket pengajian via WhatsApp
                </a>

                <Link href="/produk" className={styles.secondaryLink}>
                  Lihat paket snack acara & produk
                </Link>
              </div>

              <p className={styles.heroMicrocopy}>
                *Bisa request susunan isi snack box sesuai budget dan tema
                pengajian. InsyaAllah kami bantu sesuaikan.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageInner}>
                <Image
                  src="/images/roti-unyil-6.jpg"
                  alt="Snack box pengajian berisi roti unyil lembut dari Alfarazka Bakery Ciputat"
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

      {/* CONTOH PAKET */}
      <section
        className={`section ${styles.packagesSection}`}
        aria-labelledby="snack-box-packages-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Contoh Paket Snack Pengajian</p>
            <h2 id="snack-box-packages-heading" className={styles.sectionTitle}>
              Pilihan Paket untuk Pengajian di Ciputat
            </h2>
            <p className={styles.sectionSubtitle}>
              Berikut beberapa contoh paket yang sering dipesan. Jumlah,
              varian, dan susunan isi bisa diubah sesuai kebutuhan jamaah dan
              anggaran masjid/majlis.
            </p>
          </header>

          <div className={styles.packagesGrid}>
            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faMosque} />
              </div>
              <h3>Paket Pengajian Rutin</h3>
              <p className={styles.packagePrice}>Mulai ± Rp150.000</p>
              <p className={styles.packageMeta}>Rekomendasi 30–40 jamaah</p>
              <ul className={styles.packageList}>
                <li>Roti unyil seribuan campur manis & gurih</li>
                <li>Isi 2–3 pcs per jamaah</li>
                <li>Cocok untuk pengajian pekanan / bulanan</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faBoxOpen} />
              </div>
              <h3>Paket Majelis Taklim Ibu-Ibu</h3>
              <p className={styles.packagePrice}>Mulai ± Rp250.000</p>
              <p className={styles.packageMeta}>Rekomendasi 40–60 jamaah</p>
              <ul className={styles.packageList}>
                <li>Snack box isi 3 pcs roti unyil</li>
                <li>Varian manis lembut & gurih favorit ibu-ibu</li>
                <li>Bisa ditambah roti meises / pizza mini</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Paket Kajian Remaja & Pemuda</h3>
              <p className={styles.packagePrice}>Mulai ± Rp300.000</p>
              <p className={styles.packageMeta}>Rekomendasi 50–70 peserta</p>
              <ul className={styles.packageList}>
                <li>Roti unyil mix manis–gurih</li>
                <li>Pilihan topping kekinian yang disukai anak muda</li>
                <li>Enak jadi teman teh / kopi hangat</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <h3>Paket Hemat Kas Masjid</h3>
              <p className={styles.packagePrice}>Menyesuaikan budget</p>
              <p className={styles.packageMeta}>Mulai dari target per orang</p>
              <ul className={styles.packageList}>
                <li>Sesuaikan isi snack box dengan kas yang tersedia</li>
                <li>Kami bantu hitungkan estimasi pcs & varian</li>
                <li>Cocok untuk masjid dengan anggaran terbatas</li>
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
              Konsultasi paket pengajian & budget
            </a>
          </div>
        </div>
      </section>

      {/* REKOMENDASI JUMLAH */}
      <section
        className={`section ${styles.recommendationSection}`}
        aria-labelledby="snack-box-recommendation-heading"
      >
        <div className="container">
          <header className={styles.sectionHeaderCentered}>
            <p className={styles.sectionKicker}>Rekomendasi Jumlah Snack</p>
            <h2
              id="snack-box-recommendation-heading"
              className={styles.sectionTitle}
            >
              Berapa Snack Box untuk Jamaah Pengajian?
            </h2>
            <p className={styles.sectionSubtitleCentered}>
              Ini contoh hitungan sederhana. InsyaAllah bisa jadi acuan awal
              sebelum kamu menghubungi kami untuk diskusi lebih detail.
            </p>
          </header>

          <div className={styles.recommendationGrid}>
            <div className={styles.recommendationCard}>
              <h3>± 25–30 Jamaah</h3>
              <ul>
                <li>Snack box 30 kotak</li>
                <li>Isi 2–3 pcs roti unyil per box</li>
                <li>Cocok untuk pengajian rumah / RT</li>
              </ul>
            </div>

            <div className={styles.recommendationCard}>
              <h3>± 40–50 Jamaah</h3>
              <ul>
                <li>Snack box 50 kotak</li>
                <li>Isi 3 pcs roti unyil per box</li>
                <li>Tambahkan varian gurih supaya lebih mengenyangkan</li>
              </ul>
            </div>

            <div className={styles.recommendationCard}>
              <h3>± 80–100 Jamaah</h3>
              <ul>
                <li>Snack box 100 kotak</li>
                <li>Isi 2–3 pcs roti unyil (mix manis & gurih)</li>
                <li>Bisa ditambah tray besar untuk panitia</li>
              </ul>
            </div>

            <div className={styles.recommendationCard}>
              <h3>Di atas 100 Jamaah</h3>
              <ul>
                <li>Kami sarankan konsultasi langsung</li>
                <li>Kita hitung bareng kebutuhan pcs & budget</li>
                <li>Supaya snack cukup dan tidak mubazir</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SUSUNAN SNACK BOX */}
      <section
        className={`section ${styles.compositionSection}`}
        aria-labelledby="snack-box-composition-heading"
      >
        <div className="container">
          <div className={styles.compositionInner}>
            <div className={styles.compositionText}>
              <p className={styles.sectionKicker}>Contoh Susunan Snack</p>
              <h2
                id="snack-box-composition-heading"
                className={styles.sectionTitle}
              >
                Contoh Isi Snack Box untuk Pengajian
              </h2>
              <p className={styles.sectionSubtitle}>
                Susunan snack bisa fleksibel, tapi umumnya jamaah suka kombinasi
                manis dan gurih. Berikut beberapa contoh yang sering dipakai.
              </p>

              <div className={styles.compositionLists}>
                <div className={styles.compositionBlock}>
                  <h3>Pengajian Pagi / Dhuha</h3>
                  <ul>
                    <li>1 roti unyil manis (misal: cokelat / meises)</li>
                    <li>1 roti unyil gurih (misal: sosis / keju)</li>
                    <li>Opsional: tambahan roti meises / kue kecil</li>
                  </ul>
                </div>

                <div className={styles.compositionBlock}>
                  <h3>Majelis Taklim Ibu-Ibu</h3>
                  <ul>
                    <li>2 roti unyil manis (varian berbeda)</li>
                    <li>1 roti unyil gurih</li>
                    <li>Opsional: tambahan pizza mini untuk tamu khusus</li>
                  </ul>
                </div>

                <div className={styles.compositionBlock}>
                  <h3>Kajian Akbar / Tamu Banyak</h3>
                  <ul>
                    <li>2–3 roti unyil (mix manis & gurih)</li>
                    <li>Tambahan tray roti untuk panitia / ustadz</li>
                    <li>Pembagian bisa per box atau per nampan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.compositionImageWrapper}>
              <div className={styles.compositionImageInner}>
                <Image
                  src="/images/roti-unyil-7.jpg"
                  alt="Snack box pengajian berisi roti unyil manis dan gurih"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS ANGGARAN */}
      <section
        className={`section ${styles.tipsSection}`}
        aria-labelledby="snack-box-tips-heading"
      >
        <div className="container">
          <div className={styles.tipsInner}>
            <div className={styles.tipsText}>
              <p className={styles.sectionKicker}>Tips Atur Anggaran</p>
              <h2 id="snack-box-tips-heading" className={styles.sectionTitle}>
                Cara Mengatur Budget Snack Pengajian
              </h2>
              <p className={styles.sectionSubtitle}>
                Supaya snack cukup, jamaah senang, dan kas masjid tetap aman,
                berikut beberapa tips sederhana yang bisa dipakai.
              </p>

              <ul className={styles.tipsList}>
                <li>
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  <div>
                    <strong>Tentukan budget per jamaah.</strong>
                    <p>
                      Misal Rp5.000–Rp7.000 per orang, lalu kami bantu hitungkan
                      isi snack yang pas.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faListCheck} />
                  <div>
                    <strong>Pilih kombinasi 2–3 pcs roti.</strong>
                    <p>
                      Campur manis dan gurih supaya jamaah punya pilihan dan
                      tetap mengenyangkan.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  <div>
                    <strong>Hitung jumlah jamaah + cadangan.</strong>
                    <p>
                      Biasanya kami sarankan tambah 5–10 kotak untuk ustadz,
                      panitia, atau jamaah tambahan.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <div>
                    <strong>Diskusikan via WhatsApp.</strong>
                    <p>
                      Ceritakan konsep pengajian, perkiraan jumlah jamaah, dan
                      budget. InsyaAllah kami bantu carikan skema terbaik.
                    </p>
                  </div>
                </li>
              </ul>

              <div className={styles.tipsActions}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Diskusi anggaran snack pengajian
                </a>
                <Link href="/cara-pemesanan" className={styles.secondaryLink}>
                  Lihat cara pemesanan lengkap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SnackBoxPengajianCiputatPage;