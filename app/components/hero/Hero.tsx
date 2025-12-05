// app/components/hero/Hero.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>Roti Unyil Rumahan di Ciputat</p>
            <h1 className={styles.title}>
              Nyemil Sehat,
              <span> Teman Ngopi</span>
            </h1>
            <p className={styles.subtitle}>
              Alfarazka Bakery menghadirkan roti unyil lembut seribuan yang
              fresh setiap hari. Cocok untuk pengajian, arisan, ulang tahun,
              rapat kantor, sampai nyemil bareng keluarga.
            </p>

            <div className={styles.actions}>
              <a
                href="https://wa.me/6282194228282"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Pesan via WhatsApp</span>
              </a>

              <Link href="/produk" className="btn-outline">
                Lihat daftar produk
              </Link>
            </div>

            <ul className={styles.benefits}>
              <li>Mulai Rp1.000/pcs – ramah di kantong</li>
              <li>Pre-order H-1, roti selalu fresh</li>
              <li>Bisa mix varian untuk acara</li>
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.heroCard}>
              <p className={styles.heroCardTitle}>
                Cocok untuk snack acara:
              </p>
              <ul>
                <li>Pengajian &amp; arisan RT</li>
                <li>Ulang tahun anak</li>
                <li>Rapat kantor &amp; komunitas</li>
              </ul>
              <p className={styles.heroCardNote}>
                Tinggal kirim jadwal &amp; jumlahnya, kami bantu hitungkan
                kebutuhannya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;