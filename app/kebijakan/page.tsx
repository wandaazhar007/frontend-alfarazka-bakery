import type { Metadata } from "next";
import Image from "next/image";
import styles from "./Kebijakan.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan & Ketentuan Layanan — Alfarazka Bakery Ciputat",
  description:
    "Kebijakan dan ketentuan pemesanan roti unyil, roti meises, pizza mini, dan paket snack box Alfarazka Bakery di Ciputat. Dibuat agar proses pemesanan lebih jelas, nyaman, dan saling menguntungkan.",
  keywords: [
    "kebijakan alfarazka bakery",
    "syarat dan ketentuan roti unyil",
    "aturan pre order roti",
    "kebijakan snack box pengajian",
    "Alfarazka Bakery Ciputat",
  ],
  alternates: {
    canonical: "/kebijakan",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfarazkabakery.com/kebijakan",
    siteName: "Alfarazka Bakery",
    title: "Kebijakan & Ketentuan Layanan — Alfarazka Bakery",
    description:
      "Baca kebijakan pemesanan, pembayaran, pengiriman, dan privasi data di Alfarazka Bakery. Kami ingin proses pemesanan roti unyil dan snack box terasa aman dan nyaman.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kebijakan & Ketentuan — Alfarazka Bakery",
    description:
      "Ringkasan kebijakan dan ketentuan pemesanan roti unyil dan snack box di Alfarazka Bakery Ciputat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const KebijakanPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        {/* LOGO + JUDUL */}
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo-alfarazka-bakery.png"
              alt="Logo Alfarazka Bakery"
              width={80}
              height={80}
              className={styles.logo}
            />
          </div>
          <p className={styles.kicker}>Kebijakan & Ketentuan</p>
          <h1 className={styles.title}>Kebijakan & Ketentuan Layanan Alfarazka Bakery</h1>
          <p className={styles.subtitle}>
            Halaman ini dibuat agar proses pemesanan roti unyil &amp; snack box
            di Alfarazka Bakery terasa lebih jelas, nyaman, dan insyaAllah membawa
            keberkahan untuk kedua belah pihak.
          </p>
          <p className={styles.updated}>
            Terakhir diperbarui: Januari 2025 — berlaku untuk semua pemesanan
            melalui WhatsApp, Instagram, dan saluran resmi Alfarazka Bakery.
          </p>
        </header>

        {/* SECTIONS */}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Umum</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Alfarazka Bakery adalah usaha roti rumahan yang berlokasi di
              Cimanggis, Ciputat, Tangerang Selatan dan melayani pemesanan
              roti unyil, roti meises, pizza mini, dan snack untuk berbagai acara.
            </li>
            <li className={styles.listItem}>
              Dengan melakukan pemesanan, pelanggan dianggap telah membaca
              dan menyetujui kebijakan &amp; ketentuan yang tertulis di halaman ini.
            </li>
            <li className={styles.listItem}>
              Komunikasi resmi dilakukan melalui{" "}
              <strong>WhatsApp 0851&nbsp;7975&nbsp;3356</strong> dan Instagram{" "}
              <strong>@alfarazkabakery</strong>.
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
              Untuk pemesanan dalam jumlah besar (ratusan pcs / beberapa box besar),
              mohon pesan beberapa hari lebih awal agar jadwal produksi bisa
              kami atur dengan baik.
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
              <strong>DP (uang muka) dapat diberlakukan</strong>. Besaran DP akan
              diinformasikan saat konfirmasi pesanan.
            </li>
            <li className={styles.listItem}>
              Pelunasan dilakukan maksimal saat produk diterima atau sesuai
              kesepakatan di awal.
            </li>
            <li className={styles.listItem}>
              Metode pembayaran yang tersedia:
              <ul className={styles.subList}>
                <li>Transfer bank atau e-wallet (detail akan dikirim via WhatsApp)</li>
                <li>Tunai saat pengambilan / serah terima (untuk area tertentu)</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Perubahan &amp; Pembatalan Pesanan</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Perubahan jumlah atau varian pesanan sebaiknya disampaikan{" "}
              minimal <strong>H-1</strong>, dan akan disesuaikan dengan ketersediaan
              bahan dan jadwal produksi.
            </li>
            <li className={styles.listItem}>
              Pembatalan pesanan secara mendadak (terutama untuk pesanan besar)
              dapat menyebabkan <strong>DP hangus</strong>, terutama jika produksi
              sudah berjalan.
            </li>
            <li className={styles.listItem}>
              Kami berusaha fleksibel dan memahami kondisi pelanggan, insyaAllah
              akan dicari solusi terbaik secara musyawarah.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Pengantaran, Titik Temu &amp; Penyimpanan</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Area layanan utama mencakup Ciputat dan sekitarnya, seperti
              Pamulang, UIN, Gintung, Legoso, BSD, Cilandak dan area lain
              yang masih terjangkau.
            </li>
            <li className={styles.listItem}>
              Skema pengantaran dapat berupa:
              <ul className={styles.subList}>
                <li>Diantar langsung oleh tim Alfarazka Bakery (ongkir menyesuaikan jarak)</li>
                <li>Titik temu yang disepakati bersama (misalnya dekat jalan raya / landmark)</li>
                <li>Diambil langsung ke lokasi produksi di Ciputat</li>
              </ul>
            </li>
            <li className={styles.listItem}>
              Setelah roti diterima, <strong>penyimpanan menjadi tanggung jawab pelanggan</strong>.
              Sebaiknya roti disimpan di tempat sejuk, kering, dan tertutup rapat.
            </li>
            <li className={styles.listItem}>
              Roti unyil dan produk sejenis idealnya dikonsumsi di hari yang sama
              untuk menjaga rasa &amp; tekstur terbaik.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Kualitas Produk &amp; Alergi</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Semua produk dibuat <strong>fresh by order</strong> menggunakan bahan
              yang kami pilih dengan hati-hati.
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
              Jika pelanggan memiliki alergi tertentu (misalnya telur, susu, atau
              gluten), mohon <strong>info di awal</strong> agar kami bisa memberi
              saran varian yang lebih aman atau opsi lain.
            </li>
            <li className={styles.listItem}>
              Bila terdapat komplain terkait kualitas produk, mohon kirim foto
              dan penjelasan via WhatsApp maksimal <strong>3 jam setelah produk diterima</strong>,
              sehingga kami bisa melakukan evaluasi dan memberikan solusi terbaik.
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
                <li>Menginformasikan promo atau menu baru (sesekali, tidak spam)</li>
              </ul>
            </li>
            <li className={styles.listItem}>
              Kami tidak menjual atau membagikan data pelanggan ke pihak lain
              di luar kebutuhan pengiriman (misalnya driver / kurir).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Penggunaan Foto &amp; Testimoni</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Alfarazka Bakery sesekali membagikan foto produk, hampers,
              dan setup snack acara ke media sosial sebagai dokumentasi dan
              inspirasi pelanggan lain.
            </li>
            <li className={styles.listItem}>
              Foto yang menampilkan wajah tamu atau keluarga akan diusahakan
              seminimal mungkin, kecuali ada izin dari pemilik acara.
            </li>
            <li className={styles.listItem}>
              Testimoni yang dikirim pelanggan (chat WhatsApp / DM) boleh kami
              tampilkan di media sosial atau website, biasanya dengan nama yang
              disingkat (misal: Bu L, Ibu A di Ciputat).
            </li>
            <li className={styles.listItem}>
              Jika ada pelanggan yang <strong>tidak berkenan</strong> fotonya diunggah,
              silakan sampaikan kepada kami, insyaAllah akan kami hormati.
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
              <strong>/kebijakan</strong> pada website Alfarazka Bakery.
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
              WhatsApp: <strong>0851&nbsp;7975&nbsp;3356</strong>
            </li>
            <li className={styles.listItem}>
              Instagram:{" "}
              <strong>
                <Link
                  href="https://www.instagram.com/alfarazkabakery"
                  target="_blank"
                  rel="noreferrer"
                >
                  @alfarazkabakery
                </Link>
              </strong>
            </li>
          </ul>
          <p className={styles.note}>
            Kami berharap semua transaksi berjalan dengan jujur, saling percaya,
            dan membawa keberkahan. Terima kasih sudah mempercayakan momen
            spesial bersama Alfarazka Bakery. 🤍
          </p>
        </section>
      </div>
    </main>
  );
};

export default KebijakanPage;