import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app/", "/payment/", "/api/"],
      },
    ],
    sitemap: "https://web.trabajo-ya.com/sitemap.xml",
  };
}

