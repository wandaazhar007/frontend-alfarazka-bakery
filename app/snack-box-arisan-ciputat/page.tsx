// app/snack-box-arisan-ciputat/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMugHot,
  faPeopleGroup,
  faHouse,
  faMoneyBillWave,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SnackBoxArisanCiputatPage.module.scss";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title:
    "Snack Box Arisan Ciputat — Roti Unyil untuk Arisan RT & Kumpul Ibu-Ibu",
  description:
    "Cari snack box arisan di Ciputat? Alfarazka Bakery sediakan paket roti unyil seribuan yang ramah di kantong untuk arisan RT, PKK, dan kumpul ibu-ibu.",
  keywords: [
    "snack box arisan ciputat",
    "snack arisan ibu ibu ciputat",
    "roti unyil untuk arisan",
    "snack box arisan RT",
    "Alfarazka Bakery",
    "snack box pkk ciputat",
  ],
  alternates: {
    canonical: "/snack-box-arisan-ciputat",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/snack-box-arisan-ciputat",
    siteName: "Alfarazka Bakery",
    title:
      "Snack Box Arisan & Kumpul Ibu-Ibu di Ciputat — Alfarazka Bakery",
    description:
      "Paket snack box arisan yang santai, hemat, dan bikin suasana kumpul ibu-ibu makin hangat. Roti unyil seribuan dari Alfarazka Bakery di Ciputat.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Snack Box Arisan Ciputat — Roti Unyil untuk Arisan RT & Kumpul Ibu-Ibu",
    description:
      "Paket snack box arisan dari Alfarazka Bakery. Roti unyil lembut, harga ramah, cocok untuk arisan RT, PKK, dan kumpul keluarga di Ciputat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whatsappLink =
  "https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20mau%20tanya%20paket%20snack%20box%20arisan%20Alfarazka%20Bakery%20di%20Ciputat.";

const SnackBoxArisanCiputatPage = () => {
  return (
    <main className={styles.page}>
      {/* BREADCRUMB */}
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Produk & Paket", href: "/produk" },
            { label: "Snack Box Arisan Ciputat", href: "/snack-box-arisan-ciputat" },
          ]}
        />
      </div>
      {/* HERO */}
      <section
        className={`section ${styles.heroSection}`}
        aria-labelledby="snack-box-arisan-hero-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            {/* LEFT */}
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>Snack Box Arisan Ciputat</p>
              <h1
                id="snack-box-arisan-hero-heading"
                className={styles.heroTitle}
              >
                Snack Box Manis–Gurih{" "}
                <span>Untuk Arisan & Kumpul Ibu-Ibu</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Arisan jadi makin hangat dengan snack roti unyil lembut dari
                Alfarazka Bakery. Harga ramah di kantong, pilihan rasa banyak,
                dan bisa disesuaikan dengan tema arisan di Ciputat dan sekitar.
              </p>

              <div className={styles.heroBadges}>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faUsers} />
                  <span>Pas untuk arisan RT & PKK</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faHouse} />
                  <span>Cocok untuk kumpul di rumah</span>
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
                  Konsultasi paket arisan via WhatsApp
                </a>

                <Link href="/produk" className={styles.secondaryLink}>
                  Lihat produk & paket lengkap
                </Link>
              </div>

              <p className={styles.heroMicrocopy}>
                *Bisa request varian roti favorit ibu-ibu dan menyesuaikan
                jumlah kotak dengan anggota arisan.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageInner}>
                <Image
                  src="/images/roti-unyil-8.jpg"
                  alt="Snack box arisan berisi roti unyil dari Alfarazka Bakery Ciputat"
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

      {/* PAKET SANTAI & HARGA RAMAH */}
      <section
        className={`section ${styles.packagesSection}`}
        aria-labelledby="snack-box-arisan-packages-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Paket Santai & Harga Ramah</p>
            <h2
              id="snack-box-arisan-packages-heading"
              className={styles.sectionTitle}
            >
              Pilihan Paket Snack untuk Arisan di Ciputat
            </h2>
            <p className={styles.sectionSubtitle}>
              Kamu bisa mulai dari paket sederhana sampai paket meriah. Semua
              bisa dikombinasikan sesuai jumlah anggota arisan dan iuran
              bulanan. Berikut beberapa contoh paket yang sering dipesan.
            </p>
          </header>

          <div className={styles.packagesGrid}>
            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faMugHot} />
              </div>
              <h3>Paket Arisan Santai</h3>
              <p className={styles.packagePrice}>Mulai ± Rp100.000</p>
              <p className={styles.packageMeta}>Rekomendasi 20–25 orang</p>
              <ul className={styles.packageList}>
                <li>Roti unyil manis & gurih campur</li>
                <li>2 pcs per orang, pas untuk teman teh / kopi</li>
                <li>Cocok untuk arisan santai di rumah</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faPeopleGroup} />
              </div>
              <h3>Paket Arisan RT / PKK</h3>
              <p className={styles.packagePrice}>Mulai ± Rp200.000</p>
              <p className={styles.packageMeta}>Rekomendasi 30–40 orang</p>
              <ul className={styles.packageList}>
                <li>Snack box isi 2–3 pcs roti unyil</li>
                <li>Mix rasa manis, gurih, dan keju</li>
                <li>Cocok untuk pertemuan rutin PKK / dasawisma</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <h3>Paket Kumpul Keluarga</h3>
              <p className={styles.packagePrice}>Mulai ± Rp150.000</p>
              <p className={styles.packageMeta}>Rekomendasi 20–30 orang</p>
              <ul className={styles.packageList}>
                <li>Roti unyil varian favorit anak & orang tua</li>
                <li>Bisa ditambah pizza mini untuk sharing</li>
                <li>Pas untuk weekend atau keluarga besar kumpul</li>
              </ul>
            </article>

            <article className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <h3>Paket Sesuai Iuran</h3>
              <p className={styles.packagePrice}>Menyesuaikan budget</p>
              <p className={styles.packageMeta}>
                Berdasarkan iuran arisan per pertemuan
              </p>
              <ul className={styles.packageList}>
                <li>Tentukan budget per orang / per pertemuan</li>
                <li>Kami bantu atur kombinasi isi snack</li>
                <li>Supaya tetap seru tanpa memberatkan</li>
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
              Diskusikan paket & budget arisan
            </a>
          </div>
        </div>
      </section>

      {/* SUASANA ARISAN & FOTO */}
      <section
        className={`section ${styles.vibesSection}`}
        aria-labelledby="snack-box-arisan-vibes-heading"
      >
        <div className="container">
          <div className={styles.vibesInner}>
            <div className={styles.vibesText}>
              <p className={styles.sectionKicker}>Suasana Arisan</p>
              <h2
                id="snack-box-arisan-vibes-heading"
                className={styles.sectionTitle}
              >
                Bikin Arisan Lebih Hangat & Ngobrol Makin Asyik
              </h2>
              <p className={styles.sectionSubtitle}>
                Arisan bukan cuma soal iuran dan undian, tapi juga soal
                kebersamaan. Snack yang enak bikin obrolan makin santai dan
                suasana jadi lebih akrab.
              </p>

              <ul className={styles.vibesList}>
                <li>
                  <FontAwesomeIcon icon={faFaceSmile} />
                  <div>
                    <strong>Roti unyil lembut, manis–gurih seimbang.</strong>
                    <p>
                      Disukai anak-anak sampai ibu-ibu, jadi semua yang hadir
                      bisa ikut menikmati.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  <div>
                    <strong>Cocok untuk konsep duduk santai.</strong>
                    <p>
                      Bisa disajikan per kotak atau disusun di nampan untuk
                      sharing bareng.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMugHot} />
                  <div>
                    <strong>Teman pas untuk teh, kopi, atau wedang.</strong>
                    <p>
                      Roti unyil jadi pasangan yang pas untuk minuman hangat
                      saat arisan.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.vibesImageGrid}>
              <div className={styles.vibesLarge}>
                <Image
                  src="/images/roti-unyil-9.jpg"
                  alt="Roti unyil lembut untuk arisan di Ciputat"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.vibesSmallGrid}>
                <div className={styles.vibesSmallItem}>
                  <Image
                    src="/images/roti-unyil-4.jpg"
                    alt="Snack roti unyil untuk kumpul ibu-ibu"
                    fill
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                </div>
                <div className={styles.vibesSmallItem}>
                  <Image
                    src="/images/roti-unyil-5.jpg"
                    alt="Roti unyil aneka rasa untuk arisan"
                    fill
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA KONSULTASI */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <p className={styles.sectionKicker}>Butuh Bantuan Pilih Paket?</p>
              <h2 className={styles.sectionTitle}>
                Konsultasi Paket Snack Arisan di Ciputat
              </h2>
              <p className={styles.sectionSubtitle}>
                Ceritakan jumlah anggota arisan, lokasi, dan kisaran budget
                per pertemuan. InsyaAllah kami bantu rekomendasikan paket snack
                yang pas untuk kebutuhanmu.
              </p>
              <div className={styles.ctaActions}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Chat WhatsApp sekarang
                </a>
                <Link href="/cara-pemesanan" className={styles.secondaryLink}>
                  Lihat cara pemesanan lengkap
                </Link>
              </div>
              <p className={styles.ctaMicrocopy}>
                *Disarankan pre-order minimal H-1 sebelum arisan. Untuk pesanan
                banyak, lebih baik beberapa hari sebelumnya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SnackBoxArisanCiputatPage;