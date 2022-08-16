import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const data = [
    {
      image: "myVOTE.jpg",
      title: "MY-Vote",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "https://my-vote-bharat-kr.vercel.app/",
    },
    {
      image: "MentorSpace.jpg",
      title: "MentorSpace-Landing Page",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "https://impulse-task.vercel.app/",
    },
    {
      image: "openChat.jpg",
      title: "Open Chat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "https://open-chat-fe011.web.app/",
    },
    {
      image: "fooders.jpg",
      title: "Fooders",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "https://bharat-fooders.herokuapp.com/",
    },
    {
      image: "boxOffice.jpg",
      title: "Box Office",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "https://bharat-kr.github.io/box-office/#/",
    },
    {
      image: "TicTacToe.jpg",
      title: "Tic-Tac-Toe",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure quaerat veritatis porro. Quod vel beatae quia debitis perspiciatis numquam est. Autem similique fugiat voluptas eligendi natus nemo modi magni quam perspiciatis.",
      link: "https://bharat-tic-tac-toe.surge.sh/",
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
