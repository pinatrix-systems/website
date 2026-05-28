export default function Projects() {
  const projects = [
    {
      name: "Galactic Warfare",
      type: "PC Game",
      category: "games",
      featured: false,
    },
    {
      name: "EduLearn Kids",
      type: "Learning App",
      category: "apps",
      featured: true,
    },
    {
      name: "City Builder 3D",
      type: "Simulation Game",
      category: "games",
      featured: false,
    },
    {
      name: "TaskFlow Pro",
      type: "Web Application",
      category: "web",
      featured: false,
    },
    {
      name: "MusicVerse Kids",
      type: "Music Video Series",
      category: "animation",
      featured: true,
    },
    {
      name: "VR Training Sim",
      type: "VR Simulation",
      category: "games",
      featured: false,
    },
  ];

  return (
    <section id="projects">
      <div className="projects-inner">
        <div className="projects-header">
          <p className="section-eyebrow">OUR WORK</p>
          <h2 className="projects-main-title">FEATURED PROJECTS</h2>
        </div>

        <div className="proj-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        <div className="proj-cta-wrap">
          <a href="#" className="proj-view-all">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ name, type, category, featured }) {
  return (
    <div className={`proj-card ${featured ? "proj-card-featured" : ""}`} data-category={category}>
      <div className="proj-img-wrap">
        <img src="/logo.svg" alt={`${name} project preview`} className="proj-img" />
        <div className="proj-img-overlay"></div>
      </div>

      <div className="proj-info">
        <div className="proj-name">{name}</div>
        <div className="proj-type">{type}</div>
      </div>
    </div>
  );
}
