function ServiceCard({ name, desc, iconColor }) {
  return (
    <div className="svc-card">
      <div className={`svc-icon-wrap svc-icon-${iconColor}`}>
        <img src="/logo.svg" alt={`${name} icon`} className="svc-icon" />
      </div>
      <div className="svc-name">{name}</div>
      <p className="svc-desc">{desc}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      name: "Mobile Development",
      desc: "High performance mobile apps for Android & iOS.",
      iconColor: "blue",
    },
    {
      name: "Web Development",
      desc: "Modern, responsive and scalable web applications.",
      iconColor: "blue",
    },
    {
      name: "UI / UX Design",
      desc: "Beautiful, intuitive and user-friendly designs.",
      iconColor: "purple",
    },
    {
      name: "Game Development",
      desc: "Engaging games for all platforms and genres.",
      iconColor: "cyan",
    },
    {
      name: "AI Integration",
      desc: "Integrate AI to automate processes and enhance experiences.",
      iconColor: "blue",
    },
    {
      name: "Backend Development",
      desc: "Robust and secure backend systems & APIs.",
      iconColor: "blue",
    },
    {
      name: "Cloud Solutions",
      desc: "Scalable cloud infrastructure & deployment.",
      iconColor: "orange",
    },
    {
      name: "Maintenance & Support",
      desc: "Ongoing support and maintenance for smooth performance.",
      iconColor: "cyan",
    },
  ];

  return (
    <section id="services">
      <div className="services-inner">
        <div className="services-header">
          <p className="section-eyebrow">WHAT WE DO</p>
          <h2 className="services-main-title">OUR SERVICES</h2>
          <p className="services-subtitle">
            End-to-end digital services to turn your ideas
            <br />
            into powerful solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="svc-cta-bar">
          <div className="svc-cta-text">
            <div className="svc-cta-title">Have a project in mind?</div>
            <div className="svc-cta-sub">Let's build something amazing together.</div>
          </div>
          <a href="#" className="svc-cta-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
