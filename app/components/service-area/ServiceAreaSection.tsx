// //app/components/service-area/ServiceAreaSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./ServiceAreaSection.module.scss";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const defaultAreaChips = [
  "Ciputat",
  "Cimanggis",
  "Pamulang",
  "Serpong",
  "Situ Gintung",
  "BSD",
  "Cilandak",
  "Legoso",
  "Pondok Pinang",
  "Pondok Indah",
  "Cipete",
  "Blok A",
  "Fatmawati",
  "Pasar Minggu",
  "Lebak Bulus",
  "Pejaten",
  "Ragunan",
  "Rempoa",
  "Kebayoran Lama",
  "Kebayoran Baru",
  "Ciledug",
  "Tanah Abang",
  "Senayan",
  "dan sekitarnya",
];

const ServiceAreaSection: React.FC = () => {
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [whatsappNumber, setWhatsappNumber] = useState(
    DEFAULT_SITE_SETTINGS.whatsappNumber
  );
  const [addressLabel, setAddressLabel] = useState(
    DEFAULT_SITE_SETTINGS.addressLabel
  );
  const [serviceAreaText, setServiceAreaText] = useState(
    DEFAULT_SITE_SETTINGS.serviceAreaText
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();
        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
        setWhatsappNumber(
          data.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber
        );
        setAddressLabel(data.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel);
        setServiceAreaText(
          data.serviceAreaText || DEFAULT_SITE_SETTINGS.serviceAreaText
        );
      } catch (error) {
        console.error("Gagal memuat site settings di ServiceAreaSection:", error);
      }
    };

    loadSiteSettings();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya ingin tanya area jangkauan pengantaran ${businessName}.`
    );
  }, [whatsappNumber, businessName]);

  const areaChips = useMemo(() => {
    const raw = String(serviceAreaText || "").trim();

    if (!raw) return defaultAreaChips;

    const parsed = raw
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    return parsed.length > 0 ? parsed : defaultAreaChips;
  }, [serviceAreaText]);

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
              Jangkauan {businessName} di Ciputat & Sekitarnya
            </h2>
            <p className={styles.text}>
              {businessName} berlokasi di {addressLabel}, dan melayani
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
              <Link href={whatsappLink} className={styles.primaryButton}>
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
              {areaChips.map((area, index) => (
                <span key={`${area}-${index}`} className={styles.chip}>
                  {area}
                </span>
              ))}
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