import { Code, User, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="text-primary">us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN — just this is left-aligned */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              A legacy rooted in the Family.
            </h3>

            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                Established in <strong>1847</strong>, Srivastava Corp. has stood
                strong across generations.
              </li>
              <li>
                <strong>Daadi</strong> our CEO, is the force behind it all—known
                for her precision and ability to weather recessions and
                algorithm updates.
              </li>

              <li>
                <strong>Chachu</strong> our CTO, is the heart of internal
                operations. Calm and composed.
              </li>
              <li>
                <strong>Bua</strong> our CDO, brings soul to our structure. With
                an eye for detail and a heart for people.
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="contact" className="cosmic-button">
                get in touch
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - stacked cards remain centered */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="px-10">
                  <h4 className="text-lg font-semibold">People First</h4>
                  <p className="text-muted-foreground text-sm">
                    We build with empathy. Behind every pixel is a person.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="px-10">
                  <h4 className="text-lg font-semibold">Code with Soul</h4>
                  <p className="text-muted-foreground text-sm">
                    Every line we write is crafted with care.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="px-10">
                  <h4 className="text-lg font-semibold">Fueled by Purpose</h4>
                  <p className="text-muted-foreground text-sm">
                    We don’t just build things - we chase impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
