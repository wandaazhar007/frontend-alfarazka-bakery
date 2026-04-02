// app/components/faqKontakKami/FaqKontakKami.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEnvelopeOpenText,
  faClock,
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import styles from "./FaqKontakKami.module.scss";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  icon: any;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "cara-kontak",
    question: "Lebih baik hubungi lewat WhatsApp atau telepon?",
    answer:
      "Untuk pemesanan dan konsultasi paket, kami lebih cepat merespon lewat WhatsApp. Kamu bisa kirim detail acara, jumlah tamu, dan budget. Jika perlu ngobrol lebih lanjut, kita bisa lanjut via telepon setelah itu.",
    icon: faWhatsapp,
  },
  {
    id: "jam-respon",
    question: "Jam berapa biasanya admin merespon chat?",
    answer:
      "Umumnya kami merespon di jam operasional dapur: pagi hingga sore hari. Jika kamu chat di luar jam tersebut, insyaAllah akan dibalas di hari/jam kerja berikutnya.",
    icon: faClock,
  },
  {
    id: "alamat-detail",
    question: "Apakah alamat lengkap ditampilkan di website?",
    answer:
      "Ya, alamat utama bisa ditampilkan di website. Untuk detail titik dan arahan paling praktis, kami juga bisa kirim Google Maps lewat WhatsApp.",
    icon: faLocationDot,
  },
  {
    id: "konfirmasi-pesan",
    question: "Kapan pesanan dianggap benar-benar sudah fix?",
    answer:
      "Pesanan dianggap fix setelah detail jumlah, varian, tanggal, dan jam pengambilan/pengantaran disepakati, lalu kamu menerima konfirmasi final dari admin. Untuk pesanan besar, biasanya akan diminta DP sebagai komitmen.",
    icon: faEnvelopeOpenText,
  },
];

const FaqKontakKami: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [phoneNumberDisplay, setPhoneNumberDisplay] = useState(
    DEFAULT_SITE_SETTINGS.phoneNumberDisplay
  );
  const [whatsappNumber, setWhatsappNumber] = useState(
    DEFAULT_SITE_SETTINGS.whatsappNumber
  );
  const [addressLabel, setAddressLabel] = useState(
    DEFAULT_SITE_SETTINGS.addressLabel
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const settings = await fetchPublicSiteSettings();

        setBusinessName(
          settings.businessName || DEFAULT_SITE_SETTINGS.businessName
        );
        setPhoneNumberDisplay(
          settings.phoneNumberDisplay ||
          DEFAULT_SITE_SETTINGS.phoneNumberDisplay
        );
        setWhatsappNumber(
          settings.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber
        );
        setAddressLabel(
          settings.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel
        );
      } catch (error) {
        console.error("Gagal memuat site settings di FaqKontakKami:", error);
      }
    };

    loadSiteSettings();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya ingin tanya lebih lanjut soal pemesanan roti dan paket ${businessName}.`
    );
  }, [whatsappNumber, businessName]);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="faq-kontak-kami-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.infoPanel}>
            <p className={styles.kicker}>FAQ Kontak & Pemesanan</p>
            <h2 id="faq-kontak-kami-heading" className={styles.title}>
              Sebelum Chat, Mungkin Pertanyaanmu Ada di Sini
            </h2>
            <p className={styles.subtitle}>
              Banyak pelanggan baru yang bertanya hal serupa sebelum menghubungi
              kami. Bagian ini membantu menjawab hal-hal dasar seputar waktu
              respon, cara menghubungi, dan konfirmasi pesanan.
            </p>

            <p className={styles.bodyText}>
              Setelah merasa cukup jelas, kamu bisa langsung klik tombol di
              bawah untuk ngobrol via WhatsApp. Tidak harus langsung pesan,
              boleh tanya-tanya dulu tentang paket, jumlah roti, ataupun area
              pengantaran.
            </p>

            <div className={styles.contactOptions}>
              <div className={styles.contactOption}>
                <div className={styles.optionIcon}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div>
                  <p className={styles.optionLabel}>WhatsApp admin</p>
                  <p className={styles.optionValue}>{phoneNumberDisplay}</p>
                </div>
              </div>

              <div className={styles.contactOption}>
                <div className={styles.optionIcon}>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </div>
                <div>
                  <p className={styles.optionLabel}>Jenis pertanyaan</p>
                  <p className={styles.optionValue}>
                    Pemesanan roti, konsultasi paket acara, dan info pengantaran.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Chat admin via WhatsApp</span>
              </Link>
              <p className={styles.miniNote}>
                *Jika balasan belum muncul, mohon ditunggu ya. Kami akan berusaha
                membalas secepat mungkin di jam operasional.
              </p>
            </div>
          </div>

          <div
            className={styles.faqPanel}
            aria-label="Pertanyaan umum seputar kontak dan pemesanan"
          >
            <div className={styles.faqHeader}>
              <div className={styles.faqHeaderIcon}>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </div>
              <div>
                <h3 className={styles.faqTitle}>Pertanyaan yang sering muncul</h3>
                <p className={styles.faqSubtitle}>
                  Klik salah satu pertanyaan di bawah untuk melihat jawabannya.
                </p>
              </div>
            </div>

            <div className={styles.accordion}>
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                const answerText =
                  item.id === "alamat-detail"
                    ? `${addressLabel}. Untuk detail titik dan arahan paling praktis, kami juga bisa kirim Google Maps lewat WhatsApp.`
                    : item.answer;

                return (
                  <div
                    key={item.id}
                    className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""
                      }`}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestionButton}
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                    >
                      <div className={styles.faqQuestionLeft}>
                        <span className={styles.faqIconCircle}>
                          <FontAwesomeIcon icon={item.icon} />
                        </span>
                        <span className={styles.faqQuestionText}>
                          {item.question}
                        </span>
                      </div>
                      <span
                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""
                          }`}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </button>

                    <div
                      className={`${styles.faqAnswerWrapper} ${isOpen ? styles.answerOpen : ""
                        }`}
                    >
                      <p className={styles.faqAnswer}>{answerText}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqKontakKami;