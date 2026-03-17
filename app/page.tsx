export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="hero-title">
          Seyeon Sage Kim is a student at University of Illinois Urbana‑Champaign,<br />
          majoring in Information Science + Data Science.<br />
          She explores how data and technology interact with culture, media, and art,<br />
          based between Illinois, USA and Seoul, South Korea.
        </p>
        <div className="hero-image-inner">
          <img src="/profile.jpg" alt="Seyeon Sage Kim" className="hero-img" />
        </div>
      </section>

      <footer className="home-footer">
        <span>© 2026</span>
      </footer>
    </main>
  );
}
