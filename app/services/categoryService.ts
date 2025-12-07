// app/services/categoryService.ts
export type Category = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.alfarazkabakery.com/api";

export async function fetchCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, {
      method: "GET",
      // cache: "no-store" biar selalu fresh, tapi ini dijalankan di client, jadi aman
    });

    if (!res.ok) {
      throw new Error(`Gagal mengambil kategori (status ${res.status})`);
    }

    const json = await res.json();

    // Normalisasi bentuk data (jaga-jaga struktur backend berbeda)
    const rawList =
      json?.data ||
      json?.categories ||
      json?.items ||
      json ||
      [];

    if (!Array.isArray(rawList)) return [];

    const categories: Category[] = rawList.map((item: any) => ({
      id: item.id || item._id || item.slug || "",
      name: item.name || item.title || "",
      slug: item.slug,
      description: item.description,
    }));

    return categories.filter((c) => c.id && c.name);
  } catch (err) {
    console.error("fetchCategories error:", err);
    throw err;
  }
}