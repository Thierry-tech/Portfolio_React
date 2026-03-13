import "./about_me.css";

const stats = [
  { value: "3+", label: "Ans d'expérience" },
  { value: "20+", label: "Projets réalisés" },
  { value: "5+", label: "Technologies maîtrisées" },
];

const infos = [
  { label: "Nom",       value: "Thierry AMOUZOU" },
  { label: "Rôle",      value: "Data Scientist & Développeur Fullstack" },
  { label: "Email",     value: "thierryamouzou@example.com" },
  { label: "Localisation", value: "Marseille-France" },
  { label: "Disponibilité", value: "Open à de nouvelles opportunités" },
];

export default function About() {
  return (
    <section className="about-section">
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
            Développeur Fullstack et Data Scientist, je combine analyse de données
            et ingénierie web pour créer des solutions qui ont du sens. Mon approche
            mêle rigueur technique et sensibilité UX pour livrer des produits à la
            fois performants et agréables à utiliser.
          </p>
          <p className="about-bio">
            Curieux et autodidacte, j'explore en permanence de nouveaux outils et
            méthodologies — qu'il s'agisse de machine learning, de visualisation
            de données ou de nouvelles architectures front-end.
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
            <a href="/contact" className="btn-outline-about">Me contacter</a>
          </div>
        </div>
      </div>
    </section>
  );
}