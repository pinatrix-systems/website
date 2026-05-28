import { Layers, Cpu, Clock, Rocket } from "lucide-react";
import useReveal from "../../../hooks/useReveal";

const STATS = [
  { num: "10+", label: "Projects Delivered", Icon: Layers },
  { num: "5+", label: "Technologies", Icon: Cpu },
  { num: "2+", label: "Years of Innovation", Icon: Clock },
  { num: "Future", label: "Is Our Focus", Icon: Rocket },
];

const DIVISIONS = [
  {
    variant: "systems",
    name: "PINATRIX SYSTEMS",
    tag: "Software & Digital Solutions",
    desc: "Scalable software, web, mobile & enterprise systems.",
  },
  {
    variant: "studios",
    name: "PINATRIX STUDIOS",
    tag: "Gaming & Interactive Experiences",
    desc: "Game development, simulations & immersive technologies.",
  },
  {
    variant: "entertainment",
    name: "PINATRIX ENTERTAINMENT",
    tag: "Educational & Digital Media",
    desc: "Kids content, music, education systems & interactive learning.",
  },
  {
    variant: "labs",
    name: "PINATRIX LABS",
    tag: "AI, Security & Future Technologies",
    desc: "Research, AI, surveillance, security & defense innovations.",
  },
];

export default function Home() {
  const statsRef = useReveal();

  return (
    <section id="home">
      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            <span className="line-white">DESIGN</span>
            <span className="line-white">BUILD</span>
            <span className="line-cyan">SCALE</span>
          </h1>
          <p className="hero-subtitle">Building Future-Ready Digital Systems</p>
          <p className="hero-tags">
            Gaming. AI. Software. Entertainment.
            <br />
            Security. And Beyond.
          </p>
          <div className="hero-btns">
            <a href="#divisions" className="btn-primary">
              Explore Ecosystem
            </a>
            <a href="#contact" className="btn-outline">
              View Our Work
            </a>
          </div>
        </div>
      </div>


      {/* ── STATS BAR ── */}
      <div className="stats-bar" ref={statsRef}>
        {STATS.map(({ num, label, Icon }, i) => (
          <div className={`stat-item reveal delay-${i + 1}`} key={label}>
            <div className="stat-icon">
              <Icon size={22} strokeWidth={1.6} color="var(--clr-accent)" />
            </div>
            <div>
              <div className="stat-number">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
