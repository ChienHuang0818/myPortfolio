import { Link } from "react-scroll";
import React from "react";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "../../App.css";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="footer-link"
              >
                <FaHome className="footer-icon" />
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="footer-link"
              >
                <FaUser className="footer-icon" />
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="work"
                className="footer-link"
              >
                <FaCode className="footer-icon" />
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
                className="footer-link"
              >
                <FaBriefcase className="footer-icon" />
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="footer-link"
              >
                <FaEnvelope className="footer-icon" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
