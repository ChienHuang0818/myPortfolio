import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";

export default function Work() {
  const workExperience = [
    {
      title: "Frontend Developer Intern",
      company: "Cinefly",
      duration: "Jun 2024 - Sep 2024",
      location: "Gold Coast, Australia",
      icon: <FaLaptopCode />,
      description:
        "Contributed to the development of Cinefly’s AI storytelling platform, enhancing user experience and interface consistency across multiple modules.",
      achievements: [
        "Developed and optimized React components for Storyboard and Director’s Guide features",
        "Implemented media queries to ensure responsive UI across devices",
        "Collaborated in Agile environment using Jira for weekly sprint tasks",
        "Conducted acceptance testing to ensure UI design quality and performance",
      ],
    },
    {
      title: "App Developer Intern",
      company: "New Beginnings",
      duration: "Jun 2024 - Oct 2024",
      location: "Remote",
      icon: <FaGraduationCap />,
      description:
        "Designed and developed an educational app to support the Youth Marine Conservation Program, helping students learn about ocean knowledge and earn Level 1 certification.",
      achievements: [
        "Developed app structure using AppSheet for marine education program",
        "Created interactive UI introducing students to ocean and climate knowledge",
        "Collaborated with stakeholders to refine design and add donation features",
        "Prepared documentation and demo presentation for stakeholder review",
      ],
    },
  ];

  return (
    <section className="skills--section work--experience--section" id="workExperience">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Experience</h2>
      </div>
      <div className="skills--section--container work--experience--container">
        {workExperience.map((item, index) => (
          <div key={index} className="skills--section--card work--experience--card">
            <div className="skills--section--card--content">
              <div className="work--experience--header">
                <div className="work--icon">{item.icon}</div>
                <div className="work--title--section">
                  <h3 className="skills--section--title work--title">{item.title}</h3>
                  <h4 className="work--company">{item.company}</h4>
                  <div className="work--meta">
                    <span className="work--duration">{item.duration}</span>
                    <span className="work--location">{item.location}</span>
                  </div>
                </div>
              </div>
              <p className="skills--section--description work--description">{item.description}</p>
              <ul className="skills--list work--achievements">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="work--achievement--item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
