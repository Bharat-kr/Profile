import React from "react";
import Image from "next/image";

const Skills = () => {
  const skills = [
    "html5",
    "css",
    "js",
    "tailwindcss",
    "react",
    "nextjs",
    "nodejs",
    "sass",
    "mongodb",
    "firebase",
    "google-cloud",
    "git",
    "solidity",
    "etherjs",
  ];
  const tools = ["vercel", "heroku", "figma", "vscode", "postman", "eth"];
  return (
    <div
      id="Skills"
      className="flex h-auto min-h-screen w-full flex-col items-center bg-c1 pt-[10vh]"
    >
      <h1 className="heading gradinetText-config">My Skillset</h1>
      <div className="mt-4 flex flex-wrap items-center justify-center px-2 md:px-4 xl:px-48">
        {skills.map((item, idx) => {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={idx}
              src={`/images/skillset/${item}.svg`}
              className="m-4"
              width={80}
              height={80}
              alt=""
            />
          );
        })}
      </div>
      <h1 className="heading gradinetText-config">Tools I Use</h1>
      <div className="mt-4 flex flex-wrap justify-center">
        {tools.map((item, idx) => {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={idx}
              src={`/images/skillset/${item}.svg`}
              className="m-4"
              width={80}
              height={80}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
