"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import styles from "./Navbar.module.scss";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/produk", label: "Produk & Paket" },
  { href: "/cara-pemesanan", label: "Cara Pemesanan" },
  { href: "/kontak-kami", label: "Kontak Kami" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

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
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className={styles.navDesktop}>
            <ul className={styles.navList}>
              {navLinks.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6285179753356"
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
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.mobileNavLinkActive : ""
                    }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/6285179753356"
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