"use client";

import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

export type BreadcrumbItem = {
  label: string;
  href?: string; // boleh kosong untuk item terakhir (halaman aktif)
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://alfarazkabakery.com";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const url =
        item.href === "/"
          ? siteUrl
          : item.href
            ? `${siteUrl}${item.href}`
            : undefined;

      const listItem: Record<string, any> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
      };

      if (url) {
        listItem.item = url;
      }

      return listItem;
    }),
  };

  return (
    <>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            // Link untuk breadcrumb sebelumnya
            if (item.href && !isLast) {
              return (
                <li key={item.label} className={styles.item}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                  <span className={styles.separator}>/</span>
                </li>
              );
            }

            // Item terakhir (halaman aktif)
            return (
              <li
                key={item.label}
                className={`${styles.item} ${isLast ? styles.current : ""
                  }`}
                aria-current={isLast ? "page" : undefined}
              >
                <span className={styles.currentLabel}>{item.label}</span>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* JSON-LD BreadcrumbList */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Breadcrumbs;