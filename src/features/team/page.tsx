import { TeamHero, CoFounders, Leads, CoreTeam, Volunteers} from './sections';

const TeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
     
      
      {/* Background ambient glows for depth */}
     
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-1/3" />

      <TeamHero />
      <CoFounders />
      <Leads />
      <CoreTeam />
      <Volunteers />
    </div>
  )
}

export default TeamPage