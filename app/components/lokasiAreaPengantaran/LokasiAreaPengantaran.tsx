// app/components/lokasiAreaPengantaran/LokasiAreaPengantaran.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTruckFast,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./LokasiAreaPengantaran.module.scss";
import {
  fetchPublicSiteSettings,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

function parseServiceAreas(serviceAreaText: string): string[] {
  const normalized = serviceAreaText
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (normalized.length > 0) {
    return normalized;
  }

  return [
    "Ciputat",
    "Pamulang",
    "UIN Jakarta",
    "Gintung",
    "Legoso",
    "BSD tertentu",
    "dan sekitarnya",
  ];
}

const LokasiAreaPengantaran = async () => {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;
  const mapsUrl = settings.mapsUrl || DEFAULT_SITE_SETTINGS.mapsUrl;
  const addressLabel =
    settings.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel;
  const serviceAreaText =
    settings.serviceAreaText || DEFAULT_SITE_SETTINGS.serviceAreaText;

  const serviceAreas = parseServiceAreas(serviceAreaText);

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="lokasi-area-pengantaran-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: LOKASI UTAMA */}
          <div className={styles.left}>
            <p className={styles.kicker}>Lokasi Dapur & Area Layanan</p>
            <h2
              id="lokasi-area-pengantaran-heading"
              className={styles.title}
            >
              Dapur Rumahan di Ciputat, Melayani Sekitar Tangerang Selatan
            </h2>
            <p className={styles.subtitle}>
              {businessName} adalah usaha rumahan yang berlokasi di area
              Ciputat. Pemesanan dilakukan lewat pre-order, dan pengambilan
              bisa <strong>diambil langsung</strong> atau{" "}
              <strong>diantar ke lokasi</strong> tertentu yang masih
              terjangkau dari dapur kami.
            </p>

            <div className={styles.addressCard}>
              <div className={styles.addressIcon}>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <p className={styles.addressLabel}>Perkiraan lokasi dapur</p>
                <address className={styles.address} translate="no">
                  {addressLabel}{" "}
                  <span className={styles.addressNote}>
                    (detail alamat lengkap akan dibagikan setelah pesanan fix)
                  </span>
                </address>

                <Link
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.mapLink}
                >
                  <FontAwesomeIcon icon={faMapLocationDot} />
                  <span>Lihat lokasi perkiraan di Google Maps</span>
                </Link>
              </div>
            </div>

            <p className={styles.helperText}>
              Untuk menjaga kenyamanan dan keamanan, alamat lengkap tidak
              ditampilkan publik. Setelah pesanan disepakati, kami akan
              mengirimkan titik Google Maps dan panduan rute yang lebih
              detail via WhatsApp.
            </p>
          </div>

          {/* RIGHT: AREA PENGANTARAN */}
          <div
            className={styles.right}
            aria-label={`Area pengantaran utama ${businessName}`}
          >
            <div className={styles.rightHeader}>
              <div className={styles.rightIcon}>
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <div>
                <h3 className={styles.rightTitle}>Area Pengantaran Utama</h3>
                <p className={styles.rightSubtitle}>
                  Berikut gambaran area yang sering kami layani. Di luar
                  daftar ini, masih bisa dibicarakan selama jarak dan jadwal
                  memungkinkan.
                </p>
              </div>
            </div>

            <ul className={styles.areaList}>
              {serviceAreas.map((area, index) => (
                <li key={`${area}-${index}`} className={styles.areaItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <p className={styles.note}>
              Untuk pesanan acara (pengajian, arisan, ulang tahun, atau
              rapat kantor),{" "}
              <strong>
                ongkir dan jam pengantaran akan disepakati di awal
              </strong>{" "}
              sehingga panitia punya waktu cukup untuk menata snack di
              lokasi acara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LokasiAreaPengantaran;