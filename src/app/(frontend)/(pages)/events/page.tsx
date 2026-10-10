import EventsPage from "@/features/events/page";
import OrgSchema from "@/schema/org-schema";
import { Metadata } from "next";
import { Terminal, Trophy, Code2, Cpu, ArrowRight } from "lucide-react";

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

      <EventsPage />

      {/* Community Events & Initiatives Overview Section */}
      <section
        aria-labelledby="d4-events-introduction"
        className="relative w-full border-t border-black/5 dark:border-white/10 bg-white dark:bg-black overflow-hidden"
      >
        {/* Technical Grid Pattern - Exactly matching EventsHero */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pt-8 sm:pt-12 md:pt-20 pb-16 md:pb-24 space-y-10 sm:space-y-12 md:space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] sm:text-xs font-mono tracking-widest text-[#fd7d6e] uppercase">
              <Terminal className="w-3.5 h-3.5 text-[#fd7d6e]" />
              <span>D4: Initiatives</span>
            </div>

            <h2
              id="d4-events-introduction"
              className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-[0.95] sm:leading-[0.9] tracking-tighter break-words"
            >
              DEVELOPER EVENTS,
              <br />
              <span className="text-[#fd7d6e]">HACKATHONS & WORKSHOPS.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed pt-1 sm:pt-2">
              D4 Community brings developers and technology enthusiasts together through practical events designed around learning, building and sharing. Our events include developer meetups, hands-on workshops, technical sessions, hackathons and conversations around emerging technologies.
            </p>
          </div>

          {/* Event Format Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="group relative p-6 sm:p-7 lg:p-8 rounded-2xl bg-zinc-50/60 dark:bg-zinc-950/40 border border-black/10 dark:border-white/10 hover:border-[#fd7d6e]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#fd7d6e]/5 flex flex-col">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Code2 className="w-5 h-5 text-[#fd7d6e]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Meetups & Workshops
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                  Interactive developer meetups, practical hands-on workshops, and community-led technical sessions covering software development, cloud, and open source.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 sm:p-7 lg:p-8 rounded-2xl bg-zinc-50/60 dark:bg-zinc-950/40 border border-black/10 dark:border-white/10 hover:border-[#fd7d6e]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#fd7d6e]/5 flex flex-col">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Trophy className="w-5 h-5 text-[#fd7d6e]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Hack-N-Win & Hackathons
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                  Our flagship competitive initiatives like Hack-N-Win and InnoSprint bring top builders together for intense 24-hour sprints to build and launch production solutions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 sm:p-7 lg:p-8 rounded-2xl bg-zinc-50/60 dark:bg-zinc-950/40 border border-black/10 dark:border-white/10 hover:border-[#fd7d6e]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#fd7d6e]/5 flex flex-col">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Cpu className="w-5 h-5 text-[#fd7d6e]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  GenAI Conclave
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                  Multi-city Generative AI community series and technical summits exploring machine learning, autonomous agents, and cutting-edge intelligence architectures.
                </p>
              </div>
            </div>
          </div>

          {/* How to Join Section */}
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-zinc-50/60 dark:bg-zinc-950/50 border border-black/10 dark:border-white/10 space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#fd7d6e]">
                  PARTICIPATION GUIDE
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                  How to Join a D4 Community Event
                </h3>
              </div>
              <a
                href="#UpcomingEvents"
                className="inline-flex items-center gap-1.5 py-1 text-xs font-mono font-bold text-[#fd7d6e] hover:underline uppercase tracking-wider group"
              >
                <span>View Event Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-black/5 dark:border-white/5">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="text-[11px] sm:text-xs font-mono font-bold text-[#fd7d6e]">01. DISCOVER</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Browse Calendar</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                  Browse the events listed above to find an upcoming session that matches your interest and tech stack.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="text-[11px] sm:text-xs font-mono font-bold text-[#fd7d6e]">02. REGISTER</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Check Details</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                  Registration details, dates, venues, speakers, and participation requirements are provided on the respective event page.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="text-[11px] sm:text-xs font-mono font-bold text-[#fd7d6e]">03. PARTICIPATE</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Learn & Build</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                  Show up, connect with passionate developers, build projects, and contribute to the community ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
}