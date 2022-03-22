import React from "react";
import Home from "./Home";
import Skills from "./Skills";
import Work from "./Work";

const Main = () => {
  return (
    <div className="bg-yellow-700 grow">
      <Home />
      <Skills />
      <Work />
    </div>
  );
};

export default Main;
