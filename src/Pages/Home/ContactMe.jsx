import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // 引入社交媒体图标

function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">
        If you have any inquiries or would like to collaborate, feel free to reach out.
        </p>
        <div className="social-links">
          {/* Instagram 图标 */}
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer">
            <FaInstagram size={30} style={{ marginRight: '10px' }} />
          </a>
          {/* LinkedIn 图标 */}
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} style={{ marginRight: '10px' }} />
          </a>
          {/* Gmail 圖示 */}
          <a href="mailto:betty556611@gmail.com" target="_blank" rel="noreferrer">
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

