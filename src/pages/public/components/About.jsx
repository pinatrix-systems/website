import { Target, Eye } from "lucide-react";
import useReveal from "../../../hooks/useReveal";

const STATS = [
  { num: "10+", label: "Projects" },
  { num: "5+", label: "Technologies" },
  { num: "2+", label: "Years" },
  { num: "100%", label: "Commitment" },
];

const TEAM = [
  { name: "Vivek Saini", role: "Founder & CEO" },
  { name: "Shashank Tyagi", role: "CTO" },
  { name: "Vivek Saini", role: "Lead Developer" },
  { name: "Shashank Tyagi", role: "Game Designer" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref}>
      <div className="about-inner">
        {/* ── ROW 1: Text + Image ── */}
        <div className="about-top-row">
          <div className="about-left reveal-left">
            <p className="about-eyebrow">WHO WE ARE</p>
            <h2 className="about-title">ABOUT US</h2>
            <p className="about-body">
              PINATRIX SYSTEMS is a futuristic technology ecosystem focused on building innovative solutions across gaming, software, AI,
              entertainment and advanced digital systems.
            </p>
            <p className="about-body" style={{ marginTop: 10 }}>
              We combine creativity, engineering and intelligence to create products and experiences that are impactful, scalable and future-ready.
            </p>
            <div className="about-stats">
              {STATS.map(({ num, label }) => (
                <div className="about-stat" key={label}>
                  <div className="about-stat-num">{num}</div>
                  <div className="about-stat-lbl">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-img-wrap reveal-right">
            <img src="/logo.svg" style={{opacity:0.4}} alt="Pinatrix Systems" className="about-img" />
          </div>
        </div>

        {/* ── ROW 2: Mission / Vision ── */}
        <div className="mv-grid">
          <div className="mv-card reveal delay-1">
            <div className="mv-label">
              <Target size={15} strokeWidth={2} color="var(--clr-accent)" />
              <span className="mv-label-text mv-mission">OUR MISSION</span>
            </div>
            <p className="mv-text">
              To design and build intelligent systems that solve real-world problems and create futuristic digital experiences.
            </p>
          </div>
          <div className="mv-card reveal delay-2">
            <div className="mv-label">
              <Eye size={15} strokeWidth={2} color="var(--clr-accent)" />
              <span className="mv-label-text mv-vision">OUR VISION</span>
            </div>
            <p className="mv-text">To become a global leader in digital innovation, security, and advanced technology systems.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
