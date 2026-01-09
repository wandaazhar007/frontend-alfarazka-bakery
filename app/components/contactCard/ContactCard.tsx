// app/components/contactCard/ContactCard.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import styles from "./ContactCard.module.scss";

const whatsappLink =
  "https://wa.me/6285179753356?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20atau%20pesan%20roti%20di%20Alfarazka%20Bakery.";
const instagramLink = "https://www.instagram.com/alfarazkabakery";
const mapsLink = "https://maps.app.goo.gl/dMbWuud6ZD9DSqap6";

const ContactCard: React.FC = () => {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="contact-card-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* INTRO */}
          <header className={styles.header}>
            <p className={styles.kicker}>Kontak & Info Cepat</p>
            <h2 id="contact-card-heading" className={styles.title}>
              Pilih Cara Kontak yang Paling Nyaman untuk Kamu
            </h2>
            <p className={styles.subtitle}>
              Untuk pemesanan roti unyil, snack box pengajian, arisan, ulang
              tahun anak, atau rapat kantor, paling cepat hubungi kami lewat{" "}
              <strong>WhatsApp</strong>. Kamu juga bisa cek update terbaru di
              Instagram dan melihat lokasi di Google Maps.
            </p>
          </header>

          {/* GRID CONTACT CARDS */}
          <div className={styles.grid}>
            {/* WHATSAPP CARD */}
            <article className={styles.card}>
              <div className={styles.iconCirclePrimary}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <h3 className={styles.cardTitle}>WhatsApp Utama</h3>
              <p className={styles.cardText}>
                Cara tercepat untuk tanya ketersediaan tanggal, hitung paket,
                atau langsung booking pesanan.
              </p>

              <dl className={styles.detailList}>
                <div>
                  <dt>Nomor WhatsApp</dt>
                  <dd>+62 821-9422-8282</dd>
                </div>
                <div>
                  <dt>Jenis chat</dt>
                  <dd>Konsultasi paket, pemesanan, dan konfirmasi pengantaran.</dd>
                </div>
              </dl>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                Chat via WhatsApp sekarang
              </a>
              <p className={styles.microcopy}>
                Boleh tanya-tanya dulu tanpa harus langsung pesan, insyaAllah
                kami jawab dengan senang hati.
              </p>
            </article>

            {/* INSTAGRAM CARD */}
            <article className={styles.card}>
              <div className={styles.iconCircle}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <h3 className={styles.cardTitle}>Instagram Alfarazka Bakery</h3>
              <p className={styles.cardText}>
                Lihat foto-foto roti unyil, ide paket snack, dan testimoni
                pelanggan dari sekitar Ciputat & sekitarnya.
              </p>

              <dl className={styles.detailList}>
                <div>
                  <dt>Akun resmi</dt>
                  <dd>
                    <Link
                      href={instagramLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @alfarazkabakery
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt>Isi konten</dt>
                  <dd>Galeri roti, info promo, dan contoh paket acara.</dd>
                </div>
              </dl>

              <Link
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryButton}
              >
                Buka Instagram
              </Link>
            </article>

            {/* LOKASI / MAP CARD */}
            <article className={styles.card}>
              <div className={styles.iconCircle}>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <h3 className={styles.cardTitle}>Lokasi & Area Layanan</h3>
              <p className={styles.cardText}>
                Berbasis di Ciputat dengan pengantaran ke beberapa titik di
                Tangerang Selatan dan sekitarnya.
              </p>

              <dl className={styles.detailList}>
                <div>
                  <dt>Lokasi dapur</dt>
                  <dd>Ciputat, Tangerang Selatan (by order / pre-order)</dd>
                </div>
                <div>
                  <dt>Area utama</dt>
                  <dd>
                    Ciputat, Pamulang, UIN Jakarta, Gintung, Legoso, BSD
                    tertentu, dan sekitarnya.
                  </dd>
                </div>
              </dl>

              <Link
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryButton}
              >
                Lihat di Google Maps
              </Link>

              <p className={styles.hintText}>
                Titik temu, detail alamat, dan ongkir akan dijelaskan lebih
                jelas saat chat lewat WhatsApp.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;