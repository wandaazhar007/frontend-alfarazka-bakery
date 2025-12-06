"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./MainFooter.module.scss";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons/faMapLocation";
import { faLocation, faLocationArrow, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons/faMap";

const MainFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* TITLE + DESKRIPSI SINGKAT */}
        <div className={styles.headingBlock}>
          <h2 className={styles.brand}>Alfarazka Bakery</h2>
          <p className={styles.subtitle}>
            Roti unyil rumahan di Ciputat dengan rasa lembut, harga ramah di
            kantong, dan cocok untuk teman ngopi atau snack acara keluarga.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className={styles.socialRow}>
          <a
            href="https://wa.me/6282194228282"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Alfarazka Bakery"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/alfarazkabakery"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Alfarazka Bakery"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://maps.app.goo.gl/dMbWuud6ZD9DSqap6"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Alfarazka Bakery"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faLocationArrow} />
          </a>
        </div>

        {/* NAV LINKS */}
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
            Kebijakan & Ketentuan
          </Link>
        </nav>

        {/* COPYRIGHT */}
        {/* <p className={styles.copy}>
          © {year} Alfarazka Bakery. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default MainFooter;