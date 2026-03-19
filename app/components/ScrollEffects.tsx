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

    // ── Navbar theme + active link per section ────────
    const sectionTheme: Record<string, { bg: string; nameColor: string; dimColor: string; activeColor: string }> = {
      home:     { bg: "#161616", nameColor: "#DADADA", dimColor: "rgba(218,218,218,0.4)", activeColor: "#DADADA" },
      about:    { bg: "#E4E4E4", nameColor: "#161616", dimColor: "rgba(22,22,22,0.45)",   activeColor: "#161616" },
      projects: { bg: "#FFFFFF", nameColor: "#161616", dimColor: "rgba(22,22,22,0.45)",   activeColor: "#161616" },
      contact:  { bg: "#161616", nameColor: "#DADADA", dimColor: "rgba(218,218,218,0.4)", activeColor: "#DADADA" },
    };

    // map section id → navbar link href
    const sectionToLink: Record<string, string> = {
      home: "",
      about: "about",
      projects: "projects",
      contact: "contact",
    };

    const navbar = document.querySelector(".navbar") as HTMLElement | null;

    const applyTheme = (id: string) => {
      const t = sectionTheme[id];
      if (!navbar || !t) return;

      // bg
      navbar.style.background = t.bg;
      navbar.style.transition = "background 0.4s ease";

      // name
      const name = navbar.querySelector(".navbar-name") as HTMLElement | null;
      if (name) name.style.color = t.nameColor;

      // links — remove all inline colors first, then set via class
      navbar.querySelectorAll(".navbar-link").forEach((a) => {
        const el = a as HTMLElement;
        const href = el.getAttribute("href")?.replace("#", "") ?? "";
        const isActive = href === sectionToLink[id];
        // remove active class from all, add to current
        el.classList.toggle("active", isActive);
        // set dim color via style, active color will be handled by CSS
        el.style.color = isActive ? t.activeColor : t.dimColor;
      });

      const cv = navbar.querySelector(".navbar-cv") as HTMLElement | null;
      if (cv) cv.style.color = t.dimColor;
    };

    // Use scroll position directly for accuracy
    const sections = ["home", "about", "projects", "contact"];

    const getCurrentSection = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      return current;
    };

    const onScroll = () => applyTheme(getCurrentSection());
    window.addEventListener("scroll", onScroll, { passive: true });
    applyTheme(getCurrentSection()); // initial

    return () => {
      fadeObs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
