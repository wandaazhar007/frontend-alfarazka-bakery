// app/layout.tsx
import type { Metadata } from "next";
import "./styles/_globals.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainFooter from "./components/mainFooter/MainFooter";

export const metadata: Metadata = {
  title: "Alfarazka Bakery – Nyemil Sehat, Teman Ngopi",
  description:
    "Alfarazka Bakery adalah produsen roti unyil rumahan di Ciputat, Tangerang Selatan. Cocok untuk snack acara, bekal anak, dan teman ngopi harian.",
  icons: {
    icon: "/images/icon-logo-alfarazka-bakery.png",
    shortcut: "/images/icon-logo-alfarazka-bakery.png",
    apple: "/images/icon-logo-alfarazka-bakery.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="app-shell">
          <Navbar />
          <main className="main-content">{children}</main>
          <MainFooter />
          <Footer />

          {/* Floating WhatsApp button */}
          <a
            href="https://wa.me/6282194228282"
            target="_blank"
            rel="noreferrer"
            className="fab-whatsapp"
            aria-label="Chat via WhatsApp"
          >
            {/* Bisa pakai emoji dulu, nanti diganti FontAwesome kalau mau */}
            💬
          </a>
        </div>
      </body>
    </html>
  );
}