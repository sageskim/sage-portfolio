const links = [
  {
    label: "Email",
    value: "seyeonk4@illinois.edu",
    href: "mailto:seyeonk4@illinois.edu",
  },
  {
    label: "LinkedIn",
    value: "seyeon-kim-911ab6347",
    href: "https://www.linkedin.com/in/seyeon-kim-911ab6347",
  },
  {
    label: "GitHub",
    value: "sageskim",
    href: "https://github.com/sageskim",
  },
  {
    label: "Instagram",
    value: "@klmseyeon",
    href: "https://www.instagram.com/klmseyeon/",
  },
  {
    label: "YouTube",
    value: "@seyeonsagekim",
    href: "https://www.youtube.com/@seyeonsagekim",
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-intro">
        <h1 className="contact-heading">Let's talk.</h1>
        <p className="contact-sub">
          Open to collaborations, research opportunities, and interesting conversations.
        </p>
      </section>

      <div className="contact-links">
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            className="contact-link-item"
            target={l.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">{l.label}</span>
            <span className="contact-link-value">{l.value}</span>
            <span className="contact-link-arrow">↗</span>
          </a>
        ))}
      </div>
    </main>
  );
}
