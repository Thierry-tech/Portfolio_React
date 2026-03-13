import Hero from "../components/hero";
import About_me from "../pages/about_me";
import Contact from "../pages/contact";
import Formation from "../pages/formation";
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import Hobbies from "../pages/hobbies"

export default function Home (){
    return (
        <div>
        <Hero/>
        <About_me/>
        <Skills/>
        <Projects/>
        <Formation/>
        <Hobbies/>
        <Contact/>


        </div>
    )
}