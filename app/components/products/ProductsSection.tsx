// //app/components/products/ProductsSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductsSection.module.scss";
import Link from "next/link";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const ProductsSection: React.FC = () => {
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [whatsappNumber, setWhatsappNumber] = useState(
    DEFAULT_SITE_SETTINGS.whatsappNumber
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();
        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
        setWhatsappNumber(
          data.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber
        );
      } catch (error) {
        console.error("Gagal memuat site settings di ProductsSection:", error);
      }
    };

    loadSiteSettings();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya ingin konsultasi paket snack acara ${businessName}.`
    );
  }, [whatsappNumber, businessName]);

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
            <h3 className={styles.cardTitle}>Katalog Roti {businessName}</h3>
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
              <Link href="/produk" className={styles.primaryButton}>
                Lihat semua produk
              </Link>
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
              <Link href="/produk" className={styles.secondaryButton}>
                Lihat paket & rekomendasi
              </Link>
              <Link href={whatsappLink} className={styles.linkWhatsApp}>
                Konsultasi paket via WhatsApp
              </Link>
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