const email = {
  label: "Email",
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
      <section className="contact-intro">
        <h1 className="contact-heading">Get in touch.</h1>
        <p className="contact-sub">
          Open to collaborations, research opportunities, and interesting conversations.
        </p>
      </section>

      <a href={email.href} className="contact-email-block">
        <span className="contact-email-label">Email</span>
        <span className="contact-email-value">{email.value}</span>
        <span className="contact-email-arrow">↗</span>
      </a>

      <div className="contact-links">
        {socialLinks.map((l, i) => (
          <a
            key={i}
            href={l.href}
            className="contact-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">{l.label}</span>
            <span className="contact-link-arrow">↗</span>
          </a>
        ))}
      </div>
    </main>
  );
}
