import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const data = [
    {
      image: "test",
      title: "project1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "project.com",
    },
    {
      image: "test",
      title: "project1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "project.com",
    },
    {
      image: "test",
      title: "project1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "project.com",
    },
    {
      image: "test",
      title: "project1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "project.com",
    },
    {
      image: "test",
      title: "project1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "project.com",
    },
  ];
  return (
    <div
      id="Projects"
      className="flex h-full w-full flex-col items-center pt-[10vh]"
    >
      <h1 className="heading gradinetText-config">My Recent Works</h1>
      <div className="flex w-full flex-wrap px-12">
        {data.map((item, idx) => {
          return <ProjectCard data={item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
