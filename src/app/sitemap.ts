import { MetadataRoute } from "next";

// ─── Config ───────────────────────────────────────────────────────────────────
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

// ─── Types ────────────────────────────────────────────────────────────────────
type SitemapEntry = MetadataRoute.Sitemap[number];

// ─── Static Routes ────────────────────────────────────────────────────────────
const staticRoutes: SitemapEntry[] = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/events`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/team`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/studio`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

// ─── Dynamic Routes (fetched from Sanity or any CMS/DB) ───────────────────────

/**
 * Fetch dynamic event slugs from Sanity.
 * Replace the query/client import with your actual Sanity setup.
 */
async function getEventRoutes(): Promise<SitemapEntry[]> {
  try {
    // Example: import { client } from "@/sanity/lib/client";
    // const events = await client.fetch<{ slug: string; _updatedAt: string }[]>(
    //   `*[_type == "event"]{ "slug": slug.current, _updatedAt }`
    // );
    // return events.map((event) => ({
    //   url: `${BASE_URL}/events/${event.slug}`,
    //   lastModified: new Date(event._updatedAt),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // }));

    return []; // Remove this line once Sanity client is wired up
  } catch (error) {
    console.error("[sitemap] Failed to fetch event routes:", error);
    return [];
  }
}

/**
 * Fetch dynamic team member slugs from Sanity.
 */
async function getTeamRoutes(): Promise<SitemapEntry[]> {
  try {
    // Example:
    // const members = await client.fetch<{ slug: string; _updatedAt: string }[]>(
    //   `*[_type == "teamMember"]{ "slug": slug.current, _updatedAt }`
    // );
    // return members.map((member) => ({
    //   url: `${BASE_URL}/team/${member.slug}`,
    //   lastModified: new Date(member._updatedAt),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // }));

    return []; // Remove this line once Sanity client is wired up
  } catch (error) {
    console.error("[sitemap] Failed to fetch team routes:", error);
    return [];
  }
}

// ─── Main Sitemap Export ───────────────────────────────────────────────────────
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [eventRoutes, teamRoutes] = await Promise.all([
    getEventRoutes(),
    getTeamRoutes(),
  ]);

  return [...staticRoutes, ...eventRoutes, ...teamRoutes];
}