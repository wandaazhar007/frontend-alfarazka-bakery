//app/components/heroTentangKami/HeroTentangKami.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroTentangKami.module.scss";
import tokoAlfarazka from "../../../public/images/toko-alfarazka-bakery.png";
import {
  fetchPublicSiteSettings,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const HeroTentangKami = () => {
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [addressLabel, setAddressLabel] = useState(
    DEFAULT_SITE_SETTINGS.addressLabel
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();
        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
        setAddressLabel(data.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel);
      } catch (error) {
        console.error("Gagal memuat site settings di HeroTentangKami:", error);
      }
    };

    loadSiteSettings();
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="about-hero-heading">
      <div className={styles.heroInner}>
        {/* TEKS KIRI */}
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Tentang {businessName}</p>

          <h1 id="about-hero-heading" className={styles.title}>
            Dari Dapur Rumahan di {addressLabel},
            <span> Untuk Teman Ngopi Keluarga</span>
          </h1>

          <p className={styles.lead}>
            {businessName} berdiri pada 7 Juli 2024, berawal dari hobi
            membuat roti rumahan yang lembut dan manis untuk keluarga dan
            tetangga sekitar. Dari dapur kecil di {addressLabel}, kami
            mulai menerima pesanan roti unyil seribuan untuk pengajian, arisan,
            dan ulang tahun anak.
          </p>

          <p className={styles.text}>
            Kami percaya, roti yang sederhana sekalipun bisa menjadi sumber
            kebahagiaan kecil di tengah kesibukan. Karena itu, setiap loyang
            roti yang keluar dari oven kami dibuat dengan bahan yang baik,
            proses yang higienis, dan rasa yang konsisten.
          </p>

          <p className={styles.text}>
            Walaupun masih berbentuk UMKM rumahan, pengelolaan pesanan di
            {businessName} diusahakan rapi: mulai dari pencatatan order,
            jadwal produksi, hingga komunikasi ramah melalui WhatsApp dan
            media sosial.
          </p>

          <ul className={styles.valuesList}>
            <li>
              <span className={styles.dot} />
              <span>
                <strong>Hangat & rumahan</strong> – rasa dan pelayanan yang
                akrab seperti keluarga sendiri.
              </span>
            </li>
            <li>
              <span className={styles.dot} />
              <span>
                <strong>Fresh setiap hari</strong> – dibuat berdasarkan
                pesanan, bukan stok lama.
              </span>
            </li>
            <li>
              <span className={styles.dot} />
              <span>
                <strong>Ramah di kantong</strong> – mulai Rp1.000/pcs untuk
                mengisi snack box acara.
              </span>
            </li>
          </ul>
        </div>

        {/* GAMBAR KANAN */}
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageInner}>
            <Image
              src={tokoAlfarazka}
              alt={`Toko dan dapur produksi ${businessName} di ${addressLabel}.`}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTentangKami;