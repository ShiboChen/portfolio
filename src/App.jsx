import React, { useState, useEffect } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import DotGroup from "./pages/DotGroup";
import About from "./pages/About";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY > document.getElementById("about").offsetTop - 350) {
        setSelectedPage("about");
      }
      if (window.scrollY > document.getElementById("skills").offsetTop - 350) {
        setSelectedPage("skills");
      }
      if (
        window.scrollY >
        document.getElementById("projects").offsetTop - 350
      ) {
        setSelectedPage("projects");
      }
      if (window.scrollY > document.getElementById("contact").offsetTop - 350) {
        setSelectedPage("contact");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-Poppins bg-ghostwhite">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home />
      <About />
      <MySkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
