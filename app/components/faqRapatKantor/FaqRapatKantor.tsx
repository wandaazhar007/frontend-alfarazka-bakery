"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faClock,
  faTruck,
  faMoneyBillWave,
  faChevronDown,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./FaqRapatKantor.module.scss";

type FaqRapatKantorProps = {
  whatsappLink: string;
};

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  icon: IconDefinition;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "penawaran",
    question: "Apakah bisa dibuatkan penawaran dulu?",
    answer:
      "Bisa. Sampaikan rencana jumlah peserta, kisaran budget per orang, dan jenis acara. Kami akan bantu buatkan gambaran paket dan estimasi biaya yang bisa diajukan ke atasan atau bagian keuangan.",
    icon: faBriefcase,
  },
  {
    id: "minimal-pesan",
    question: "Minimal pesan untuk rapat kantor berapa?",
    answer:
      "Idealnya mulai dari 20–25 pax agar produksi lebih efektif. Namun untuk jumlah di bawah itu masih bisa dibicarakan terlebih dahulu, terutama jika lokasi pengantaran masih sekitar Ciputat.",
    icon: faClock,
  },
  {
    id: "dp",
    question: "Apakah wajib DP?",
    answer:
      "Untuk pesanan jumlah besar atau di hari yang sibuk, biasanya kami minta DP sebagai komitmen slot produksi. Untuk pesanan tertentu bisa dibahas fleksibel sesuai kebijakan kantor dan kesepakatan bersama.",
    icon: faMoneyBillWave,
  },
  {
    id: "mendadak",
    question: "Bagaimana kalau rapat mendadak?",
    answer:
      "Silakan langsung hubungi kami via WhatsApp. Jika stok bahan dan jadwal produksi memungkinkan, insyaAllah kami usahakan bantu. Semakin cepat menghubungi, semakin besar peluang bisa kami layani.",
    icon: faTruck,
  },
];

const FaqRapatKantor: React.FC<FaqRapatKantorProps> = ({ whatsappLink }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="rapat-kantor-faq-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* KIRI: intro + CTA */}
          <div className={styles.infoPanel}>
            <p className={styles.kicker}>FAQ Rapat Kantor</p>
            <h2 id="rapat-kantor-faq-heading" className={styles.title}>
              Pertanyaan yang Sering Muncul dari Kantor &amp; Lembaga
            </h2>
            <p className={styles.subtitle}>
              Sebelum memesan, biasanya bagian keuangan atau panitia acara punya
              beberapa pertanyaan ini. Kalau masih ragu, kamu bisa chat kami
              untuk diskusi lebih detail soal paket dan teknis pembayaran.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
            >
              Chat admin untuk tanya detail
            </a>
          </div>

          {/* KANAN: accordion ala halaman produk */}
          <div
            className={styles.faqPanel}
            aria-label="Pertanyaan yang sering ditanyakan"
          >
            {FAQ_ITEMS.map((item) => {
              const isOpen = item.id === openId;

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
                      <span className={styles.faqIcon}>
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
    </section>
  );
};

export default FaqRapatKantor;