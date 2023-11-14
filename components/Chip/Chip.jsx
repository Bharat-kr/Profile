import React from "react";

const Chip = ({ content }) => {
  return (
    <span
      className="group inline-flex cursor-pointer items-center rounded-full bg-c6 p-2 text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-c8 focus:ring-offset-2"
      role="alert"
      tabIndex="0"
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3389 2.08282H6.33887C5.80843 2.08282 5.29973 2.29354 4.92465 2.66861C4.54958 3.04368 4.33887 3.55239 4.33887 4.08282V20.0828C4.33887 20.6133 4.54958 21.122 4.92465 21.497C5.29973 21.8721 5.80843 22.0828 6.33887 22.0828H18.3389C18.8693 22.0828 19.378 21.8721 19.7531 21.497C20.1282 21.122 20.3389 20.6133 20.3389 20.0828V8.08282L14.3389 2.08282Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.3389 2.08282V8.08282H20.3389"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.3389 13.0828H8.33887"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.3389 17.0828H8.33887"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3389 9.08282H9.33887H8.33887"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="scale-80 inline-block max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:max-w-screen-2xl group-hover:scale-100 group-hover:px-2 group-focus:max-w-screen-2xl group-focus:px-2">
        {content}
      </span>
    </span>
  );
};

export default Chip;
