export default function Home() {
  return (
    <>
      <section id="home">
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
              <a href="#" className="btn-primary">
                Explore Ecosystem
              </a>
              <a href="#" className="btn-outline">
                View Our Work
              </a>
            </div>
          </div>
        </div>

        <div className="ecosystem">
          <p className="section-eyebrow">OUR ECOSYSTEM</p>
          <h2 className="section-title">Four Divisions. One Vision.</h2>

          <div className="divisions-grid">
            <div className="division-card card-systems">
              <div className="card-icon icon-systems">
                <img src="/logo.svg" alt="Pinatrix Systems" />
              </div>
              <div className="card-name">PINATRIX SYSTEMS</div>
              <div className="card-tagline tag-systems">Software & Digital Solutions</div>
              <div className="card-desc">Scalable software, web, mobile & enterprise systems.</div>
              <a href="#" className="card-explore explore-systems">
                Explore →
              </a>
            </div>

            <div className="division-card card-studios">
              <div className="card-icon icon-studios">
                <img src="/logo.svg" alt="Pinatrix Studios" />
              </div>
              <div className="card-name">PINATRIX STUDIOS</div>
              <div className="card-tagline tag-studios">Gaming & Interactive Experiences</div>
              <div className="card-desc">Game development, simulations & immersive technologies.</div>
              <a href="#" className="card-explore explore-studios">
                Explore →
              </a>
            </div>

            <div className="division-card card-entertainment">
              <div className="card-icon icon-entertainment">
                <img src="/logo.svg" alt="Pinatrix Entertainment" />
              </div>
              <div className="card-name">PINATRIX ENTERTAINMENT</div>
              <div className="card-tagline tag-entertainment">Educational & Digital Media</div>
              <div className="card-desc">Kids content, music, education systems & interactive learning.</div>
              <a href="#" className="card-explore explore-entertainment">
                Explore →
              </a>
            </div>

            <div className="division-card card-labs">
              <div className="card-icon icon-labs">
                <img src="/logo.svg" alt="Pinatrix Labs" />
              </div>
              <div className="card-name">PINATRIX LABS</div>
              <div className="card-tagline tag-labs">AI, Security & Future Technologies</div>
              <div className="card-desc">Research, AI, surveillance, security & defense innovations.</div>
              <a href="#" className="card-explore explore-labs">
                Explore →
              </a>
            </div>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/logo.svg" alt="Pinatrix Systems" />
            </div>
            <div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/logo.svg" alt="Pinatrix Studios" />
            </div>
            <div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/logo.svg" alt="Pinatrix Entertainment" />
            </div>
            <div>
              <div className="stat-number">2+</div>
              <div className="stat-label">Years of Innovation</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/logo.svg" alt="Pinatrix Labs" />
            </div>
            <div>
              <div className="stat-number">Future</div>
              <div className="stat-label">Is Our Focus</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
