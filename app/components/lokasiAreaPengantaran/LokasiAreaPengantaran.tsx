// app/components/lokasiAreaPengantaran/LokasiAreaPengantaran.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTruckFast,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./LokasiAreaPengantaran.module.scss";

const mapsUrl =
  "https://maps.app.goo.gl/dMbWuud6ZD9DSqap6";

const serviceAreas: string[] = [
  "Ciputat dan sekitarnya (Legoso, Cipayung, Jombang)",
  "Sekitar UIN Jakarta, Gintung, dan Cirendeu",
  "Pamulang & Alun-alun Pamulang",
  "Beberapa titik di BSD dan sekitarnya (by request)",
  "Sebagian area Tangerang Selatan lain yang masih terjangkau",
  "Titip titik temu di sekitar jalan utama Ciputat – Pamulang",
];

const LokasiAreaPengantaran: React.FC = () => {
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
              Alfarazka Bakery adalah usaha rumahan yang berlokasi di area
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
                  Ciputat, Tangerang Selatan, Banten{" "}
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
                  <span>
                    Lihat lokasi perkiraan di Google Maps
                  </span>
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
            aria-label="Area pengantaran utama Alfarazka Bakery"
          >
            <div className={styles.rightHeader}>
              <div className={styles.rightIcon}>
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <div>
                <h3 className={styles.rightTitle}>
                  Area Pengantaran Utama
                </h3>
                <p className={styles.rightSubtitle}>
                  Berikut gambaran area yang sering kami layani. Di luar
                  daftar ini, masih bisa dibicarakan selama jarak dan jadwal
                  memungkinkan.
                </p>
              </div>
            </div>

            <ul className={styles.areaList}>
              {serviceAreas.map((area, index) => (
                <li key={index} className={styles.areaItem}>
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