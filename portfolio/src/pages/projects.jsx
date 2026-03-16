import { useState } from "react";
import "./projects.css";

const categories = ["Tous", "Data Science", "Fullstack", "Machine Learning"];

const projects = [
  {
    id: 1,
    title: "Dashboard Analytics",
    category: "Data Science",
    description:
      "Tableau de bord interactif pour visualiser des KPIs métier en temps réel, construit avec React et Python (FastAPI).",
    tags: ["React", "Python", "FastAPI", "Recharts"],
    image: "/assets/img/project-1.jpg",
    github: "https://github.com/Thierry-tech",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Pr",
    category: "Machine Learning",
    description:
      "Modèle de machine learning prédit le départ des clients avec 87% de précision. Pipeline complet de la data au déploiement.",
    tags: ["Python", "Scikit-learn", "Pandas", "Flask"],
    image: "/assets/img/project-2.jpg",
    github: "https://github.com/Thierry-tech",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Personnel",
    category: "Fullstack",
    description:
      "Ce portfolio est un projet conçu et développé avec React, Vite et un design system personnalisé.",
    tags: ["React", "Vite", "CSS"],
    image: "/assets/img/portfolio.png",
    github: "https://github.com/Thierry-tech/Portfolio_React",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Hangman",
    category: "Fullstack",
    description:
      "Un jeu de devinette des mots avec un nombre d'essaie déterminé.",
    tags: ["Python"],
    image: "/assets/img/hangman.jpg",
    github: "https://github.com/Thierry-tech/Hangman",
    demo: "https://github.com/Thierry-tech/Hangman",
    featured: false,
  },
  {
    id: 5,
    title: "Affichage de stockage",
    category: "Fullstack",
    description:
      "Projet comptant pour la maîtrise des hooks de React.",
    tags: ["React",],
    image: "/assets/img/projet-stockage.avif",
    github: "https://github.com/Thierry-tech/Stockage-de-produit",
    demo: "# ",
    featured: false,
  },
  {
    id: 6,
    title: "Restaurant Picasso",
    category: "Fullstack",
    description:
      "Le projet Restaurant picasso est un projet de site de restaurant spécialisé dans les produits de fruits de mer.",
    tags: ["HTML", "CSS", "Javascript"],
    image: "/assets/img/picasso.png",
    github: "https://github.com/Thierry-tech/Restaurant-Picasso",
    demo: "#",
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <div className={`project-card ${project.featured ? "featured" : ""}`}>
      {/* Image */}
      <div className="project-img-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="project-img-placeholder" style={{ display: "none" }}>
          <span className="project-img-icon">💻</span>
        </div>
        {project.featured && (
          <span className="project-featured-badge">Featured</span>
        )}
        {/* Overlay hover */}
        <div className="project-overlay">
          <div className="project-overlay-links">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="overlay-btn"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="overlay-btn overlay-btn-primary"
              aria-label="Demo"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Demo
            </a>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="project-body">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="projects-section">
      {/* Label */}
      <div className="section-label">
        <span className="label-line" />
        <span className="label-text">Projets</span>
      </div>

      <div className="projects-header">
        <h2 className="projects-title">
          Mes réalisations
          <br />
          <span className="projects-title-accent">& expériences</span>
        </h2>

        {/* Filtres */}
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grille */}
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* CTA GitHub */}
      <div className="projects-footer">
        <a
          href="https://github.com/Thierry-tech?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-github"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Voir tous mes projets sur GitHub
        </a>
      </div>
    </section>
  );
}
