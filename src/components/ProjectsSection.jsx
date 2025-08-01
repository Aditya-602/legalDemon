const projects = [
  {
    id: 1,
    title: "Chief Executive Officer",
    description: "Leads Srivastava corp. with vision and strategy.",
    image: "/team/img1.jpeg",
    tags: ["Supreme Court", "Parliament"],
  },
  {
    id: 2,
    title: "Chief Technology Officer",
    description: "Heads technology and development, and overall welfare.",
    image: "/team/img2.jpeg",
    tags: ["Technology", "Engineering"],
  },
  {
    id: 3,
    title: "Chief Design Officer",
    description: "Manages design and creative direction.",
    image: "/team/img3.jpeg",
    tags: ["Design", "Creativity"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          The <span className="text-primary"> Team </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Meet our core leadership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
