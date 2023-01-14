import React from "react";

const Experience = () => {
  const list = [
    {
      company: "Acciolbis",
      time: "27 June 2022 - Present",
      post: "Full Stack Developer",
      desc: "As a Full Stack developer my task was to develop The UI and the Backend of the project and deploying it in Google App Engine to make it a Public Usable Product.",
    },
    {
      company: "Meru Accounting",
      time: "11 Dec 2021 - 31 July 2022",
      post: "Web Developer",
      desc: "Created part of UI and connected api with the frontend , Made the app Responsive.",
    },
    {
      company: "Madiee Games",
      time: "22 Nov 2021 - 22 Feb 2022",
      post: "Full Stack Developer",
      desc: "Developed the Frontend of a Javascript game , being used for corporate training by companies.",
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
        <div className="w-full p-6  font-poppins text-white lg:w-1/2 lg:pr-28">
          {list.map((item, idx) => {
            return (
              <>
                {idx !== 0 && <hr className="mt-8 mb-10" />}
                <div key={item.company}>
                  <h3 className="text-3xl font-semibold">{item.company}</h3>
                  <p className="mt-2 text-xl font-medium">{item.time}</p>
                  <p className="mt-2 text-xl font-medium">{item.post}</p>
                  <p className="mt-4 text-lg font-normal">{item.desc}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
