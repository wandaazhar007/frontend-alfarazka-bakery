"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductsSection.module.scss";

const ProductsSection: React.FC = () => {
  return (
    <section
      id="produk"
      className={styles.productsSection}
      aria-labelledby="products-heading"
    >
      <div className={styles.inner}>
        {/* HEADER */}
        <header className={styles.header}>
          <p className={styles.kicker}>Produk & Paket</p>
          <h2 id="products-heading" className={styles.title}>
            Roti Unyil & Paket Snack untuk Berbagai Acara
          </h2>
          <p className={styles.subtitle}>
            Mulai dari roti unyil seribuan, roti meises manis, hingga pizza mini
            gurih. Kamu bisa pesan satuan untuk nyemil harian atau sekaligus
            paketkan untuk pengajian, arisan, ulang tahun, dan rapat kantor.
          </p>
        </header>

        {/* GRID 2 KOLOM: PRODUK & PAKET */}
        <div className={styles.grid}>
          {/* KATALOG PRODUK */}
          <article className={styles.card}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faBreadSlice} />
            </div>
            <h3 className={styles.cardTitle}>Katalog Roti Alfarazka Bakery</h3>
            <p className={styles.cardText}>
              Pilih roti favoritmu dari berbagai varian roti unyil, roti meises,
              dan pizza mini yang lembut dan disukai anak maupun orang dewasa.
            </p>

            <ul className={styles.list}>
              <li>Roti Unyil @1.000 – pas untuk snack box hemat.</li>
              <li>Roti Unyil @2.000 – lebih besar dengan isian lebih variatif.</li>
              <li>Roti Meises @3.000 – roti lembut topping meises manis.</li>
              <li>Pizza Mini @3.000 – topping gurih, teman kopi dan teh.</li>
            </ul>

            <div className={styles.actions}>
              <a href="/produk" className={styles.primaryButton}>
                Lihat semua produk
              </a>
            </div>
          </article>

          {/* PAKET ACARA */}
          <article className={styles.card}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faBoxOpen} />
            </div>
            <h3 className={styles.cardTitle}>Paket Snack untuk Acara</h3>
            <p className={styles.cardText}>
              Praktis tanpa repot. Tinggal sampaikan jenis acara, jumlah tamu,
              dan budget. Kami bantu rekomendasikan kombinasi roti yang pas.
            </p>

            <ul className={styles.list}>
              <li>
                Paket Pengajian / Arisan – pilihan 50, 100, hingga 200 pcs.
              </li>
              <li>
                Paket Ulang Tahun Anak – roti unyil warna-warni, disukai anak-anak.
              </li>
              <li>
                Paket Rapat Kantor – roti gurih & manis dalam satu snack box.
              </li>
              <li>
                Bisa mix varian dalam satu paket sesuai selera dan budget.
              </li>
            </ul>

            <div className={styles.actions}>
              <a href="/paket" className={styles.secondaryButton}>
                Lihat paket & rekomendasi
              </a>
              <a
                href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20konsultasi%20paket%20snack%20acara%20Alfarazka%20Bakery."
                className={styles.linkWhatsApp}
              >
                Konsultasi paket via WhatsApp
              </a>
            </div>

            <p className={styles.microcopy}>
              *Untuk pesanan ratusan pcs, sebaiknya hubungi beberapa hari
              sebelumnya agar jadwal produksi bisa kami atur dengan baik.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;