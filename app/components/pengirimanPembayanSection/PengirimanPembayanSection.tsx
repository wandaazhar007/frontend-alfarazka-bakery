// app/cara-pemesanan/pengirimanPembayanSection/PengirimanPembayanSection.tsx
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faLocationDot,
  faStore,
  faMoneyBillWave,
  faCreditCard,
  faWallet,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./PengirimanPembayanSection.module.scss";

const PengirimanPembayanSection: React.FC = () => {
  return (
    <section
      id="pengiriman-pembayaran"
      className={styles.section}
      aria-labelledby="pengiriman-pembayaran-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Pengiriman & Metode Pembayaran</p>
          <h2 id="pengiriman-pembayaran-heading" className={styles.title}>
            Fleksibel soal pengiriman, mudah soal pembayaran
          </h2>
          <p className={styles.subtitle}>
            Alfarazka Bakery melayani pengantaran ke area sekitar Ciputat dan
            sekitarnya. Kamu juga bisa ambil sendiri di dapur produksi jika lebih
            nyaman. Untuk pembayaran, kami sediakan beberapa pilihan yang praktis
            dan aman.
          </p>
        </header>

        <div className={styles.grid}>
          {/* KOLOM PENGIRIMAN */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Pengiriman</h3>

            {/* CARD AREA LAYANAN */}
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardHeading}>Area layanan utama</h4>
                <p className={styles.cardText}>
                  Kami melayani pengantaran ke area sekitar Ciputat dan
                  Tangerang Selatan, seperti:
                </p>
                <ul className={styles.list}>
                  <li>Alun-alun Pamulang & Legoso</li>
                  <li>UIN Jakarta, Gintung, dan sekitarnya</li>
                  <li>Ciputat & Ciputat Timur</li>
                  <li>BSD, Cilandak, dan area sekitar (by request)</li>
                </ul>
                <p className={styles.cardHint}>
                  Titik temu & ongkir disepakati di awal melalui WhatsApp,
                  menyesuaikan jarak dan jumlah pesanan.
                </p>
              </div>
            </article>

            {/* CARD OPSI PENGIRIMAN */}
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardHeading}>Pilihan pengiriman</h4>
                <ul className={styles.list}>
                  <li>
                    <strong>Diantar langsung</strong> oleh kurir/driver Alfarazka
                    Bakery ke titik temu yang disepakati.
                  </li>
                  <li>
                    <strong>Meet point</strong> di lokasi yang mudah dijangkau
                    bersama, misalnya dekat jalan besar.
                  </li>
                  <li>
                    <strong>Ambil sendiri</strong> di dapur produksi: Jl. Dewi
                    Sartika No. 25 RT 003/004 Gg. Masjid Arryadh, Cimanggis,
                    Ciputat.
                  </li>
                </ul>
                <p className={styles.cardHint}>
                  Waktu pengantaran diatur supaya roti tiba mendekati jam acara
                  dan tetap dalam kondisi terbaik.
                </p>
              </div>
            </article>
          </div>

          {/* KOLOM PEMBAYARAN */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Metode Pembayaran</h3>

            {/* CARD METODE */}
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardHeading}>Pilihan pembayaran</h4>
                <ul className={styles.list}>
                  <li>
                    <strong>Transfer bank</strong> – nomor rekening akan
                    diinformasikan melalui WhatsApp.
                  </li>
                  <li>
                    <strong>E-wallet</strong> (misalnya dompet digital populer) –
                    detail akun akan dikirim saat pemesanan.
                  </li>
                  <li>
                    <strong>Tunai</strong> – bisa untuk pesanan tertentu, sesuai
                    kesepakatan saat pengantaran/ambil sendiri.
                  </li>
                </ul>
                <p className={styles.cardHint}>
                  Bukti pembayaran bisa dikirim lewat WhatsApp agar pesananmu
                  langsung kami proses.
                </p>
              </div>
            </article>

            {/* CARD DP & PELUNASAN */}
            <article className={styles.card}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardHeading}>DP & pelunasan</h4>
                <ul className={styles.list}>
                  <li>
                    Untuk pesanan jumlah besar atau acara spesial,{" "}
                    <strong>DP</strong> dapat diminta sebagai tanda jadi.
                  </li>
                  <li>
                    Pelunasan bisa dilakukan sebelum pengantaran atau saat
                    pesanan diterima, sesuai kesepakatan.
                  </li>
                  <li>
                    Nominal DP & batas waktu pembayaran akan dijelaskan dengan
                    jelas saat pemesanan.
                  </li>
                </ul>
                <p className={styles.cardHint}>
                  Tujuannya supaya jadwal produksi jelas dan roti bisa kami
                  siapkan tepat waktu sesuai kebutuhanmu.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.noteBar}>
          <div className={styles.noteIcon}>
            <FontAwesomeIcon icon={faWallet} className={styles.noteIconInner} />
          </div>
          <p className={styles.noteText}>
            Jika kamu punya permintaan khusus terkait pengantaran atau pembayaran
            (misalnya koordinasi dengan panitia lain, titip ke satpam, dsb.),
            cukup sampaikan di WhatsApp. Kami akan berusaha menyesuaikan selama
            masih memungkinkan dan aman.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PengirimanPembayanSection;