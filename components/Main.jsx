import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Main = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Main;
