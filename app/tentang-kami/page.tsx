// app/tentang-kami/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import styles from "./AboutPage.module.scss";
import tokoAlfarazka from "../../public/images/toko-alfarazka-bakery.png";
import StorySection from "../components/storySection/StorySection";
import TimelineSection from "../components/timelineSection/TimelineSection";

export const metadata: Metadata = {
  title:
    "Tentang Kami – Alfarazka Bakery | Roti Unyil Rumahan di Ciputat, Tangerang Selatan",
  description:
    "Alfarazka Bakery adalah usaha roti unyil rumahan di Ciputat yang berdiri sejak 7 Juli 2024. Menghadirkan roti unyil seribuan, roti meises, dan pizza mini yang fresh, higienis, dan ramah di kantong untuk keluarga dan acara.",
  keywords: [
    "Alfarazka Bakery",
    "roti unyil Ciputat",
    "roti seribuan Tangerang Selatan",
    "roti rumahan halal",
    "snack pengajian Ciputat",
  ],
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* HERO TENTANG KAMI */}
      <section
        className={styles.hero}
        aria-labelledby="about-hero-heading"
      >
        <div className={styles.heroInner}>
          {/* TEKS KIRI */}
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Tentang Alfarazka Bakery</p>

            <h1 id="about-hero-heading" className={styles.title}>
              Dari Dapur Rumahan di Ciputat,
              <span> Untuk Teman Ngopi Keluarga</span>
            </h1>

            <p className={styles.lead}>
              Alfarazka Bakery berdiri pada 7 Juli 2024, berawal dari hobi
              membuat roti rumahan yang lembut dan manis untuk keluarga dan
              tetangga sekitar. Dari dapur kecil di Cimanggis, Ciputat, kami
              mulai menerima pesanan roti unyil seribuan untuk pengajian, arisan,
              dan ulang tahun anak.
            </p>

            <p className={styles.text}>
              Kami percaya, roti yang sederhana sekalipun bisa menjadi sumber
              kebahagiaan kecil di tengah kesibukan. Karena itu, setiap loyang
              roti yang keluar dari oven kami dibuat dengan bahan yang baik,
              proses yang higienis, dan rasa yang konsisten.
            </p>

            <p className={styles.text}>
              Walaupun masih berbentuk UMKM rumahan, pengelolaan pesanan di
              Alfarazka Bakery diusahakan rapi: mulai dari pencatatan order,
              jadwal produksi, hingga komunikasi ramah melalui WhatsApp dan
              media sosial.
            </p>

            <ul className={styles.valuesList}>
              <li>
                <span className={styles.dot} />
                <span>
                  <strong>Hangat & rumahan</strong> – rasa dan pelayanan yang
                  akrab seperti keluarga sendiri.
                </span>
              </li>
              <li>
                <span className={styles.dot} />
                <span>
                  <strong>Fresh setiap hari</strong> – dibuat berdasarkan
                  pesanan, bukan stok lama.
                </span>
              </li>
              <li>
                <span className={styles.dot} />
                <span>
                  <strong>Ramah di kantong</strong> – mulai Rp1.000/pcs untuk
                  mengisi snack box acara.
                </span>
              </li>
            </ul>
          </div>

          {/* GAMBAR KANAN */}
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageInner}>
              <Image
                src={tokoAlfarazka}
                alt="Toko dan dapur produksi Alfarazka Bakery di Ciputat, Tangerang Selatan."
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <StorySection />
      <TimelineSection />
    </main>
  );
}