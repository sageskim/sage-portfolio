export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-title">
            Seyeon Sage Kim is a student at University of Illinois Urbana‑Champaign,
            majoring in Information Science + Data Science.{" "}
            <span className="hero-title-sub">
              She explores how data and technology interact with culture, media, and art,
              based between Illinois, USA and Seoul, South Korea.
            </span>
          </p>
        </div>
        <div className="hero-image-inner">
          {/* Replace with your actual photo: /public/profile.jpg */}
          <img src="/profile.jpg" alt="Seyeon Sage Kim" className="hero-img" />
        </div>
      </section>

      <footer className="home-footer">
        <span>© 2026</span>
      </footer>
    </main>
  );
}
