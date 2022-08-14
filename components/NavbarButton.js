import { motion } from "framer-motion";

const NavbarButton = ({ open, setOpen }) => {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className="h-10 w-10 cursor-pointer lg:hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{
          opacity: open ? [1, 0, 0] : [0, 0, 1],
          x: open ? [0, 15, 15] : [-15, -15, 0],
        }}
        transition={{ duration: !open ? 1 : 0.2, times: [0, 0.5, 1] }}
        d="M52.5 25H17.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={{
          y: open ? [0, 15, 15] : [15, 15, 0],
          rotate: open ? [0, 0, 45] : [45, 0, 0],
        }}
        transition={{ times: [0, 0.5, 1] }}
        d="M52.5 15H7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={{
          y: open ? [0, -5, -5] : [-5, -5, 0],
          rotate: open ? [0, 0, -45] : [-45, 0, 0],
        }}
        transition={{ times: [0, 0.5, 1] }}
        d="M52.5 35H7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={{
          opacity: open ? [1, 0, 0] : [0, 0, 1],
          x: open ? [0, 15, 15] : [-15, -15, 0],
        }}
        transition={{ duration: !open ? 1 : 0.2, times: [0, 0.5, 1] }}
        d="M52.5 45H17.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default NavbarButton;
