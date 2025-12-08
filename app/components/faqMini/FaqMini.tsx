"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import styles from "./FaqMini.module.scss";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faMessage } from "@fortawesome/free-regular-svg-icons/faMessage";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Kalau pesan mendadak, apakah masih bisa?",
    answer:
      "Boleh dicoba dulu ya. Silakan chat WhatsApp dan infokan tanggal, jam acara, serta jumlah perkiraan. Jika slot produksi masih ada, insyaAllah akan kami usahakan.",
  },
  {
    question: "Minimal order roti unyil untuk acara berapa?",
    answer:
      "Untuk acara kecil, kami sarankan sekitar 3–4 pcs roti unyil per orang. Semakin banyak jumlah pcs, biasanya makin hemat waktu produksi dan ongkir. Minimal pesanan bisa dibicarakan fleksibel sesuai jenis acara.",
  },
  {
    question: "Apakah bisa mix varian roti dalam satu pesanan?",
    answer:
      "Bisa. Kamu bebas mix beberapa varian roti unyil, roti meises, dan pizza mini dalam satu pesanan atau snack box. Sampaikan saja preferensi rasa (manis, gurih, tidak pedas, dll).",
  },
  {
    question: "Kapan sebaiknya melakukan pre-order?",
    answer:
      "Idealnya H-1 untuk jumlah normal. Untuk pesanan ratusan pcs atau lebih dari satu jenis paket, lebih baik pesan beberapa hari sebelumnya supaya dapur bisa mengatur jadwal produksi dengan nyaman.",
  },
  {
    question: "Pengantaran sampai area mana saja?",
    answer:
      "Utamanya sekitar Ciputat dan Tangerang Selatan: Alun-alun Pamulang, Legoso, UIN Jakarta, Gintung, Ciputat, BSD, Cilandak, dan area sekitarnya. Titik temu & ongkir disepakati di awal lewat WhatsApp.",
  },
];

const FaqMini: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq-mini"
      className={styles.section}
      aria-labelledby="faq-mini-heading"
    >
      <div className={styles.inner}>
        {/* LEFT BOX: INTRO + CTA */}
        <div className={styles.leftBox}>
          <p className={styles.kicker}>Masih ada yang ingin ditanyakan?</p>
          <h2 id="faq-mini-heading" className={styles.title}>
            FAQ singkat sebelum kamu pesan roti
          </h2>
          <p className={styles.subtitle}>
            Beberapa pertanyaan yang sering mampir sebelum pelanggan
            memesan roti unyil untuk pengajian, arisan, ulang tahun anak,
            maupun rapat kantor. Kalau pertanyaanmu belum terjawab di
            sini, kamu bebas tanya langsung lewat WhatsApp.
          </p>

          <div className={styles.highlight}>
            <FontAwesomeIcon
              icon={faMessage}
              className={styles.highlightIcon}
            />
            <p className={styles.highlightText}>
              Kami paham tiap acara punya kebutuhan yang berbeda. Tenang
              saja, kamu bisa konsultasi dulu soal jumlah, varian, dan
              waktu pengantaran tanpa harus langsung fix pesanan.
            </p>
          </div>

          <a
            href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20tanya%20lebih%20lanjut%20soal%20pemesanan%20roti%20Alfarazka%20Bakery."
            className={styles.ctaButton}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Tanya langsung via WhatsApp</span>
          </a>

          <p className={styles.microcopy}>
            Biasanya kami respon dalam jam kerja. Untuk pesan di luar jam
            operasional, insyaAllah akan dibalas di hari berikutnya.
          </p>
        </div>

        {/* RIGHT BOX: FAQ ACCORDION */}
        <div className={styles.rightBox} aria-label="Pertanyaan yang sering ditanyakan">
          <div className={styles.faqHeader}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className={styles.faqHeaderIcon}
            />
            <div>
              <h3 className={styles.faqTitle}>Pertanyaan umum</h3>
              <p className={styles.faqSubtitle}>
                Klik pertanyaan di bawah untuk melihat jawabannya.
              </p>
            </div>
          </div>

          <div className={styles.accordion}>
            {FAQ_ITEMS.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`${styles.item} ${isActive ? styles.itemActive : ""
                    }`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isActive}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`${styles.chevron} ${isActive ? styles.chevronOpen : ""
                        }`}
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </button>

                  <div
                    className={`${styles.answerWrapper} ${isActive ? styles.answerOpen : ""
                      }`}
                  >
                    <p className={styles.answer}>{item.answer}</p>
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

export default FaqMini;