import blogs from "@/data/blog";

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webappdynamicx.ro";

  const staticRoutes = [
    "/",
    "/despre-noi",
    "/contact",
    "/portofoliu",
    "/costuri-aplicatie-mobila",
    "/costuri-site-web",
    "/servicii/dezvoltare-aplicatii-mobile",
    "/servicii/dezvoltare-site-web",
    "/servicii/logo-design",
    "/servicii/creare-magazin-online",
    "/servicii/domeniu-gazduire",
    "/blog",
  ];

  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changefreq: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const blogEntries = (Array.isArray(blogs) ? blogs : []).map((post) => ({
    url: `${siteUrl}/blog/${post.link}`,
    lastModified: now,
    changefreq: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}


