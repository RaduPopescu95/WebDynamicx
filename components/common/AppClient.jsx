"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import BottomNavbar from "@/components/common/BottomNavbar";
import { Analytics } from "@vercel/analytics/react";

export default function AppClient() {
  useEffect(() => {
    Aos.init({ duration: 900 });
    // Bootstrap JS only on client
    import("bootstrap/dist/js/bootstrap").catch(() => {});
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16914216527"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'AW-16914216527');
        `}
      </Script>
      <BottomNavbar />
      <Analytics />
    </>
  );
}


