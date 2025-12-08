"use client";

import styles from "./HeroCaraPemesanan.module.scss";

const HeroCaraPemesanan: React.FC = () => {
  return (
    <section
      id="intro"
      className={styles.heroSection}
      aria-labelledby="cara-pemesanan-heading"
    >
      <div className={styles.heroInner}>
        {/* KONTEN KIRI */}
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Cara Pemesanan</p>

          <h1 id="cara-pemesanan-heading" className={styles.title}>
            Pesan roti unyil untuk acara,
            <span> semudah kirim chat WhatsApp</span>
          </h1>

          <p className={styles.subtitle}>
            Di Alfarazka Bakery, kamu cukup kirim chat, sebutkan tanggal,
            jumlah, dan varian roti yang diinginkan. Kami bantu hitungkan
            kebutuhan snack box sampai pesananmu siap diantar atau diambil
            di Ciputat.
          </p>

          <ul
            className={styles.highlights}
            aria-label="Ringkasan cara pemesanan di Alfarazka Bakery"
          >
            <li>Chat WhatsApp, tanpa perlu isi form rumit.</li>
            <li>
              Pre-order H-1 untuk jumlah normal, lebih awal untuk ratusan pcs.
            </li>
            <li>
              Cocok untuk pengajian, arisan, ulang tahun, dan rapat kantor.
            </li>
            <li>
              Bisa konsultasi dulu soal budget, jumlah, dan kombinasi varian.
            </li>
          </ul>

          <div className={styles.heroActions}>
            <a
              href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20pemesanan%20roti%20Alfarazka%20Bakery."
              className={styles.primaryButton}
              aria-label="Konsultasi pemesanan roti Alfarazka Bakery via WhatsApp"
            >
              Pesan / Konsultasi via WhatsApp
            </a>

            <a href="/produk-paket" className={styles.secondaryLink}>
              Lihat dulu produk &amp; paket
            </a>
          </div>

          <p className={styles.microcopy}>
            *Tidak perlu sungkan untuk bertanya dulu. Kami bisa bantu sarankan
            jumlah dan kombinasi roti sesuai budget dan jenis acara.
          </p>
        </div>

        {/* KONTEN KANAN – KARTU RINGKAS ALUR */}
        <aside className={styles.heroSideCard} aria-label="Ringkasan alur pemesanan">
          <div className={styles.sideCardInner}>
            <p className={styles.sideLabel}>Sekilas alur pemesanan</p>
            <ol className={styles.sideSteps}>
              <li>Chat WhatsApp & ceritakan rencana acara.</li>
              <li>Pilih varian roti, jumlah, dan tanggal.</li>
              <li>Konfirmasi harga & lakukan DP (jika diperlukan).</li>
              <li>
                Roti diproduksi di hari-H & siap diantar / diambil di Ciputat.
              </li>
            </ol>
            <p className={styles.sideNote}>
              Untuk pesanan mendadak, silakan chat dulu. Jika slot produksi
              masih tersedia, kami akan usahakan.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroCaraPemesanan;