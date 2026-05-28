export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-bg">
        <img src="/logo.svg" alt="Pinatrix background logo" className="footer-bg-img" />
        <div className="footer-bg-overlay"></div>
      </div>

      <div className="footer-content">
        <p className="footer-quote">Let's Build the Future Together</p>
        <p className="footer-tagline">Design, Build, Scale</p>

        <div className="footer-logo">
          <img src="/logo.svg" alt="Pinatrix Systems logo" />
        </div>
      </div>
    </footer>
  );
}
