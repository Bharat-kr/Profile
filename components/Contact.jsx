import React from "react";
import Social from "./Social";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex h-auto w-full flex-col items-center pt-[10vh] lg:h-screen"
    >
      <h1 className="heading gradinetText-config">Contact Me</h1>
      <div className="flex w-full flex-grow flex-col-reverse justify-start lg:flex-row lg:justify-between">
        <div className="w-full p-6 lg:w-1/2 lg:pl-28">
          <h3 className="font-montserrat text-xl font-semibold">
            Lets Connect , and Create Something great
          </h3>
          <div className="my-3 flex flex-col items-start space-y-2">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input-el"
              id="name"
              placeholder="Jhon Doe"
            />
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-el"
              placeholder="jhon@example.com"
            />
            <label htmlFor="message" className="input-label">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message here....."
              className="input-el"
              id="message"
              cols="70"
              rows="3"
            />
          </div>

          <button className="flex items-center rounded-lg border-2 border-c8 bg-c3 px-6 py-2 font-poppins text-lg font-bold text-white hover:bg-c1 lg:text-2xl">
            <span className="mr-4">Send</span>
            <Image src="/images/send.svg" alt="" width={30} height={30} />
          </button>
        </div>
        <div className="flex w-full justify-center overflow-clip lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/contact.svg" alt="" className="w-4/5 lg:w-3/5" />
        </div>
      </div>
      <footer className="flex w-full flex-col items-center justify-between space-y-6 bg-c2 px-12 py-4 md:flex-row md:space-y-0">
        <span className="font-poppins text-xl font-medium text-white md:text-2xl">
          Copyright @ 2022
        </span>
        <Social />
        <span className="font-poppins text-xl font-medium text-white md:text-2xl">
          Bharat Kumar
        </span>
      </footer>
    </section>
  );
};

export default Contact;
