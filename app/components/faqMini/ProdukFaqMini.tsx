//app/components/faqMini/ProdukFaqMini.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTruck,
  faBoxOpen,
  faMoneyBillWave,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProdukFaqMini.module.scss";
import FaqSchema, {
  type FaqItem as FaqSchemaItem,
} from "../faqSchema/FaqSchema";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

// FAQ untuk UI (pakai icon + id)
type FaqItemUI = {
  id: string;
  question: string;
  answer: string;
  icon: IconDefinition;
};

const FAQ_ITEMS: FaqItemUI[] = [
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

// Versi sederhana untuk JSON-LD (tanpa id & icon)
const FAQ_SCHEMA_ITEMS: FaqSchemaItem[] = FAQ_ITEMS.map((item) => ({
  question: item.question,
  answer: item.answer,
}));

const ProdukFaqMini: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(
    FAQ_ITEMS[0]?.id ?? null
  );
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );
  const [whatsappNumber, setWhatsappNumber] = useState(
    DEFAULT_SITE_SETTINGS.whatsappNumber
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();
        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
        setWhatsappNumber(
          data.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber
        );
      } catch (error) {
        console.error("Gagal memuat site settings di ProdukFaqMini:", error);
      }
    };

    loadSiteSettings();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya ingin tanya soal produk dan paket roti ${businessName}.`
    );
  }, [whatsappNumber, businessName]);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <section
        className={styles.section}
        aria-labelledby="produk-faq-heading"
      >
        <div className="container">
          <div className={styles.inner}>
            {/* BOX KIRI: COPYWRITING + CTA */}
            <div className={styles.infoPanel}>
              <p className={styles.kicker}>FAQ & Info Penting</p>
              <h2 id="produk-faq-heading" className={styles.title}>
                Masih Bingung Pilih Paket atau Jumlah Roti?
              </h2>
              <p className={styles.subtitle}>
                Tenang, kamu tidak perlu menghafal semua jenis paket dan varian
                roti. Cukup ceritakan kebutuhan acara, jumlah tamu, dan budget
                yang tersedia – insyaAllah kami bantu rekomendasikan kombinasi
                roti unyil, roti meises, dan pizza mini yang pas.
              </p>
              <p className={styles.bodyText}>
                Mulai dari pengajian kecil di rumah sampai rapat kantor,{" "}
                {businessName} siap jadi partner nyemil sehat dan hangat.
                Kalau masih ragu, tinggal klik tombol di bawah dan konsultasi
                via WhatsApp 😊
              </p>

              <div className={styles.ctaGroup}>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  <FontAwesomeIcon icon={faWhatsappSquare} />
                  <span>Konsultasi Paket via WhatsApp</span>
                </Link>
                <p className={styles.miniNote}>
                  *Tidak harus langsung pesan. Boleh tanya-tanya dulu, insyaAllah
                  kami jawab dengan senang hati.
                </p>
              </div>
            </div>

            {/* BOX KANAN: FAQ ACCORDION */}
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

      <FaqSchema items={FAQ_SCHEMA_ITEMS} />
    </>
  );
};

export default ProdukFaqMini;