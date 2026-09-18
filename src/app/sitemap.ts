import type { MetadataRoute } from "next";
import { getProductIds } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kintsugi.studio";
  const staticRoutes = ["", "/belief", "/series", "/process", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );
  const productRoutes = getProductIds().map((id) => ({
    url: `${base}/series/${id}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...productRoutes];
}
