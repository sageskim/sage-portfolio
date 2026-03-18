type Project = {
  number: string;
  title: string;
  category: string;
  tags: string[];
  desc: string;
  year: string;
  links: { label: string; href: string }[];
  wip?: boolean;
};

const projects: Project[] = [
  // ── Data & Tech
  {
    number: "01",
    title: "Loan Approval Prediction Model",
    category: "Data & Coding",
    tags: ["Python", "Machine Learning", "Streamlit"],
    desc: "Analyzed a large financial dataset and developed a machine learning model to predict loan approval outcomes. Built an interactive Streamlit dashboard for live exploration of the model.",
    year: "2025",
    links: [
      { label: "GitHub", href: "https://github.com/backjhello/LoanApproval" },
      { label: "Live Demo", href: "https://loanapprovalgit-emrznk8e4p9x34cldjxm8b.streamlit.app" },
    ],
  },
  {
    number: "02",
    title: "Sentinel — Deepfake Detection",
    category: "Data & Coding",
    tags: ["AI", "Generative AI", "Python"],
    desc: "Team project researching and building tools to detect AI-generated deepfake content. Explores the intersection of generative AI, misinformation, and trust in digital media.",
    year: "2026",
    links: [
      { label: "GitHub", href: "https://github.com/IS492-SP26/team-project-deepfakes" },
    ],
  },
  {
    number: "03",
    title: "MoMA Data Project",
    category: "Data & Coding",
    tags: ["Data Analysis", "Cultural Analytics", "Python"],
    desc: "An ongoing data exploration of the Museum of Modern Art's collection — investigating patterns in acquisition, nationality, and representation across art history.",
    year: "2026",
    links: [],
    wip: true,
  },
  // ── Marketing & Design
  {
    number: "04",
    title: "Planet Runner — Brand Guidelines",
    category: "Marketing & Design",
    tags: ["Branding", "UI/UX", "Figma"],
    desc: "Conceptualized and designed a social running application set in a cosmic narrative. Developed full brand identity including logo system, mascot (Urth), color palette, typography, and app UI.",
    year: "2025",
    links: [
      { label: "Behance", href: "https://www.behance.net/gallery/227328483/PLANET-RUNNER" },
    ],
  },
  {
    number: "05",
    title: "Voir — Exhibition Discovery App",
    category: "Marketing & Design",
    tags: ["UI/UX", "Figma", "App Design"],
    desc: "Conceptualized and designed an app for discovering exhibitions and performances, with a built-in journaling feature. Prototyped in Figma and published via Figma Make.",
    year: "2025",
    links: [
      { label: "Prototype", href: "https://www.figma.com/design/HBKhbjlQ0W0ruN5QYRqWN2/HW7---part-3?t=7i7DWaVovUKpLr8a-1" },
      { label: "Live Site", href: "https://donor-apply-58102002.figma.site" },
    ],
  },
  {
    number: "06",
    title: "KARD \u00d7 MMCA Poster",
    category: "Marketing & Design",
    tags: ["Poster Design", "Adobe"],
    desc: "Designed a promotional poster for a collaboration with the National Museum of Modern and Contemporary Art (MMCA).",
    year: "2025",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/p/DM6wHVOxdQF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    ],
  },
  // ── Media Works
  {
    number: "07",
    title: "The Dark Side of K-POP",
    category: "Media Works",
    tags: ["Documentary", "Video Editing"],
    desc: "Video project examining the hidden pressures and systemic issues within the K-pop industry. Selected as one of the best works in the course.",
    year: "2025",
    links: [
      { label: "YouTube", href: "https://youtu.be/u9mIlRfh5Mo?si=d6cGA4LBgYib9n5R" },
    ],
  },
  {
    number: "08",
    title: "Paper to Video \u2014 Generative AI & Design Fixation",
    category: "Media Works",
    tags: ["Video Essay", "Generative AI"],
    desc: "Adapted an academic paper on the effects of generative AI on design fixation and divergent thinking into a video essay. Selected as one of the best works in the course.",
    year: "2026",
    links: [
      { label: "YouTube", href: "https://youtu.be/WiMfOvQOLog?si=uoGy7Ic8i_82XbXO" },
    ],
  },
];

const categories = ["Data & Coding", "Marketing & Design", "Media Works"];

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-header">
        <p className="projects-header-text">
          Selected work across data science and coding,
          marketing and design, and media works.
        </p>
      </section>

      {categories.map((cat) => (
        <div key={cat} className="projects-category-block">
          <h2 className="projects-cat-label">{cat}</h2>
          <div className="projects-list">
            {projects
              .filter((p) => p.category === cat)
              .map((p, i) => (
                <div className="project-item" key={i}>
                  <span className="project-number">{p.number}</span>
                  <div className="project-info">
                    <div className="project-top">
                      <h3 className="project-title">
                        {p.title}
                        {p.wip && <span className="project-wip">In Progress</span>}
                      </h3>
                      <span className="project-year">{p.year}</span>
                    </div>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-bottom">
                      <div className="project-tags">
                        {p.tags.map((t, j) => (
                          <span className="project-tag" key={j}>{t}</span>
                        ))}
                      </div>
                      {p.links.length > 0 && (
                        <div className="project-links">
                          {p.links.map((l, k) => (
                            <a
                              key={k}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link-btn"
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </main>
  );
}
