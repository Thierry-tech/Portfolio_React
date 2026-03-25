import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home";
import AboutMe from "./pages/about_me";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Formation from "./pages/formation";
import Hobbies from "./pages/hobbies";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import Header from "./components/header";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.slice(1);

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.hash, location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToSection />
      <Header />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </main>
    </>
  );
}
