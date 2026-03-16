import { useEffect, useRef } from "react";
import "./skills.css";

const technicalSkills = [
  { name: "Python /Java / Php", level: 60, },
  { name: "Machine Learning", level: 20 },
  { name: "React / Next.Js", level: 60, },
  { name: "HTML / CSS / Javascript", level: 90, },
  { name: "Symfony ", level: 40,},
  { name: "SQL / Bases de données", level: 75, },
];

const toolSkills = [
  { name: "Git / GitHub", category: "Dev" },
  { name: "Docker", category: "DevOps" },
  { name: "SQL", category: "Base de données" },
  { name: "Power BI", category: "Viz" },
  { name: "Tailwind CSS", category: "Dev" },
  { name: "REST API", category: "Dev" },
];

function SkillBar({ name, level, icon,  index }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.width = `${level}%`;
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level, index]);

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <div className="skill-bar-name">
          <span className="skill-icon">{icon}</span>
          <span>{name}</span>
        </div>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          ref={barRef}
          className="skill-fill"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills-section">
      {/* Label */}
      <div className="section-label">
        <span className="label-line" />
        <span className="label-text">Compétences</span>
      </div>

      <div className="skills-header">
        <h2 className="skills-title">
          Mon arsenal<br />
          <span className="skills-title-accent">technique</span>
        </h2>
        <p className="skills-subtitle">
          Une combinaison de data science et de développement web
          pour concevoir des solutions complètes et robustes.
        </p>
      </div>

      <div className="skills-grid">
        {/* Barres de progression */}
        <div className="skills-bars-col">
          <h3 className="skills-col-title">Compétences techniques</h3>
          <div className="skill-bars">
            {technicalSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} index={i} />
            ))}
          </div>
        </div>

        {/* Tags outils */}
        <div className="skills-tools-col">
          <h3 className="skills-col-title">Outils & Technologies</h3>
          <div className="tools-grid">
            {toolSkills.map(({ name, category }) => (
              <div key={name} className="tool-tag">
                <span className="tool-category">{category}</span>
                <span className="tool-name">{name}</span>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="soft-skills gap-5">
            <h3 className="skills-col-title" style={{ marginTop: "2.5rem" }}>Soft skills</h3>
            <div className="soft-grid">
              {["Rigueur", "Curiosité", "Travail en équipe", "Adaptabilité", "Communication", "Autonomie", "Gestion de projet (méthode AGIL)", "Artiste pluridisciplinaire"].map((s) => (
                <div key={s} className="soft-tag">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}