export default function About() {
  const timeline = [
    {
      year: "Aug 2025 — Present",
      title: "ATLAS — STAT Team Member",
      place: "Association of The Liberal Arts and Sciencesm, UIUC",
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
      place: "University of Wisconsin, Milwaukee",
      desc: "Assisted research on how nationality influences movie genre preferences. Conducted literature reviews, organized datasets, and performed qualitative analysis to identify patterns.",
    },
    {
      year: "Jan 2024 — May 2024",
      title: "Course Note Taker — Volunteer",
      place: "University of Wisconsin, Milwaukee",
      desc: "Provided structured digital notes for students with hearing disabilities in Introduction to Information Science & Technology.",
    },
    {
      year: "Expected Dec 2026",
      title: "B.S. Information Science + Data Science",
      place: "University of Illinois Urbana-Champaign",
      desc: "GPA 4.0 / 4.0 · Dean's List all semesters. Coursework includes Linear Algebra for Data Science, Data Science Exploration, Algorithms & Data Structures, UX Design, Research Design, and Generative AI for Human-AI Collaboration.",
    },
  ];

  const skills = [
    {
      category: "Data & Code",
      items: ["Python", "NumPy", "Pandas", "R", "SQL", "GitHub", "Streamlit", "Excel"],
    },
    {
      category: "Web",
      items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML / CSS"],
    },
    {
      category: "Design & Media",
      items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Video Editing"],
    },
    {
      category: "Languages",
      items: ["Korean — Native", "English — Fluent"],
    },
  ];

  return (
    <main className="about-page">
      <section className="about-intro">
        <p className="about-intro-text">
          I explore the intersection of data, creativity, and culture — turning complex
          information into clear, meaningful insights. Based between Illinois and Seoul.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-label">Experience & Education</h2>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div className="timeline-item" key={i}>
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-body">
                <p className="timeline-title">{item.title}</p>
                <p className="timeline-place">{item.place}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
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
    </main>
  );
}
