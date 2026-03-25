import { Link } from "react-router-dom";
import "./about_me.css";


const infos = [
  { label: "Nom",       value: "Thierry AMOUZOU" },
  { label: "Rôle",      value: "Data Scientist & Développeur Fullstack" },
  { label: "Email",     value: "thierryamouzou@example.com" },
  { label: "Localisation", value: "Marseille-France" },
  { label: "Disponibilité", value: "Open à de nouvelles opportunités" },
  { label: "Téléphone", value: "+33 7 60 19 98 06"},
];

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Section label */}
      <div className="section-label">
        <span className="label-line" />
        <span className="label-text">À propos</span>
      </div>

      <div className="about-grid">
        {/* Colonne image */}
        <div className="about-image-col">
          <div className="about-image-wrapper">
            <img
              src="/assets/img/profil.jpg"
              alt="Thierry AMOUZOU"
              className="about-img"
            />
            
            {/* Bordure déco */}
            <div className="img-deco-border" />
          </div>
        </div>

        {/* Colonne texte */}
        <div className="about-text-col">
          <h2 className="about-title">
            Passionné par la data<br />
            <span className="about-title-accent">& le développement web/mobile</span>
          </h2>

          <p className="about-bio">
            Actuellement étudiant en Master of Science en Informatique à Epitech Marseille, avec une spécialisation en Intelligence Artificielle et Big Data, je développe mes compétences en développement logiciel, data et technologies modernes.
          </p>
          <p className="about-bio">
            Passionné par l’innovation technologique, je m’intéresse particulièrement à la manière dont les données et l’intelligence artificielle peuvent créer des solutions concrètes et utiles. Mon objectif est de concevoir des produits technologiques performants qui répondent à des problématiques réelles. Je m’investis également dans plusieurs projets techniques qui me permettent de renforcer mes compétences en programmation et en conception d’applications.
          </p>
          <p className="about-bio">
            Cette approche pratique me permet de consolider mes connaissances et d’explorer différents domaines de la tech.
          </p>

          {/* Infos perso */}
          <ul className="about-infos">
            {infos.map(({ label, value }) => (
              <li key={label} className="about-info-item">
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="about-cta">
            <a href="/assets/cv-thierry.pdf" download className="btn-primary-about">
              Télécharger mon CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
            <Link to="/contact" className="btn-outline-about">Me contacter</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
