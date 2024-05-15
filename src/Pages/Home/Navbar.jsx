import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import '../../App.css'; 

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
        setShowNav(false); // 隱藏導航欄和漢堡菜單
      } else {
        setShowNav(true); // 顯示導航欄和漢堡菜單
      }
    };

    window.addEventListener("resize", handleResize);

    // 初始化設置
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      {showNav && (
        <>
          <div>
            <img src="./img/sarah.png" alt="ChienHuang" width="150px" height="120px" />
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
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="navbar--content"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="navbar--content"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="mySkills"
                  className="navbar--content"
                >
                  My Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="navbar--content"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="navbar--content contact-section"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
