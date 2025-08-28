import "aos/dist/aos.css";
import "../styles/index.scss";
import "@/components/common/BottomNavbar.scss";
import "@/components/common/ContactPopup.scss";
import "@/components/portfolio/LatestProjects.scss";
import AppClient from "@/components/common/AppClient";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://webappdynamicx.ro"),
  applicationName: "Web App Dynamicx",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Web App Dynamicx",
    type: "website",
    images: [
      {
        url: "/images/logo/logo_01.png",
        width: 500,
        height: 280,
        alt: "Web App Dynamicx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@webappdynamicx",
  },
  alternates: {
    languages: {
      "ro-RO": "/",
    },
  },
  other: {
    "facebook-domain-verification": "fjya94n231ecen894icl8c7fbme3od",
    "google-site-verification": "bJ7a8PKIWUZ5bWsvR664i8AD7AC-e4s3fc7EnT24eqE",
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#f1f4f9",
  };
}

export default function RootLayout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webappdynamicx.ro";
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Web App Dynamicx",
    url: siteUrl,
    logo: `${siteUrl}/images/logo/logo_01.png`,
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Web App Dynamicx",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="preload"
          href="/fonts/gordita/gordita_regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <div className="main-page-wrapper">
          {children}
        </div>
        <AppClient />
      </body>
    </html>
  );
}
