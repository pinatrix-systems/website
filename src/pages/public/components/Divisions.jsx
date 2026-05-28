import useReveal from "../../../hooks/useReveal";

const DIVISIONS = [
  {
    num: "01",
    variant: "systems",
    title: "PINATRIX SYSTEMS",
    tag: "Software & Digital Solutions",
    desc: "We build robust software, web and mobile applications, enterprise solutions and digital systems tailored for the future.",
    list: ["Web Development", "Mobile Apps", "Enterprise Solutions", "UI/UX Design"],
    bg: "/assets/div-systems-bg.png",
  },
  {
    num: "02",
    variant: "studios",
    title: "PINATRIX STUDIOS",
    tag: "Gaming & Interactive Experiences",
    desc: "We create immersive games, simulations and interactive experiences across multiple platforms.",
    list: ["Game Development", "3D/2D Art", "AR/VR Experiences", "Game Prototypes"],
    bg: "/assets/div-studios-bg.png",
  },
  {
    num: "03",
    variant: "entertainment",
    title: "PINATRIX ENTERTAINMENT",
    tag: "Educational & Digital Media",
    desc: "We produce engaging content and educational systems for children to learn, explore and enjoy.",
    list: ["Kids Music Videos", "Educational Apps", "Learning Systems", "Animated Content"],
    bg: "/assets/div-entertainment-bg.png",
  },
  {
    num: "04",
    variant: "labs",
    title: "PINATRIX LABS",
    tag: "AI, Security & Future Technologies",
    desc: "Research and development division focused on AI, security, surveillance and defense technologies.",
    list: ["Artificial Intelligence", "Surveillance Systems", "Cyber Security", "Defense Solutions"],
    bg: "/assets/div-labs-bg.png",
  },
];

function DivisionCard({ num, variant, title, tag, desc, list, bg, delay }) {
  return (
    <div className={`div-card div-card-${variant} reveal delay-${delay}`}>
      {/* background image — swap bg path when ready */}
      <div className="div-card-bg" style={{ backgroundImage: `url('${bg}')` }} />
      <div className={`div-card-overlay overlay-${variant}`} />

      <div className="div-card-content">
        <div className="div-num">{num}</div>
        <div className="div-logo-wrap">
          <img src="/logo.svg" alt={title} className="div-logo" />
        </div>
        <div className="div-card-name">{title}</div>
        <div className={`div-card-tag tag-${variant}`}>{tag}</div>
        <p className="div-card-desc">{desc}</p>
        <ul className="div-list">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href="#" className={`div-learn-more learn-${variant}`}>
          Learn More →
        </a>
      </div>
    </div>
  );
}

export default function Divisions() {
  const ref = useReveal();

  return (
    <section id="divisions" ref={ref}>
      <div className="divisions-inner">
        <div className="divisions-header reveal">
          <p className="section-eyebrow">OUR ECOSYSTEM</p>
          <h2 className="divisions-main-title">OUR DIVISIONS</h2>
          <p className="divisions-subtitle">
            Different strengths. One purpose.
            <br />
            Explore our divisions and how each one contributes
            <br />
            to our vision of building the future.
          </p>
        </div>

        <div className="div-cards-grid">
          {DIVISIONS.map((div, i) => (
            <DivisionCard key={div.variant} {...div} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
