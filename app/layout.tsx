/*
Author: Wanda Azhar
Location: Michigan, USA
Contact: wandaazhar@gmail.com
Description: Alfarazka Bakery is a professionally designed website for a home-based bakery, created to showcase premium handcrafted baked goods with a modern, clean, and user-friendly interface. Built with responsive layouts and best practices, it reflects the brand’s quality, reliability, and professionalism.
*/

import type { Metadata } from "next";
import "./styles/_globals.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainFooter from "./components/mainFooter/MainFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
          {/* <a
            href="https://wa.me/6282194228282"
            target="_blank"
            rel="noreferrer"
            className="fab-whatsapp"
            aria-label="Chat via WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a> */}
        </div>
      </body>
    </html>
  );
}