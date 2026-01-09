"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChildren,
  faCakeCandles,
  faClock,
  faTruck,
  faChevronDown,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./FaqPaketUltah.module.scss";

type FaqPaketUltahProps = {
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
    id: "min-order",
    question: "Minimal order berapa kotak untuk ulang tahun anak?",
    answer:
      "Umumnya kami sarankan mulai dari 20 kotak supaya produksi dan pengantaran lebih efisien. Untuk jumlah di bawah itu tetap bisa dibicarakan, terutama kalau lokasi sekolah atau TPA masih sekitar Ciputat.",
    icon: faChildren,
  },
  {
    id: "mix-varian",
    question: "Apakah isi box bisa campur beberapa varian roti?",
    answer:
      "Bisa banget. Justru kami sarankan mix manis dan gurih supaya anak-anak tidak cepat bosan. Kamu bisa request rasa favorit anak, misalnya lebih banyak cokelat atau tanpa pedas sama sekali.",
    icon: faCakeCandles,
  },
  {
    id: "kapan-pesan",
    question: "Pesan berapa hari sebelum acara ulang tahun?",
    answer:
      "Minimal H-1 sudah cukup untuk jumlah standar. Kalau jumlahnya puluhan sampai ratusan kotak, lebih aman booking 2–3 hari sebelumnya supaya slot produksi aman dan kamu lebih tenang.",
    icon: faClock,
  },
  {
    id: "antar",
    question: "Apakah bisa diantar ke sekolah atau lokasi acara?",
    answer:
      "Untuk area sekitar Ciputat dan beberapa titik di Tangerang Selatan, insyaAllah bisa diantar dengan biaya tambahan. Detail alamat, jam mulai acara, dan titik serah terima akan kami pastikan dulu lewat WhatsApp.",
    icon: faTruck,
  },
];

const FaqPaketUltah: React.FC<FaqPaketUltahProps> = ({ whatsappLink }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="ulang-tahun-anak-faq-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* KIRI: intro + CTA */}
          <div className={styles.infoPanel}>
            <p className={styles.kicker}>FAQ Orang Tua</p>
            <h2 id="ulang-tahun-anak-faq-heading" className={styles.title}>
              Pertanyaan yang Sering Diajukan Ortu
            </h2>
            <p className={styles.subtitle}>
              Tenang, kamu tidak sendirian. Banyak orang tua yang bertanya
              hal-hal ini sebelum memesan paket snack ulang tahun anak. Kalau
              masih ragu, kamu bisa tanya dulu lewat WhatsApp sebelum fix
              jumlah box dan varian roti.
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

          {/* KANAN: accordion ala FAQ di halaman produk */}
          <div
            className={styles.faqPanel}
            aria-label="Pertanyaan yang sering ditanyakan orang tua"
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

export default FaqPaketUltah;