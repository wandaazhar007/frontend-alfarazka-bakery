"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faBoxOpen,
  faClock,
  faTruck,
  faMoneyBillWave,
  faChevronDown,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./faqRotiUnyilCiputat.module.scss";

type FaqRotiUnyilCiputatProps = {
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
    question: "Minimal order untuk roti unyil & paket snack berapa?",
    answer:
      "Untuk pemesanan santai/rumahan, minimal sekitar 25–30 pcs roti unyil. Untuk paket snack acara (pengajian, arisan, ulang tahun, dan rapat kantor) biasanya mulai dari 50 pcs atau menyesuaikan kebutuhan. Silakan konsultasikan jumlah & budget, insyaAllah kami bantu aturkan.",
    icon: faBoxOpen,
  },
  {
    id: "preorder",
    question: "Kapan sebaiknya saya melakukan pre-order?",
    answer:
      "Untuk jumlah standar, disarankan pre-order minimal H-1 sebelum acara. Jika pesanan ratusan pcs atau ada beberapa varian khusus, sebaiknya pesan 2–3 hari sebelumnya agar jadwal produksi bisa kami atur dengan rapi.",
    icon: faClock,
  },
  {
    id: "pengiriman",
    question: "Apakah bisa dikirim? Area mana saja yang terlayani?",
    answer:
      "InsyaAllah bisa. Area utama kami meliputi Ciputat, Pamulang, UIN Jakarta, Gintung, Legoso, BSD, Cilandak, dan sekitarnya. Sistemnya bisa diantar (ongkir menyesuaikan jarak) atau janjian titik temu. Detail biaya akan kami infokan saat chat.",
    icon: faTruck,
  },
  {
    id: "pembayaran",
    question: "Metode pembayaran & DP bagaimana?",
    answer:
      "Pembayaran bisa via transfer bank atau e-wallet. Untuk pesanan dalam jumlah banyak, biasanya kami minta DP terlebih dahulu sebagai komitmen jadwal produksi. Pelunasannya bisa dilakukan saat H-1 atau saat barang siap diambil/diantar.",
    icon: faMoneyBillWave,
  },
];

const FaqRotiUnyilCiputat: React.FC<FaqRotiUnyilCiputatProps> = ({
  whatsappLink,
}) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="roti-unyil-faq-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* BOX KIRI: COPY + LIST HIGHLIGHT + CTA */}
          <div className={styles.infoPanel}>
            <p className={styles.kicker}>FAQ Roti Unyil Ciputat</p>
            <h2 id="roti-unyil-faq-heading" className={styles.title}>
              Masih Ragu Mau Pesan Berapa Pcs?
            </h2>
            <p className={styles.subtitle}>
              Tenang, kamu bisa mulai dari jumlah kecil dulu untuk coba rasa.
              Kalau sudah cocok, tinggal naikkan jumlahnya untuk acara besar.
            </p>

            <ul className={styles.highlights}>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>
                  Bisa konsultasi dulu via WhatsApp tanpa langsung pesan.
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>Bisa mix varian rasa dalam satu pesanan.</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>
                  Area utama Ciputat &amp; sekitarnya, pengantaran sesuai
                  kesepakatan.
                </span>
              </li>
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
            >
              Tanya dulu via WhatsApp
            </a>
          </div>

          {/* BOX KANAN: ACCORDION (SAMA GAYA DENGAN HALAMAN PRODUK) */}
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

export default FaqRotiUnyilCiputat;