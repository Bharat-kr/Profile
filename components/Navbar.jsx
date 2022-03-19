const Navbar = () => {
  return (
    <div className="h-[10vh] bg-red-700 sticky top-0 z-10">
      <nav className="flex sm:justify-center space-x-4">
        <a href="#Home" className="btn-nav">
          Home
        </a>
        <a href="#Skills" className="btn-nav">
          Skills
        </a>
        <a href="#Work" className="btn-nav">
          Work
        </a>
        <a href="#Contact" className="btn-nav">
          Contact Me
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
