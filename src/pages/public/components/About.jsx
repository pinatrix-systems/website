export default function About() {
  return (
    <section id="about">
      <div className="about-inner">
        {/* ROW 1 */}
        <div className="about-top-row">
          <div className="about-left">
            <p className="about-eyebrow">WHO WE ARE</p>
            <h2 className="about-title">ABOUT US</h2>
            <p className="about-body">
              PINATRIX SYSTEMS is a futuristic technology ecosystem focused on building innovative solutions across gaming, software, AI,
              entertainment and advanced digital systems.
            </p>
            <p className="about-body" style={{ marginTop: "10px" }}>
              We combine creativity, engineering and intelligence to create products and experiences that are impactful, scalable and future-ready.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-num">10+</div>
                <div className="about-stat-lbl">Projects</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">5+</div>
                <div className="about-stat-lbl">Technologies</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">2+</div>
                <div className="about-stat-lbl">Years</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">100%</div>
                <div className="about-stat-lbl">Commitment</div>
              </div>
            </div>
          </div>

          <div className="about-img-wrap">
            <img src="/logo.svg" alt="Pinatrix Systems Logo" className="about-img" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="mv-grid">
          <div className="mv-card">
            <div className="mv-label">
              <img src="/logo.svg" alt="Mission Icon" className="mv-icon" />
              <span className="mv-label-text mv-mission">OUR MISSION</span>
            </div>
            <p className="mv-text">
              To design and build intelligent systems that solve real-world problems and create futuristic digital experiences.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-label">
              <img src="/logo.svg" alt="Vision Icon" className="mv-icon" />
              <span className="mv-label-text mv-vision">OUR VISION</span>
            </div>
            <p className="mv-text">To become a global leader in digital innovation, security, and advanced technology systems.</p>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="team-block">
          <div className="team-heading">
            <span className="team-title">OUR TEAM</span>
            <span className="team-sub">Passionate creators. Innovative thinkers.</span>
          </div>

          <div className="team-grid">
            {[
              { name: "Aaryan T.", role: "Founder & CEO" },
              { name: "Rohan M.", role: "CTO" },
              { name: "Dev P.", role: "Lead Developer" },
              { name: "Kunal S.", role: "Game Designer" },
            ].map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-photo">
                  <img src="/logo.svg" alt={`${member.name} profile`} />
                </div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
            ))}
          </div>

          <div className="team-cta-wrap">
            <a href="#" className="btn-team-cta">
              Join Our Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
