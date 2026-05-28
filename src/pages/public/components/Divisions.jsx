function DivisionCard({ num, title, tag, desc, list, variant }) {
  return (
    <div className={`div-card div-card-${variant}`}>
      <div className="div-card-bg" style={{ backgroundImage: "url('/logo.svg')" }}></div>

      <div className={`div-card-overlay overlay-${variant}`}></div>

      <div className="div-card-content">
        <div className="div-num">{num}</div>

        <div className="div-logo-wrap">
          <img src="/logo.svg" alt={`${title} logo`} className="div-logo" />
        </div>

        <div className="div-card-name">{title}</div>
        <div className={`div-card-tag tag-${variant}`}>{tag}</div>

        <p className="div-card-desc">{desc}</p>

        <ul className="div-list">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
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
  return (
    <section id="divisions">
      <div className="divisions-inner">
        <div className="divisions-header">
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
          {/* SYSTEMS */}
          <DivisionCard
            num="01"
            title="PINATRIX SYSTEMS"
            tag="Software & Digital Solutions"
            desc="We build robust software, web and mobile applications, enterprise solutions and digital systems tailored for the future."
            list={["Web Development", "Mobile Apps", "Enterprise Solutions", "UI/UX Design"]}
            variant="systems"
          />

          {/* STUDIOS */}
          <DivisionCard
            num="02"
            title="PINATRIX STUDIOS"
            tag="Gaming & Interactive Experiences"
            desc="We create immersive games, simulations and interactive experiences across multiple platforms."
            list={["Game Development", "3D/2D Art", "AR/VR Experiences", "Game Prototypes"]}
            variant="studios"
          />

          {/* ENTERTAINMENT */}
          <DivisionCard
            num="03"
            title="PINATRIX ENTERTAINMENT"
            tag="Educational & Digital Media"
            desc="We produce engaging content and educational systems for children to learn, explore and enjoy."
            list={["Kids Music Videos", "Educational Apps", "Learning Systems", "Animated Content"]}
            variant="entertainment"
          />

          {/* LABS */}
          <DivisionCard
            num="04"
            title="PINATRIX LABS"
            tag="AI, Security & Future Technologies"
            desc="Research and development division focused on AI, security, surveillance and defense technologies."
            list={["Artificial Intelligence", "Surveillance Systems", "Cyber Security", "Defense Solutions"]}
            variant="labs"
          />
        </div>
      </div>
    </section>
  );
}
