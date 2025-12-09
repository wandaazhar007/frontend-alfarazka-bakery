"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faWhatsapp,
  faListCheck,
  faMoneyBillWave,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./OrderSection.module.scss";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const OrderSection: React.FC = () => {
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
            Pre-Order Roti Unyil Alfarazka Bakery dengan Mudah
          </h2>
          <p className={styles.subtitle}>
            Kamu bisa pesan untuk kebutuhan harian maupun acara. Cukup ikuti
            langkah sederhana di bawah ini, dan kami akan bantu siapkan roti
            fresh sesuai jadwal yang kamu butuhkan.
          </p>
        </header>

        {/* STEP-BY-STEP */}
        <div className={styles.steps}>
          {/* STEP 1 */}
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

          {/* STEP 2 */}
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

          {/* STEP 3 */}
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

          {/* STEP 4 */}
          <article className={styles.stepCard}>
            <div className={styles.stepBadge}>4</div>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <h3 className={styles.stepTitle}>Produksi & Pengantaran/Pengambilan</h3>
            <p className={styles.stepText}>
              Roti diproduksi fresh menjelang hari-H. Pesanan bisa diambil di
              Ciputat atau diantar ke area yang disepakati (dengan ongkir
              menyesuaikan).
            </p>
          </article>
        </div>

        {/* CTA + MICROCOPY */}
        <div className={styles.footer}>
          <Link
            href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20pemesanan%20roti%20unyil%20Alfarazka%20Bakery."
            className={styles.primaryButton}
          >
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