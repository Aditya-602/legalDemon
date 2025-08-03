import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { HighlightsSection } from "../components/HighlightSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { StarBackground } from "../components/StarBackground";
import Aurora from "../lib/animation/Aurora";

export const Home = () => {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* theme toggle */}

      {/* background effects */}
      {/* <StarBackground /> */}
      <Aurora />

      {/* navbar */}
      <Navbar />

      {/* main content */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HighlightsSection />
      <ContactSection />

      {/* footer */}
      <Footer />
    </div>
  );
};
