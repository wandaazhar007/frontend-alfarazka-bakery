import type { Metadata } from "next";
import Script from "next/script";
import "./styles/_globals.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainFooter from "./components/mainFooter/MainFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Alfarazka Bakery – Roti Unyil Seribuan di Ciputat",
  description:
    "Alfarazka Bakery adalah produsen roti unyil rumahan di Ciputat, Tangerang Selatan. Roti lembut mulai Rp 1.000/pcs, cocok untuk pengajian, arisan, ulang tahun, dan acara kantor.",
  icons: {
    icon: "/images/icon-logo-alfarazka-bakery.png",
    shortcut: "/images/icon-logo-alfarazka-bakery.png",
    apple: "/images/icon-logo-alfarazka-bakery.png",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {GA_ID && (
          <>
            {/* Google tag (gtag.js) */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
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