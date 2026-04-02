// //app/components/snackPackages/SnackPackagesSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMosque,
  faMugHot,
  faCakeCandles,
  faBriefcase,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SnackPackagesSection.module.scss";
import {
  fetchPublicSnackPackages,
  type SnackPackageApi,
} from "../../services/snackPackageService";
import {
  fetchPublicSiteSettings,
  buildWhatsAppUrl,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

type SnackPackageCard = {
  id: string;
  name: string;
  icon: IconDefinition;
  highlight: string;
  priceText: string;
  suitableFor: string;
  items: string[];
  detailHref?: string;
};

function pickDetailHrefFromName(nameRaw: string): string | undefined {
  const name = (nameRaw || "").toLowerCase();

  if (name.includes("pengajian")) return "/snack-box-pengajian-ciputat";
  if (name.includes("arisan")) return "/snack-box-arisan-ciputat";
  if (name.includes("ulang") && name.includes("tahun")) {
    return "/paket-snack-ulang-tahun-anak-ciputat";
  }
  if (name.includes("rapat") || name.includes("kantor")) {
    return "/paket-snack-rapat-kantor-ciputat";
  }
  if (name.includes("ngopi") || name.includes("keluarga")) {
    return "/roti-unyil-ciputat";
  }

  return undefined;
}

const FALLBACK_PACKAGES: SnackPackageCard[] = [
  {
    id: "pengajian-arisan",
    name: "Paket Pengajian & Arisan",
    icon: faMosque,
    highlight: "Cocok untuk pengajian rutin, arisan RT, dan kajian kecil.",
    priceText: "Mulai ± Rp100.000",
    suitableFor: "Ideal untuk 25–40 orang (tergantung kombinasi roti).",
    items: [
      "Roti unyil @1.000 & @2.000 (campur manis & gurih)",
      "Bisa mix 3–5 varian rasa",
      "Opsional: tambahan pizza mini untuk tamu khusus",
    ],
    detailHref: "/snack-box-pengajian-ciputat",
  },
  {
    id: "ulang-tahun-anak",
    name: "Paket Ulang Tahun Anak",
    icon: faCakeCandles,
    highlight: "Bikin pesta ulang tahun lebih meriah & praktis.",
    priceText: "Mulai ± Rp150.000",
    suitableFor: "Cocok untuk 30–50 snack box.",
    items: [
      "Roti unyil isi cokelat, keju, dan sosis",
      "Bisa request roti favorit anak",
      "Pas untuk dibagikan ke teman-teman sekolah / tetangga",
    ],
    detailHref: "/paket-snack-ulang-tahun-anak-ciputat",
  },
  {
    id: "rapat-kantor",
    name: "Paket Rapat Kantor",
    icon: faBriefcase,
    highlight: "Snack simpel tapi berkesan untuk tamu & rekan kerja.",
    priceText: "Mulai ± Rp200.000",
    suitableFor: "Rekomendasi 40–60 pax.",
    items: [
      "Campuran roti unyil manis & gurih",
      "Tambahan roti meises & pizza mini",
      "Bisa dibagi per box atau satu nampan besar",
    ],
    detailHref: "/paket-snack-rapat-kantor-ciputat",
  },
  {
    id: "teman-ngopi",
    name: "Paket Teman Ngopi Keluarga",
    icon: faMugHot,
    highlight: "Pas untuk quality time santai di rumah.",
    priceText: "Mulai ± Rp50.000",
    suitableFor: "Cocok untuk 10–15 orang.",
    items: [
      "Pilihan roti unyil lembut untuk semua usia",
      "Bisa mix isi manis, gurih, dan keju",
      "Cocok untuk weekend, kumpul keluarga, atau takjil",
    ],
    detailHref: "/roti-unyil-ciputat",
  },
];

function pickIcon(pkg: SnackPackageApi, index: number): IconDefinition {
  const name = (pkg.name || "").toLowerCase();

  if (name.includes("pengajian") || name.includes("arisan")) return faMosque;
  if (name.includes("ulang") || name.includes("ulang tahun")) return faCakeCandles;
  if (name.includes("rapat") || name.includes("kantor")) return faBriefcase;
  if (name.includes("ngopi") || name.includes("keluarga")) return faMugHot;

  const icons = [faMosque, faCakeCandles, faBriefcase, faMugHot];
  return icons[index % icons.length];
}

const SnackPackagesSection: React.FC = () => {
  const [packages, setPackages] = useState<SnackPackageCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

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
        console.error(
          "Gagal memuat site settings di SnackPackagesSection:",
          error
        );
      }
    };

    loadSiteSettings();
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const data = await fetchPublicSnackPackages();

        const mapped: SnackPackageCard[] = data
          .filter((pkg) => pkg.isActive)
          .map((pkg, index) => {
            const icon = pickIcon(pkg, index);
            const items = [pkg.point1, pkg.point2, pkg.point3].filter(
              Boolean
            ) as string[];

            return {
              id: pkg.id,
              name: pkg.name,
              icon,
              highlight: pkg.shortDescription,
              priceText: `Mulai ± Rp${pkg.price.toLocaleString("id-ID", {
                minimumFractionDigits: 0,
              })}`,
              suitableFor: pkg.fitFor || "",
              items,
              detailHref: pickDetailHrefFromName(pkg.name),
            };
          });

        setPackages(mapped);
      } catch (err) {
        console.error("Gagal memuat paket snack:", err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  const whatsappLink = useMemo(() => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Assalamualaikum, saya ingin konsultasi paket snack acara ${businessName}.`
    );
  }, [whatsappNumber, businessName]);

  const dataToRender: SnackPackageCard[] =
    !hasError && packages.length > 0 ? packages : FALLBACK_PACKAGES;

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
            Mau pengajian, arisan, ulang tahun anak, atau rapat kantor?
            {` ${businessName} `}siap bantu siapkan snack yang praktis, hemat,
            dan tetap terasa hangat. Tinggal pilih paket yang paling cocok,
            atau konsultasi dulu sesuai kebutuhan.
          </p>
        </header>

        {isLoading && !hasError && packages.length === 0 && (
          <p className={styles.loadingText}>Memuat paket snack...</p>
        )}

        <div className={styles.grid}>
          {dataToRender.map((pkg) => (
            <article key={pkg.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={pkg.icon} />
              </div>

              <h3 className={styles.cardTitle}>{pkg.name}</h3>
              <p className={styles.cardHighlight}>{pkg.highlight}</p>

              <p className={styles.cardPrice}>{pkg.priceText}</p>
              <p className={styles.cardSuitable}>{pkg.suitableFor}</p>

              <ul className={styles.cardList}>
                {pkg.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cardButton}
                >
                  Konsultasi via WhatsApp
                </a>

                {pkg.detailHref && (
                  <Link
                    href={pkg.detailHref}
                    className={styles.cardSecondaryLink}
                  >
                    Lihat detail paket
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {hasError && (
          <p className={styles.errorText}>
            Terjadi kendala saat memuat paket snack dari server. Saat ini
            yang tampil adalah contoh paket default.
          </p>
        )}

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