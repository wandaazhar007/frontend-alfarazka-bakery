// app/components/contactCard/ContactCard.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import styles from "./ContactCard.module.scss";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

function getInstagramHandle(instagramUrl: string) {
  try {
    const cleaned = instagramUrl.trim().replace(/\/+$/, "");
    const parts = cleaned.split("instagram.com/");
    if (parts.length > 1 && parts[1]) {
      return `@${parts[1].replace(/\//g, "")}`;
    }
    return "Instagram";
  } catch {
    return "Instagram";
  }
}

const ContactCard = async () => {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;
  const phoneNumberDisplay =
    settings.phoneNumberDisplay || DEFAULT_SITE_SETTINGS.phoneNumberDisplay;
  const whatsappNumber =
    settings.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber;
  const instagramLink =
    settings.instagramUrl || DEFAULT_SITE_SETTINGS.instagramUrl;
  const mapsLink = settings.mapsUrl || DEFAULT_SITE_SETTINGS.mapsUrl;
  const addressLabel =
    settings.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel;
  const serviceAreaText =
    settings.serviceAreaText || DEFAULT_SITE_SETTINGS.serviceAreaText;

  const whatsappLink = buildWhatsAppUrl(
    whatsappNumber,
    `Assalamualaikum, saya ingin tanya atau pesan roti di ${businessName}.`
  );

  const instagramHandle = getInstagramHandle(instagramLink);

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="contact-card-heading"
    >
      <div className="container">
        <div className={styles.inner}>
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

          <div className={styles.grid}>
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
                  <dd>{phoneNumberDisplay}</dd>
                </div>
                <div>
                  <dt>Jenis chat</dt>
                  <dd>
                    Konsultasi paket, pemesanan, dan konfirmasi pengantaran.
                  </dd>
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

            <article className={styles.card}>
              <div className={styles.iconCircle}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <h3 className={styles.cardTitle}>Instagram {businessName}</h3>
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
                      {instagramHandle}
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
                  <dd>{addressLabel}</dd>
                </div>
                <div>
                  <dt>Area utama</dt>
                  <dd>{serviceAreaText}</dd>
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