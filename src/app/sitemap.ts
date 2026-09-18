import type { MetadataRoute } from "next";
import { getProductIds } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ef-faith-producto.vercel.app";
  const staticRoutes = [
    "",
    "/belief",
    "/embroidery",
    "/series",
    "/shop",
    "/process",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const productRoutes = getProductIds().map((id) => ({
    url: `${base}/series/${id}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...productRoutes];
}
