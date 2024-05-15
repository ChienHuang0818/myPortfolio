import React from 'react';
import { FaGit, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../App.css'; 

function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="contact--title">Contact Me</h2>
        <p className="contact--text">
          If you have any inquiries or would like to collaborate, feel free to reach out.
        </p>
        <div className="social-links">
          <a href="https://github.com/ChienHuang0818" target="_blank" rel="noreferrer" className="social-icon">
            <FaGit size={30} />
          </a>
          <a href="linkedin.com/in/chien-huang-sarah" target="_blank" rel="noreferrer" className="social-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:betty556611@gmail.com" target="_blank" rel="noreferrer" className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5M4 8l8 5 8-5"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
