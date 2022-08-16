import React from "react";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  return (
    <div className="relative mx-auto mb-6 mt-16 w-80 min-w-0 max-w-md break-words rounded-xl bg-white p-4 shadow-shad1 hover:shadow-shad2 xl:max-w-2xl">
      <div className="card">
        <div className="card-header -mt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-auto rounded-lg"
            src={`/images/${data.image}.png`}
            alt={data.title}
          />
        </div>
        <div className="card-body mt-2">
          <h4 className="font-semibold">{data.title}</h4>
          <p className="opcacity-60 my-2">{data.desc}</p>
          <a href={data.link}>
            <button className="tracking wide flex w-full items-center justify-between rounded-md border-2 border-c1 px-4 font-montserrat text-base font-semibold hover:bg-c1 hover:text-white">
              <span>View Project</span>
              <svg
                width="51"
                height="47"
                viewBox="0 0 51 47"
                fill="none"
                className="h-10 w-10 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.8694 25.4355V36.7664C37.8694 37.7681 37.4357 38.7288 36.6639 39.4372C35.8921 40.1455 34.8453 40.5434 33.7538 40.5434H11.1182C10.0267 40.5434 8.97992 40.1455 8.2081 39.4372C7.43629 38.7288 7.00269 37.7681 7.00269 36.7664V15.993C7.00269 14.9913 7.43629 14.0306 8.2081 13.3223C8.97992 12.614 10.0267 12.2161 11.1182 12.2161H23.4649"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.696 6.55054H44.0427V17.8815"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.4071 27.3239L44.0427 6.55054"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
