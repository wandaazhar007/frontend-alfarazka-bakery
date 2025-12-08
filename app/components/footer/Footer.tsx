import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.brand}>
            © {new Date().getFullYear()} Alfarazka Bakery. All rights reserved.
          </p>
          <p className={styles.meta}>
            Build with ❤️ by <strong><Link href="https://wandaazhar.vercel.app/" target="_blank">Wanda Azhar</Link></strong> in Detroit, MI. USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;