// app/produk/ProductsClientSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import ProductFilterSection, {
  type FilterCategoryItem,
} from "../components/productFilter/ProductFilterSection";
import styles from "./ProductsClientSection.module.scss";
import {
  fetchCategories,
  type Category,
} from "../services/categoryService";
import {
  fetchProducts,
  type Product,
} from "../services/productService";

const PAGE_SIZE = 12;
const ARTIFICIAL_DELAY_MS = 700; // buat skeleton loading agak lama dikit

const ProductsClientSection: React.FC = () => {
  // FILTER STATE
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");

  // CATEGORY STATE
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [categoryError, setCategoryError] = useState<string | null>(null);

  // PRODUCT STATE
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [productError, setProductError] = useState<string | null>(null);

  // --- DEBOUNCE SEARCH ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setPage(1);
    }, 350);

    return () => clearTimeout(timer);
  }, [search]);

  // --- LOAD CATEGORIES DARI API ---
  useEffect(() => {
    const loadCategories = async () => {
      setIsCategoryLoading(true);
      setCategoryError(null);
      try {
        const list = await fetchCategories();
        setCategories(list);
      } catch (err: any) {
        console.error("Gagal memuat kategori:", err);
        setCategoryError(
          err?.message || "Gagal memuat kategori. Coba refresh halaman."
        );
      } finally {
        setIsCategoryLoading(false);
      }
    };

    loadCategories();
  }, []);

  // Siapkan kategori untuk chip filter
  const filterCategories: FilterCategoryItem[] = useMemo(
    () => [
      { id: "all", label: "Semua produk" },
      ...categories.map((cat) => ({
        id: cat.slug || cat.id,
        label: cat.name,
      })),
    ],
    [categories]
  );

  // Kalau kategori tidak valid setelah kategori baru datang -> reset ke 'all'
  useEffect(() => {
    const validIds = filterCategories.map((c) => c.id);
    if (!validIds.includes(selectedCategoryId)) {
      setSelectedCategoryId("all");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCategories.length]);

  // --- LOAD PRODUCTS DARI API ---
  const loadProducts = async (targetPage: number) => {
    setIsLoadingProducts(true);
    setProductError(null);

    try {
      const dataPromise = fetchProducts({
        page: targetPage,
        limit: PAGE_SIZE,
        search: debouncedSearch,
        categoryId: selectedCategoryId === "all" ? undefined : selectedCategoryId,
      });

      // buat skeleton tampak smooth
      const [data] = await Promise.all([
        dataPromise,
        new Promise((resolve) => setTimeout(resolve, ARTIFICIAL_DELAY_MS)),
      ]);

      setProducts(data.products);
      setPage(data.page);
      setTotalPages(data.totalPages);
      setTotalItems(data.total);
    } catch (err: any) {
      console.error("Gagal memuat produk:", err);
      setProductError(
        err?.message || "Gagal memuat produk. Coba beberapa saat lagi."
      );
    } finally {
      setIsLoadingProducts(false);
      setIsInitialLoad(false);
    }
  };

  // Saat debouncedSearch atau kategori berubah -> reset ke page 1 dan fetch
  useEffect(() => {
    loadProducts(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, selectedCategoryId]);

  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "prev" && page > 1) {
      const newPage = page - 1;
      loadProducts(newPage);
    }
    if (direction === "next" && page < totalPages) {
      const newPage = page + 1;
      loadProducts(newPage);
    }
  };

  const pageInfoText = useMemo(() => {
    if (totalItems === 0) return "Tidak ada produk yang ditemukan.";
    const start = (page - 1) * PAGE_SIZE + 1;
    const end = Math.min(page * PAGE_SIZE, totalItems);
    return `Menampilkan ${start}–${end} dari ${totalItems} produk`;
  }, [page, totalItems]);

  const renderSkeletonCards = () =>
    Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx} className={styles.cardSkeleton}>
        <div className={styles.cardSkeletonImage} />
        <div className={styles.cardSkeletonLine} />
        <div className={styles.cardSkeletonLineShort} />
      </div>
    ));

  return (
    <section id="produk" className={styles.wrapper}>
      <div className="container">
        {/* FILTER BAR */}
        <ProductFilterSection
          search={search}
          onSearchChange={setSearch}
          selectedCategoryId={selectedCategoryId}
          onCategoryChange={setSelectedCategoryId}
          categories={filterCategories}
          isLoadingCategories={isCategoryLoading}
        />

        {categoryError && (
          <p className={styles.categoryError}>{categoryError}</p>
        )}

        {/* DAFTAR PRODUK */}
        <div className={styles.productSection}>
          {productError && (
            <div className={styles.errorBanner}>{productError}</div>
          )}

          <div className={styles.grid}>
            {isLoadingProducts && renderSkeletonCards()}

            {!isLoadingProducts &&
              products.length === 0 &&
              !isInitialLoad && (
                <p className={styles.emptyState}>
                  Belum ada produk yang cocok dengan pencarian atau kategori
                  yang dipilih.
                </p>
              )}

            {!isLoadingProducts &&
              products.length > 0 &&
              products.map((product) => (
                <article key={product.id} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    {product.imageUrl ? (
                      // pakai img biasa supaya simpel
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.imagePlaceholder}>
                        <span>
                          {product.name
                            ? product.name.charAt(0).toUpperCase()
                            : "R"}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{product.name}</h3>
                    {product.categoryName && (
                      <span className={styles.categoryBadge}>
                        {product.categoryName}
                      </span>
                    )}
                    {product.description && (
                      <p className={styles.cardDescription}>
                        {product.description}
                      </p>
                    )}
                    <p className={styles.cardPrice}>
                      Mulai{" "}
                      <strong>
                        Rp{" "}
                        {product.price.toLocaleString("id-ID", {
                          minimumFractionDigits: 0,
                        })}
                      </strong>{" "}
                      / pcs
                    </p>
                  </div>

                  <div className={styles.cardFooter}>
                    <a
                      href={`https://wa.me/6282194228282?text=Assalamualaikum%2C%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(
                        product.name
                      )}%20dari%20Alfarazka%20Bakery.%20Apakah%20masih%20tersedia%3F`}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cardButton}
                    >
                      Pesan produk ini
                    </a>
                  </div>
                </article>
              ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className={styles.paginationBar}>
              <div className={styles.pageInfo}>{pageInfoText}</div>
              <div className={styles.paginationControls}>
                <button
                  type="button"
                  className={styles.pageButton}
                  onClick={() => handlePageChange("prev")}
                  disabled={page <= 1 || isLoadingProducts}
                >
                  Sebelumnya
                </button>
                <span className={styles.pageIndicator}>
                  Halaman {page} dari {totalPages}
                </span>
                <button
                  type="button"
                  className={styles.pageButton}
                  onClick={() => handlePageChange("next")}
                  disabled={page >= totalPages || isLoadingProducts}
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}

          {totalPages <= 1 && totalItems > 0 && (
            <div className={styles.paginationBar}>
              <div className={styles.pageInfo}>{pageInfoText}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsClientSection;