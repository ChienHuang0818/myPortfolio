import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

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

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar--logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src="/img/sarah.png" alt="ChienHuang" width="80px" height="70px" />
        </NavLink>
      </div>
      <div className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/hero" className="navbar--content" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" className="navbar--content" onClick={closeMenu}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className="navbar--content" onClick={closeMenu}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="navbar--content" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar--content contact-section" onClick={closeMenu}>
              Contact Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv" className="navbar--content" onClick={closeMenu}>
              CV
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
