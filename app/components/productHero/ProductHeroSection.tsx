import Image from "next/image";
import styles from "./ProductHeroSection.module.scss";

const ProductHeroSection: React.FC = () => {
  return (
    <section
      className={styles.hero}
      aria-labelledby="produk-hero-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* KIRI – TEKS */}
          <div className={styles.content}>
            <p className={styles.kicker}>Katalog Roti & Paket Snack</p>

            <h1 id="produk-hero-heading" className={styles.title}>
              Roti Unyil Seribuan
              <span> & Paket Snack untuk Berbagai Acara</span>
            </h1>

            <p className={styles.subtitle}>
              Pilih roti unyil, roti meises, dan pizza mini yang lembut dan
              freshly baked dari dapur rumahan Alfarazka Bakery di Ciputat.
              Cocok untuk pengajian, arisan, ulang tahun anak, hingga rapat
              kantor dengan budget yang tetap ramah di kantong.
            </p>

            <ul className={styles.bullets}>
              <li>
                <span className={styles.bulletTitle}>Mulai Rp1.000/pcs</span>
                <span className={styles.bulletText}>
                  {" "}
                  – pas untuk isi snack box dan hampers.
                </span>
              </li>
              <li>
                <span className={styles.bulletTitle}>Bisa mix varian</span>
                <span className={styles.bulletText}>
                  {" "}
                  – kombinasi roti unyil, meises, dan pizza mini sesuai acara.
                </span>
              </li>
              <li>
                <span className={styles.bulletTitle}>Pre-order H-1</span>
                <span className={styles.bulletText}>
                  {" "}
                  – roti dibuat mendekati hari H, selalu fresh.
                </span>
              </li>
              <li>
                <span className={styles.bulletTitle}>
                  Cocok untuk pengajian & arisan
                </span>
                <span className={styles.bulletText}>
                  {" "}
                  – juga untuk ulang tahun anak dan rapat kantor.
                </span>
              </li>
            </ul>

            <div className={styles.actions}>
              <a
                href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20katalog%20produk%20roti%20unyil%20dan%20paket%20snack%20Alfarazka%20Bakery."
                className={styles.primaryButton}
                aria-label="Pesan roti unyil dan paket snack Alfarazka Bakery via WhatsApp"
              >
                Pesan via WhatsApp
              </a>

              <a
                href="/cara-pemesanan"
                className={styles.secondaryLink}
              >
                Lihat cara pemesanan
              </a>
            </div>

            <p className={styles.microcopy}>
              *Untuk pesanan ratusan pcs, sebaiknya konfirmasi jadwal beberapa
              hari sebelumnya agar slot produksi tidak penuh.
            </p>
          </div>

          {/* KANAN – GAMBAR */}
          <div className={styles.media}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/roti-unyil-5.jpg"
                alt="Aneka roti unyil Alfarazka Bakery siap untuk acara."
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.badge}>
              <span className={styles.badgeHighlight}>Snack box acara</span>
              <span className={styles.badgeText}>
                Pengajian • Arisan • Ulang tahun • Rapat kantor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;