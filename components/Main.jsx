import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Main = () => {
  return (
    <div className="bg-yellow-700 grow">
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Main;
