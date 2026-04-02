// app/services/siteSettingsService.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type PublicSiteSettings = {
  phoneNumberDisplay: string;
  whatsappNumber: string;
  instagramUrl: string;
  mapsUrl: string;
  embedMapUrl: string;
  businessName: string;
  email: string;
  addressLabel: string;
  serviceAreaText: string;
  updatedAt?: string | null;
};

const DEFAULT_SITE_SETTINGS: PublicSiteSettings = {
  phoneNumberDisplay: "0821-9422-8282",
  whatsappNumber: "6282194228282",
  instagramUrl: "https://www.instagram.com/alfarazkabakerykl",
  mapsUrl: "https://maps.app.goo.gl/dMbWuud6ZD9DSqap6",
  embedMapUrl: "",
  businessName: "Alfarazka Bakery",
  email: "",
  addressLabel: "Ciputat, Tangerang Selatan, Banten",
  serviceAreaText:
    "Ciputat, Pamulang, UIN Jakarta, Gintung, Legoso, BSD tertentu, dan sekitarnya.",
  updatedAt: null,
};

function normalizeSiteSettings(raw: any): PublicSiteSettings {
  const data = raw?.data || raw || {};

  return {
    phoneNumberDisplay:
      typeof data.phoneNumberDisplay === "string"
        ? data.phoneNumberDisplay
        : DEFAULT_SITE_SETTINGS.phoneNumberDisplay,
    whatsappNumber:
      typeof data.whatsappNumber === "string"
        ? data.whatsappNumber
        : DEFAULT_SITE_SETTINGS.whatsappNumber,
    instagramUrl:
      typeof data.instagramUrl === "string"
        ? data.instagramUrl
        : DEFAULT_SITE_SETTINGS.instagramUrl,
    mapsUrl:
      typeof data.mapsUrl === "string"
        ? data.mapsUrl
        : DEFAULT_SITE_SETTINGS.mapsUrl,
    embedMapUrl:
      typeof data.embedMapUrl === "string"
        ? data.embedMapUrl
        : DEFAULT_SITE_SETTINGS.embedMapUrl,
    businessName:
      typeof data.businessName === "string"
        ? data.businessName
        : DEFAULT_SITE_SETTINGS.businessName,
    email:
      typeof data.email === "string" ? data.email : DEFAULT_SITE_SETTINGS.email,
    addressLabel:
      typeof data.addressLabel === "string"
        ? data.addressLabel
        : DEFAULT_SITE_SETTINGS.addressLabel,
    serviceAreaText:
      typeof data.serviceAreaText === "string"
        ? data.serviceAreaText
        : DEFAULT_SITE_SETTINGS.serviceAreaText,
    updatedAt: data.updatedAt || null,
  };
}

export async function fetchPublicSiteSettings(): Promise<PublicSiteSettings> {
  try {
    const res = await fetch(`${API_BASE_URL}/site-settings/public`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Gagal memuat site settings (status ${res.status})`);
    }

    const json = await res.json();
    return normalizeSiteSettings(json);
  } catch (error) {
    console.error("fetchPublicSiteSettings error:", error);
    return DEFAULT_SITE_SETTINGS;
  }
}

export function buildWhatsAppUrl(
  whatsappNumber: string,
  message?: string
): string {
  const cleanNumber = String(whatsappNumber || "").replace(/[^\d]/g, "");

  if (!cleanNumber) {
    return "#";
  }

  if (!message?.trim()) {
    return `https://wa.me/${cleanNumber}`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export { DEFAULT_SITE_SETTINGS };