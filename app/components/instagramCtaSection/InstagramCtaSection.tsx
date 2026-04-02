//app/components/instagramCtaSection/InstagramCtaSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./InstagramCtaSection.module.scss";

import img5 from "../../../public/images/roti-unyil-5.jpg";
import img6 from "../../../public/images/roti-unyil-6.jpg";
import img7 from "../../../public/images/roti-unyil-7.jpg";
import img8 from "../../../public/images/roti-unyil-8.jpg";
import img9 from "../../../public/images/roti-unyil-9.jpg";
import img10 from "../../../public/images/roti-unyil-10.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  fetchPublicSiteSettings,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const InstagramCtaSection: React.FC = () => {
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [instagramUrl, setInstagramUrl] = useState(
    DEFAULT_SITE_SETTINGS.instagramUrl
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();
        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
        setInstagramUrl(data.instagramUrl || DEFAULT_SITE_SETTINGS.instagramUrl);
      } catch (error) {
        console.error(
          "Gagal memuat site settings di InstagramCtaSection:",
          error
        );
      }
    };

    loadSiteSettings();
  }, []);

  const instagramHandle = useMemo(() => {
    try {
      const url = new URL(instagramUrl);
      const path = url.pathname.replace(/^\/+|\/+$/g, "");
      return path || "alfarazkabakery";
    } catch {
      return "alfarazkabakery";
    }
  }, [instagramUrl]);

  return (
    <section
      className={styles.section}
      aria-labelledby="instagram-cta-heading"
    >
      <div className={styles.inner}>
        {/* TEKS KIRI */}
        <div className={styles.textBlock}>
          <p className={styles.kicker}>Ikuti {businessName}</p>
          <h2 id="instagram-cta-heading" className={styles.heading}>
            Lihat update menu &amp; ide hampers di Instagram
          </h2>
          <p className={styles.body}>
            Kami rutin membagikan foto roti unyil fresh from oven, contoh paket
            acara, sampai info promo dan jadwal pre-order di Instagram. Cocok
            buat kamu yang ingin lihat contoh real sebelum memesan.
          </p>

          <ul className={styles.list}>
            <li>Inspirasi paket pengajian, arisan, dan ulang tahun.</li>
            <li>Info varian rasa terbaru dan stok harian.</li>
            <li>Highlight testimoni dan dokumentasi acara pelanggan.</li>
          </ul>

          <Link
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.instagramButton}
            aria-label={`Kunjungi Instagram ${businessName}`}
          >
            <span>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </span>
            <span>{instagramHandle}</span>
          </Link>

          <p className={styles.microcopy}>
            *Jika kamu ragu soal jumlah atau varian, silakan screenshot contoh
            dari Instagram lalu kirim ke WhatsApp untuk konsultasi.
          </p>
        </div>

        {/* GRID FOTO KANAN */}
        <div className={styles.mediaGrid} aria-hidden="true">
          <div className={styles.gridWrapper}>
            <div className={styles.gridItem}>
              <Image src={img5} alt="" className={styles.gridImage} />
            </div>
            <div className={styles.gridItem}>
              <Image src={img6} alt="" className={styles.gridImage} />
            </div>
            <div className={styles.gridItem}>
              <Image src={img7} alt="" className={styles.gridImage} />
            </div>
            <div className={styles.gridItem}>
              <Image src={img8} alt="" className={styles.gridImage} />
            </div>
            <div className={styles.gridItem}>
              <Image src={img9} alt="" className={styles.gridImage} />
            </div>
            <div className={styles.gridItem}>
              <Image src={img10} alt="" className={styles.gridImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramCtaSection;