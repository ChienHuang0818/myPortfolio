import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";

function TypingText({ text, speed = 100, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 重置狀態
    setDisplayed("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="typing-cursor">|</span>
    </span>
  );
}

export default function HeroSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("betty556611@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      // 備用方案：使用傳統方法
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

  return (
    <section id="heroSection" className="hero--section">
      {/* 左側主要內容區 */}
      <div className="hero--left--content">
        {/* 第一部分：主要文字內容 */}
        <div className="hero--text--content">
          <p className="section--title">Hi, I'm</p>

          <h1 className="hero--section--title">
            <TypingText text="Chien Huang" className="hero--section-title--color" />
            <br />
            Full‑Stack Developer
          </h1>

          <p className="hero--section-description">
            I'm a Full‑Stack Developer skilled in React and C#, with two internship experiences and
            several side projects. I enjoy creating seamless user experiences and strong backend
            structures.
          </p>
        </div>

        {/* 第二部分：聯絡方式在左下角 */}
        <div className="hero--contact--links">
          <a
            href="https://github.com/ChienHuang0818"
            target="_blank"
            rel="noreferrer"
            className="hero--link"
          >
            <Github className="icon" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/chien-huang-sarah"
            target="_blank"
            rel="noreferrer"
            className="hero--link"
          >
            <Linkedin className="icon" /> LinkedIn
          </a>
          <button
            onClick={copyEmailToClipboard}
            className="hero--link contact"
            title="Click to copy email address"
          >
            {emailCopied ? <Check className="icon" /> : <Mail className="icon" />}
            {emailCopied ? "Email Copied!" : "Contact Me"}
          </button>
        </div>
      </div>

      {/* 第三部分：右側圓形圖片 */}
      <div className="hero--image--section">
        <div className="hero--circular--img">
          <img src="./img/hero_img.png" alt="Chien, a Full-Stack Developer" />
        </div>
      </div>
    </section>
  );
}
