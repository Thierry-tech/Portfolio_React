import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import AboutMe from "./pages/about_me";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import Header from "./components/header";


export default function App() {
  return (
    <>
      <Header />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </main>
    </>
  );
}