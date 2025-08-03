export const HighlightsSection = () => {
  const highlights = [
    {
      title: "Soham & Harshit's vlog",
      bullets: [
        "Soham challenged a vada pav vendor to a spice-off... and lost.",
        "Harshit thought Marine Drive was a swimming pool.",
        "They both tried bargaining at Colaba, the shopkeeper won.",
        "Tried to take a selfie at Gateway of India.",
        "Soham tried dancing, the crowd ran faster than Mumbai traffic.",
        "Harshit asked a cat for directions. It meowed and left.",
        "Local train entry: 1/10. Exit: 0/10. Survival: Legendary.",
        "Got mistaken for travel vloggers... and went with it.",
        "Discovered a ‘secret’ chai stall, turned out it was just a guy’s house.",
        "Returned home with memories, sunburns, and 2kg of ganna juice.",
      ],
      video: "/team/vid1.mov",
      poster: "/team/poster1.jpg", // optional
    },
    {
      title: "Bittu Didi’s Gym Revenge Arc (Season 2)",
      bullets: [
        "Bittu Didi entered the gym, protein powder trembled in fear.",
        "She did 3 squats and the Earth shifted slightly.",
        "Benched her emotions, curled her haters.",
        "Her side-eye burned more calories than the treadmill.",
        "Gym bros asked for tips, she gave them terror instead.",
        "Did bicep curls while watching K-dramas. Multitasking queen.",
        "Her rest time? Planning world domination in between sets.",
        "One push-up and the dumbbells ran under the bench.",
        "Trainer tried to correct her form, now he trains from home.",
        "Revenge isn't sweet, it's sassy, and shredded. That’s Bittu Didi.",
      ],
      video: "/team/vid2.mov",
      poster: "/team/poster2.jpg", // optional
    },
  ];

  return (
    <section id="featured" className="py-24 relative px-4 mb-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          The <span className="text-primary">Srivastava</span> moments
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Some of the featured highlight memories of the Srivastava Family.
        </p>

        <div className="space-y-24 mt-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* Text */}
              <div className="text-left w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <ul className="list-disc  text-xs md:text-base list-inside text-muted-foreground space-y-5">
                  {item.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Video Card */}
              <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-md card-hover">
                <video
                  src={item.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={item.poster} // optional fallback image
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
