import Image from "next/image";
import React from "react";

const Social = () => {
  const data = [
    "/images/social/linkedin.svg",
    "/images/social/twitter.svg",
    "/images/social/instagram.svg",
    "/images/social/facebook.svg",
    "/images/social/github.svg",
  ];
  return (
    <div className="mt-4 flex space-x-5">
      <a
        className="group"
        href="www.linkedin.com/in/bharat-kumar-15bk"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="h-10 w-10 stroke-white group-hover:fill-c1 group-hover:stroke-c8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 20C43.9782 20 47.7936 21.5804 50.6066 24.3934C53.4196 27.2064 55 31.0218 55 35V52.5H45V35C45 33.6739 44.4732 32.4021 43.5355 31.4645C42.5979 30.5268 41.3261 30 40 30C38.6739 30 37.4021 30.5268 36.4645 31.4645C35.5268 32.4021 35 33.6739 35 35V52.5H25V35C25 31.0218 26.5804 27.2064 29.3934 24.3934C32.2064 21.5804 36.0218 20 40 20V20Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 22.5H5V52.5H15V22.5Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        className="group"
        href="https://twitter.com/Bharat_Kumar15"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="h-10 w-10 stroke-white group-hover:fill-c1 group-hover:stroke-c8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.5 7.49999C55.106 9.18869 52.4553 10.4803 49.65 11.325C48.1444 9.59377 46.1433 8.36672 43.9176 7.80981C41.6918 7.25289 39.3487 7.39298 37.2052 8.21113C35.0617 9.02927 33.2211 10.486 31.9325 12.3843C30.6438 14.2826 29.9692 16.5308 30 18.825V21.325C25.6066 21.4389 21.2532 20.4645 17.3275 18.4886C13.4019 16.5127 10.0258 13.5966 7.5 9.99999C7.5 9.99999 -2.5 32.5 20 42.5C14.8513 45.9949 8.71789 47.7473 2.5 47.5C25 60 52.5 47.5 52.5 18.75C52.4977 18.0536 52.4307 17.359 52.3 16.675C54.8515 14.1587 56.6521 10.9818 57.5 7.49999V7.49999Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        className="group"
        href="https://www.instagram.com/bharatkr_15/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="h-10 w-10 stroke-white group-hover:fill-c1 group-hover:stroke-c8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.5 5H17.5C10.5964 5 5 10.5964 5 17.5V42.5C5 49.4036 10.5964 55 17.5 55H42.5C49.4036 55 55 49.4036 55 42.5V17.5C55 10.5964 49.4036 5 42.5 5Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 28.425C40.3085 30.5056 39.9531 32.6306 38.9844 34.4976C38.0156 36.3646 36.4829 37.8786 34.6041 38.8242C32.7253 39.7699 30.5961 40.099 28.5195 39.7649C26.4428 39.4307 24.5244 38.4502 23.0371 36.9629C21.5498 35.4756 20.5693 33.5572 20.2352 31.4806C19.901 29.4039 20.2302 27.2748 21.1758 25.396C22.1215 23.5172 23.6355 21.9844 25.5025 21.0156C27.3695 20.0469 29.4944 19.6915 31.575 20C33.6973 20.3147 35.6621 21.3037 37.1792 22.8208C38.6963 24.3379 39.6853 26.3027 40 28.425Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.75 16.25H43.775"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        className="group"
        href="https://www.facebook.com/BharatKumar15/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="h-10 w-10 stroke-white group-hover:fill-c1 group-hover:stroke-c8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45 5H37.5C34.1848 5 31.0054 6.31696 28.6612 8.66117C26.317 11.0054 25 14.1848 25 17.5V25H17.5V35H25V55H35V35H42.5L45 25H35V17.5C35 16.837 35.2634 16.2011 35.7322 15.7322C36.2011 15.2634 36.837 15 37.5 15H45V5Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        className="group"
        href="https://github.com/Bharat-kr"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="h-10 w-10 stroke-white group-hover:fill-c1 group-hover:stroke-c8"
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
  );
};

export default Social;
