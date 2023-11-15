import "./globals.css";
import "../index.scss";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Link from "next/link";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Ok,mersi"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Acest site folosește cookies. Continuarea navigării implică acceptarea
        lor. Pentru informatii suplimentare, va rugam sa consultati paginile:
        <Link
          style={{
            color: "#0EDDE4",
            marginRight: 10,
            marginLeft: 10,
            textDecoration: "underline",
          }}
          href="/politica-cookie"
        >
          Politica de Cookie``
        </Link>
        <Link
          style={{
            color: "#0EDDE4",
            marginRight: 10,
            marginLeft: 10,
            textDecoration: "underline",
          }}
          href="/politica-confidentialitate"
        >
          Politica de confidențialitate
        </Link>
        {/* <span style={{ fontSize: "10px" }}>
          This bit of text is smaller :O
        </span> */}
      </CookieConsent>
    </>
  );
}
