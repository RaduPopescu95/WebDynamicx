// pages/sitemap.xml.js
import { handleGetArticles, handleGetServices } from "../utils/realtimeUtils";
import { toUrlSlug } from "../utils/commonUtils";

const URL = "https://webappdynamicx.ro";

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function generateSiteMap(articles, services) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <!-- Add the static URLs manually -->
    <url>
      <loc>${escapeXml(URL)}/news</loc>
    </url>
    <!-- ... other static URLs ... -->

    <url>
    <loc>${URL}/blog</loc>
  </url>
  <url>
    <loc>${URL}/despre-noi</loc>
  </url>
  <url>
    <loc>${URL}/home</loc>
  </url>
  <url>
    <loc>${URL}/contact</loc>
  </url>
  <url>
    <loc>${URL}/website-prezentare</loc>
  </url>
  <url>
    <loc>${URL}/logo-design</loc>
  </url>
  <url>
    <loc>${URL}/magazin-online</loc>
  </url>
  <url>
    <loc>${URL}/aplicatie-mobila</loc>
  </url>
  <url>
    <loc>${URL}/mentenanta-administrare</loc>
  </url>
  <url>
    <loc>${URL}/servicii</loc>
  </url>
  <url>
    <loc>${URL}/servicii/dezvoltare-aplicatii-mobile</loc>
  </url>
  <url>
    <loc>${URL}/servicii/logo-design</loc>
  </url>
  <url>
    <loc>${URL}/servicii/magazin-online</loc>
  </url>
  
  <url>
    <loc>${URL}/servicii/site-de-prezentare</loc>
  </url>
  
  <url>
    <loc>${URL}/servicii/site-de-prezentare</loc>
  </url>
  
  <url>
    <loc>${URL}/servicii/domeniu-gazduire</loc>
  </url>
  
    <!-- Dynamically generated URLs for articles -->
    ${articles
      .map(({ name, image }) => {
        return `
          <url>
            <loc>${escapeXml(`${URL}/blog/${toUrlSlug(name)}`)}</loc>
            ${
              image && image.finalUri
                ? `<image:image>
              <image:loc>${escapeXml(image.finalUri)}</image:loc>
            </image:image>`
                : ""
            }
          </url>
        `;
      })
      .join("")}
  
   
  </urlset>`;
}

export async function getServerSideProps({ res }) {
  const articles = await handleGetArticles();

  const sitemap = generateSiteMap(articles.articlesArray);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null; // This page does not render anything
}
