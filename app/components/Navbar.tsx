"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about",    label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["about", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <a href="#" className="navbar-name" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        Seyeon Kim
      </a>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`navbar-link ${active === link.href.replace("#", "") ? "active" : ""}`}
              onClick={(e) => scrollTo(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cv"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}
