export default function Navbar() {
  return (
    <>
      <nav>
        <a href="#home" className="nav-logo">
          <img src="/logo-text.svg" alt="Pinatrix" />
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Divisions</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Labs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <a href="#" className="nav-cta">
          Get in Touch
        </a>
      </nav>
    </>
  );
}
