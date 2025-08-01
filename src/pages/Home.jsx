import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { HighlightsSection } from "../components/HighlightSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />

      {/* background effects */}
      <StarBackground />

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
