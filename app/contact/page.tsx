const email = {
  value: "seyeonk4@illinois.edu",
  href: "mailto:seyeonk4@illinois.edu",
};

const socialLinks = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/seyeon-kim-911ab6347" },
  { label: "GitHub",    href: "https://github.com/sageskim" },
  { label: "Instagram", href: "https://www.instagram.com/klmseyeon/" },
  { label: "YouTube",   href: "https://www.youtube.com/@seyeonsagekim" },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-grid">
        {/* Left col */}
        <div className="contact-left">
          <h1 className="contact-heading">Get in<br />touch.</h1>
        </div>

        {/* Right col */}
        <div className="contact-right">
          <p className="contact-sub">
            Open to collaborations, job and research opportunities,
            and interesting conversations. Feel free to visit my socials
            and don't hesitate to email me if you have any questions.
          </p>

          {/* Email */}
          <div className="contact-email-section">
            <span className="contact-section-label">Email</span>
            <a href={email.href} className="contact-email-value">
              {email.value}
            </a>
          </div>

          {/* Socials */}
          <div className="contact-socials-section">
            <span className="contact-section-label">Socials</span>
            <div className="contact-social-list">
              {socialLinks.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  className="contact-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{l.label}</span>
                  <span className="contact-social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
