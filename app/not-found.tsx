import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFoundPage() {
  return (
    <main className={styles.wrapper}>
      <div className="container">
        <div className={styles.card}>
          <p className={styles.kicker}>Halaman tidak ditemukan</p>
          <h1 className={styles.title}>404 — Ups, alamatnya nggak ketemu</h1>

          <p className={styles.message}>
            Sepertinya kamu mengetik alamat yang salah, atau halaman ini sudah
            tidak tersedia. Tenang, kamu bisa kembali ke beranda dan lanjut
            jelajahi roti unyil Alfarazka Bakery. 🍞
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryButton}>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}