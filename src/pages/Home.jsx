import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import Orb from "../lib/animation/Orb";

export const Home = () => {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden relative">
    
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={300}
          forceHoverState={false}
        />


      <Navbar />

      <HeroSection />
      
      <AboutSection />
      <ContactSection />

      <Footer />
    </div>
  );
};