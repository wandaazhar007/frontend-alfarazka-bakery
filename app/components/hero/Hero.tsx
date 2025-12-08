// // app/components/hero/Hero.tsx
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// import styles from "./Hero.module.scss";

// const Hero: React.FC = () => {
//   return (
//     <section className={styles.hero}>
//       <div className="container">
//         <div className={styles.inner}>
//           {/* LEFT TEXT */}
//           <div className={styles.left}>
//             <p className={styles.eyebrow}>Roti Unyil Rumahan di Ciputat</p>
//             <h1 className={styles.title}>
//               Nyemil Sehat,
//               <span> Teman Ngopi</span>
//             </h1>
//             <p className={styles.subtitle}>
//               Alfarazka Bakery menghadirkan roti unyil lembut seribuan yang
//               fresh setiap hari. Cocok untuk pengajian, arisan, ulang tahun,
//               rapat kantor, sampai nyemil bareng keluarga.
//             </p>

//             <div className={styles.actions}>
//               <a
//                 href="https://wa.me/6282194228282"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn-primary"
//               >
//                 <FontAwesomeIcon icon={faWhatsapp} />
//                 <span>Pesan via WhatsApp</span>
//               </a>

//               <Link href="/produk" className="btn-outline">
//                 Lihat daftar produk
//               </Link>
//             </div>

//             <ul className={styles.benefits}>
//               <li>Mulai Rp1.000/pcs – ramah di kantong</li>
//               <li>Pre-order H-1, roti selalu fresh</li>
//               <li>Bisa mix varian untuk acara</li>
//             </ul>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className={styles.right}>
//             <div className={styles.imageWrapper}>
//               <Image
//                 src="/images/hero-banner-alfarazka-bakery.jpeg"
//                 alt="Roti unyil dan aneka roti Alfarazka Bakery"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 40vw"
//                 className={styles.heroImage}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


"use client";

import Image from "next/image";
import styles from "./Hero.module.scss";
// import heroBanner from "../../../public/images/hero-banner-alfarazka-bakery.jpeg";
import heroBanner from "../../../public/images/toko-alfarazka-bakery.png";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        {/* TEKS */}
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Roti Unyil Rumahan di Ciputat</p>

          <h1 id="hero-heading" className={styles.title}>
            Nyemil Sehat, <span>Teman Ngopi</span>
          </h1>

          <p className={styles.subtitle}>
            Alfarazka Bakery menghadirkan roti unyil lembut seribuan,
            roti meises, dan pizza mini yang freshly baked dari dapur
            rumahan di Ciputat. Cocok untuk pengajian, arisan, ulang
            tahun anak, rapat kantor, sampai bekal sekolah si kecil.
          </p>

          {/* BULLET POINT KEUNGGULAN */}
          <ul className={styles.benefits} aria-label="Keunggulan roti unyil Alfarazka Bakery">
            <li>
              <span className={styles.bulletTitle}>Mulai Rp1.000/pcs</span>
              <span className={styles.bulletText}> – ramah di kantong untuk isi snack box.</span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Bisa mix varian</span>
              <span className={styles.bulletText}> - untuk kebutuhan acara dan hampers.</span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Pre-order H-1</span>
              <span className={styles.bulletText}> - roti selalu fresh setiap hari</span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Cocok untuk acara</span>
              <span className={styles.bulletText}>
                - pengajian, arisan, ulang tahun, kantor.
              </span>
            </li>
          </ul>

          <div className={styles.heroActions}>
            <a
              href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20mau%20tanya%20pemesanan%20roti%20unyil%20Alfarazka%20Bakery."
              className={styles.primaryButton}
              aria-label="Pesan roti unyil Alfarazka Bakery melalui WhatsApp"
            >
              Pesan via WhatsApp
            </a>

            <a href="#produk" className={styles.secondaryLink}>
              Lihat katalog produk
            </a>
          </div>

          <p className={styles.microcopy}>
            *Disarankan pre-order minimal H-1. Untuk pesanan ratusan pcs,
            sebaiknya menghubungi beberapa hari sebelumnya.
          </p>
        </div>

        {/* GAMBAR */}
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageInner}>
            <Image
              src={heroBanner}
              alt="Roti unyil dan aneka roti rumahan dari Alfarazka Bakery di Ciputat."
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;