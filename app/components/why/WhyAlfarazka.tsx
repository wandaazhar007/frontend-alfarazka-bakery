"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMoneyBillWave,
  faHandshake,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./WhyAlfarazka.module.scss";

const WhyAlfarazka: React.FC = () => {
  return (
    <section
      id="keunggulan"
      className={styles.whySection}
      aria-labelledby="why-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Kenapa Pilih Alfarazka Bakery?</p>
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
          {/* Harga bersahabat */}
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

          {/* Fresh & higienis */}
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

          {/* Fleksibel untuk acara */}
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

          {/* Pre-order terjadwal */}
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