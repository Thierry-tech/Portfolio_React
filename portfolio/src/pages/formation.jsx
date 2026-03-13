import "./formation.css";

const formations = [
  {
    id: 1,
    period: "2025 — 2028",
    degree: "Master of Science",
    school: "Epitech",
    location: "Marseille, France",
    description:
      "Spécialisation en machine learning, deep learning et traitement du langage naturel. Mémoire sur la prédiction de comportements clients par modèles ensemblistes.",
    tags: ["Machine Learning", "Deep Learning", "NLP", "Python", "Développement web & Mobile", "Devops"],
    icon: "🎓",
    current: false,
  },
  {
    id: 2,
    period: "2023 — 2025",
    degree: "Master Entrepreneuriat et Stratégie d'Entreprise",
    school: "ESG Aix",
    location: "Aix-En-Provence, France",
    description:
      "Fondamentaux du développement logiciel, algorithmique, bases de données relationnelles et premiers projets web fullstack.",
    tags: ["Gestion de projet", "Droit des sociétés", "RGPD",],
    icon: "📚",
    current: false,
  },
];

export default function Formation() {
  return (
    <section className="formation-section">
      {/* Label */}
      <div className="section-label">
        <span className="label-line" />
        <span className="label-text">Formation</span>
      </div>

      <div className="formation-header">
        <h2 className="formation-title">
          Mon parcours
          <br />
          <span className="formation-title-accent">académique</span>
        </h2>
        <p className="formation-subtitle">
          Une formation pluridisciplinaire alliant science des données et
          ingénierie logicielle.
        </p>
      </div>

      {/* Cards côte à côte */}
      <div className="timeline-grid">
        {formations.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-card ${item.current ? "current" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Icône + période */}
            <div className="card-top">
              <div className="card-node">
                <span className="node-icon">{item.icon}</span>
              </div>
              <div className="card-period">
                {item.current && <span className="current-dot" />}
                {item.period}
              </div>
            </div>

            <h3 className="card-degree">{item.degree}</h3>

            <div className="card-school">
              <span className="school-name">{item.school}</span>
              <span className="school-sep">·</span>
              <span className="school-location">{item.location}</span>
            </div>

            <p className="card-desc">{item.description}</p>

            <div className="card-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="card-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}