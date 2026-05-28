export default function Navbar() {
  return (
    <>
      <nav>
        <a href="#home" class="nav-logo">
          <img src="/logo-text.svg" alt="Pinatrix" />
        </a>

        <ul class="nav-links">
          <li>
            <a href="#home" class="active">
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

        <a href="#" class="nav-cta">
          Get in Touch
        </a>
      </nav>
    </>
  );
}
