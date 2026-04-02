// //app/components/order/OrderSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faMoneyBillWave,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import styles from "./OrderSection.module.scss";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const OrderSection: React.FC = () => {
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
        console.error("Gagal memuat site settings di OrderSection:", error);
      }
    };

    loadSiteSettings();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya ingin pemesanan roti unyil ${businessName}.`
    );
  }, [whatsappNumber, businessName]);

  return (
    <section
      id="cara-pemesanan"
      className={styles.orderSection}
      aria-labelledby="order-heading"
    >
      <div className={styles.inner}>
        {/* HEADER */}
        <header className={styles.header}>
          <p className={styles.kicker}>Cara Pemesanan</p>
          <h2 id="order-heading" className={styles.title}>
            Pre-Order Roti Unyil {businessName} dengan Mudah
          </h2>
          <p className={styles.subtitle}>
            Kamu bisa pesan untuk kebutuhan harian maupun acara. Cukup ikuti
            langkah sederhana di bawah ini, dan kami akan bantu siapkan roti
            fresh sesuai jadwal yang kamu butuhkan.
          </p>
        </header>

        {/* STEP-BY-STEP */}
        <div className={styles.steps}>
          <article className={styles.stepCard}>
            <div className={styles.stepBadge}>1</div>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <h3 className={styles.stepTitle}>Hubungi via WhatsApp</h3>
            <p className={styles.stepText}>
              Klik tombol WhatsApp, sampaikan kebutuhanmu: untuk acara apa,
              kira-kira berapa orang, dan lokasi pengantaran atau titik temu.
            </p>
          </article>

          <article className={styles.stepCard}>
            <div className={styles.stepBadge}>2</div>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faListCheck} />
            </div>
            <h3 className={styles.stepTitle}>Tentukan Tanggal, Jumlah & Varian</h3>
            <p className={styles.stepText}>
              Pilih jenis roti (unyil, meises, pizza mini), tentukan jumlah pcs
              dan mix varian. Kami bisa bantu rekomendasikan paket sesuai budget.
            </p>
          </article>

          <article className={styles.stepCard}>
            <div className={styles.stepBadge}>3</div>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </div>
            <h3 className={styles.stepTitle}>Konfirmasi Harga & DP</h3>
            <p className={styles.stepText}>
              Setelah detail fix, kamu akan menerima total harga. Untuk pesanan
              tertentu, bisa diminta DP via transfer atau e-wallet sesuai
              kesepakatan.
            </p>
          </article>

          <article className={styles.stepCard}>
            <div className={styles.stepBadge}>4</div>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <h3 className={styles.stepTitle}>
              Produksi & Pengantaran/Pengambilan
            </h3>
            <p className={styles.stepText}>
              Roti diproduksi fresh menjelang hari-H. Pesanan bisa diambil di
              Ciputat atau diantar ke area yang disepakati (dengan ongkir
              menyesuaikan).
            </p>
          </article>
        </div>

        {/* CTA + MICROCOPY */}
        <div className={styles.footer}>
          <Link href={whatsappLink} className={styles.primaryButton}>
            Pesan Sekarang via WhatsApp
          </Link>
          <p className={styles.microcopy}>
            *Disarankan pre-order minimal H-1 untuk jumlah standar. Untuk
            pesanan ratusan pcs, sebaiknya menghubungi beberapa hari sebelumnya
            agar jadwal produksi bisa kami atur dengan nyaman.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;