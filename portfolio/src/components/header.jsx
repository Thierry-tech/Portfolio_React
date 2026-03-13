import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/skills", label: "Compétences" },
  { to: "/projects", label: "Projets" },
  { to: "/formation", label: "Formation" },
  { to: "/hobbies", label: "Centres d'intérêts" },
  { to: "/contact", label: "Contact" },
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
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-bracket">&lt;</span>
          Thierry<span className="logo-accent">Tech</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-item ${location.pathname === to ? "active" : ""}`}
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
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`mobile-nav-item ${location.pathname === to ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}