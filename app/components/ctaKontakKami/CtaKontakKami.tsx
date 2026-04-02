// app/components/ctaKontakKami/CtaKontakKami.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBreadSlice,
  faCalendarCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import styles from "./CtaKontakKami.module.scss";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const CtaKontakKami = async () => {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;
  const whatsappNumber =
    settings.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber;
  const serviceAreaText =
    settings.serviceAreaText || DEFAULT_SITE_SETTINGS.serviceAreaText;

  const whatsappLink = buildWhatsAppUrl(
    whatsappNumber,
    `Assalamualaikum, saya ingin konsultasi paket roti dan snack ${businessName} untuk acara saya.`
  );

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="cta-kontak-kami-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.kicker}>Siap Dibantu untuk Acara Kamu</p>
          <h2 id="cta-kontak-kami-heading" className={styles.title}>
            Yuk, Diskusikan Roti & Paket Snack yang Paling Pas
          </h2>
          <p className={styles.subtitle}>
            Baik untuk pengajian, arisan, ulang tahun anak, maupun rapat kantor,
            kamu tidak perlu bingung hitung pcs satu per satu. Cukup ceritakan
            jenis acara, jumlah tamu, area, dan kisaran budget – kami bantu
            rekomendasikan kombinasi roti unyil, roti meises, dan pizza mini
            yang tepat.
          </p>

          <ul className={styles.pillList}>
            <li>
              <span className={styles.pillIcon}>
                <FontAwesomeIcon icon={faBreadSlice} />
              </span>
              <span className={styles.pillText}>
                <strong>Paket fleksibel, mulai seribuan per pcs.</strong> Bisa
                untuk keluarga kecil sampai acara puluhan orang.
              </span>
            </li>
            <li>
              <span className={styles.pillIcon}>
                <FontAwesomeIcon icon={faCalendarCheck} />
              </span>
              <span className={styles.pillText}>
                <strong>Pre-order terjadwal.</strong> Bantu kamu merencanakan
                acara tanpa terburu-buru di hari H.
              </span>
            </li>
            <li>
              <span className={styles.pillIcon}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className={styles.pillText}>
                <strong>Fokus area Ciputat & sekitarnya.</strong> {serviceAreaText}
              </span>
            </li>
          </ul>

          <div className={styles.actions}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
              aria-label={`Chat admin ${businessName} via WhatsApp untuk konsultasi paket`}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Chat admin via WhatsApp</span>
            </a>

            <Link href="/cara-pemesanan" className={styles.secondaryLink}>
              Pelajari dulu cara pemesanan
            </Link>
          </div>

          <p className={styles.microcopy}>
            *Tidak harus langsung pesan. Boleh tanya-tanya dulu soal jumlah,
            varian, dan jadwal pengantaran. Kami senang membantu merencanakan
            acara kamu dengan tenang.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaKontakKami;