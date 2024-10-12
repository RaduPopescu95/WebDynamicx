import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Head } from "next/document"; // Asigură-te că folosești corect next/document pentru meta-tags
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import ChatComponent from "@/components/chat/chatUI";
import WhatsAppComponent from "@/components/chat/whatsAppComponent";
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";

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
      <Head> {/* Adăugare componentă Head specifică */}
        <meta name="facebook-domain-verification" content="fjya94n231ecen894icl8c7fbme3od" />
        <GoogleTagManager gtmId="GTM-KH2BPJH3" />
      </Head>
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
