import { AboutSection, HeroSection } from "./sections";
import { EventCarousel } from "./sections/EventCarousel";
import FeatureSection from "./sections/FeatureSection";
import LogosSlider from "./sections/LogosSlider";
import { UpcomingEvents } from "./sections/UpcomingEvents";
import FAQPage from "./sections/FAQSection";

export const HomePage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <div className="py-12">
        <UpcomingEvents />
      </div>
      <div className="py-12">
        <EventCarousel />
      </div>
      <AboutSection />
      <LogosSlider />
      <FAQPage />
    </main>
  );
};