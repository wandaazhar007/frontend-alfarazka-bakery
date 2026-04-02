//app/tentang-kami/page.tsx

import type { Metadata } from "next";
import styles from "./AboutPage.module.scss";
import StorySection from "../components/storySection/StorySection";
import TimelineSection from "../components/timelineSection/TimelineSection";
import InstagramCtaSection from "../components/instagramCtaSection/InstagramCtaSection";
import AddressSection from "../components/addressSection/AddressSection";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import HeroTentangKami from "../components/heroTentangKami/HeroTentangKami";

export const metadata: Metadata = {
  title:
    "Tentang Alfarazka Bakery – Roti Unyil Rumahan Ciputat.",
  description:
    "Kenal lebih dekat dengan Alfarazka Bakery, produsen roti unyil rumahan di Ciputat. Kami mengutamakan rasa, kebersihan, dan pelayanan ramah untuk setiap pelanggan.",
  keywords: [
    "Alfarazka Bakery",
    "roti unyil Ciputat",
    "roti seribuan Tangerang Selatan",
    "roti rumahan halal",
    "snack pengajian Ciputat",
  ],
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* BREADCRUMB */}
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Tentang Kami", href: "/tentang-kami" },
          ]}
        />
      </div>
      <HeroTentangKami />
      <StorySection />
      <TimelineSection />
      <InstagramCtaSection />
      <AddressSection />
    </main>
  );
}