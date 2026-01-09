"use client";

import { useState } from "react";
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
      "Ya. Jl.Dewi Sartika No.25 RT 003/004, Kota Tangerang Selatan, Banten 15411, Indonesia, kami akan kirim titik Google Maps dan detail rute lewat WhatsApp.",
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

const whatsappLink =
  "https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20lebih%20lanjut%20soal%20pemesanan%20roti%20dan%20paket%20Alfarazka%20Bakery.";

const FaqKontakKami: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

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
          {/* LEFT: INTRO + CONTACT OPTIONS */}
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
                  <p className={styles.optionValue}>+62 821-9422-8282</p>
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

          {/* RIGHT: FAQ ACCORDION */}
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
                      <p className={styles.faqAnswer}>{item.answer}</p>
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