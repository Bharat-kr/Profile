import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const data = [
    {
      image: "myVOTE.jpg",
      title: "MY-Vote",
      desc: "My Vote is a Blockchain based Voting system with a variety of use cases. This can be used in companies , meeting or even for goverment elections. This maintains a partiality in voting system and a secure environment for voting.",
      link: "https://my-vote-bharat-kr.vercel.app/",
      code: "https://github.com/Bharat-kr/myVote",
    },
    {
      image: "MentorSpace.jpg",
      title: "MentorSpace-Landing Page",
      desc: "This is a landing page made for one of my Internship tasks . Basically mentorspace is asolution providing app for Jee and Neet aspirants for there problems totally free and on whatsapp that make's it easy to use.",
      link: "https://impulse-task.vercel.app/",
      code: "https://github.com/Bharat-kr/impulse-task",
    },
    {
      image: "openChat.jpg",
      title: "Open Chat",
      desc: "Open-Chat is a chat platform where people can talk with anyone on the app in diffrent rooms and create your own rooms if you want to also can send voice images in group. You can both Google and Facebook login to use the app.",
      link: "https://open-chat-fe011.web.app/",
      code: "https://github.com/Bharat-kr/open-chat",
    },
    {
      image: "fooders.jpg",
      title: "Fooders",
      desc: "This is a Food order site with JWT authentication and database keeping record of the orders and users.",
      link: "https://bharat-fooders.herokuapp.com/",
      code: "https://github.com/Bharat-kr/fooders",
    },
    {
      image: "boxOffice.jpg",
      title: "Box Office",
      desc: "This application is using an api to fetch the movies and actors and allows user to save you favorite movies on the app. You can get details of the movies actor when it got released and various other details.",
      link: "https://bharat-kr.github.io/box-office/#/",
      code: "https://github.com/Bharat-kr/box-office",
    },
    {
      image: "TicTacToe.jpg",
      title: "Tic-Tac-Toe",
      desc: "Everyone knows about this game from there childhood now you can play it on a device anywhere anytime with every move getting saved locally that can be accesed by clicking on the move below.",
      link: "https://bharat-tic-tac-toe.surge.sh/",
      code: "https://github.com/Bharat-kr/TicTacToe",
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
