import Footer from "./Footer";
import Project from "./Project";
import Education_Timeline from "./Education_Timeline";
import Skill from "./Skill";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToUp";
import About from "./About";

const Body = () => {
  return (
    <div className="bg-slate-700 md:pt-14 " > 
      <ScrollToTop />
      <section id="about" className="scroll-mt-20">
        <About/>
      </section>
      <section id="education" className="scroll-mt-20"  >
        <Education_Timeline />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Project />
      </section>
      <section id="skills" className="scroll-mt-20">
        <Skill />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Body;
