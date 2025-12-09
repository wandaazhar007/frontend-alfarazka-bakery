export type SnackPackageApi = {
  id: string;
  name: string;
  shortDescription: string;
  price: number;
  fitFor?: string;
  point1?: string;
  point2?: string;
  point3?: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

// Khusus frontend publik: ambil hanya paket yang aktif.
export async function fetchPublicSnackPackages(): Promise<SnackPackageApi[]> {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL belum dikonfigurasi.");
  }

  const res = await fetch(
    `${API_BASE_URL}/snack-packages?onlyActive=true&limit=20`
  );

  if (!res.ok) {
    throw new Error("Gagal memuat paket snack dari server.");
  }

  const json = await res.json();
  const items = json?.data?.items ?? json?.data ?? [];

  return items as SnackPackageApi[];
}