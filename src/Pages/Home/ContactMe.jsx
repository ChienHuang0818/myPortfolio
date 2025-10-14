import React, { useState } from "react";
import { FaGit, FaInstagram, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";
import "../../App.css";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("betty556611@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      const textArea = document.createElement("textarea");
      textArea.value = "betty556611@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 創建 mailto 連結
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);

    const mailtoLink = `mailto:betty556611@gmail.com?subject=${subject}&body=${body}`;

    // 嘗試打開郵件客戶端
    window.location.href = mailtoLink;

    // 重置表單
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--container">
        <h2 className="contact--title">Contact Me</h2>
        <p className="contact--text">
          If you have any inquiries or would like to collaborate, feel free to reach out.
        </p>

        <div className="contact--content">
          {/* 聯絡表單 */}
          <form className="contact--form" onSubmit={handleSubmit}>
            <div className="form--group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form--group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form--group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form--group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact--submit--btn">
              <FaEnvelope /> Send Message
            </button>
          </form>

          {/* 快速聯絡方式 */}
          <div className="contact--quick">
            <h3>Quick Contact</h3>
            <button onClick={copyEmailToClipboard} className="email--copy--btn">
              {emailCopied ? <FaCheck /> : <FaEnvelope />}
              {emailCopied ? "Email Copied!" : "betty556611@gmail.com"}
            </button>

            <div className="social-links">
              <a
                href="https://github.com/ChienHuang0818"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaGit size={30} />
              </a>
              <a
                href="https://linkedin.com/in/chien-huang-sarah"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
