"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import ChatComponent from "@/components/chat/chatUI";
import WhatsAppComponent from "@/components/chat/whatsAppComponent";
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="fjya94n231ecen894icl8c7fbme3od" />
        <GoogleTagManager gtmId="GTM-KH2BPJH3" />
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
