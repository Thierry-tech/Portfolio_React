import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const navLinks = [
  { to: "/#home", label: "Accueil", hash: "#home" },
  { to: "/#about", label: "À propos", hash: "#about" },
  { to: "/#skills", label: "Compétences", hash: "#skills" },
  { to: "/#projects", label: "Projets", hash: "#projects" },
  { to: "/#formation", label: "Formation", hash: "#formation" },
  { to: "/#hobbies", label: "Centres d'intérêts", hash: "#hobbies" },
  { to: "/#contact", label: "Contact", hash: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile lors d'un changement de page
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (hash) => {
    if (location.pathname !== "/") {
      return false;
    }

    if (!location.hash) {
      return hash === "#home";
    }

    return location.hash === hash;
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <Link to="/#home" className="logo">
          <span className="logo-bracket">&lt;</span>
          Thierry<span className="logo-accent">Tech</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="desktop-nav">
          {navLinks.map(({ to, label, hash }) => (
            <Link
              key={to}
              to={to}
              className={`nav-item ${isActive(hash) ? "active" : ""}`}
            >
              {label}
              <span className="nav-underline" />
            </Link>
          ))}
        </nav>

        {/* Burger mobile */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menu mobile */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {navLinks.map(({ to, label, hash }) => (
          <Link
            key={to}
            to={to}
            className={`mobile-nav-item ${isActive(hash) ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
