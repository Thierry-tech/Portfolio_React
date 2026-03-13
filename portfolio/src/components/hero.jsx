import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./hero.css";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Data Scientist",
        "Developper Fullstack",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="container">

        <h1 className="display-4 fw-bold text-white">
          Bonjour, je suis Thierry AMOUZOU
        </h1>

        <h1 className="mt-3 text-danger">
          <span ref={el}></span>
        </h1>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="https://www.linkedin.com/in/djake-thierry/" className="text-white text-decoration-none"><img src="/assets/img/linkedin.png" height="50" />
          </a>
          <a href="#" className="text-white text-decoration-none"><img src="/assets/img/Instagram.png" height="50" />
          </a>
          <a href="https://github.com/Thierry-tech?tab=repositories" className="text-white text-decoration-none"><img src="/assets/img/github_logo_png.png" height="50" />
          </a>
        </div>

      </div>
    </section>
  );
}