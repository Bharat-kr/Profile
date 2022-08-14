import { gsap } from "gsap";
// import "./styles.css";
import { useState } from "react";

const Name = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  const fun = (evt) => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
    setPos({
      x: mouseX,
      y: mouseY,
    });

    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY,
    });

    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1,
    });
  };

  return (
    <>
      <div className="cursor"></div>
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="content" onMouseMove={fun}>
        <h1 className="font-montserrat text-8xl font-extrabold leading-[9rem] tracking-wider text-c8 mix-blend-overlay md:text-[10rem] md:leading-[12rem] 2xl:text-[12rem] 2xl:leading-[18rem]">
          Bharat
          <br />
          Kumar
        </h1>
      </div>
    </>
  );
};

export default Name;
