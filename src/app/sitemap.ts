import { MetadataRoute } from "next";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";
import { client } from "@/sanity/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths = await client.fetch(SITEMAP_QUERY);

    const baseUrl =
      process.env.VERCEL && process.env.VERCEL_ENV === "production"
        ? "https://twirlsalon.com/"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";

    const dynamicPaths = paths.map(
      (path: { href: string; _updatedAt: string }) => ({
        url: new URL(path.href!, baseUrl).toString(),
        lastModified: new Date(path._updatedAt),
        changeFrequency: "weekly",
        priority: 1,
      })
    );

    const oldUrls = [
      "/",
      "/services",
      "/hair-salon-in-mangalore",
      "/nail-salon-in-mangalore",
      "/facials-in-mangalore",
      "/spa-services-in-mangalore",
      "/waxing-in-mangalore",
      "/makeup-in-mangalore",
      "/salon-membership-in-mangalore",
      "/about-us",
      "/contact-us",
      "/olaplex-hair-treatments-in-mangalore",
      "/keratin-hair-smoothing-treatment-in-mangalore",
      "/botox-hair-treatment-in-mangalore",
      "/balayage-hair-highlights-in-mangalore",
      "/haircut-and-styling-salon-in-mangalore",
      "/hair-highlights-and-streaks-salon-in-mangalore",
      "/hair-spa-in-mangalore",
      "/hair-treatments-in-mangalore",
      "/beard-styling-salon-in-mangalore",
      "/mustache-styling-salon-in-mangalore",
      "/gel-nail-art-salon-in-mangalore",
      "/chrome-gel-polish-salon-in-mangalore",
      "/ombre-gel-polish-salon-in-mangalore",
      "/classic-manicure-salon-in-mangalore",
      "/organic-manicure-salon-in-mangalore",
      "/classic-pedicure-salon-in-mangalore",
      "/organic-pedicure-salon-in-mangalore",
      "/candle-spa-manicure-salon-in-mangalore",
      "/candle-spa-pedicure-salon-in-mangalore",
      "/nail-cut-and-file-salon-in-mangalore",
      "/nail-colour-change-salon-in-mangalore",
      "/nail-geleration-salon-in-mangalore",
      "/french-geleration-salon-in-mangalore",
    ].map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: new Date("2024-12-31"), // or best guess
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    return [...dynamicPaths, ...oldUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
