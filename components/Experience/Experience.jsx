import React from "react";
import Chip from "../Chip/Chip";

const Experience = () => {
  const list = [
    {
      company: "Acciolbis",
      time: "27 June 2022 - 31 July 2023",
      post: "Full Stack Developer",
      desc: [
        "Build CRUD APIs in Backend for some of the features and integrated third party mailing and calendar service using like Google and outlook in Node.js, Redis and deployment using AWS.",
        "Implemented CI/CD pipelines for frontend deployments, orchestrated agile methodologies and led daily stand-ups, driving collaboration among cross-functional teams; resulting in a 30% reduction in time to deliver new features and enhancements.",
      ],
      certifcate:
        "https://drive.google.com/file/d/1wyE8UoSS-iquGslGKuOzy4O38z7SM30Y/view?usp=sharing",
    },
    {
      company: "Meru Accounting",
      time: "11 Dec 2021 - 31 July 2022",
      post: "Web Developer",
      desc: [
        "Developed and integrated two pivotal sections of the application frontend with backend APIs, fostering a unified user experience.",
        "Collaborated with a cross-functional team of three members to successfully develop the application,resulting in a 20% reduction in development time.",
      ],
      certifcate:
        "https://drive.google.com/file/d/1L699L7D2Q6uumt75IQ0GLrshCi328ZIt/view?usp=sharing",
    },
    {
      company: "Madiee Games",
      time: "22 Nov 2021 - 22 Feb 2022",
      post: "Full Stack Developer",
      desc: [
        "Created the frontend for a web-based business development game using React and Sass, independently completing the project.",
        "Collaborated with the design team to implement continuous updates and provide recommendations for project improvement.",
      ],
      certifcate:
        "https://drive.google.com/file/d/1R3SE9MhenxhCvA7n6AMXlvDqkPTNpNfV/view?usp=sharing",
    },
  ];
  return (
    <div
      id="Experience"
      className="flex h-auto min-h-screen w-full flex-col items-center bg-c1 pt-[10vh]"
    >
      <h1 className="heading gradinetText-config">Experience</h1>
      <div className="flex w-full">
        <div className="hidden items-end p-6 lg:flex lg:w-1/2 lg:pl-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/images/building.svg`} className="w-full" alt="" />
        </div>
        <div className="w-full p-6 font-poppins text-white lg:w-1/2 lg:pr-28">
          {list.map((item, idx) => {
            return (
              <div key={idx}>
                {idx !== 0 && <hr className="mt-8 mb-10" />}
                <div key={item.company}>
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold">{item.company}</h3>
                    <a href={item.certifcate} target="_blank" rel="noreferrer">
                      <Chip content={"View Certificate"} />
                    </a>
                  </div>
                  <p className="mt-1 text-lg font-medium">{item.time}</p>
                  <p className="mt-1 text-lg font-medium">{item.post}</p>
                  <ul className="list-outside list-disc">
                    {item.desc.map((item, idx) => {
                      return (
                        <li className="text-md mt-3 font-normal" key={idx}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
