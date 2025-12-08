"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBoxesStacked,
  faMoneyBillWave,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./PreOrderSection.module.scss";

const PreOrderSection: React.FC = () => {
  return (
    <section
      id="ketentuan-preorder"
      className={styles.section}
      aria-labelledby="preorder-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Ketentuan Pre-Order</p>
          <h2 id="preorder-heading" className={styles.title}>
            Pre-order santai, tapi tetap terencana
          </h2>
          <p className={styles.subtitle}>
            Supaya roti selalu fresh dan acara berjalan lancar, ada beberapa
            ketentuan pre-order yang perlu kamu ketahui. Tenang, semuanya masih
            fleksibel dan bisa dibicarakan dulu lewat WhatsApp.
          </p>
        </header>

        <div className={styles.grid}>
          {/* CARD 1: JADWAL PRE-ORDER */}
          <article className={styles.card}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Jadwal pre-order</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Pre-order minimal H-1</strong> untuk pesanan jumlah
                  normal.
                </li>
                <li>
                  Untuk pesanan <strong>ratusan pcs</strong>, disarankan pesan
                  beberapa hari sebelumnya.
                </li>
                <li>
                  Jadwal produksi disesuaikan dengan jam acara, supaya roti
                  tetap lembut dan tidak basi.
                </li>
                <li>
                  Pesanan mendadak? Silakan chat dulu, jika slot produksi masih
                  ada akan kami usahakan.
                </li>
              </ul>
            </div>
          </article>

          {/* CARD 2: MINIMAL ORDER & VARIAN */}
          <article className={styles.card}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon
                icon={faBoxesStacked}
                className={styles.icon}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Minimal order & varian</h3>
              <ul className={styles.list}>
                <li>
                  Roti unyil cocok untuk snack box,{" "}
                  <strong>3–4 pcs per orang</strong> biasanya sudah cukup.
                </li>
                <li>
                  Kamu bisa <strong>mix varian</strong> roti unyil, roti meises,
                  dan pizza mini dalam satu pesanan.
                </li>
                <li>
                  Minimal order menyesuaikan jenis acara, makin banyak pcs,
                  biasanya makin hemat di ongkir & waktu produksi.
                </li>
                <li>
                  Jika punya kebutuhan khusus (tanpa pedas, tanpa coklat, dll),
                  silakan infokan di awal.
                </li>
              </ul>
            </div>
          </article>

          {/* CARD 3: PEMBAYARAN & PERUBAHAN PESANAN */}
          <article className={styles.card}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className={styles.icon}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Pembayaran & perubahan pesanan</h3>
              <ul className={styles.list}>
                <li>
                  Untuk pesanan jumlah besar, bisa diminta{" "}
                  <strong>DP</strong> sebagai tanda jadi.
                </li>
                <li>
                  Pelunasan bisa dilakukan saat pesanan diambil atau sebelum
                  pengantaran, sesuai kesepakatan.
                </li>
                <li>
                  Metode pembayaran: transfer bank atau e-wallet (detail akan
                  dikirim lewat WhatsApp).
                </li>
                <li>
                  Perubahan jumlah / varian menjelang hari-H akan menyesuaikan
                  slot produksi yang tersedia.
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div className={styles.noteBar}>
          <div className={styles.noteIcon}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={styles.noteIconInner}
            />
          </div>
          <p className={styles.noteText}>
            Ketentuan di atas dibuat supaya dapur bisa mengatur waktu produksi
            dengan baik. Kalau kamu punya kebutuhan di luar ketentuan ini,
            silakan sampaikan — insyaAllah kami akan coba bantu sebisa mungkin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;