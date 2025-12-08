"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMosque,
  faMugHot,
  faCakeCandles,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SnackPackagesSection.module.scss";

type SnackPackage = {
  id: string;
  name: string;
  icon: any;
  highlight: string;
  priceStart: string;
  suitableFor: string;
  items: string[];
};

const PACKAGES: SnackPackage[] = [
  {
    id: "pengajian-arisan",
    name: "Paket Pengajian & Arisan",
    icon: faMosque,
    highlight: "Cocok untuk pengajian rutin, arisan RT, dan kajian kecil.",
    priceStart: "Mulai ± Rp100.000",
    suitableFor: "Ideal untuk 25–40 orang (tergantung kombinasi roti).",
    items: [
      "Roti unyil @1.000 & @2.000 (campur manis & gurih)",
      "Bisa mix 3–5 varian rasa",
      "Opsional: tambahan pizza mini untuk tamu khusus",
    ],
  },
  {
    id: "ulang-tahun-anak",
    name: "Paket Ulang Tahun Anak",
    icon: faCakeCandles,
    highlight: "Bikin pesta ulang tahun lebih meriah & praktis.",
    priceStart: "Mulai ± Rp150.000",
    suitableFor: "Cocok untuk 30–50 snack box.",
    items: [
      "Roti unyil isi cokelat, keju, dan sosis",
      "Bisa request roti favorit anak",
      "Pas untuk dibagikan ke teman-teman sekolah / tetangga",
    ],
  },
  {
    id: "rapat-kantor",
    name: "Paket Rapat Kantor",
    icon: faBriefcase,
    highlight: "Snack simpel tapi berkesan untuk tamu & rekan kerja.",
    priceStart: "Mulai ± Rp200.000",
    suitableFor: "Rekomendasi 40–60 pax.",
    items: [
      "Campuran roti unyil manis & gurih",
      "Tambahan roti meises & pizza mini",
      "Bisa dibagi per box atau satu nampan besar",
    ],
  },
  {
    id: "teman-ngopi",
    name: "Paket Teman Ngopi Keluarga",
    icon: faMugHot,
    highlight: "Pas untuk quality time santai di rumah.",
    priceStart: "Mulai ± Rp50.000",
    suitableFor: "Cocok untuk 10–15 orang.",
    items: [
      "Pilihan roti unyil lembut untuk semua usia",
      "Bisa mix isi manis, gurih, dan keju",
      "Cocok untuk weekend, kumpul keluarga, atau takjil",
    ],
  },
];

const SnackPackagesSection: React.FC = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="snack-packages-heading"
    >
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>Paket Snack Acara</p>
          <h2 id="snack-packages-heading" className={styles.title}>
            Paket Roti Unyil untuk Berbagai Acara
          </h2>
          <p className={styles.subtitle}>
            Mau pengajian, arisan, ulang tahun anak, atau rapat kantor? Alfarazka
            Bakery siap bantu siapkan snack yang praktis, hemat, dan tetap
            terasa hangat. Tinggal pilih paket yang paling cocok, atau konsultasi
            dulu sesuai kebutuhan.
          </p>
        </header>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <article key={pkg.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={pkg.icon} />
              </div>

              <h3 className={styles.cardTitle}>{pkg.name}</h3>
              <p className={styles.cardHighlight}>{pkg.highlight}</p>

              <p className={styles.cardPrice}>{pkg.priceStart}</p>
              <p className={styles.cardSuitable}>{pkg.suitableFor}</p>

              <ul className={styles.cardList}>
                {pkg.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <a
                  href="https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20ingin%20konsultasi%20paket%20snack%20acara%20Alfarazka%20Bakery."
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cardButton}
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          🔁 Semua paket bisa dimodifikasi: jumlah, varian roti, dan sistem
          pengambilan/pengantaran bisa disesuaikan dengan kebutuhan acara
          kamu. Cukup chat kami dan ceritakan rencananya.
        </p>
      </div>
    </section>
  );
};

export default SnackPackagesSection;