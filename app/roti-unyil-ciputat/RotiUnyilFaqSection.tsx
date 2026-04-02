//app/roti-unyil-ciputat/RotiUnyilFaqSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./RotiUnyilCiputatPage.module.scss";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../services/siteSettingsService";

const FAQ_ITEMS = [
  {
    question: "Minimal order roti unyil berapa pcs untuk area Ciputat?",
    answer:
      "Untuk pesanan biasa, minimal sekitar 25–30 pcs. Untuk acara seperti pengajian atau arisan, biasanya pelanggan pesan mulai 50 pcs ke atas agar cukup untuk semua tamu.",
  },
  {
    question: "Apakah bisa campur varian manis dan gurih?",
    answer:
      "Bisa. Justru kami sarankan mix beberapa varian manis dan gurih supaya tamu punya pilihan. Kamu tinggal infokan kombinasi yang diinginkan.",
  },
  {
    question: "Pengiriman roti unyil bisa ke mana saja?",
    answer:
      "Fokus utama kami area Ciputat dan sekitarnya. Ongkir dan titik temu bisa dibicarakan via WhatsApp sesuai lokasi dan kebutuhan acara.",
  },
  {
    question: "Pembayaran bisa pakai apa saja?",
    answer:
      "Bisa transfer bank atau e-wallet tertentu yang tersedia. Untuk pesanan jumlah besar, biasanya kami minta DP sebagai tanda jadi, lalu pelunasan saat atau sebelum pengantaran.",
  },
];

export default function RotiUnyilFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [whatsappNumber, setWhatsappNumber] = useState(
    DEFAULT_SITE_SETTINGS.whatsappNumber
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
        setServiceAreaText(
          data.serviceAreaText || DEFAULT_SITE_SETTINGS.serviceAreaText
        );
      } catch (error) {
        console.error(
          "Gagal memuat site settings di RotiUnyilFaqSection:",
          error
        );
      }
    };

    loadSiteSettings();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya mau pesan roti unyil ${businessName} untuk Ciputat.`
    );
  }, [whatsappNumber, businessName]);

  const shortServiceArea = useMemo(() => {
    if (!serviceAreaText?.trim()) return "Ciputat & sekitarnya";
    return serviceAreaText.trim();
  }, [serviceAreaText]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className={`section ${styles.faqSection}`}
      aria-labelledby="roti-unyil-faq-heading"
    >
      <div className="container">
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <p className={styles.sectionKicker}>FAQ Roti Unyil Ciputat</p>
            <h2 id="roti-unyil-faq-heading" className={styles.sectionTitle}>
              Masih Ragu Mau Pesan Berapa Pcs?
            </h2>
            <p className={styles.sectionSubtitle}>
              Tenang, kamu bisa mulai dari jumlah kecil dulu untuk coba rasa.
              Kalau sudah cocok, tinggal naikkan jumlahnya untuk acara besar.
            </p>

            <ul className={styles.faqHighlights}>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>Bisa konsultasi dulu via WhatsApp tanpa langsung pesan.</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>Bisa mix varian rasa dalam satu pesanan.</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>Area utama {shortServiceArea}.</span>
              </li>
            </ul>

            <div className={styles.heroActions}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                Tanya dulu via WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.faqRight}>
            <dl className={styles.faqList}>
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.question} className={styles.faqItem}>
                    <dt>
                      <button
                        type="button"
                        onClick={() => toggle(index)}
                        aria-expanded={isOpen}
                        className={styles.faqQuestionButton}
                      >
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          className={styles.faqIcon}
                        />
                        <span>{item.question}</span>
                      </button>
                    </dt>

                    {isOpen && <dd className={styles.faqAnswer}>{item.answer}</dd>}
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}