"use client";
import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // ── Fade in sections ──────────────────────────────
    const fadeSections = document.querySelectorAll(".fade-section");
    const fadeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    fadeSections.forEach((el) => fadeObs.observe(el));

    // ── Navbar bg + text per section ──────────────────
    const sectionTheme: Record<string, { bg: string; nameColor: string; linkColor: string; activeLinkColor: string }> = {
      home:     { bg: "#161616", nameColor: "#DADADA", linkColor: "rgba(218,218,218,0.45)", activeLinkColor: "#DADADA" },
      about:    { bg: "#E4E4E4", nameColor: "#161616", linkColor: "rgba(22,22,22,0.55)",   activeLinkColor: "#161616" },
      projects: { bg: "#FFFFFF", nameColor: "#161616", linkColor: "rgba(22,22,22,0.55)",   activeLinkColor: "#161616" },
      contact:  { bg: "#161616", nameColor: "#DADADA", linkColor: "rgba(218,218,218,0.45)", activeLinkColor: "#DADADA" },
    };

    const navbar = document.querySelector(".navbar") as HTMLElement | null;

    const applyTheme = (id: string) => {
      const t = sectionTheme[id];
      if (!navbar || !t) return;
      navbar.style.background = t.bg;
      navbar.style.transition = "background 0.5s ease";
      const name = navbar.querySelector(".navbar-name") as HTMLElement | null;
      if (name) name.style.color = t.nameColor;
      navbar.querySelectorAll(".navbar-link, .navbar-cv").forEach((a) => {
        const el = a as HTMLElement;
        el.style.color = el.classList.contains("active") ? t.activeLinkColor : t.linkColor;
      });
    };

    const sections = ["home", "about", "projects", "contact"];
    const bgObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) applyTheme(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) bgObs.observe(el);
    });

    return () => {
      fadeObs.disconnect();
      bgObs.disconnect();
    };
  }, []);

  return null;
}
