import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assests/images/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const desktopHeaderHeight = 104; // Adjust this value based on your header height
      const sectionPosition = section.offsetTop - desktopHeaderHeight;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section based on ID
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50% 0px", // Trigger when the section is halfway in the viewport
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="bg-gradient-to-r from-slate-500 to-slate-700 fixed w-full top-0 z-20 shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 md:py-5 max-w-7xl mx-auto">
        <img
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
          src={logo}
          alt="Logo"
        />
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white font-medium text-base lg:text-lg ">
          <li className={`transition ${activeSection === "about" ? "text-amber-400" : "hover:text-amber-400"}`}>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li className={`transition ${activeSection === "education" ? "text-amber-400" : "hover:text-amber-400"}`}>
            <button onClick={() => scrollToSection("education")}>Education</button>
          </li>
          <li className={`transition ${activeSection === "projects" ? "text-amber-400" : "hover:text-amber-400"}`}>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
          </li>
          <li className={`transition ${activeSection === "skills" ? "text-amber-400" : "hover:text-amber-400"}`}>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
          </li>
          <li className={`transition ${activeSection === "contact" ? "text-amber-400" : "hover:text-amber-400"}`}>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>

        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-700">
          <ul className="flex flex-col text-white font-medium text-lg">
            <li className="py-3 px-6 hover:bg-slate-600" onClick={() => scrollToSection("about")}>
              About
            </li>
            <li className="py-3 px-6 hover:bg-slate-600" onClick={() => scrollToSection("education")}>
              Education
            </li>
            <li className="py-3 px-6 hover:bg-slate-600" onClick={() => scrollToSection("projects")}>
              Projects
            </li>
            <li className="py-3 px-6 hover:bg-slate-600" onClick={() => scrollToSection("skills")}>
              Skills
            </li>
            <li className="py-3 px-6 hover:bg-slate-600" onClick={() => scrollToSection("contact")}>
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
