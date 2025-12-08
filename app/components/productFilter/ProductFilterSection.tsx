"use client";

import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./ProductFilterSection.module.scss";

export type FilterCategoryItem = {
  id: string;
  label: string;
};

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
  categories: FilterCategoryItem[];
  isLoadingCategories?: boolean;
};

const SCROLL_STEP = 180;

const ProductFilterSection: React.FC<Props> = ({
  search,
  onSearchChange,
  selectedCategoryId,
  onCategoryChange,
  categories,
  isLoadingCategories,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;

    const delta = direction === "left" ? -SCROLL_STEP : SCROLL_STEP;
    node.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className={styles.filterBar} aria-label="Filter produk roti unyil">
      <div className={styles.inner}>
        {/* SEARCH */}
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Cari produk berdasarkan nama…"
            value={search}
            onChange={handleChangeSearch}
          />
        </div>

        {/* CATEGORY CHIPS (HORIZONTAL SCROLLABLE) */}
        <div className={styles.categoryArea}>
          <button
            type="button"
            className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
            onClick={() => handleScroll("left")}
            aria-label="Scroll kategori ke kiri"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className={styles.categoryScrollOuter}>
            <div className={styles.fadeLeft} aria-hidden="true" />
            <div className={styles.fadeRight} aria-hidden="true" />

            <div
              className={styles.categoryScrollInner}
              ref={scrollRef}
              role="tablist"
              aria-label="Filter kategori produk"
            >
              {isLoadingCategories && (
                <button
                  type="button"
                  className={`${styles.chip} ${styles.chipDisabled}`}
                  disabled
                >
                  Memuat kategori…
                </button>
              )}

              {!isLoadingCategories &&
                categories.map((cat) => {
                  const isActive = cat.id === selectedCategoryId;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`${styles.chip} ${isActive ? styles.chipActive : ""
                        }`}
                      onClick={() => onCategoryChange(cat.id)}
                    >
                      {cat.label}
                    </button>
                  );
                })}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
            onClick={() => handleScroll("right")}
            aria-label="Scroll kategori ke kanan"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSection;