"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./FaqSection.module.scss";

type FaqItem = {
  question: string;
  answer: string;
};

const faqList: FaqItem[] = [
  {
    question: "Berapa minimal order roti unyil?",
    answer:
      "Untuk pemesanan harian bisa mulai dari 20–25 pcs. Untuk kebutuhan acara seperti pengajian, arisan, atau rapat, biasanya pelanggan memesan mulai 50, 100, hingga 200 pcs sesuai jumlah tamu.",
  },
  {
    question: "Kapan sebaiknya saya melakukan pre-order?",
    answer:
      "Disarankan H-1 untuk jumlah standar. Jika kamu membutuhkan ratusan pcs atau ada beberapa jenis acara dalam satu hari, sebaiknya menghubungi beberapa hari sebelumnya agar jadwal produksi bisa kami atur dengan nyaman.",
  },
  {
    question: "Apakah bisa mix varian dalam satu pesanan?",
    answer:
      "Bisa. Kamu bisa mix beberapa varian roti unyil, roti meises, dan pizza mini dalam satu pesanan. Tinggal sampaikan kombinasi rasa yang diinginkan saat chat WhatsApp.",
  },
  {
    question: "Area mana saja yang bisa dilayani pengantaran?",
    answer:
      "Kami melayani area sekitar Ciputat dan Tangerang Selatan, seperti Alun-alun Pamulang, UIN Jakarta, Gintung, BSD, Cilandak, Legoso, dan sekitarnya. Titik temu dan ongkir bisa disesuaikan saat diskusi di WhatsApp.",
  },
  {
    question: "Metode pembayaran yang tersedia apa saja?",
    answer:
      "Pembayaran dapat dilakukan via transfer bank atau e-wallet sesuai kesepakatan. Untuk pesanan tertentu bisa diminta DP, dan pelunasan dilakukan saat pesanan selesai atau sebelum pengantaran.",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className={styles.faqSection}
      aria-labelledby="faq-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* BOX KIRI – PERTANYAAN & JAWABAN (ACCORDION) */}
          <div className={styles.left}>
            <h2 id="faq-heading" className={styles.titleMobile}>
              Pertanyaan yang Sering Diajukan
            </h2>

            <div
              className={styles.accordion}
              role="list"
              aria-label="Daftar pertanyaan yang sering diajukan"
            >
              {faqList.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`${styles.item} ${isOpen ? styles.itemOpen : ""
                      }`}
                  >
                    <button
                      type="button"
                      className={styles.questionButton}
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <div className={styles.questionTextWrapper}>
                        <span className={styles.iconQuestion}>
                          <FontAwesomeIcon icon={faCircleQuestion} />
                        </span>
                        <span className={styles.questionText}>
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
                      id={`faq-panel-${index}`}
                      className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ""
                        }`}
                    >
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOX KANAN – HEADLINE & COPYWRITING MENARIK */}
          <aside className={styles.right}>
            <p className={styles.kicker}>Butuh Bantuan?</p>
            <h2 className={styles.title}>
              FAQ Seputar Pemesanan Roti Unyil
            </h2>
            <p className={styles.lead}>
              Masih bingung soal minimal order, cara pre-order, atau area
              pengantaran? Kami rangkum beberapa pertanyaan yang paling
              sering ditanyakan pelanggan di sini.
            </p>
            <p className={styles.text}>
              Kalau pertanyaanmu belum terjawab di FAQ ini, kamu bisa langsung
              chat kami via WhatsApp. Kami siap bantu jelaskan pilihan produk,
              rekomendasi paket, sampai estimasi budget untuk acara kamu.
            </p>

            <div className={styles.ctaBox}>
              <a
                href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20pemesanan%20roti%20unyil%20Alfarazka%20Bakery."
                className={styles.primaryButton}
              >
                Tanya lewat WhatsApp
              </a>
              <p className={styles.microcopy}>
                *Jawab cepat di jam operasional. Di luar jam tersebut, insyaAllah
                akan dibalas secepatnya.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;