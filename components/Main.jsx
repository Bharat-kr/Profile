import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Main = () => {
  return (
    <div className="bg-yellow-700 grow">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Main;
