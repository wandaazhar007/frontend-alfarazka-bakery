import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./AddressSection.module.scss";
import Link from "next/link";

const AddressSection: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="alamat-heading">
      <div className={styles.inner}>
        {/* KIRI – INFO ALAMAT & KONTAK */}
        <div className={styles.infoColumn}>
          <p className={styles.kicker}>Lokasi & Kontak</p>
          <h2 id="alamat-heading" className={styles.heading}>
            Datang langsung atau hubungi kami dari rumah
          </h2>

          {/* JAM BUKA */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Jam buka</h3>
            <p className={styles.blockText}>
              Buka setiap hari, pukul <strong>08.00 – 17.00 WIB</strong>.
              Untuk pesanan jumlah besar, disarankan pre-order lebih awal.
            </p>
          </div>

          {/* ALAMAT */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Alamat dapur produksi</h3>
            <Link
              href="https://maps.app.goo.gl/dMbWuud6ZD9DSqap6"
              target="_blank"
              rel="noreferrer"
              className={styles.linkRow}
            >
              <span className={styles.iconCircle}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className={styles.linkText}>
                Jl. Dewi Sartika No. 25 RT 003/004 Gg. Masjid Arryadh,
                Cimanggis, Ciputat, Kota Tangsel (15411)
                <span className={styles.linkHint}>Klik untuk buka Google Maps</span>
              </span>
            </Link>
          </div>

          {/* WHATSAPP */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>WhatsApp pemesanan</h3>
            <Link
              href="https://wa.me/6285179753356?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20pemesanan%20roti%20Alfarazka%20Bakery."
              target="_blank"
              rel="noreferrer"
              className={styles.linkRow}
            >
              <span className={styles.iconCircleWhatsapp}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span className={styles.linkText}>
                0851 7975 3356
                <span className={styles.linkHint}>Klik untuk chat di WhatsApp</span>
              </span>
            </Link>
          </div>

          {/* INSTAGRAM */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Instagram</h3>
            <Link
              href="https://instagram.com/alfarazkabakery"
              target="_blank"
              rel="noreferrer"
              className={styles.linkRow}
            >
              <span className={styles.iconCircleInstagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className={styles.linkText}>
                @alfarazkabakery
                <span className={styles.linkHint}>Lihat feed menu & testimoni</span>
              </span>
            </Link>
          </div>
        </div>

        {/* KANAN – EMBED MAP */}
        <div className={styles.mapColumn} aria-label="Peta lokasi Alfarazka Bakery">
          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.111788901183!2d106.74709398434162!3d-6.320919376161387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efa37d0ba7a5%3A0xcc7ef5e0c1b32318!2sAlfarazka%20Bakery!5e0!3m2!1sen!2sus!4v1765012221086!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;