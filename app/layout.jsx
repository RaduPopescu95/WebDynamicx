"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import ChatComponent from "@/components/chat/chatUI";
import WhatsAppComponent from "@/components/chat/whatsAppComponent";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="fjya94n231ecen894icl8c7fbme3od" />
        <meta name="google-site-verification" content="bJ7a8PKIWUZ5bWsvR664i8AD7AC-e4s3fc7EnT24eqE" />
        {/* Integrare Google Ads gtag.js */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W1G7274CCF"
        />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W1G7274CCF');
          `}
        </Script>
      </head>
      <body>
        <div className="main-page-wrapper">
          {children}
          <WhatsAppComponent />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
