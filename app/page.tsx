// ── Arrow SVG (no emoji) ────────────────────────────────
const ArrowSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── DATA ────────────────────────────────────────────────
const timeline = [
  { year: "Aug 2025 — Present", title: "ATLAS — STAT Team Member", place: "Association of The Liberal Arts and Sciences, UIUC", desc: "Collaborating on data analysis projects using Python and GitHub. Developed a loan approval prediction model; building an interactive Streamlit dashboard. Preparing for datathon competitions." },
  { year: "Jan 2025 — Jan 2026", title: "KARD — Design Team Lead", place: "Korean Art Architecture Design Association, UIUC", desc: "Led design team, managed project timelines and deliverables. Designed promotional materials and brand identities including a social running app (Planet Runner) and an exhibition discovery app (Voir)." },
  { year: "Jan 2026 — Present", title: "GLOBE — Member", place: "Global Leaders Orange and Blue Engagement, UIUC", desc: "Engaged in intercultural discussions with students from diverse backgrounds. Developing global awareness and cross-cultural communication skills." },
  { year: "Aug 2024 — Dec 2024", title: "Research Assistant", place: "University of Illinois Urbana-Champaign", desc: "Assisted research on how nationality influences movie genre preferences. Conducted literature reviews, organized datasets, and performed qualitative analysis." },
  { year: "Jan 2024 — May 2024", title: "Course Note Taker — Volunteer", place: "University of Illinois Urbana-Champaign", desc: "Provided structured digital notes for students with hearing disabilities in Introduction to Information Science & Technology." },
  { year: "Expected Dec 2025", title: "B.S. Information Science + Data Science", place: "University of Illinois Urbana-Champaign", desc: "GPA 4.0 / 4.0 · Dean's List all semesters. Coursework: Linear Algebra for Data Science, Data Science Exploration, Algorithms & Data Structures, UX Design, Research Design, Generative AI for Human-AI Collaboration." },
  { year: "Feb 2023", title: "Gyeonggi Academy of Foreign Languages", place: "Graduated", desc: "" },
];

const awards = [
  { year: "All semesters", title: "Dean's List", issuer: "University of Illinois Urbana-Champaign", link: null },
  { year: "Dec 2025", title: "Google Analytics Certification", issuer: "Google", link: "https://skillshop.credential.net/494990e7-bd92-43e4-b767-1a14d444f2f9#acc.xAlnVQwy" },
  { year: "Dec 2025", title: "Core IRB Training", issuer: "CITI Program", link: "https://www.citiprogram.org/verify/?w83de1068-9cd1-4607-a1e1-2dcab947a42f-74027029" },
  { year: "May 2025", title: "Data Science DISCOVERY", issuer: "University of Illinois Urbana-Champaign", link: "https://d7.cs.illinois.edu/badges/stat107-sp25-BDFNSFX5RbCUCOPun6uZdvua7a2KG2/" },
  { year: "Mar 2023", title: "ESG Leadership Program — Level 2", issuer: "", link: null },
];

const skills = [
  { category: "Data & Code", items: ["Python", "NumPy", "Pandas", "ML", "SQL", "GitHub", "Streamlit", "Excel"] },
  { category: "Web", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML / CSS"] },
  { category: "Design & Media", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Video Editing"] },
  { category: "Languages", items: ["Korean — Native", "English — Fluent"] },
];

type Project = { number: string; title: string; category: string; tags: string[]; desc: string; year: string; links: { label: string; href: string }[]; wip?: boolean; };
const projects: Project[] = [
  { number: "01", title: "Loan Approval Prediction Model", category: "Data & Coding", tags: ["Python", "Machine Learning", "Streamlit"], desc: "Analyzed a large financial dataset and developed a machine learning model to predict loan approval outcomes. Built an interactive Streamlit dashboard for live exploration of the model.", year: "2025", links: [{ label: "GitHub", href: "https://github.com/backjhello/LoanApproval" }, { label: "Live Demo", href: "https://loanapprovalgit-emrznk8e4p9x34cldjxm8b.streamlit.app" }] },
  { number: "02", title: "Sentinel — Deepfake Detection", category: "Data & Coding", tags: ["AI", "Generative AI", "Python"], desc: "Team project researching and building tools to detect AI-generated deepfake content. Explores the intersection of generative AI, misinformation, and trust in digital media.", year: "2026", links: [{ label: "GitHub", href: "https://github.com/IS492-SP26/team-project-deepfakes" }] },
  { number: "03", title: "MoMA Data Project", category: "Data & Coding", tags: ["Data Analysis", "Cultural Analytics", "Python"], desc: "An ongoing data exploration of the Museum of Modern Art's collection — investigating patterns in acquisition, nationality, and representation across art history.", year: "2026", links: [], wip: true },
  { number: "04", title: "Planet Runner — Brand Guidelines", category: "Marketing & Design", tags: ["Branding", "UI/UX", "Figma"], desc: "Conceptualized and designed a social running application set in a cosmic narrative. Developed full brand identity including logo system, mascot, color palette, typography, and app UI.", year: "2025", links: [{ label: "Behance", href: "https://www.behance.net/gallery/227328483/PLANET-RUNNER" }] },
  { number: "05", title: "Voir — Exhibition Discovery App", category: "Marketing & Design", tags: ["UI/UX", "Figma", "App Design"], desc: "Conceptualized and designed an app for discovering exhibitions and performances, with a built-in journaling feature. Prototyped in Figma and published via Figma Make.", year: "2025", links: [{ label: "Prototype", href: "https://www.figma.com/design/HBKhbjlQ0W0ruN5QYRqWN2/HW7---part-3?t=7i7DWaVovUKpLr8a-1" }, { label: "Live Site", href: "https://donor-apply-58102002.figma.site" }] },
  { number: "06", title: "KARD \u00d7 MMCA Poster", category: "Marketing & Design", tags: ["Poster Design", "Adobe Photoshop"], desc: "Designed a promotional poster for a collaboration with the National Museum of Modern and Contemporary Art (MMCA).", year: "2025", links: [{ label: "Instagram", href: "https://www.instagram.com/p/DM6wHVOxdQF/" }] },
  { number: "07", title: "The Dark Side of K-POP", category: "Media Works", tags: ["Documentary", "Video Editing"], desc: "Video project examining the hidden pressures and systemic issues within the K-pop industry. Selected as one of the best works in the course.", year: "2025", links: [{ label: "YouTube", href: "https://youtu.be/u9mIlRfh5Mo?si=d6cGA4LBgYib9n5R" }] },
  { number: "08", title: "Paper to Video \u2014 Generative AI & Design Fixation", category: "Media Works", tags: ["Video Essay", "Generative AI"], desc: "Adapted an academic paper on the effects of generative AI on design fixation and divergent thinking into a video essay. Selected as one of the best works in the course.", year: "2026", links: [{ label: "YouTube", href: "https://youtu.be/WiMfOvQOLog?si=uoGy7Ic8i_82XbXO" }] },
];
const categories = ["Data & Coding", "Marketing & Design", "Media Works"];

const socialLinks = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/seyeon-kim-911ab6347" },
  { label: "GitHub",    href: "https://github.com/sageskim" },
  { label: "Instagram", href: "https://www.instagram.com/klmseyeon/" },
  { label: "YouTube",   href: "https://www.youtube.com/@seyeonsagekim" },
];

// ── PAGE ────────────────────────────────────────────────
export default function Home() {
  return (
    <main>

      {/* ── HOME ── */}
      <section className="home-page" id="home">
        <div className="hero">
          <p className="hero-title">
            Seyeon Sage Kim is a student at University of Illinois Urbana‑Champaign,<br />
            majoring in Information Science + Data Science.<br />
            She explores how data and technology interact with culture, media, and art,<br />
            based between Illinois, USA and Seoul, South Korea.
          </p>
          <div className="hero-image-inner">
            <img src="/profile.jpg" alt="Seyeon Sage Kim" className="hero-img" />
          </div>
        </div>
        <footer className="home-footer"><span>© 2026</span></footer>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-page" id="about">
        <div className="about-intro fade-section">
          <p className="about-intro-text">
            I explore the intersection of data, creativity, and culture — turning
            complex information into clear, meaningful insights. Based between Illinois and Seoul.
          </p>
        </div>

        <div className="about-section fade-section">
          <h2 className="section-label">Experience & Education</h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-body">
                  <p className="timeline-title">{item.title}</p>
                  <p className="timeline-place">{item.place}</p>
                  {item.desc && <p className="timeline-desc">{item.desc}</p>}
                </div>
                <span className="timeline-year">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section fade-section">
          <h2 className="section-label">Awards & Certificates</h2>
          <div className="awards-list">
            {awards.map((item, i) => (
              <div className="award-item" key={i}>
                <span className="award-year">{item.year}</span>
                <div>
                  <p className="award-title">{item.title}</p>
                  {item.issuer && <p className="award-issuer">{item.issuer}</p>}
                </div>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="award-link">
                    View <ArrowSvg />
                  </a>
                ) : <span />}
              </div>
            ))}
          </div>
        </div>

        <div className="about-section fade-section">
          <h2 className="section-label">Skills</h2>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <div className="skill-group" key={i}>
                <p className="skill-category">{group.category}</p>
                <ul className="skill-list">
                  {group.items.map((s, j) => <li key={j}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects-page" id="projects">
        <div className="projects-header fade-section">
          <p className="projects-header-text">
            Selected work across data science and coding,
            marketing and design, and media works.
          </p>
        </div>
        {categories.map((cat) => (
          <div key={cat} className="projects-category-block fade-section">
            <h2 className="projects-cat-label">{cat}</h2>
            <div className="projects-list">
              {projects.filter((p) => p.category === cat).map((p, i) => (
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
                        {p.tags.map((t, j) => <span className="project-tag" key={j}>{t}</span>)}
                      </div>
                      {p.links.length > 0 && (
                        <div className="project-links">
                          {p.links.map((l, k) => (
                            <a key={k} href={l.href} target="_blank" rel="noopener noreferrer" className="project-link-btn">{l.label}</a>
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
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-page" id="contact">
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
              <a href="mailto:seyeonk4@illinois.edu" className="contact-email-value">
                seyeonk4@illinois.edu
                <ArrowSvg />
              </a>
            </div>
            <div className="contact-socials-section">
              <span className="contact-section-label">Socials</span>
              <div className="contact-social-list">
                {socialLinks.map((l, i) => (
                  <a key={i} href={l.href} className="contact-social-link" target="_blank" rel="noopener noreferrer">
                    <span>{l.label}</span>
                    <ArrowSvg />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
