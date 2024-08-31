import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="flex h-auto w-full flex-col items-center pt-[10vh] lg:h-screen"
    >
      <h1 className="heading gradinetText-config">Who I am ?</h1>
      <div className="flex w-full flex-col-reverse justify-start lg:flex-row lg:justify-between">
        <div className="w-full p-4 lg:w-1/2 lg:pl-28">
          <p className="font-poppins text-2xl font-normal">
            Hi Everyone! I am{" "}
            <span className="text-highlighter"> Bharat Kumar </span>hailing from
            <span className="text-highlighter"> Faridabad, Haryana.</span> I am
            a B.Tech graduate of
            <span className="text-highlighter">
              {" "}
              Computer Science and Engineering
            </span>{" "}
            from
            <span className="text-highlighter"> IIIT Sonepat.</span> As a
            <span className="text-highlighter"> Software Developer</span>, I
            possess a keen interest in
            <span className="text-highlighter"> rapid learning </span>
            and a genuine
            <span className="text-highlighter"> passion for coding </span>. I am
            learning about
          </p>
          <ul className="my-5 list-disc pl-6 font-poppins text-xl font-medium">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Cloud Infrastructure</li>
          </ul>
          <a
            href="/resume/BharatKumar.pdf"
            target="_blank"
            // download="Bharat Kumar"
          >
            <button className="callBackButton card-shine-effect">
              <Image
                src="/images/download.svg"
                className="animate-bounce"
                alt=""
                width={40}
                height={40}
              />
              <span>Download CV</span>
            </button>
          </a>
        </div>
        <div className="flex w-full justify-end overflow-clip lg:w-1/2">
          {/* eslint-disable-nextLine @next/next/no-img-element */}
          <img src="/images/my.svg" alt="Bharat Kumar Image" width="90%" />
        </div>
      </div>
    </div>
  );
};

export default About;
