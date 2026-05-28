export default function Labs() {
  const features = [
    {
      name: "AI-Powered",
      desc: "Intelligence systems for smarter decision-making.",
    },
    {
      name: "Smart Surveillance",
      desc: "Real-time monitoring & intelligent analytics.",
    },
    {
      name: "Advanced Security",
      desc: "Protecting systems, data and infrastructures.",
    },
    {
      name: "Defense Innovation",
      desc: "Building future-ready defense technologies.",
    },
  ];

  const list = [
    "Artificial Intelligence",
    "Advanced Surveillance",
    "Cyber Security",
    "Robotics & Automation",
    "Defense Technologies",
    "Edge Computing",
  ];

  return (
    <section id="labs">
      {/* HERO */}
      <div className="labs-hero">
        {/* LEFT */}
        <div className="labs-left">
          <p className="section-eyebrow">OUR VISION</p>
          <h2 className="labs-title">PINATRIX LABS</h2>
          <p className="labs-tagline">Research. Innovate. Secure the Future.</p>

          <p className="labs-desc">
            Pinatrix Labs is our advanced R&amp;D division working on next-generation technologies in AI, security, surveillance, robotics and defense
            systems.
          </p>

          <ul className="labs-list">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <a href="#" className="labs-cta-btn">
            Explore Our Vision
          </a>
        </div>

        {/* RIGHT */}
        <div className="labs-right">
          <div className="labs-img-wrap">
            <img src="/logo.svg" alt="Pinatrix Labs globe visualization" className="labs-globe-img" />
            <div className="labs-img-overlay"></div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="labs-features">
        {features.map((feat, i) => (
          <FeatureCard key={i} {...feat} />
        ))}
      </div>

      {/* QUOTE */}
      <div className="labs-quote-bar">
        <p className="labs-quote">
          We are not just building products.
          <br />
          We are building the future.
        </p>
      </div>
    </section>
  );
}

function FeatureCard({ name, desc }) {
  return (
    <div className="labs-feat-item">
      <div className="labs-feat-icon">
        <img src="/logo.svg" alt={`${name} icon`} />
      </div>
      <div className="labs-feat-name">{name}</div>
      <p className="labs-feat-desc">{desc}</p>
    </div>
  );
}
