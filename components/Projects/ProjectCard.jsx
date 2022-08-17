import React from "react";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  return (
    <div className="relative mx-auto mb-6 mt-16 w-80 min-w-0 max-w-md break-words rounded-xl bg-white p-4 shadow-shad1 hover:shadow-shad2 xl:max-w-2xl">
      <div className="card">
        <div className="card-header -mt-6">
          <a href={data.link} target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-auto rounded-lg shadow transition-transform ease-in-out hover:scale-105"
              src={`/images/projects/${data.image}`}
              alt={data.title}
            />
          </a>
        </div>
        <div className="card-body mt-2">
          <h4 className="font-montserrat text-lg font-semibold text-c7">
            {data.title}
          </h4>
          <p className="my-2 h-32 font-montserrat text-sm font-normal">
            {data.desc}
          </p>
          <div className="flex items-center justify-between">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="w-3/4"
            >
              {/* view project button */}
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

            {/* githubicon */}
            <a
              href={data.code}
              target="_blank"
              rel="noreferrer"
              className="flex w-1/4 items-center justify-center text-c1"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                className="h-8 w-8 stroke-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 55V45.325C40.0938 44.1329 39.9327 42.9345 39.5275 41.8095C39.1224 40.6845 38.4823 39.6586 37.65 38.8C45.5 37.925 53.75 34.95 53.75 21.3C53.7494 17.8096 52.4067 14.453 50 11.925C51.1396 8.87129 51.0591 5.4959 49.775 2.50003C49.775 2.50003 46.825 1.62503 40 6.20003C34.27 4.64708 28.23 4.64708 22.5 6.20003C15.675 1.62503 12.725 2.50003 12.725 2.50003C11.4409 5.4959 11.3604 8.87129 12.5 11.925C10.0753 14.4718 8.73131 17.8587 8.75 21.375C8.75 34.925 17 37.9 24.85 38.875C24.0275 39.725 23.3932 40.7385 22.9883 41.8498C22.5834 42.9611 22.417 44.1452 22.5 45.325V55M22.5 47.5C10 51.25 10 41.25 5 40L22.5 47.5Z"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
