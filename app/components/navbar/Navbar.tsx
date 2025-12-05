// app/components/navbar/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import styles from "./Navbar.module.scss";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/produk", label: "Produk & Paket" },
  { href: "/cara-pemesanan", label: "Cara Pemesanan" },
  // { href: "/testimoni", label: "Testimoni" },
  // { href: "/area-layanan", label: "Area Layanan" },
  // { href: "/hubungi-kami", label: "Hubungi Kami" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.navbar}>
      <div className="container">
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLink} onClick={closeMenu}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/images/logo-alfarazka-bakery.png"
                  alt="Logo Alfarazka Bakery"
                  width={40}
                  height={40}
                  className={styles.logo}
                />
              </div>
              <div className={styles.brandText}>
                <span className={styles.brandName}>Alfarazka Bakery</span>
                {/* <span className={styles.brandTagline}>
                  Nyemil Sehat, Teman Ngopi
                </span> */}
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className={styles.navDesktop}>
            <ul className={styles.navList}>
              {navLinks.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6282194228282"
              target="_blank"
              rel="noreferrer"
              className={styles.navCta}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Pesan via WhatsApp</span>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""
          }`}
      >
        <div className={styles.mobileMenuInner}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((item) => (
              <li key={item.href} className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/6282194228282"
            target="_blank"
            rel="noreferrer"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;