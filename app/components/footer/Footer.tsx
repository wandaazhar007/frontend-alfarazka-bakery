// app/components/footer/Footer.tsx
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
            Dibuat dengan ❤️ di Ciputat – Nyemil sehat, teman ngopi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;