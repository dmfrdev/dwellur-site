export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="dwellur home">
          dwellur
        </a>
        <a className="contact-link" href="mailto:support@dwellur.com">
          support@dwellur.com
        </a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image-card">
          <img
            src="/dwellur-hero.jpg"
            alt="A dwellur app screen shown on an iPhone in a warm modern home setting."
            className="hero-image"
          />
          <div className="image-fallback" aria-hidden="true">
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="screen-header">Properties</div>
                <div className="screen-card large">
                  <span>The Marlowe House</span>
                  <small>Move-in record · 8 rooms</small>
                </div>
                <div className="screen-card">
                  <span>Kitchen</span>
                  <small>Good · 12 photos</small>
                </div>
                <div className="screen-card">
                  <span>Move-in report</span>
                  <small>Ready to export</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-copy">
          <h1 id="hero-title">the modern home record</h1>
          <p className="subcopy">
            dwellur helps property owners keep photos, notes, inspections, and reports in one organized place.
          </p>
        </div>
      </section>

      <footer className="footer">
        <span>dwellur</span>
        <a href="mailto:support@dwellur.com">support@dwellur.com</a>
      </footer>
    </main>
  );
}
