// app/kebijakan/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./Kebijakan.module.scss";
import {
  fetchPublicSiteSettings,
  DEFAULT_SITE_SETTINGS,
} from "../services/siteSettingsService";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://alfarazkabakery.com";

const pagePath = "/kebijakan";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;

  const title = `Kebijakan & Ketentuan Layanan — ${businessName} Ciputat`;
  const description =
    `Kebijakan dan ketentuan pemesanan roti unyil, roti meises, pizza mini, dan paket snack box ${businessName} di Ciputat. Dibuat agar proses pemesanan lebih jelas, nyaman, dan saling menguntungkan.`;

  return {
    title,
    description,
    keywords: [
      `kebijakan ${businessName.toLowerCase()}`,
      "syarat dan ketentuan roti unyil",
      "aturan pre order roti",
      "kebijakan snack box pengajian",
      `${businessName} Ciputat`,
    ],
    alternates: {
      canonical: pagePath,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${siteUrl}${pagePath}`,
      siteName: businessName,
      title: `Kebijakan & Ketentuan Layanan — ${businessName}`,
      description:
        `Baca kebijakan pemesanan, pembayaran, pengiriman, dan privasi data di ${businessName}. Kami ingin proses pemesanan roti unyil dan snack box terasa aman dan nyaman.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Kebijakan & Ketentuan — ${businessName}`,
      description:
        `Ringkasan kebijakan dan ketentuan pemesanan roti unyil dan snack box di ${businessName} Ciputat.`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const KebijakanPage = async () => {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;
  const phoneNumberDisplay =
    settings.phoneNumberDisplay || DEFAULT_SITE_SETTINGS.phoneNumberDisplay;
  const instagramUrl =
    settings.instagramUrl || DEFAULT_SITE_SETTINGS.instagramUrl;
  const mapsUrl = settings.mapsUrl || DEFAULT_SITE_SETTINGS.mapsUrl;
  const addressLabel =
    settings.addressLabel || DEFAULT_SITE_SETTINGS.addressLabel;
  const serviceAreaText =
    settings.serviceAreaText || DEFAULT_SITE_SETTINGS.serviceAreaText;
  const email = settings.email || DEFAULT_SITE_SETTINGS.email;

  const instagramHandle = instagramUrl.includes("instagram.com/")
    ? `@${instagramUrl.split("instagram.com/")[1].replaceAll("/", "")}`
    : "Instagram resmi";

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo-alfarazka-bakery.png"
              alt={`Logo ${businessName}`}
              width={80}
              height={80}
              className={styles.logo}
            />
          </div>
          <p className={styles.kicker}>Kebijakan & Ketentuan</p>
          <h1 className={styles.title}>
            Kebijakan & Ketentuan Layanan {businessName}
          </h1>
          <p className={styles.subtitle}>
            Halaman ini dibuat agar proses pemesanan roti unyil &amp; snack box
            di {businessName} terasa lebih jelas, nyaman, dan insyaAllah
            membawa keberkahan untuk kedua belah pihak.
          </p>
          <p className={styles.updated}>
            Terakhir diperbarui: Januari 2025 — berlaku untuk semua pemesanan
            melalui WhatsApp, Instagram, dan saluran resmi {businessName}.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Umum</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              {businessName} adalah usaha roti rumahan yang berlokasi di{" "}
              {addressLabel} dan melayani pemesanan roti unyil, roti meises,
              pizza mini, dan snack untuk berbagai acara.
            </li>
            <li className={styles.listItem}>
              Dengan melakukan pemesanan, pelanggan dianggap telah membaca
              dan menyetujui kebijakan &amp; ketentuan yang tertulis di halaman
              ini.
            </li>
            <li className={styles.listItem}>
              Komunikasi resmi dilakukan melalui{" "}
              <strong>WhatsApp {phoneNumberDisplay}</strong> dan Instagram{" "}
              <strong>{instagramHandle}</strong>.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Pemesanan &amp; Pre-Order</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Pemesanan utama dilakukan dengan sistem <strong>pre-order</strong>.
            </li>
            <li className={styles.listItem}>
              Untuk pemesanan normal (jumlah standar),{" "}
              <strong>disarankan pesan minimal H-1</strong> sebelum acara.
            </li>
            <li className={styles.listItem}>
              Untuk pemesanan dalam jumlah besar (ratusan pcs / beberapa box
              besar), mohon pesan beberapa hari lebih awal agar jadwal produksi
              bisa kami atur dengan baik.
            </li>
            <li className={styles.listItem}>
              Detail pemesanan yang perlu dikonfirmasi:
              <ul className={styles.subList}>
                <li>Tanggal &amp; jam acara / pengambilan</li>
                <li>Jumlah pesanan (pcs atau paket)</li>
                <li>Varian roti yang diinginkan</li>
                <li>Alamat pengantaran atau titik temu</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Harga, DP &amp; Pembayaran</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Harga yang tercantum di katalog dan media sosial sudah termasuk
              kemasan standar. Harga dapat berubah sewaktu-waktu menyesuaikan
              bahan baku, namun akan selalu diinformasikan saat pemesanan.
            </li>
            <li className={styles.listItem}>
              Untuk pesanan jumlah besar atau paket acara,{" "}
              <strong>DP (uang muka) dapat diberlakukan</strong>. Besaran DP
              akan diinformasikan saat konfirmasi pesanan.
            </li>
            <li className={styles.listItem}>
              Pelunasan dilakukan maksimal saat produk diterima atau sesuai
              kesepakatan di awal.
            </li>
            <li className={styles.listItem}>
              Metode pembayaran yang tersedia:
              <ul className={styles.subList}>
                <li>
                  Transfer bank atau e-wallet (detail akan dikirim via WhatsApp)
                </li>
                <li>
                  Tunai saat pengambilan / serah terima (untuk area tertentu)
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            4. Perubahan &amp; Pembatalan Pesanan
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Perubahan jumlah atau varian pesanan sebaiknya disampaikan{" "}
              minimal <strong>H-1</strong>, dan akan disesuaikan dengan
              ketersediaan bahan dan jadwal produksi.
            </li>
            <li className={styles.listItem}>
              Pembatalan pesanan secara mendadak (terutama untuk pesanan besar)
              dapat menyebabkan <strong>DP hangus</strong>, terutama jika
              produksi sudah berjalan.
            </li>
            <li className={styles.listItem}>
              Kami berusaha fleksibel dan memahami kondisi pelanggan,
              insyaAllah akan dicari solusi terbaik secara musyawarah.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            5. Pengantaran, Titik Temu &amp; Penyimpanan
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Area layanan utama mencakup: {serviceAreaText}
            </li>
            <li className={styles.listItem}>
              Skema pengantaran dapat berupa:
              <ul className={styles.subList}>
                <li>
                  Diantar langsung oleh tim {businessName} (ongkir menyesuaikan
                  jarak)
                </li>
                <li>
                  Titik temu yang disepakati bersama (misalnya dekat jalan raya
                  / landmark)
                </li>
                <li>
                  Diambil langsung ke lokasi produksi / titik yang disepakati
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              Setelah roti diterima,{" "}
              <strong>penyimpanan menjadi tanggung jawab pelanggan</strong>.
              Sebaiknya roti disimpan di tempat sejuk, kering, dan tertutup
              rapat.
            </li>
            <li className={styles.listItem}>
              Roti unyil dan produk sejenis idealnya dikonsumsi di hari yang
              sama untuk menjaga rasa &amp; tekstur terbaik.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Kualitas Produk &amp; Alergi</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Semua produk dibuat <strong>fresh by order</strong> menggunakan
              bahan yang kami pilih dengan hati-hati.
            </li>
            <li className={styles.listItem}>
              Produk kami umumnya menggunakan bahan:
              <ul className={styles.subList}>
                <li>Tepung terigu</li>
                <li>Telur &amp; susu</li>
                <li>Margarin / butter</li>
                <li>Gula, cokelat, keju, dan bahan pelengkap lainnya</li>
              </ul>
            </li>
            <li className={styles.listItem}>
              Jika pelanggan memiliki alergi tertentu (misalnya telur, susu,
              atau gluten), mohon <strong>info di awal</strong> agar kami bisa
              memberi saran varian yang lebih aman atau opsi lain.
            </li>
            <li className={styles.listItem}>
              Bila terdapat komplain terkait kualitas produk, mohon kirim foto
              dan penjelasan via WhatsApp maksimal{" "}
              <strong>3 jam setelah produk diterima</strong>, sehingga kami
              bisa melakukan evaluasi dan memberikan solusi terbaik.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Privasi Data &amp; Komunikasi</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Data yang kami kumpulkan dari pelanggan biasanya berupa:
              <ul className={styles.subList}>
                <li>Nama dan nomor WhatsApp</li>
                <li>Alamat pengantaran / titik temu</li>
                <li>Detail pesanan dan catatan khusus acara</li>
              </ul>
            </li>
            <li className={styles.listItem}>
              Data ini hanya digunakan untuk keperluan:
              <ul className={styles.subList}>
                <li>Memproses pesanan &amp; pengantaran</li>
                <li>Mengonfirmasi pembayaran &amp; status pesanan</li>
                <li>
                  Menginformasikan promo atau menu baru (sesekali, tidak spam)
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              Kami tidak menjual atau membagikan data pelanggan ke pihak lain
              di luar kebutuhan pengiriman (misalnya driver / kurir).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            8. Penggunaan Foto &amp; Testimoni
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              {businessName} sesekali membagikan foto produk, hampers, dan
              setup snack acara ke media sosial sebagai dokumentasi dan
              inspirasi pelanggan lain.
            </li>
            <li className={styles.listItem}>
              Foto yang menampilkan wajah tamu atau keluarga akan diusahakan
              seminimal mungkin, kecuali ada izin dari pemilik acara.
            </li>
            <li className={styles.listItem}>
              Testimoni yang dikirim pelanggan (chat WhatsApp / DM) boleh kami
              tampilkan di media sosial atau website, biasanya dengan nama yang
              disingkat.
            </li>
            <li className={styles.listItem}>
              Jika ada pelanggan yang <strong>tidak berkenan</strong> fotonya
              diunggah, silakan sampaikan kepada kami, insyaAllah akan kami
              hormati.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Perubahan Kebijakan</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Kebijakan &amp; ketentuan ini dapat diperbarui sewaktu-waktu
              menyesuaikan kondisi usaha dan kebutuhan pelanggan.
            </li>
            <li className={styles.listItem}>
              Versi terbaru selalu dapat dilihat di halaman{" "}
              <strong>/kebijakan</strong> pada website {businessName}.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Kontak &amp; Konsultasi</h2>
          <p className={styles.paragraph}>
            Jika ada pertanyaan terkait kebijakan ini, kebutuhan acara khusus,
            atau permintaan lain, silakan hubungi kami:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              WhatsApp: <strong>{phoneNumberDisplay}</strong>
            </li>
            <li className={styles.listItem}>
              Instagram:{" "}
              <strong>
                <Link href={instagramUrl} target="_blank" rel="noreferrer">
                  {instagramHandle}
                </Link>
              </strong>
            </li>
            {email ? (
              <li className={styles.listItem}>
                Email: <strong>{email}</strong>
              </li>
            ) : null}
            <li className={styles.listItem}>
              Maps:{" "}
              <strong>
                <Link href={mapsUrl} target="_blank" rel="noreferrer">
                  Lihat lokasi di Google Maps
                </Link>
              </strong>
            </li>
          </ul>
          <p className={styles.note}>
            Kami berharap semua transaksi berjalan dengan jujur, saling
            percaya, dan membawa keberkahan. Terima kasih sudah mempercayakan
            momen spesial bersama {businessName}. 🤍
          </p>
        </section>
      </div>
    </main>
  );
};

export default KebijakanPage;