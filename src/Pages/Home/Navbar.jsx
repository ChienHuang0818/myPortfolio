import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'; 

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setNavActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // 初始化設置

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="/img/sarah.png" alt="ChienHuang" width="150px" height="120px" />
      </div>
      <div
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className="navbar--content"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-me"
              className="navbar--content"
              onClick={closeMenu}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-skills"
              className="navbar--content"
              onClick={closeMenu}
            >
              My Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-portfolio"
              className="navbar--content"
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar--content contact-section"
              onClick={closeMenu}
            >
              Contact Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cv"
              className="navbar--content"
              onClick={closeMenu}
            >
              CV
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
