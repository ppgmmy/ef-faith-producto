import type { MetadataRoute } from "next";
import { getProductIds } from "@/data/catalog";
import { getLessonIds } from "@/data/lessons";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ef-faith-producto.vercel.app";
  const staticRoutes = [
    "",
    "/belief",
    "/embroidery",
    "/embroidery/lessons",
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
  const lessonRoutes = getLessonIds().map((id) => ({
    url: `${base}/embroidery/lessons/${id}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...productRoutes, ...lessonRoutes];
}
