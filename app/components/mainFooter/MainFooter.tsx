//app/components/mainFooter/MainFooter.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import styles from "./MainFooter.module.scss";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
} from "../../services/siteSettingsService";

const MainFooter = async () => {
  const year = new Date().getFullYear();
  const siteSettings = await fetchPublicSiteSettings();

  const businessName = siteSettings.businessName || "Alfarazka Bakery";
  const whatsappLink = buildWhatsAppUrl(siteSettings.whatsappNumber);
  const instagramUrl =
    siteSettings.instagramUrl || "https://www.instagram.com/alfarazkabakery22";
  const mapsUrl =
    siteSettings.mapsUrl || "https://maps.app.goo.gl/dMbWuud6ZD9DSqap6";

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* TITLE + DESKRIPSI SINGKAT */}
        <div className={styles.headingBlock}>
          <h2 className={styles.brand}>{businessName}</h2>
          <p className={styles.subtitle}>
            Roti unyil rumahan di Ciputat dengan rasa lembut, harga ramah di
            kantong, dan cocok untuk teman ngopi atau snack acara keluarga.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className={styles.socialRow}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${businessName}`}
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Instagram ${businessName}`}
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Lokasi ${businessName}`}
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faLocationArrow} />
          </a>
        </div>

        {/* LINK COLUMNS */}
        <div className={styles.linkColumns}>
          {/* Navigasi utama */}
          <div className={styles.navGroup}>
            <p className={styles.navHeading}>Navigasi</p>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navItem}>
                Beranda
              </Link>
              <Link href="/tentang-kami" className={styles.navItem}>
                Tentang Kami
              </Link>
              <Link href="/produk" className={styles.navItem}>
                Produk &amp; Paket
              </Link>
              <Link href="/cara-pemesanan" className={styles.navItem}>
                Cara Pemesanan
              </Link>
              <Link href="/kebijakan" className={styles.navItem}>
                Kebijakan &amp; Ketentuan
              </Link>
              <Link href="/kontak-kami" className={styles.navItem}>
                Kontak Kami
              </Link>
            </nav>
          </div>

          {/* Paket & Area Layanan */}
          <div className={styles.navGroup}>
            <p className={styles.navHeading}>Paket &amp; Area Layanan</p>
            <nav className={styles.nav}>
              <Link href="/roti-unyil-ciputat" className={styles.navItem}>
                Roti Unyil Ciputat
              </Link>
              <Link
                href="/snack-box-pengajian-ciputat"
                className={styles.navItem}
              >
                Snack Box Pengajian
              </Link>
              <Link
                href="/snack-box-arisan-ciputat"
                className={styles.navItem}
              >
                Snack Box Arisan
              </Link>
              <Link
                href="/paket-snack-ulang-tahun-anak-ciputat"
                className={styles.navItem}
              >
                Paket Ulang Tahun Anak
              </Link>
              <Link
                href="/paket-snack-rapat-kantor-ciputat"
                className={styles.navItem}
              >
                Paket Snack Rapat Kantor
              </Link>
              <Link
                href="/toko-roti-rumahan-ciputat"
                className={styles.navItem}
              >
                Toko Roti Rumahan Ciputat
              </Link>
            </nav>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className={styles.copy}>
          &copy; {year} {businessName}. Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;