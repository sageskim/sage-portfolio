const ArrowSvg = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    viewBox="0 0 10 10"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 9L9 1M9 1H3M9 1V7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
        <div className="contact-left">
          <h1 className="contact-heading">Get in<br />touch.</h1>
        </div>

        <div className="contact-right">
          <p className="contact-sub">
            Open to collaborations, job and research opportunities,
            and interesting conversations. Feel free to visit my socials
            and don't hesitate to email me if you have any questions.
          </p>

          <div className="contact-email-section">
            <span className="contact-section-label">Email</span>
            <a href={email.href} className="contact-email-value">
              {email.value}
              <ArrowSvg className="contact-email-arrow-svg" />
            </a>
          </div>

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
                  <ArrowSvg className="contact-social-arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
