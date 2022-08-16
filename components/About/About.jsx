import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="About" className="h-auto w-full pt-[10vh] lg:h-screen">
      <h1 className="heading gradinetText-config">Who I am ?</h1>
      <div className="flex w-full flex-col-reverse justify-start lg:flex-row lg:justify-between">
        <div className="w-full p-4 lg:w-1/2 lg:pl-28">
          <p className="font-poppins text-2xl font-normal leading-8">
            Hi Everyone! I am{" "}
            <span className="text-highlighter"> Bharat Kumar </span>from
            <span className="text-highlighter"> Faridabad, Haryana.</span> I am
            a Pre-Final Year Student of
            <span className="text-highlighter">
              {" "}
              Computer Science and Engineering
            </span>{" "}
            from
            <span className="text-highlighter"> IIIT Sonepat.</span> I am a
            <span className="text-highlighter"> Full Stack Developer.</span> I
            am a very
            <span className="text-highlighter"> fast learner</span> and
            <span className="text-highlighter"> love coding.</span> I am
            passionate about
          </p>
          <ul className="my-5 list-disc pl-6 font-poppins text-xl font-medium leading-7">
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Web3 Development</li>
          </ul>
          <button className="callBackButton">
            <Image src="/images/download.svg" alt="" width={40} height={40} />
            <span>Download CV</span>
          </button>
        </div>
        <div className="flex w-full justify-end overflow-clip lg:w-1/2">
          <img src="/images/my.svg" alt="" width="90%" />
        </div>
      </div>
    </div>
  );
};

export default About;
