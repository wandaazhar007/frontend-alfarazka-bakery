// app/components/productFilter/ProductFilterSection.tsx
"use client";

import { ChangeEvent } from "react";
import styles from "./ProductFilterSection.module.scss";

export type FilterCategoryItem = {
  id: string;
  label: string;
};

type ProductFilterSectionProps = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
  categories: FilterCategoryItem[];
  isLoadingCategories?: boolean;
};

const ProductFilterSection: React.FC<ProductFilterSectionProps> = ({
  search,
  onSearchChange,
  selectedCategoryId,
  onCategoryChange,
  categories,
  isLoadingCategories,
}) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div
      className={styles.filterBar}
      aria-label="Filter produk roti Alfarazka Bakery"
    >
      {/* SEARCH */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Cari produk berdasarkan nama atau rasa..."
          className={styles.searchInput}
          aria-label="Cari produk"
        />
      </div>

      {/* KATEGORI */}
      <div className={styles.categoryWrapper}>
        <span className={styles.categoryLabel}>
          {isLoadingCategories ? "Memuat kategori..." : "Filter kategori:"}
        </span>
        <div className={styles.categoryChips}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={
                selectedCategoryId === cat.id
                  ? `${styles.chip} ${styles.chipActive}`
                  : styles.chip
              }
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSection;