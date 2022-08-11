const Navbar = () => {
  return (
    <nav className="h-[10vh] bg-red-700 sticky top-0 z-10 flex sm:justify-center space-x-4">
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
      <a href="#Contact" className="btn-nav">
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;
