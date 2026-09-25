import EventsPage from "@/features/events/page";
import OrgSchema from "@/schema/org-schema";
import { FAQSchema } from "@/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D4 Community Events | Developer Meetups, Workshops & Hackathons",
  description:
    "Explore upcoming tech events, developer workshops, and hackathons hosted by D4 Community. Network, build projects, and grow your tech skills.",
  keywords: [
    "D4 Community",
    "Tech Events",
    "Hackathons",
    "Developer Meetups",
    "Coding Workshops",
    "Commudle Events",
    "GenAI Conclave Series",
    "GenAI Conclave",
    "GenAI Conclave Chandigarh",
    "GenAI events India",
    "AI events India",
    "AI events Chandigarh",
    "AI developer community India",
    "developer events Chandigarh",
    "tech events Chandigarh",
    "D4 Community events",
    "multi-city initiative",
    "multi-city developer community",
    "Multi-city GenAI Conclave",
    "Multi city Generative AI Community Series",
  ],
  alternates: {
    canonical: "https://www.d4community.com/events",
  },
  openGraph: {
    title: "D4 Community Events | Developer Meetups, Workshops & Hackathons",
    description:
      "Explore upcoming tech events, developer workshops, and hackathons hosted by D4 Community. Network, build projects, and grow your tech skills.",
    url: "https://www.d4community.com/events",
    siteName: "D4 Community",
    type: "website",
    images: [
      {
        url: "https://www.d4community.com/og-events.png", // Ensure this fallback asset exists
        width: 1200,
        height: 630,
        alt: "D4 Community Upcoming Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D4 Community Events | Developer Meetups & Hackathons",
    description:
      "Join developer workshops, tech meetups, and hackathons with D4 Community.",
  },
};

export default function Page() {
  const internalLinks = [
    { name: "D4 Community Home", href: "/" },
    { name: "About D4 Community", href: "/about" },
    { name: "Contact Support & Organizers", href: "/contact" },
    { name: "Community Code of Conduct", href: "/code-of-conduct" },
    { name: "Upcoming Tech Events", href: "/events" },
    { name: "Core Community Team", href: "/team" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Join the D4 Community", href: "/join" },
    { name: "Event Photo Gallery", href: "/gallery" },
    { name: "Twitter Member Reviews", href: "/twitter-reviews" },
    { name: "Community Member Reviews", href: "/reviews" },
  ];

  // ItemList Schema for SEO/AEO Carousel indexing
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "D4 Community Upcoming Tech Events",
    description: "List of upcoming developer meetups, hackathons, and workshops.",
    url: "https://www.d4community.com/events",
  };

  return (
    <>
      <OrgSchema />
      <FAQSchema page={["join-faq", "faq"]} />
      
      {/* Search Engine & AI Crawler Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main>
        {/* Dynamic Client UI */}
        <EventsPage />

        {/* Semantic Content Section optimized for AI Engine Summarization (AEO) */}
        <section className="sr-only" aria-label="About D4 Community Events">
          <h1>Upcoming Tech Events and Developer Hackathons</h1>
          <p>
            D4 Community hosts hands-on technical workshops, developer meetups, 
            and competitive hackathons for software engineers, designers, and tech enthusiasts. 
            Events are available in online and in-person formats, featuring industry speakers 
            and collaborative building sessions.
          </p>
          
          <h2>How to Join D4 Events?</h2>
          <p>
            Explore our scheduled events on this page, click "Register Now" to fill out 
            the participant form via Commudle, or click "Learn More" to view full schedules and speaker details.
          </p>

          {/* Semantic Link Crawling Graph */}
          <nav aria-label="Internal Site Navigation">
            <ul>
              {internalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}