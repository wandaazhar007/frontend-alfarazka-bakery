// //app/components/testimonials/TestimonialsSection.tsx
"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./TestimonialsSection.module.scss";
import {
  fetchPublicSiteSettings,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Rotinya lembut dan nggak bikin eneg. Jamaah pengajian suka banget, banyak yang tanya pesan di mana.",
    name: "Bu Lina",
    context: "Pengajian RT Cimanggis",
  },
  {
    quote:
      "Buat ulang tahun anak, roti unyilnya langsung habis duluan. Anak-anak senang karena variannya banyak.",
    name: "Mbak Rani",
    context: "Ulang Tahun Anak",
  },
  {
    quote:
      "Pesan untuk rapat kantor, datang tepat waktu dan roti masih hangat. Harga juga bersahabat.",
    name: "Pak Adi",
    context: "Rapat Kantor di Ciputat",
  },
  {
    quote:
      "Saya sering pesan untuk arisan bulanan. Praktis, tinggal WA, dan rasanya selalu konsisten.",
    name: "Bu Sari",
    context: "Arisan Ibu-Ibu",
  },
  {
    quote:
      "Cocok banget untuk bekal sekolah anak. Porsinya pas sekali lahap, jadi nggak mubazir.",
    name: "Bu Mira",
    context: "Bekal Anak Sekolah",
  },
];

const TestimonialsSection: React.FC = () => {
  const [businessName, setBusinessName] = useState(
    DEFAULT_SITE_SETTINGS.businessName
  );

  useEffect(() => {
    const loadSiteSettings = async () => {
      try {
        const data = await fetchPublicSiteSettings();
        setBusinessName(data.businessName || DEFAULT_SITE_SETTINGS.businessName);
      } catch (error) {
        console.error(
          "Gagal memuat site settings di TestimonialsSection:",
          error
        );
      }
    };

    loadSiteSettings();
  }, []);

  const sliderItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimoni"
      className={styles.testimonialsSection}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Testimoni Pelanggan</p>
          <h2 id="testimonials-heading" className={styles.title}>
            Cerita Manis dari Pelanggan {businessName}
          </h2>
          <p className={styles.subtitle}>
            Banyak keluarga, komunitas, dan kantor yang sudah mempercayakan
            snack acaranya ke {businessName}. Berikut beberapa cerita singkat
            dari mereka.
          </p>
        </header>

        <div className={styles.slider} aria-label="Slider testimoni pelanggan">
          <div className={styles.sliderInner}>
            {sliderItems.map((item, index) => (
              <figure key={index} className={styles.card}>
                <div className={styles.quoteIcon}>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <blockquote className={styles.quote}>“{item.quote}”</blockquote>
                <figcaption className={styles.caption}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.context}>{item.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.microcopy}>
            *Testimoni di atas adalah contoh gambaran kepuasan pelanggan.
            Testimoni asli dapat terus bertambah seiring banyaknya acara yang
            ditangani {businessName}.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;