// app/components/storySection/StorySection.tsx
import Image from "next/image";
import styles from "./StorySection.module.scss";

import roti1 from "../../../public/images/roti-unyil-1.jpg";
import roti2 from "../../../public/images/roti-unyil-2.jpg";
import roti3 from "../../../public/images/roti-unyil-3.jpg";
import roti4 from "../../../public/images/roti-unyil-4.jpg";

const StorySection: React.FC = () => {
  return (
    <section
      className={styles.storySection}
      aria-labelledby="story-heading"
    >
      <div className={styles.storyInner}>
        {/* KIRI – FOTO-FOTO */}
        <div className={styles.photoColumn}>
          <div className={styles.photoGrid}>
            <figure className={styles.photoItem}>
              <Image
                src={roti1}
                alt="Roti unyil aneka topping dari Alfarazka Bakery"
                className={styles.photoImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
            <figure className={styles.photoItem}>
              <Image
                src={roti2}
                alt="Roti unyil lembut siap dikemas untuk acara"
                className={styles.photoImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
            <figure className={styles.photoItem}>
              <Image
                src={roti3}
                alt="Roti unyil manis dan gurih di nampan saji"
                className={styles.photoImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
            <figure className={styles.photoItem}>
              <Image
                src={roti4}
                alt="Box berisi roti unyil untuk snack acara"
                className={styles.photoImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
          </div>
        </div>

        {/* KANAN – CERITA */}
        <div className={styles.textColumn}>
          <p className={styles.kicker}>Cerita Alfarazka Bakery</p>
          <h2 id="story-heading" className={styles.title}>
            Dari Hobi Panggang Roti, Menjadi Teman Andalan Setiap Acara
          </h2>

          <p className={styles.paragraph}>
            Alfarazka Bakery berawal dari hobi sederhana memanggang roti
            untuk keluarga di rumah. Setiap akhir pekan, dapur kecil di
            Ciputat selalu ramai dengan aroma roti unyil yang baru keluar
            dari oven, dan pelan-pelan tetangga mulai ikut memesan untuk
            pengajian dan arisan.
          </p>

          <p className={styles.paragraph}>
            Melihat banyak yang cocok dengan rasa dan teksturnya, pada{" "}
            <strong>7 Juli 2024</strong> usaha ini resmi diberi nama{" "}
            <strong><em>Alfarazka Bakery</em></strong>. Sejak itu, kami fokus
            mengerjakan pesanan roti unyil seribuan, roti meises, dan
            pizza mini untuk berbagai kebutuhan – dari bekal sekolah,
            snack box kantor, sampai hampers sederhana.
          </p>

          <p className={styles.paragraph}>
            Walaupun kami adalah UMKM rumahan, cara kerja kami dibuat
            serapi mungkin: jadwal produksi jelas, pemesanan tercatat,
            dan roti selalu dibuat <strong><em>fresh by order</em></strong>. Harapannya,
            setiap box roti yang kamu terima terasa seperti buatan dapur
            sendiri – hangat, bersih, dan penuh perhatian.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;