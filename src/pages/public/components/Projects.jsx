import { useState } from "react";
import useReveal from "../../../hooks/useReveal";

const FILTERS = ["All", "Games", "Apps", "Web", "Design", "Animation"];

const PROJECTS = [
  { name: "Galactic Warfare", type: "PC Game", category: "games", featured: false, img: "/assets/proj-galactic.png" },
  { name: "EduLearn Kids", type: "Learning App", category: "apps", featured: true, img: "/assets/proj-edulearn.png" },
  { name: "City Builder 3D", type: "Simulation Game", category: "games", featured: false, img: "/assets/proj-citybuilder.png" },
  { name: "TaskFlow Pro", type: "Web Application", category: "web", featured: false, img: "/assets/proj-taskflow.png" },
  { name: "MusicVerse Kids", type: "Music Video Series", category: "animation", featured: true, img: "/assets/proj-musicverse.png" },
  { name: "VR Training Sim", type: "VR Simulation", category: "games", featured: false, img: "/assets/proj-vrtraining.png" },
];

function ProjectCard({ name, type, featured, img }) {
  return (
    <div className={`proj-card ${featured ? "proj-card-featured" : ""}`}>
      <div className="proj-img-wrap">
        <img src={img} alt={name} className="proj-img" />
        <div className="proj-img-overlay" />
      </div>
      <div className="proj-info">
        <div className="proj-name">{name}</div>
        <div className="proj-type">{type}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const ref = useReveal();

  const visible = PROJECTS.filter((p) => active === "All" || p.category === active.toLowerCase());

  return (
    <section id="projects" ref={ref}>
      <div className="projects-inner">
        <div className="projects-header reveal">
          <p className="section-eyebrow">OUR WORK</p>
          <h2 className="projects-main-title">FEATURED PROJECTS</h2>
        </div>

        {/* Filter tabs */}
        <div className="proj-filters reveal">
          {FILTERS.map((f) => (
            <button key={f} className={`proj-filter-btn ${active === f ? "active" : ""}`} onClick={() => setActive(f)}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid — re-renders on filter change */}
        <div className="proj-grid">
          {visible.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        <div className="proj-cta-wrap reveal">
          <a href="#" className="proj-view-all">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
