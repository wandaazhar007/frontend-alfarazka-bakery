// app/services/productService.ts

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

export type Product = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  price: number;
  categoryId?: string;
  categoryName?: string;
  imageUrl?: string | null;
  imageUrls?: string[];
};

export type ProductListResponse = {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

function normalizeProductListResponse(raw: any): ProductListResponse {
  // Ambil array data produk dari beberapa kemungkinan shape
  const dataArray =
    raw?.data?.products ||
    raw?.data?.items ||
    raw?.products ||
    raw?.items ||
    raw?.data ||
    raw ||
    [];

  const pagination = raw?.pagination || raw?.meta || raw?.data?.pagination || {};

  const total =
    pagination.total ||
    pagination.totalItems ||
    raw?.total ||
    (Array.isArray(dataArray) ? dataArray.length : 0);

  const page = pagination.page || pagination.currentPage || raw?.page || 1;
  const limit =
    pagination.limit ||
    pagination.perPage ||
    raw?.limit ||
    (Array.isArray(dataArray) ? dataArray.length || 1 : 1);

  const totalPages =
    pagination.totalPages ||
    pagination.totalPage ||
    (limit ? Math.max(1, Math.ceil(total / limit)) : 1);

  const products: Product[] = (Array.isArray(dataArray) ? dataArray : []).map(
    (item: any) => ({
      id: item.id || item._id || "",
      name: item.name || "",
      slug: item.slug,
      description: item.description || "",
      price: Number(item.price || 0),
      categoryId: item.categoryId,
      categoryName: item.categoryName || item.category || "",
      imageUrl:
        item.imageUrl ||
        (Array.isArray(item.imageUrls) ? item.imageUrls[0] : null),
      imageUrls: Array.isArray(item.imageUrls) ? item.imageUrls : [],
    })
  );

  return {
    products,
    total,
    page,
    limit,
    totalPages,
  };
}

export async function fetchProducts(params: {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
}): Promise<ProductListResponse> {
  const { page = 1, limit = 12, search, categoryId } = params;

  const url = new URL(`${API_BASE_URL}/products`);

  url.searchParams.set("page", String(page));
  url.searchParams.set("limit", String(limit));

  if (search && search.trim()) {
    url.searchParams.set("search", search.trim());
  }

  if (categoryId && categoryId !== "all") {
    url.searchParams.set("categoryId", categoryId);
  }

  const res = await fetch(url.toString(), {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`Gagal memuat produk (status ${res.status})`);
  }

  const json = await res.json();
  return normalizeProductListResponse(json);
}