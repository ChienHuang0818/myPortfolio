import data from "../../data/index.json";

export default function CertificationSection() {
  return (
    <section className="certification--section" id="certification">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Certifications</p>
          <h2 className="sections--heading">Professional Certifications</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data.certifications.map((certification, index) => (
          <div key={index} className="certification--section--card">
            <a href={certification.link} target="_blank" rel="noopener noreferrer">
              <img src={certification.image} alt={`Certification - ${certification.title}`} className="certification--image"/>
            </a>
            <div className="certification--details">
              <p className="text-md">{certification.title}</p>
              <p className="text-sm">{certification.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
