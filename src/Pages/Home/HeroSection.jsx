export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Greetings, I'm Chien</p>
  
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full-Stack</span><br />
            Developer
          </h1>
          <p className="hero--section-description">
            I specialize in developing seamless user experiences and robust server-side architectures. Each project is an opportunity to drive technological innovation and deliver impactful solutions.
          </p>
          <a 
            href="mailto:betty556611@gmail.com?subject=Contact&body=Hello%20there" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Sarah, a visionary Full-Stack Developer" />
      </div>
    </section>
  );
}

