//app/components/addressSection/AddressSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./AddressSection.module.scss";
import Link from "next/link";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

const AddressSection: React.FC = () => {
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [phoneNumberDisplay, setPhoneNumberDisplay] = useState(
    DEFAULT_SITE_SETTINGS.phoneNumberDisplay
  );
  const [whatsappNumber, setWhatsappNumber] = useState(
    DEFAULT_SITE_SETTINGS.whatsappNumber
  );
  const [instagramUrl, setInstagramUrl] = useState(
    DEFAULT_SITE_SETTINGS.instagramUrl
  );
  const [mapsUrl, setMapsUrl] = useState(DEFAULT_SITE_SETTINGS.mapsUrl);
  const [embedMapUrl, setEmbedMapUrl] = useState(
    DEFAULT_SITE_SETTINGS.embedMapUrl
  );
  const [addressLabel, setAddressLabel] = useState(
    DEFAULT_SITE_SETTINGS.addressLabel
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();

        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
        setPhoneNumberDisplay(
          data.phoneNumberDisplay || DEFAULT_SITE_SETTINGS.phoneNumberDisplay
        );
        setWhatsappNumber(
          data.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber
        );
        setInstagramUrl(data.instagramUrl || DEFAULT_SITE_SETTINGS.instagramUrl);
        setMapsUrl(data.mapsUrl || DEFAULT_SITE_SETTINGS.mapsUrl);
        setEmbedMapUrl(data.embedMapUrl || DEFAULT_SITE_SETTINGS.embedMapUrl);
        setAddressLabel(data.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel);
      } catch (error) {
        console.error("Gagal memuat site settings di AddressSection:", error);
      }
    };

    loadSiteSettings();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya ingin tanya pemesanan roti ${businessName}.`
    );
  }, [whatsappNumber, businessName]);

  const instagramHandle = useMemo(() => {
    try {
      const url = new URL(instagramUrl);
      const path = url.pathname.replace(/^\/+|\/+$/g, "");
      return path ? `@${path}` : "@alfarazkabakery";
    } catch {
      return "@alfarazkabakery";
    }
  }, [instagramUrl]);

  const finalEmbedMapUrl =
    embedMapUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.111788901183!2d106.74709398434162!3d-6.320919376161387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efa37d0ba7a5%3A0xcc7ef5e0c1b32318!2sAlfarazka%20Bakery!5e0!3m2!1sen!2sus!4v1765012221086!5m2!1sen!2sus";

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
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.linkRow}
            >
              <span className={styles.iconCircle}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className={styles.linkText}>
                {addressLabel}
                <span className={styles.linkHint}>
                  Klik untuk buka Google Maps
                </span>
              </span>
            </Link>
          </div>

          {/* WHATSAPP */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>WhatsApp pemesanan</h3>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={styles.linkRow}
            >
              <span className={styles.iconCircleWhatsapp}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span className={styles.linkText}>
                {phoneNumberDisplay}
                <span className={styles.linkHint}>
                  Klik untuk chat di WhatsApp
                </span>
              </span>
            </Link>
          </div>

          {/* INSTAGRAM */}
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Instagram</h3>
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.linkRow}
            >
              <span className={styles.iconCircleInstagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className={styles.linkText}>
                {instagramHandle}
                <span className={styles.linkHint}>
                  Lihat feed menu & testimoni
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* KANAN – EMBED MAP */}
        <div
          className={styles.mapColumn}
          aria-label={`Peta lokasi ${businessName}`}
        >
          <div className={styles.mapCard}>
            <iframe
              src={finalEmbedMapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title={`Peta lokasi ${businessName}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;