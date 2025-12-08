/*
Author: Wanda Azhar
Location: Michigan, USA
Contact: wandaazhar@gmail.com
Description: Alfarazka Bakery is a professionally designed website for a home-based bakery, created to showcase premium handcrafted baked goods with a modern, clean, and user-friendly interface. Built with responsive layouts and best practices, it reflects the brand’s quality, reliability, and professionalism.
*/

import type { Metadata } from "next";
import Hero from "./components/hero/Hero";
import WhyAlfarazka from "./components/why/WhyAlfarazka";
import ProductsSection from "./components/products/ProductsSection";
import OrderSection from "./components/order/OrderSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import FaqSection from "./components/faq/FaqSection";
import ServiceAreaSection from "./components/service-area/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat | Nyemil Sehat, Teman Ngopi",
  description:
    "Alfarazka Bakery menghadirkan roti unyil seribuan, roti meises, dan pizza mini fresh dari dapur rumahan di Ciputat. Cocok untuk pengajian, arisan, ulang tahun, rapat kantor, dan nyemil harian.",
  openGraph: {
    title: "Alfarazka Bakery – Roti Unyil Rumahan di Ciputat",
    description:
      "Roti unyil seribuan, roti meises, dan pizza mini yang lembut dan fresh, cocok untuk berbagai acara dan nyemil keluarga di Ciputat dan Tangerang Selatan.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyAlfarazka />
      <ProductsSection />
      <OrderSection />
      <TestimonialsSection />
      <FaqSection />
      <ServiceAreaSection />
    </>
  );
}