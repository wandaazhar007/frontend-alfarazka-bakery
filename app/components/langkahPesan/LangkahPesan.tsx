"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faClipboardList,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons"; // kalau error, pisah import icon-icon yang ada
import styles from "./LangkahPesan.module.scss";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const LangkahPesan: React.FC = () => {
  return (
    <section
      id="langkah-pemesanan"
      className={styles.section}
      aria-labelledby="langkah-pesan-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Langkah Pemesanan</p>
          <h2 id="langkah-pesan-heading" className={styles.title}>
            4 langkah mudah pesan roti unyil untuk acara kamu
          </h2>
          <p className={styles.subtitle}>
            Supaya lebih tenang, kamu bisa ikuti alur sederhana ini. Semua
            dimulai dari chat WhatsApp, lalu kami bantu sampai roti siap
            dinikmati tamu undangan.
          </p>
        </header>

        <ol className={styles.steps} aria-label="Step-by-step pemesanan roti Alfarazka Bakery">
          {/* STEP 1 */}
          <li className={styles.stepCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faWhatsappSquare} className={styles.icon} />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNumber}>Langkah 1</p>
              <h3 className={styles.stepTitle}>Chat WhatsApp Alfarazka Bakery</h3>
              <p className={styles.stepText}>
                Kirim pesan ke{" "}
                <strong>0851-7975-3356</strong> dan ceritakan rencana acara
                kamu: tanggal, waktu, kira-kira jumlah tamu, dan budget
                per orang (jika ada).
              </p>
              <p className={styles.stepHint}>
                Tips: sertakan juga lokasi area pengantaran supaya kami bisa
                perkirakan ongkir sejak awal.
              </p>
            </div>
          </li>

          {/* STEP 2 */}
          <li className={styles.stepCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNumber}>Langkah 2</p>
              <h3 className={styles.stepTitle}>Tentukan varian, jumlah & paket</h3>
              <p className={styles.stepText}>
                Pilih varian roti unyil, roti meises, atau pizza mini yang kamu
                inginkan. Kamu bisa mix beberapa varian dalam satu pesanan untuk
                snack box atau tampah.
              </p>
              <p className={styles.stepHint}>
                Kami bisa bantu rekomendasikan komposisi, misalnya 3–4 pcs roti
                unyil per orang untuk pengajian atau arisan.
              </p>
            </div>
          </li>

          {/* STEP 3 */}
          <li className={styles.stepCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNumber}>Langkah 3</p>
              <h3 className={styles.stepTitle}>Konfirmasi harga & jadwal produksi</h3>
              <p className={styles.stepText}>
                Setelah varian & jumlah fix, kami infokan total biaya dan
                estimasi waktu siap. Untuk pesanan tertentu, bisa diminta{" "}
                <strong>DP</strong> sebagai tanda jadi.
              </p>
              <p className={styles.stepHint}>
                Disarankan pre-order minimal <strong>H-1</strong>. Untuk
                ratusan pcs, sebaiknya hubungi beberapa hari sebelumnya.
              </p>
            </div>
          </li>

          {/* STEP 4 */}
          <li className={styles.stepCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faTruckFast} className={styles.icon} />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNumber}>Langkah 4</p>
              <h3 className={styles.stepTitle}>Produksi, pengantaran, atau ambil sendiri</h3>
              <p className={styles.stepText}>
                Roti akan dibuat mendekati jam acara agar tetap fresh. Pesanan
                bisa <strong>diantar</strong> ke area yang disepakati atau{" "}
                <strong>diambil langsung</strong> di dapur produksi Ciputat.
              </p>
              <p className={styles.stepHint}>
                Titik temu & ongkir akan dibicarakan di awal melalui WhatsApp,
                supaya semuanya jelas dan nyaman.
              </p>
            </div>
          </li>
        </ol>

        <div className={styles.ctaBar}>
          <p className={styles.ctaText}>
            Masih bingung jumlah yang pas untuk acara kamu?
          </p>
          <Link
            href="https://wa.me/6285179753356?text=Assalamualaikum%2C%20saya%20ingin%20konsultasi%20jumlah%20roti%20untuk%20acara."
            className={styles.ctaButton}
          >
            Konsultasi jumlah & varian via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LangkahPesan;