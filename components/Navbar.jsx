import { useEffect, useState } from "react";
import NavbarButton from "./NavbarButton";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../customHooks/useMediaQuery";
import Social from "./Social";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (open && !isMobile) {
      setOpen(false);
    }
  }, [open, isMobile]);

  return (
    <>
      <div
        className={`fixed top-0 z-10 flex h-[10vh] w-full items-center justify-between ${
          open
            ? "bg-c1"
            : "bg-white bg-opacity-10 backdrop-blur-sm backdrop-filter"
        } px-4 py-2 font-inter text-white sm:px-8 sm:py-4 md:px-16 md:py-8`}
      >
        <a className="text-2xl font-medium" href="#Home" onClick={close}>
          Portfolio<sub className="text-base">2022</sub>
        </a>
        <nav className="hidden space-x-4 text-lg lg:flex" key="main">
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
          className="hidden rounded-xl border-2 border-c6 px-8 py-2 text-xl font-medium hover:bg-c6 lg:flex"
        >
          Contact Me
        </a>
        <NavbarButton open={open} setOpen={setOpen} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed top-[10vh] z-10 flex h-[90vh] w-full flex-col items-center space-y-4 bg-c1 p-2 text-lg text-white lg:hidden"
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
            <Social />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
