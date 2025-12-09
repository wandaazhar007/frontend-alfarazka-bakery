"use client";

import Link from "next/link";
import styles from "./ServiceAreaSection.module.scss";

const ServiceAreaSection: React.FC = () => {
  return (
    <section
      id="area-layanan"
      className={styles.serviceAreaSection}
      aria-labelledby="service-area-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* KIRI – COPY UTAMA */}
          <div className={styles.left}>
            <p className={styles.kicker}>Area Layanan</p>
            <h2 id="service-area-heading" className={styles.title}>
              Jangkauan Alfarazka Bakery di Ciputat & Sekitarnya
            </h2>
            <p className={styles.text}>
              Alfarazka Bakery berlokasi di Cimanggis, Ciputat, dan melayani
              pemesanan untuk area sekitar Tangerang Selatan dan sekitarnya.
              Kamu bisa mengambil langsung ke rumah produksi, atau janjian titik
              temu dan pengantaran sesuai kesepakatan.
            </p>
            <p className={styles.text}>
              Untuk acara skala kecil hingga menengah, kami siap membantu
              menyiapkan snack roti unyil dan aneka roti lainnya sesuai jadwal
              dan kebutuhan acara kamu.
            </p>

            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>Pengantaran & Ongkir</h3>
              <p className={styles.infoText}>
                Ongkir dan titik temu bersifat fleksibel, menyesuaikan jarak dan
                kesepakatan di awal. Silakan chat via WhatsApp untuk cek
                ketersediaan jadwal dan estimasi biaya kirim.
              </p>
            </div>

            <div className={styles.actions}>
              <Link
                href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20area%20jangkauan%20pengantaran%20Alfarazka%20Bakery."
                className={styles.primaryButton}
              >
                Tanya area jangkauan via WhatsApp
              </Link>
            </div>
          </div>

          {/* KANAN – DAFTAR AREA */}
          <div className={styles.right}>
            <h3 className={styles.areaTitle}>Area yang Sering Kami Layani</h3>
            <p className={styles.areaSubtitle}>
              Beberapa titik area yang biasa kami layani untuk pengantaran atau
              titik temu:
            </p>

            <div className={styles.chipsGrid}>
              <span className={styles.chip}>Ciputat</span>
              <span className={styles.chip}>Cimanggis</span>
              <span className={styles.chip}>Pamulang</span>
              <span className={styles.chip}>Serpong</span>
              <span className={styles.chip}>Situ Gintung</span>
              <span className={styles.chip}>BSD</span>
              <span className={styles.chip}>Cilandak</span>
              <span className={styles.chip}>Legoso</span>

              <span className={styles.chip}>Pondok Pinang</span>
              <span className={styles.chip}>Pondok Indah</span>
              <span className={styles.chip}>Cipete</span>
              <span className={styles.chip}>Blok A</span>
              <span className={styles.chip}>Fatmawati</span>
              <span className={styles.chip}>Pasar Minggu</span>
              <span className={styles.chip}>Lebak Bulus</span>
              <span className={styles.chip}>Pejaten</span>
              <span className={styles.chip}>dan sekitarnya</span>

              <span className={styles.chip}>Ragunan</span>
              <span className={styles.chip}>Rempoa</span>
              <span className={styles.chip}>Kebayoran lama</span>
              <span className={styles.chip}>Kebayoran baru</span>

              <span className={styles.chip}>Ciledug</span>
              <span className={styles.chip}>Tanah Abang</span>
              <span className={styles.chip}>Senayan</span>
              <span className={styles.chip}>dan sekitarnya</span>
            </div>

            <p className={styles.microcopy}>
              *Jika lokasimu belum tertera, bukan berarti tidak bisa dilayani.
              Silakan hubungi kami untuk diskusi jarak & ongkir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;