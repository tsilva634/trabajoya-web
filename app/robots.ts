import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/app/", "/payment/", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/app/", "/payment/", "/api/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app/", "/payment/", "/api/"],
      },
    ],
    sitemap: "https://web.trabajo-ya.com/sitemap.xml",
    host: "https://web.trabajo-ya.com",
  };
}
