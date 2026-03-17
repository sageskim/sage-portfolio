export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Seyeon Sage Kim is a student at University of Illinois Urbana‑Champaign,
            majoring in Information Science + Data Science.
          </h1>
          <p className="hero-sub">
            She explores how data and technology interact with culture, media, and art,
            based between Illinois, USA and Seoul, South Korea.
          </p>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image-inner">
            {/* Replace with your actual photo: /public/profile.jpg */}
            <img src="/profile.jpg" alt="Seyeon Sage Kim" className="hero-img" />
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <span>© 2026</span>
      </footer>
    </main>
  );
}
