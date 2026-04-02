//app/produk/ProductsClientSection.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
import Link from "next/link";

const PAGE_SIZE = 4;
const ARTIFICIAL_DELAY_MS = 700;
const SCROLL_OFFSET_PX = 96;
const SCROLL_WAIT_MS = 420;

type ProductImageCarouselProps = {
  name: string;
  imageUrl?: string | null;
  imageUrls?: string[];
};

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  name,
  imageUrl,
  imageUrls,
}) => {
  const sources: string[] = useMemo(() => {
    if (Array.isArray(imageUrls) && imageUrls.length > 0) {
      return imageUrls;
    }
    if (imageUrl) return [imageUrl];
    return [];
  }, [imageUrl, imageUrls]);

  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = sources.length > 1;

  const handlePrev = () => {
    if (!hasMultiple) return;
    setActiveIndex((prev) =>
      prev === 0 ? sources.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!hasMultiple) return;
    setActiveIndex((prev) =>
      prev === sources.length - 1 ? 0 : prev + 1
    );
  };

  if (sources.length === 0) {
    return (
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <span>{name ? name.charAt(0).toUpperCase() : "R"}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageInner}>
        <div
          className={styles.imageTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {sources.map((src, idx) => (
            <div className={styles.imageSlide} key={idx}>
              <img src={src} alt={`${name} - foto ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              className={`${styles.navButton} ${styles.navButtonPrev}`}
              onClick={handlePrev}
              aria-label="Lihat foto sebelumnya"
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.navButton} ${styles.navButtonNext}`}
              onClick={handleNext}
              aria-label="Lihat foto berikutnya"
            >
              ›
            </button>

            <div className={styles.dotsWrapper}>
              {sources.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ""
                    }`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Lihat foto ke-${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const ProductsClientSection: React.FC = () => {
  const topRef = useRef<HTMLDivElement | null>(null);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");

  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [categoryError, setCategoryError] = useState<string | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [productError, setProductError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setPage(1);
    }, 350);

    return () => clearTimeout(timer);
  }, [search]);

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

  useEffect(() => {
    const validIds = filterCategories.map((c) => c.id);
    if (!validIds.includes(selectedCategoryId)) {
      setSelectedCategoryId("all");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCategories.length]);

  const scrollToTopAnchor = async () => {
    if (!topRef.current) return;

    const top =
      topRef.current.getBoundingClientRect().top +
      window.scrollY -
      SCROLL_OFFSET_PX;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    await wait(SCROLL_WAIT_MS);
  };

  const loadProducts = async (targetPage: number) => {
    setIsLoadingProducts(true);
    setProductError(null);

    try {
      const dataPromise = fetchProducts({
        page: targetPage,
        limit: PAGE_SIZE,
        search: debouncedSearch,
        categoryId:
          selectedCategoryId === "all" ? undefined : selectedCategoryId,
      });

      const [data] = await Promise.all([
        dataPromise,
        wait(ARTIFICIAL_DELAY_MS),
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

  useEffect(() => {
    loadProducts(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, selectedCategoryId]);

  const handlePageChange = async (direction: "prev" | "next") => {
    if (isLoadingProducts) return;

    let newPage = page;

    if (direction === "prev" && page > 1) {
      newPage = page - 1;
    }

    if (direction === "next" && page < totalPages) {
      newPage = page + 1;
    }

    if (newPage === page) return;

    await scrollToTopAnchor();
    await loadProducts(newPage);
  };

  const pageInfoText = useMemo(() => {
    if (totalItems === 0) return "Tidak ada produk yang ditemukan.";
    const start = (page - 1) * PAGE_SIZE + 1;
    const end = Math.min(page * PAGE_SIZE, totalItems);
    return `Menampilkan ${start}–${end} dari ${totalItems} produk`;
  }, [page, totalItems]);

  const renderSkeletonCards = () =>
    Array.from({ length: PAGE_SIZE }).map((_, idx) => (
      <div key={idx} className={styles.cardSkeleton}>
        <div className={styles.cardSkeletonImage} />
        <div className={styles.cardSkeletonLine} />
        <div className={styles.cardSkeletonLineShort} />
        <div className={styles.cardSkeletonLineMedium} />
        <div className={styles.cardSkeletonButton} />
      </div>
    ));

  return (
    <section ref={topRef} id="produk" className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
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

          <div className={styles.productSection}>
            {productError && (
              <div className={styles.errorBanner}>{productError}</div>
            )}

            <div
              className={`${styles.grid} ${isLoadingProducts ? styles.gridLoading : ""
                }`}
            >
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
                    <ProductImageCarousel
                      name={product.name}
                      imageUrl={product.imageUrl}
                      imageUrls={product.imageUrls}
                    />

                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{product.name}</h3>

                      {product.categoryName && (
                        <span className={styles.categoryBadge}>
                          {product.categoryName}
                        </span>
                      )}

                      {product.description && (
                        <div
                          className={styles.cardDescription}
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        />
                      )}

                      <p className={styles.cardPrice}>
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
                      <Link
                        href={`https://wa.me/6285179753356?text=Assalamualaikum%2C%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(
                          product.name
                        )}%20dari%20Alfarazka%20Bakery.%20Apakah%20masih%20tersedia%3F`}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.cardButton}
                      >
                        Pesan produk ini
                      </Link>
                    </div>
                  </article>
                ))}
            </div>

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
      </div>
    </section>
  );
};

export default ProductsClientSection;