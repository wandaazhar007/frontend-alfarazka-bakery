// app/toko-roti-rumahan-ciputat/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMosque,
  faHandsPraying,
  faCheckCircle,
  faLeaf,
  faBowlFood,
  faChild,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./TokoRotiRumahanCiputatPage.module.scss";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
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
    title: `Toko Roti Rumahan Halal di Ciputat — Aman untuk Keluarga | ${businessName}`,
    description: `Sedang mencari toko roti rumahan halal di Ciputat? ${businessName} menghadirkan roti unyil dan roti rumahan yang lembut, higienis, dan insyaAllah halal, aman untuk anak dan keluarga.`,
    keywords: [
      "toko roti rumahan ciputat",
      "toko roti halal ciputat",
      "roti rumahan halal",
      "roti unyil ciputat",
      "roti rumahan untuk keluarga",
      businessName,
    ],
    alternates: {
      canonical: "/toko-roti-rumahan-ciputat",
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${siteUrl}/toko-roti-rumahan-ciputat`,
      siteName: businessName,
      title: `Toko Roti Rumahan Halal di Ciputat — Lembut, Higienis, & Aman untuk Keluarga | ${businessName}`,
      description: `${businessName} adalah toko roti rumahan di Ciputat yang fokus pada roti unyil, roti meises, dan snack acara. Dibuat dari dapur rumahan yang bersih, insyaAllah halal, dan ramah untuk anak.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Toko Roti Rumahan Halal di Ciputat — Aman untuk Anak & Keluarga | ${businessName}`,
      description:
        "Roti rumahan halal, higienis, dan lembut dari Ciputat. Cocok untuk pengajian, arisan, ulang tahun anak, dan camilan keluarga.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const TokoRotiRumahanCiputatPage = async () => {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;
  const whatsappNumber =
    settings.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber;

  const whatsappLink = buildWhatsAppUrl(
    whatsappNumber,
    `Assalamualaikum, saya mau tanya tentang roti rumahan halal ${businessName} di Ciputat.`
  );

  return (
    <main className={styles.page}>
      {/* BREADCRUMB */}
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Produk & Paket", href: "/produk" },
            {
              label: "Toko Roti Rumahan Ciputat",
              href: "/toko-roti-rumahan-ciputat",
            },
          ]}
        />
      </div>

      {/* HERO: BRAND & RUMAHAN */}
      <section
        className={`section ${styles.heroSection}`}
        aria-labelledby="toko-roti-rumahan-hero-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>Toko Roti Rumahan di Ciputat</p>
              <h1
                id="toko-roti-rumahan-hero-heading"
                className={styles.heroTitle}
              >
                Roti Rumahan Halal,
                <span> Aman untuk Anak & Keluarga</span>
              </h1>
              <p className={styles.heroSubtitle}>
                {businessName} adalah toko roti rumahan di Ciputat yang
                menghadirkan roti unyil lembut, roti meises, dan snack acara
                yang insyaAllah halal, dibuat dari dapur keluarga yang bersih
                dan penuh perhatian.
              </p>

              <div className={styles.heroBadges}>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faHome} />
                  <span>Home bakery — skala rumahan</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faMosque} />
                  <span>InsyaAllah halal & aman</span>
                </span>
                <span className={styles.badge}>
                  <FontAwesomeIcon icon={faChild} />
                  <span>Cocok untuk anak & keluarga</span>
                </span>
              </div>

              <div className={styles.heroActions}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Tanya dulu via WhatsApp
                </a>

                <Link href="/produk" className={styles.secondaryLink}>
                  Lihat produk & paket
                </Link>
              </div>

              <p className={styles.heroMicrocopy}>
                *Produksi dilakukan berdasarkan pre-order supaya roti yang
                datang ke rumah Anda selalu fresh, bukan stok kemarin.
              </p>
            </div>

            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageInner}>
                <Image
                  src="/images/toko-alfarazka-bakery.png"
                  alt={`Toko roti rumahan halal ${businessName} di Ciputat`}
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

      {/* CERITA & BRAND RUMAHAN */}
      <section
        className={`section ${styles.storySection}`}
        aria-labelledby="toko-roti-rumahan-story-heading"
      >
        <div className="container">
          <div className={styles.storyInner}>
            <div className={styles.storyText}>
              <p className={styles.sectionKicker}>Cerita Singkat Dapur Rumahan</p>
              <h2
                id="toko-roti-rumahan-story-heading"
                className={styles.sectionTitle}
              >
                Berawal dari Dapur Kecil, untuk Keluarga dan Lingkungan Sekitar
              </h2>
              <p className={styles.sectionSubtitle}>
                {businessName} lahir dari keinginan sederhana: menyediakan
                camilan yang lembut, enak, dan insyaAllah halal untuk keluarga
                sendiri, lalu pelan-pelan menjangkau tetangga, pengajian, dan
                acara-acara kecil di sekitar Ciputat.
              </p>

              <ul className={styles.storyList}>
                <li>
                  <FontAwesomeIcon icon={faHeart} />
                  <div>
                    <strong>Rasa rumahan yang tulus.</strong>
                    <p>
                      Setiap batch roti dikerjakan dengan skala rumahan, bukan
                      produksi massal pabrik, sehingga rasa dan teksturnya tetap
                      “hangat keluarga”.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHandsPraying} />
                  <div>
                    <strong>Berusaha menjaga kehalalan.</strong>
                    <p>
                      Kami berkomitmen memakai bahan-bahan yang insyaAllah halal
                      dan menjauhi hal-hal yang meragukan, sesuai kemampuan
                      kami sebagai usaha rumahan.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.storyGallery}>
              <div className={styles.storyImageLarge}>
                <Image
                  src="/images/roti-unyil-1.jpg"
                  alt={`Roti unyil rumahan dari ${businessName}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className={styles.storyImageSmallGrid}>
                <div className={styles.storyImageSmall}>
                  <Image
                    src="/images/roti-unyil-2.jpg"
                    alt="Aneka varian roti rumahan"
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
                <div className={styles.storyImageSmall}>
                  <Image
                    src="/images/roti-unyil-3.jpg"
                    alt="Roti unyil lembut aman untuk anak"
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROSES PRODUKSI & KEBERSIHAN */}
      <section
        className={`section ${styles.processSection}`}
        aria-labelledby="toko-roti-rumahan-process-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Proses Produksi & Kebersihan</p>
            <h2
              id="toko-roti-rumahan-process-heading"
              className={styles.sectionTitle}
            >
              Dibuat di Dapur Rumahan yang Dijaga Kebersihannya
            </h2>
            <p className={styles.sectionSubtitle}>
              Karena dinikmati oleh anak-anak dan keluarga, kami berusaha
              menjaga dapur tetap rapi dan bersih. Proses produksi dilakukan
              bertahap, mengikuti jumlah pesanan yang masuk.
            </p>
          </header>

          <div className={styles.processGrid}>
            <article className={styles.processCard}>
              <FontAwesomeIcon icon={faBowlFood} />
              <h3>Adonan Dibuat Fresh</h3>
              <p>
                Adonan disiapkan menjelang jadwal produksi, bukan disimpan
                berhari-hari. Tujuannya supaya tekstur roti tetap lembut dan
                enak ketika sampai di tangan pembeli.
              </p>
            </article>

            <article className={styles.processCard}>
              <FontAwesomeIcon icon={faCheckCircle} />
              <h3>Batch Kecil, Lebih Terjaga</h3>
              <p>
                Roti dipanggang dalam batch kecil sesuai pesanan sehingga
                lebih mudah dikontrol kematangan dan kualitasnya, bukan
                diproduksi massal.
              </p>
            </article>

            <article className={styles.processCard}>
              <FontAwesomeIcon icon={faLeaf} />
              <h3>Lingkungan Dapur Dijaga</h3>
              <p>
                Area produksi diusahakan tetap bersih, peralatan dicuci dan
                disimpan rapi setelah digunakan, agar setiap hari siap untuk
                produksi berikutnya.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* BAHAN & KOMITMEN HALAL */}
      <section
        className={`section ${styles.halalSection}`}
        aria-labelledby="toko-roti-rumahan-halal-heading"
      >
        <div className="container">
          <div className={styles.halalInner}>
            <div className={styles.halalContent}>
              <p className={styles.sectionKicker}>Bahan & Komitmen Halal</p>
              <h2
                id="toko-roti-rumahan-halal-heading"
                className={styles.sectionTitle}
              >
                InsyaAllah Halal, Aman untuk Camilan Anak dan Keluarga
              </h2>
              <p className={styles.sectionSubtitle}>
                Sebagai usaha rumahan, kami sangat sadar bahwa roti-roti ini
                akan dinikmati oleh banyak anak dan keluarga. Karena itu kami
                berusaha menjaga kehalalan bahan yang digunakan.
              </p>

              <ul className={styles.halalList}>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <div>
                    <strong>Menghindari bahan yang meragukan.</strong>
                    <p>
                      Kami berusaha memilih bahan-bahan yang insyaAllah halal
                      dan sebisa mungkin menghindari komponen yang statusnya
                      syubhat.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMosque} />
                  <div>
                    <strong>Niat usaha yang islami.</strong>
                    <p>
                      Kami ingin usaha kecil ini menjadi wasilah kebaikan,
                      bukan sekadar jual-beli. Doakan semoga ke depannya bisa
                      semakin tertib urusan kehalalan dan perizinan.
                    </p>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChild} />
                  <div>
                    <strong>Fokus pada camilan aman untuk anak.</strong>
                    <p>
                      Varian rasa dan isian roti dipilih supaya ramah untuk
                      anak-anak, tidak terlalu tajam, dan nyaman dijadikan
                      bekal atau hidangan snack.
                    </p>
                  </div>
                </li>
              </ul>

              <p className={styles.halalNote}>
                Catatan: Kami adalah usaha rumahan skala kecil. Jika Anda
                membutuhkan informasi spesifik soal bahan tertentu (misalnya
                untuk alergi atau preferensi keluarga), silakan chat kami dan
                kami akan jelaskan sebisa mungkin.
              </p>
            </div>

            <div className={styles.halalSide}>
              <div className={styles.halalHighlightCard}>
                <h3>Ringkasannya:</h3>
                <ul>
                  <li>🍞 Roti rumahan, bukan pabrik besar</li>
                  <li>🕌 Berusaha menjaga kehalalan bahan</li>
                  <li>👨‍👩‍👧 Aman untuk konsumsi keluarga</li>
                  <li>📦 Bisa untuk snack acara & pengajian</li>
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Tanya detail bahan & proses
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA AKHIR */}
      <section
        className={`section ${styles.closingCtaSection}`}
        aria-labelledby="toko-roti-rumahan-closing-heading"
      >
        <div className="container">
          <div className={styles.closingCtaCard}>
            <div className={styles.closingText}>
              <h2
                id="toko-roti-rumahan-closing-heading"
                className={styles.sectionTitle}
              >
                Mau Coba Roti Rumahan Halal dari {businessName}?
              </h2>
              <p className={styles.sectionSubtitle}>
                Baik untuk camilan keluarga, snack pengajian kecil, atau bekal
                anak, insyaAllah roti-roti kami siap menemani momen hangat di
                rumah Anda.
              </p>
              <div className={styles.closingActions}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Chat admin sekarang
                </a>
                <Link href="/cara-pemesanan" className={styles.secondaryLink}>
                  Lihat panduan cara pemesanan
                </Link>
              </div>
            </div>

            <div className={styles.closingImageWrapper}>
              <div className={styles.closingImage}>
                <Image
                  src="/images/roti-unyil-4.jpg"
                  alt={`Roti rumahan halal ${businessName} siap dinikmati keluarga`}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TokoRotiRumahanCiputatPage;