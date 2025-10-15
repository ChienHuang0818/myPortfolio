import data from "../../data/index.json";

export default function Projects() {
  return (
    <section className="portfolio--section" id="Projects">
      {/* Header + Intro */}
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">Projects</h2>
          <p className="projects--intro"></p>
        </div>

        {/* Redesigned GitHub CTA */}
        <div className="github-cta">
          <a
            href="https://github.com/ChienHuang0818"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github-cta"
            aria-label="Visit my GitHub profile"
            title="Visit my GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.52 10.41.55.1.75-.24.75-.53
                0-.26-.01-1.12-.02-2.03-3.06.66-3.71-1.3-3.71-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68
                1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.56 1.2 3.18.92.1-.72.38-1.2.68-1.47-2.44-.28-5.01-1.22-5.01-5.43
                0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .93-.3 3.06 1.13.88-.25 1.82-.37 2.76-.37.94 0 1.88.12 2.76.37
                2.13-1.43 3.06-1.13 3.06-1.13.6 1.51.22 2.63.11 2.91.7.77 1.13 1.75 1.13 2.95 0 4.21-2.58 5.15-5.04 5.42.39.33.74.98.74 1.98
                0 1.43-.01 2.59-.01 2.94 0 .29.2.64.76.53A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z"
              />
            </svg>
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => {
          const hasLinks = item?.links && (item.links.demo || item.links.code);
          return (
            <article key={index} className="portfolio--section--card">
              <div className="portfolio--section--card--content">
                <header className="card--header">
                  <h3 className="portfolio--section--title">
                    <a
                      href={item?.links?.demo || item?.links?.code || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </h3>
                  {Array.isArray(item?.tech) && item.tech.length > 0 && (
                    <ul className="tech-badges" aria-label="Tech Stack">
                      {item.tech.map((t, i) => (
                        <li key={i} className="tech-badge">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="portfolio--section--img">
                    <img src={item.src} alt={item.title} loading="lazy" />
                  </div>
                </header>

                <p className="text-md">{item.description}</p>

                {/*Links */}
                {hasLinks && (
                  <div className="links-row">
                    {item.links.demo && (
                      <a
                        className="btn btn-link"
                        href={item.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} live demo`}
                      >
                        Live Demo
                      </a>
                    )}
                    {item.links.code && (
                      <a
                        className="btn btn-link"
                        href={item.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} source code on GitHub`}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
