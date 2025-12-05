// app/components/timelineSection/TimelineSection.tsx
"use client";

import styles from "./TimelineSection.module.scss";

const TimelineSection: React.FC = () => {
  return (
    <section
      className={styles.timelineSection}
      aria-labelledby="timeline-heading"
    >
      <div className={styles.timelineInner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Perjalanan Alfarazka Bakery</p>
          <h2 id="timeline-heading" className={styles.title}>
            Dari dapur rumahan, menuju rencana pengembangan ke depan
          </h2>
          <p className={styles.subtitle}>
            Alfarazka Bakery tumbuh pelan-pelan bersama kepercayaan pelanggan.
            Berikut gambaran perjalanan dan rencana pengembangan kami dari
            2024 hingga 2028.
          </p>
        </header>

        <ol className={styles.timelineList}>
          {/* 2024 */}
          <li className={styles.timelineItem}>
            <div className={styles.yearBadge}>2024</div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>
                Lahirnya Alfarazka Bakery di Ciputat
              </h3>
              <p className={styles.itemText}>
                Usaha roti unyil rumahan resmi diberi nama{" "}
                <strong><em>Alfarazka Bakery</em></strong> pada 7 Juli 2024. Fokus pada
                roti unyil seribuan, roti meises, dan pizza mini untuk tetangga
                dan warga sekitar.
              </p>
            </div>
          </li>

          {/* 2025 */}
          <li className={styles.timelineItem}>
            <div className={styles.yearBadge}>2025</div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>
                Mulai melayani acara & order skala lebih besar
              </h3>
              <p className={styles.itemText}>
                Pesanan untuk pengajian, arisan RT, ulang tahun anak, dan rapat
                kantor mulai rutin. Sistem pre-order H-1 diberlakukan supaya
                roti tetap fresh dan produksi lebih tertata.
              </p>
            </div>
          </li>

          {/* 2026 – Rencana pengembangan */}
          <li className={`${styles.timelineItem} ${styles.futureItem}`}>
            <div className={styles.yearBadge}>2026</div>
            <div className={styles.itemContent}>
              <span className={styles.futureLabel}>Rencana pengembangan</span>
              <h3 className={styles.itemTitle}>
                Menambah varian roti & paket hampers
              </h3>
              <p className={styles.itemText}>
                Menambah varian roti unyil isi gurih & manis, paket hampers
                sederhana untuk momen spesial, dan optimasi pemesanan online
                melalui website & WhatsApp.
              </p>
            </div>
          </li>

          {/* 2028 – Rencana pengembangan */}
          <li className={`${styles.timelineItem} ${styles.futureItem}`}>
            <div className={styles.yearBadge}>2028</div>
            <div className={styles.itemContent}>
              <span className={styles.futureLabel}>Rencana pengembangan</span>
              <h3 className={styles.itemTitle}>
                Dapur produksi lebih besar & jangkauan area meluas
              </h3>
              <p className={styles.itemText}>
                Target ke depan: memperbesar kapasitas dapur produksi, bekerja
                sama dengan lebih banyak komunitas, dan memperluas area layanan
                ke lebih banyak titik di Tangerang Selatan dan sekitarnya.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TimelineSection;