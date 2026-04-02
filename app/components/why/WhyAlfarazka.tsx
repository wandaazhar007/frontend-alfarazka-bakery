// //app/components/why/WhyAlfarazka.tsx
"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMoneyBillWave,
  faHandshake,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./WhyAlfarazka.module.scss";
import {
  fetchPublicSiteSettings,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const WhyAlfarazka: React.FC = () => {
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();
        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
      } catch (error) {
        console.error("Gagal memuat site settings di WhyAlfarazka:", error);
      }
    };

    loadSiteSettings();
  }, []);

  return (
    <section
      id="keunggulan"
      className={styles.whySection}
      aria-labelledby="why-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Kenapa Pilih {businessName}?</p>
          <h2 id="why-heading" className={styles.title}>
            Roti Rumahan, Rasa Konsisten, Harga Tetap Bersahabat
          </h2>
          <p className={styles.subtitle}>
            Bukan sekadar roti unyil seribuan. Setiap pesanan dibuat fresh dari
            dapur rumahan di Ciputat, dengan resep yang dijaga rasanya dan
            pelayanan yang ramah untuk setiap acara.
          </p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </div>
            <h3 className={styles.cardTitle}>Mulai Rp1.000/pcs</h3>
            <p className={styles.cardText}>
              Budget snack acara lebih hemat. Cocok untuk pengajian, arisan,
              ulang tahun anak, sampai rapat kantor.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h3 className={styles.cardTitle}>Selalu Fresh & Higienis</h3>
            <p className={styles.cardText}>
              Made by order, bukan stok lama. Diproduksi di dapur rumahan yang
              bersih dan terjaga kebersihannya.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3 className={styles.cardTitle}>Fleksibel Untuk Berbagai Acara</h3>
            <p className={styles.cardText}>
              Bisa mix varian dalam satu pesanan. Tinggal sesuaikan jumlah,
              rasa, dan budget sesuai kebutuhan acara.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3 className={styles.cardTitle}>Pre-Order Terjadwal</h3>
            <p className={styles.cardText}>
              Cukup hubungi WhatsApp, tentukan tanggal & jumlah. Roti disiapkan
              tepat waktu sesuai jadwal acara.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhyAlfarazka;