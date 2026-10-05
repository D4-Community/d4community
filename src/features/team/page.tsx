import { TeamHero, CoFounders, Leads, CoreTeam, Volunteers } from './sections';
import { getTeamMembers } from './lib/queries';

const TeamPage = async () => {
  const { organizers, leads, core, volunteers } = await getTeamMembers();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "D4 Community",
      "url": "https://d4community.com",
      "description": "D4 Community is a thriving network of tech enthusiasts, developers, and creators collaborating to build the future.",
      "organizer": {
        "@type": "Person",
        "name": "Ayush Kumar Tiwari",
        "jobTitle": "Organizer",
        "sameAs": [
          "https://linkedin.com/in/itsayu/"
        ]
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <h1 className="sr-only">D4 Community Team - Organized by Ayush Kumar Tiwari</h1>

      {/* <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-1/3" /> */}

      <TeamHero />

      <section className="sr-only">
        <p>
          The D4 Community is organized by Ayush Kumar Tiwari, alongside a structured leadership group comprising Co-Founders, Team Leads, Core Members, and an active network of Volunteers.
        </p>
      </section>

      <CoFounders organizers={organizers} />
      <Leads leads={leads} />
      <CoreTeam core={core} />
      <Volunteers volunteers={volunteers} />
    </div>
  )
}

export default TeamPage;