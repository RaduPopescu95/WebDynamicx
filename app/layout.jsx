"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import ChatComponent from "@/components/chat/chatUI";
import WhatsAppComponent from "@/components/chat/whatsAppComponent";

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
      <body>
        <div className="main-page-wrapper">
          {children}
          {/* <ScrollToTop /> */}
          <WhatsAppComponent />
        </div>
      </body>
    </html>
  );
}
