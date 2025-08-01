import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in block text-4xl">
              Welcome!
            </span>
            <span className="text-4xl text-gradient mr-2 opacity-0 animate-fade-in-delay-1 ">
              This is {"  "}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2 text-5xl">
              {" "}
              'Kayastha'
            </span>{" "}
            <span className="text-4xl text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Parivaar
            </span>
          </h1>
          <p className="text-md md:text-md text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
            {" "}
            At our company, we handle everything, from zameen ki Mahabharat to
            extended family drama.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Meet the Team
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> scroll </span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
      </div>
    </section>
  );
};
