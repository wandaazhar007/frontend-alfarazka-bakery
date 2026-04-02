// //app/components/hero/Hero.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import heroBanner from "../../../public/images/toko-alfarazka-bakery.png";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const Hero: React.FC = () => {
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [whatsappNumber, setWhatsappNumber] = useState(
    DEFAULT_SITE_SETTINGS.whatsappNumber
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();
        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
        setWhatsappNumber(
          data.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber
        );
      } catch (error) {
        console.error("Gagal memuat site settings di Hero:", error);
      }
    };

    loadSiteSettings();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya mau tanya pemesanan roti unyil ${businessName}.`
    );
  }, [whatsappNumber, businessName]);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        {/* TEKS */}
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Roti Unyil Rumahan di Ciputat</p>

          <h1 id="hero-heading" className={styles.title}>
            Nyemil Sehat, <span>Teman Ngopi</span>
          </h1>

          <p className={styles.subtitle}>
            {businessName} menghadirkan roti unyil lembut seribuan,
            roti meises, dan pizza mini yang freshly baked dari dapur
            rumahan di Ciputat. Cocok untuk pengajian, arisan, ulang
            tahun anak, rapat kantor, sampai bekal sekolah si kecil.
          </p>

          <ul
            className={styles.benefits}
            aria-label={`Keunggulan roti unyil ${businessName}`}
          >
            <li>
              <span className={styles.bulletTitle}>Mulai Rp1.000/pcs</span>
              <span className={styles.bulletText}>
                {" "}
                – ramah di kantong untuk isi snack box.
              </span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Bisa mix varian</span>
              <span className={styles.bulletText}>
                {" "}
                - untuk kebutuhan acara dan hampers.
              </span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Pre-order H-1</span>
              <span className={styles.bulletText}>
                {" "}
                - roti selalu fresh setiap hari
              </span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Cocok untuk acara</span>
              <span className={styles.bulletText}>
                - pengajian, arisan, ulang tahun, kantor.
              </span>
            </li>
          </ul>

          <div className={styles.heroActions}>
            <Link
              href={whatsappLink}
              className={styles.primaryButton}
              aria-label={`Pesan roti unyil ${businessName} melalui WhatsApp`}
              target="_blank"
              rel="noreferrer"
            >
              Pesan via WhatsApp
            </Link>

            <Link href="/produk" className={styles.secondaryLink}>
              Lihat katalog produk
            </Link>
          </div>

          <p className={styles.microcopy}>
            *Disarankan pre-order minimal H-1. Untuk pesanan ratusan pcs,
            sebaiknya menghubungi beberapa hari sebelumnya.
          </p>
        </div>

        {/* GAMBAR */}
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageInner}>
            <Image
              src={heroBanner}
              alt={`Roti unyil dan aneka roti rumahan dari ${businessName} di Ciputat.`}
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;