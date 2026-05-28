import { Smartphone, Globe, Palette, Gamepad2, Brain, Server, Cloud, Wrench } from "lucide-react";
import useReveal from "../../../hooks/useReveal";

const SERVICES = [
  { name: "Mobile Development", desc: "High performance mobile apps for Android & iOS.", Icon: Smartphone, iconColor: "blue" },
  { name: "Web Development", desc: "Modern, responsive and scalable web applications.", Icon: Globe, iconColor: "blue" },
  { name: "UI / UX Design", desc: "Beautiful, intuitive and user-friendly designs.", Icon: Palette, iconColor: "purple" },
  { name: "Game Development", desc: "Engaging games for all platforms and genres.", Icon: Gamepad2, iconColor: "cyan" },
  { name: "AI Integration", desc: "Integrate AI to automate processes and enhance experiences.", Icon: Brain, iconColor: "blue" },
  { name: "Backend Development", desc: "Robust and secure backend systems & APIs.", Icon: Server, iconColor: "blue" },
  { name: "Cloud Solutions", desc: "Scalable cloud infrastructure & deployment.", Icon: Cloud, iconColor: "orange" },
  { name: "Maintenance & Support", desc: "Ongoing support and maintenance for smooth performance.", Icon: Wrench, iconColor: "cyan" },
];

/* icon stroke colour per variant */
const ICON_COLOUR = {
  blue: "#38bdf8",
  purple: "#c084fc",
  cyan: "#00c8ff",
  orange: "#fb923c",
  green: "#4ade80",
};

function ServiceCard({ name, desc, Icon, iconColor, delay }) {
  return (
    <div className={`svc-card reveal delay-${delay}`}>
      <div className={`svc-icon-wrap svc-icon-${iconColor}`}>
        <Icon size={24} strokeWidth={1.6} color={ICON_COLOUR[iconColor]} />
      </div>
      <div className="svc-name">{name}</div>
      <p className="svc-desc">{desc}</p>
    </div>
  );
}

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref}>
      <div className="services-inner">
        <div className="services-header reveal">
          <p className="section-eyebrow">WHAT WE DO</p>
          <h2 className="services-main-title">OUR SERVICES</h2>
          <p className="services-subtitle">
            End-to-end digital services to turn your ideas
            <br />
            into powerful solutions.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.name} {...svc} delay={Math.min(i + 1, 6)} />
          ))}
        </div>

        <div className="svc-cta-bar reveal">
          <div className="svc-cta-text">
            <div className="svc-cta-title">Have a project in mind?</div>
            <div className="svc-cta-sub">Let's build something amazing together.</div>
          </div>
          <a href="#contact" className="svc-cta-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
