import React from "react";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  return (
    <div
      className="relative mx-auto mb-6 mt-16 w-80 min-w-0 max-w-md break-words rounded-xl bg-white p-4 shadow-shad1 hover:shadow-shad2 xl:max-w-2xl"
      data-aos="fade-left"
    >
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
          <p className="my-2 h-auto font-montserrat text-sm font-normal md:h-32">
            {data.desc}
          </p>
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="btn-nav w-full border-2 border-c0 text-center hover:bg-c0 hover:text-white md:w-auto"
            >
              {/* view project button */}
              View Project{" "}
            </a>

            {/* githubicon */}
            <a
              href={data.code}
              target="_blank"
              rel="noreferrer"
              className="btn-nav w-full border-2 border-c0 text-center hover:bg-c0 hover:text-white md:w-auto"
            >
              View on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
