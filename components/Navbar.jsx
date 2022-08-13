import { useState } from "react";
import NavbarButton from "./NavbarButton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="h-[10vh] bg-c1 sticky top-0 z-10 flex items-center px-4 sm:px-8 py-2 sm:py-4 md:px-16 md:py-8 justify-between font-inter text-white ">
        <a className="text-2xl font-medium" href="#Home">
          Portfolio<sub className="text-base">2022</sub>
        </a>
        <nav className="lg:flex space-x-4 text-lg hidden" key="main">
          <a href="#About" className="btn-nav">
            About
          </a>
          <a href="#Skills" className="btn-nav">
            Skills
          </a>
          <a href="#Projects" className="btn-nav">
            Projects
          </a>
          <a href="#Experience" className="btn-nav">
            Experience
          </a>
        </nav>
        <a
          href="#Contact"
          className="hidden lg:flex text-xl border-2 font-medium border-c6 hover:bg-c6 px-8 py-2 rounded-xl"
        >
          Contact Me
        </a>
        <NavbarButton open={open} setOpen={setOpen} />
      </div>
      {open && (
        <motion.nav
          className="md:hidden flex bg-c1 w-full flex-col h-[90vh] fixed top-[10vh] right-0 space-y-4 text-lg p-2 text-white items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          key="secondary"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#About"
            className="btn-nav2"
            onClick={close}
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#Skills"
            className="btn-nav2"
            onClick={close}
          >
            Skills
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#Projects"
            className="btn-nav2"
            onClick={close}
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#Experience"
            className="btn-nav2"
            onClick={close}
          >
            Experience
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#Contact"
            className="btn-nav2"
            onClick={close}
          >
            Contact Me
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
