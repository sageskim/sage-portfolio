const ArrowSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const timeline = [
  {
    year: "Aug 2025 — Present",
    title: "ATLAS — STAT Team Member",
    place: "Association of The Liberal Arts and Sciences",
    desc: "Collaborating on data analysis projects using Python and GitHub. Developed a loan approval prediction model; building an interactive Streamlit dashboard. Preparing for datathon competitions.",
  },
  {
    year: "Jan 2025 — Jan 2026",
    title: "KARD — Design Team Lead",
    place: "Korean Art Architecture Design Association, UIUC",
    desc: "Led design team, managed project timelines and deliverables. Designed promotional materials and brand identities including a social running app (Planet Runner) and an exhibition discovery app (Voir).",
  },
  {
    year: "Jan 2026 — Present",
    title: "GLOBE — Member",
    place: "Global Leaders Orange and Blue Engagement",
    desc: "Engaged in intercultural discussions with students from diverse backgrounds. Developing global awareness and cross-cultural communication skills.",
  },
  {
    year: "Aug 2024 — Dec 2024",
    title: "Research Assistant",
    place: "University of Illinois Urbana-Champaign",
    desc: "Assisted research on how nationality influences movie genre preferences. Conducted literature reviews, organized datasets, and performed qualitative analysis.",
  },
  {
    year: "Jan 2024 — May 2024",
    title: "Course Note Taker — Volunteer",
    place: "University of Illinois Urbana-Champaign",
    desc: "Provided structured digital notes for students with hearing disabilities in Introduction to Information Science & Technology.",
  },
  {
    year: "Expected Dec 2025",
    title: "B.S. Information Science + Data Science",
    place: "University of Illinois Urbana-Champaign",
    desc: "GPA 4.0 / 4.0 · Dean's List all semesters. Coursework: Linear Algebra for Data Science, Data Science Exploration, Algorithms & Data Structures, UX Design, Research Design, Generative AI for Human-AI Collaboration.",
  },
  {
    year: "Feb 2023",
    title: "Gyeonggi Academy of Foreign Languages",
    place: "Graduated",
    desc: "",
  },
];

const awards = [
  {
    year: "All semesters",
    title: "Dean's List",
    issuer: "University of Illinois Urbana-Champaign",
    link: null,
  },
  {
    year: "Dec 2025",
    title: "Google Analytics Certification",
    issuer: "Google",
    link: "https://skillshop.credential.net/494990e7-bd92-43e4-b767-1a14d444f2f9#acc.xAlnVQwy",
  },
  {
    year: "Dec 2025",
    title: "Core IRB Training",
    issuer: "CITI Program",
    link: "https://www.citiprogram.org/verify/?w83de1068-9cd1-4607-a1e1-2dcab947a42f-74027029",
  },
  {
    year: "May 2025",
    title: "Data Science DISCOVERY",
    issuer: "University of Illinois Urbana-Champaign",
    link: "https://d7.cs.illinois.edu/badges/stat107-sp25-BDFNSFX5RbCUCOPun6uZdvua7a2KG2/",
  },
  {
    year: "Mar 2023",
    title: "ESG Leadership Program — Level 2",
    issuer: "",
    link: null,
  },
];

const skills = [
  { category: "Data & Code", items: ["Python", "NumPy", "Pandas", "R", "SQL", "GitHub", "Streamlit", "Excel"] },
  { category: "Web", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML / CSS"] },
  { category: "Design & Media", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Video Editing"] },
  { category: "Languages", items: ["Korean — Native", "English — Fluent"] },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-intro">
        <p className="about-intro-text">
          I explore the intersection of data, creativity, and culture — turning
          complex information into clear, meaningful insights. Based between Illinois and Seoul.
        </p>
      </section>

      <section className="about-section">
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
      </section>

      <section className="about-section">
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
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-label">Skills</h2>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div className="skill-group" key={i}>
              <p className="skill-category">{group.category}</p>
              <ul className="skill-list">
                {group.items.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-label">Interests</h2>
        <p className="about-interests">
          Photography, visiting exhibitions and galleries, filming and editing.
        </p>
      </section>
    </main>
  );
}
