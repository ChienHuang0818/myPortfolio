import { FaBuilding, FaLaptopCode, FaGraduationCap, FaCode } from "react-icons/fa";

export default function Work() {
  const workExperience = [
    {
      title: "Full-Stack Developer Intern",
      company: "Tech Solutions Inc.",
      duration: "Jan 2024 - Jun 2024",
      location: "Remote",
      icon: <FaLaptopCode />,
      description:
        "Developed and maintained web applications using modern technologies, contributing to both frontend and backend development.",
      achievements: [
        "Built responsive React components for customer dashboard",
        "Integrated RESTful APIs with Node.js backend",
        "Collaborated with Agile team using Scrum methodology",
        "Improved application performance by 30% through code optimization",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital Agency Co.",
      duration: "Jul 2023 - Dec 2023",
      location: "Sydney, Australia",
      icon: <FaCode />,
      description:
        "Specialized in creating user-friendly interfaces and implementing modern web technologies for client projects.",
      achievements: [
        "Developed 5+ client websites using React and TypeScript",
        "Implemented responsive design for mobile-first approach",
        "Collaborated with UX/UI designers to create intuitive interfaces",
        "Reduced page load times by 40% through optimization techniques",
      ],
    },
    {
      title: "Student Developer",
      company: "Griffith University",
      duration: "Mar 2022 - Nov 2023",
      location: "Brisbane, Australia",
      icon: <FaGraduationCap />,
      description:
        "Completed various programming projects and coursework while pursuing Master's degree in Information Technology.",
      achievements: [
        "Developed full-stack web applications using Python and Flask",
        "Created iOS mobile application using Swift and UIKit",
        "Completed database design and implementation projects",
        "Maintained GPA of 3.8/4.0 in specialized programming courses",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Independent Projects",
      duration: "2022 - Present",
      location: "Remote",
      icon: <FaBuilding />,
      description:
        "Working on various side projects and freelance assignments to expand technical skills and build portfolio.",
      achievements: [
        "Developed personal portfolio website with modern design",
        "Created e-commerce platform using React and Node.js",
        "Built real-time chat application with Socket.io",
        "Contributed to open-source projects on GitHub",
      ],
    },
  ];

  return (
    <section className="skills--section work--experience--section" id="workExperience">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Work Experience</h2>
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
