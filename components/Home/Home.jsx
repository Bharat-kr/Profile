import React from "react";
import { motion } from "framer-motion";
import Name from "./Name";
import Social from "../Social";

const Home = () => {
  const container = {
    show: {
      transition: {
        duration: 2,
        type: "linear",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    show: {
      x: [20, 0, 20],
      y: [-10, 0, -10],
      transition: {
        duration: 2,
        repeat: Infinity,
        type: "spring",
      },
    },
  };
  return (
    <div id="Home" className="relative h-screen w-screen">
      <div className="absolute top-0 h-full w-full bg-c0">
        <motion.svg
          variants={container}
          initial="hidden"
          animate="show"
          width="1200"
          height="580"
          viewBox="0 0 1200 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" h-full w-full min-w-[1200px]"
        >
          <motion.path
            variants={item}
            d="M466.9 -88C416.84 16.3466 426.303 81.77 495.29 108.27C598.76 148 844.8 163.91 947.64 250.13C1050.48 336.35 1364.05 269.69 1417.64 121.72C1471.23 -26.25 1567.82 -254.28 1058.64 -254.28C719.247 -254.307 522 -198.88 466.9 -88Z"
            fill="#FFFA72"
          />
          <motion.path
            variants={item}
            d="M-269.66 118C-235.74 410.187 -100.106 593.377 137.24 667.57C493.24 778.85 1208.67 823.36 1640.45 1064.77C2072.23 1306.18 2839 1119.59 2742.36 705.27C2645.72 290.95 2535.62 -347.64 1110 -347.64C159.56 -347.64 -300.326 -192.427 -269.66 118Z"
            fill="#10161F"
          />
          <motion.path
            variants={item}
            d="M-214.42 100.87C-198.52 377.41 -80.3097 550.787 140.21 621C471 726.32 1145.6 768.45 1540.86 996.92C1936.12 1225.39 2672.2 1048.76 2603.68 656.64C2535.16 264.52 2466.4 -339.86 1117.14 -339.86C217.62 -339.86 -226.233 -192.95 -214.42 100.87V100.87Z"
            fill="#0E1B2E"
          />
          <motion.path
            variants={item}
            d="M-157.78 83.7C-157.38 344.58 -55.0203 508.143 149.3 574.39C455.79 673.75 1090 713.49 1450.82 929C1811.64 1144.51 2515.38 977.91 2471.45 608C2427.52 238.09 2394.58 -332.1 1121.69 -332.1C273.09 -332.1 -153.397 -193.503 -157.77 83.69L-157.78 83.7Z"
            fill="#0D203D"
          />
          <motion.path
            variants={item}
            d="M-99.8603 66.5299C-112.667 311.763 -24.7136 465.513 164 527.78C447.08 621.17 1041.23 658.53 1369.5 861.14C1697.77 1063.75 2367.72 907.14 2345.12 559.38C2322.52 211.62 2320.36 -324.31 1123.84 -324.31C326.16 -324.31 -81.7403 -194.03 -99.8603 66.5299V66.5299Z"
            fill="#0B254B"
          />
          <motion.path
            variants={item}
            d="M-40.7498 49.36C-64.6498 278.94 10.2269 422.873 183.88 481.16C444.36 568.6 998.77 603.57 1296.26 793.25C1593.75 982.93 2228.53 836.25 2224.26 510.76C2219.99 185.27 2244 -316.53 1123.82 -316.53C377.047 -316.53 -11.1431 -194.567 -40.7498 49.36Z"
            fill="#0A2A5A"
          />
          <motion.path
            variants={item}
            d="M19.4498 32.19C-13.5569 246.11 49.4798 380.23 208.56 434.55C447.18 516 962.16 548.62 1230.49 725.36C1498.82 902.1 2097.18 765.47 2108.43 462.13C2119.68 158.79 2165.51 -308.75 1121.74 -308.75C425.913 -308.75 58.4831 -195.103 19.4498 32.19Z"
            fill="#092F68"
          />
          <motion.path
            variants={item}
            d="M80.6801 15C40.3868 213.267 92.7201 337.573 237.68 387.92C455.15 463.43 930.97 493.64 1171.68 657.45C1412.39 821.26 1973.13 694.62 1997.29 413.45C2021.45 132.28 2085.14 -301 1117.75 -301C472.81 -301 127.12 -195.667 80.6801 15Z"
            fill="#073377"
          />
          <motion.path
            variants={item}
            d="M142.87 -2.14993C97.0502 180.47 139.804 294.963 271.13 341.33C468.13 410.88 905.04 438.7 1119.53 589.58C1334.02 740.46 1856.08 623.82 1890.7 364.87C1925.32 105.92 2003 -293.2 1112 -293.2C518 -293.2 194.97 -196.183 142.91 -2.14993H142.87Z"
            fill="#063885"
          />
          <motion.path
            variants={item}
            d="M206 -19.3199C156.293 147.64 190.483 252.307 308.57 294.68C485.69 358.27 883.98 383.68 1073.62 521.68C1263.26 659.68 1745.62 552.98 1788.31 316.23C1831 79.4801 1919.13 -285.43 1104.48 -285.43C561.38 -285.43 261.886 -196.73 206 -19.3299V-19.3199Z"
            fill="#043D94"
          />
          <motion.path
            variants={item}
            d="M270 -36.49C218 114.843 244.61 209.71 349.83 248.11C507.69 305.74 867.58 328.79 1033.68 453.8C1199.78 578.81 1641.33 482.17 1689.94 267.61C1738.55 53.05 1833.64 -277.65 1095.37 -277.65C603.164 -277.65 328.04 -197.263 270 -36.49Z"
            fill="#0342A2"
          />
          <motion.path
            variants={item}
            d="M334.8 -53.66C281.98 82 301.96 167.053 394.74 201.5C533.92 253.16 855.64 273.83 999.45 385.91C1143.26 497.99 1543.08 411.34 1595.45 218.98C1647.82 26.62 1746.56 -269.87 1084.66 -269.87C643.38 -269.87 393.434 -197.8 334.82 -53.66H334.8Z"
            fill="#0147B0"
          />
          <motion.path
            variants={item}
            d="M400.45 -70.83C348.29 49.17 362.564 124.407 443.27 154.88C564.32 200.59 848.09 218.88 970.82 318.02C1093.55 417.16 1450.71 340.52 1504.71 170.35C1558.71 0.180038 1657.94 -262.09 1072.41 -262.09C682.057 -262.09 458.057 -198.337 400.41 -70.83H400.45Z"
            fill="#004CBF"
          />
        </motion.svg>
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center pt-[10vh] text-white">
        <p className="font-montserrat text-2xl font-semibold md:text-5xl 2xl:text-7xl">
          Hello
          <span>&#x1F44B;</span>, I am
        </p>
        <Name />
        <p className="mb-4 font-montserrat text-2xl font-semibold md:text-5xl 2xl:text-7xl">
          Software Developer
        </p>
        <Social />
      </div>
    </div>
  );
};

export default Home;
