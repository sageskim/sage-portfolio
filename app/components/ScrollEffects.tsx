"use client";
import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // ── Fade in sections ──────────────────────────────
    const fadeSections = document.querySelectorAll(".fade-section");
    const fadeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    fadeSections.forEach((el) => fadeObs.observe(el));

    // ── Navbar bg per section ─────────────────────────
    const sectionBg: Record<string, { bg: string; fg: string }> = {
      home:     { bg: "#161616", fg: "#DADADA" },
      about:    { bg: "#E4E4E4", fg: "#161616" },
      projects: { bg: "#FFFFFF", fg: "#161616" },
      contact:  { bg: "#161616", fg: "#DADADA" },
    };
    const navbar = document.querySelector(".navbar") as HTMLElement | null;

    const applyTheme = (id: string) => {
      const theme = sectionBg[id];
      if (!navbar || !theme) return;
      navbar.style.background = theme.bg;
      navbar.style.color = theme.fg;
      navbar.querySelectorAll("a").forEach((a) => {
        (a as HTMLElement).style.setProperty("--nav-fg", theme.fg);
      });
    };

    const sections = ["home", "about", "projects", "contact"];
    const bgObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) applyTheme(entry.target.id);
        });
      },
      { threshold: 0.3 }
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
