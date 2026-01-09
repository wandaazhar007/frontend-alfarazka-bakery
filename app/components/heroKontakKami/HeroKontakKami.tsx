// app/components/heroKontakKami/HeroKontakKami.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faClock,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./HeroKontakKami.module.scss";

const whatsappLink =
  "https://wa.me/6285179753356?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20atau%20pesan%20roti%20di%20Alfarazka%20Bakery.";

const mapsLink = "https://maps.app.goo.gl/dMbWuud6ZD9DSqap6";

const HeroKontakKami: React.FC = () => {
  return (
    <section
      className={`section ${styles.hero}`}
      aria-labelledby="kontak-kami-hero-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: COPY + CTA */}
          <div className={styles.content}>
            <p className={styles.kicker}>Butuh bantuan pemesanan?</p>
            <h1 id="kontak-kami-hero-heading" className={styles.title}>
              Hubungi <span>Alfarazka Bakery</span> di Ciputat
            </h1>
            <p className={styles.subtitle}>
              Halaman ini khusus untuk kamu yang ingin tanya stok, cek
              ketersediaan tanggal, atau konsultasi paket snack pengajian,
              arisan, ulang tahun anak, maupun rapat kantor. Paling cepat
              hubungi kami lewat WhatsApp.
            </p>

            <div className={styles.mainActions}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
                aria-label="Hubungi Alfarazka Bakery via WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Chat via WhatsApp</span>
              </a>

              <Link
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryLink}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Lihat lokasi di Google Maps</span>
              </Link>
            </div>

            <p className={styles.microcopy}>
              Biasanya kami merespon dalam jam operasional. Untuk pesan di luar jam,
              insyaAllah akan dibalas di hari berikutnya.
            </p>
          </div>

          {/* RIGHT: QUICK CONTACT HIGHLIGHTS */}
          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <div className={styles.iconCircle}>
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <div className={styles.highlightText}>
                <h2>Kontak Utama</h2>
                <p>
                  WhatsApp: <strong>+62 851-7975-3356</strong>
                  <br />
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/alfarazkabakery"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @alfarazkabakery
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.iconCircle}>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className={styles.highlightText}>
                <h2>Jam Operasional Chat</h2>
                <p>
                  Respon utama biasanya di{" "}
                  <strong>pagi–siang dan menjelang sore</strong>.
                  <br />
                  Jika chat di luar jam ramai produksi, mohon izin bisa sedikit
                  lebih lama dibalas.
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.iconCircle}>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className={styles.highlightText}>
                <h2>Area Layanan</h2>
                <p>
                  Berbasis di <strong>Ciputat, Tangerang Selatan</strong> dengan
                  pengantaran ke area sekitar: Pamulang, UIN Jakarta, Gintung,
                  Legoso, dan titik-titik lain yang disepakati lewat WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroKontakKami;