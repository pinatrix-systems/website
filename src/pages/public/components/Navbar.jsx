import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#divisions", label: "Divisions" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── highlight nav link based on scroll position ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector(href.replace("#", "#"))).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── add shadow when scrolled ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close mobile menu on link click ── */
  const handleLink = () => setMenuOpen(false);

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: "0 4px 24px rgba(0,0,0,0.5)" } : undefined}>
      {/* Logo */}
      <a href="#home" className="nav-logo" onClick={handleLink}>
        <img src="/logo-text.svg" alt="Pinatrix" />
      </a>

      {/* Desktop links */}
      <ul className="nav-links">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className={active === href.slice(1) ? "active" : ""}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className="nav-cta mobile-hidden">
        Get in Touch
      </a>

      {/* Mobile hamburger */}
      <button className="nav-hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
        {menuOpen ? <X size={22} color="#00c8ff" /> : <Menu size={22} color="#00c8ff" />}
      </button>

      {/* Mobile drawer */}
      <div className={`nav-mobile-drawer ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className={`nav-mobile-link ${active === href.slice(1) ? "active" : ""}`} onClick={handleLink}>
            {label}
          </a>
        ))}

        <a href="#contact" className="nav-cta" style={{ marginLeft: 0, marginTop: 8, width: "120px" }} onClick={handleLink}>
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
