import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://shopwriterasst.com/sitemap.xml",
    host: "https://shopwriterasst.com",
  };
}
