import EventsPage from "@/features/events/page";
import OrgSchema from "@/schema/org-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D4 Community Events | Meetups, Workshops & Hackathons",

  description:
    "Explore D4 Community events, from developer meetups and hands-on workshops to Hack-N-Win and GenAI Conclave. Learn, build and connect with developers.",

  keywords: [
    // Brand
    "D4 Community",
    "D4 Community Events",
    "D4 events",
    "Discite Develop Debug Deploy",

    // Developer events
    "developer events India",
    "developer meetups India",
    "developer workshops India",
    "tech events India",
    "tech meetups India",
    "coding workshops India",
    "developer networking events",

    // Hackathons
    "hackathons India",
    "developer hackathons India",
    "in-person hackathons India",
    "Hack-N-Win",
    "Hack-N-Win Hackathon",
    "InnoSprint Hackathon",
    "largest 24 hour hackathon India",
    "biggest 24 hour hackathon India",
    "Innosprint",
    "InnoSprint Hackathon",

    // AI / GenAI
    "GenAI Conclave",
    "GenAI Conclave Series",
    "GenAI Conclave Chandigarh",
    "GenAI events India",
    "Generative AI events India",
    "AI events India",
    "AI events Chandigarh",
    "AI developer events India",

    // Location
    "developer events Chandigarh",
    "tech events Chandigarh",
    "developer community Chandigarh",
    "developer events Punjab",
    "tech events Punjab",

    // Community
    "D4 Community events",
    "D4 Community meetups",
    "D4 Community workshops",
  ],

  alternates: {
    canonical: "https://www.d4community.com/events",
  },

  openGraph: {
    title: "D4 Community Events | Meetups, Workshops & Hackathons",

    description:
      "Explore D4 Community events, from developer meetups and hands-on workshops to Hack-N-Win and GenAI Conclave. Learn, build and connect with developers.",

    url: "https://www.d4community.com/events",
    siteName: "D4 Community",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.d4community.com/og-events.png",
        width: 1200,
        height: 630,
        alt: "D4 Community Events",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "D4 Community Events | Meetups, Workshops & Hackathons",

    description:
      "Explore developer meetups, workshops, hackathons and GenAI events hosted by D4 Community.",

    images: ["https://www.d4community.com/og-events.png"],
  },
};

export default function Page() {
  const internalLinks = [
    { name: "D4 Community Home", href: "/" },
    { name: "About D4 Community", href: "/about" },
    { name: "D4 Community Events", href: "/events" },
    { name: "D4 Community Team", href: "/team" },
    { name: "Join D4 Community", href: "/join" },
    { name: "D4 Community Gallery", href: "/gallery" },
    { name: "D4 Community Reviews", href: "/reviews" },
    { name: "Twitter Reviews", href: "/twitter-reviews" },
    { name: "Contact D4 Community", href: "/contact" },
    { name: "Code of Conduct", href: "/code-of-conduct" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      <OrgSchema />

      <main>
        <EventsPage />

        <section
          aria-labelledby="d4-events-introduction"
          className="mx-auto max-w-5xl px-6 py-12"
        >
          <h1
            id="d4-events-introduction"
            className="text-2xl font-semibold"
          >
            Developer Events, Hackathons & Workshops
          </h1>

          <p className="mt-4 text-base leading-7">
            D4 Community brings developers and technology enthusiasts
            together through practical events designed around learning,
            building and sharing. Our events include developer meetups,
            hands-on workshops, technical sessions, hackathons and
            conversations around emerging technologies.
          </p>

          <p className="mt-4 text-base leading-7">
            Our event calendar includes initiatives such as Hack-N-Win and
            the GenAI Conclave, along with community-led sessions covering
            software development, cloud, AI, open source and other areas of
            technology.
          </p>

          <h2 className="mt-8 text-xl font-semibold">
            How to Join a D4 Community Event
          </h2>

          <p className="mt-4 text-base leading-7">
            Browse the events listed above to find an upcoming session.
            Registration details, dates, venues, speakers and participation
            requirements are provided on the respective event page.
          </p>
        </section>

        <nav
          className="sr-only"
          aria-label="D4 Community site navigation"
        >
          <ul>
            {internalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}