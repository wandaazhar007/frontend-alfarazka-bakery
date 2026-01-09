"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import styles from "./RotiUnyilCiputatPage.module.scss";

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
  // ...lanjutan FAQ lain...
];

const whatsappLink =
  "https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20mau%20pesan%20roti%20unyil%20Alfarazka%20Bakery%20untuk%20Ciputat.";

export default function RotiUnyilFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section
      className={`section ${styles.faqSection}`}
      aria-labelledby="roti-unyil-faq-heading"
    >
      <div className="container">
        <div className={styles.faqInner}>
          {/* LEFT COPY – bisa copas dari versi sebelumnya */}
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
                <span>Area utama Ciputat & sekitarnya, pengantaran sesuai kesepakatan.</span>
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

          {/* RIGHT FAQ LIST – sekarang accordion */}
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
                    {isOpen && (
                      <dd className={styles.faqAnswer}>
                        {item.answer}
                      </dd>
                    )}
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